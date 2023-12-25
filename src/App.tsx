import React, { useState } from 'react';
import { Grid, Paper, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Logo from '/public/logo.jpg';
import Admin from './components/admin/Admin';
import Maid from './components/maid/Maid';
import './App.css';

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#47B972',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#47B972',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#47B972',
    },
  },
});

interface Passwords {
  [key: string]: React.FC;
}

const App: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode | null>(null);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<string>(' ');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setHelperText(' ');
  };

  const handleSubmit = () => {
    const passwords: Passwords = {
      'admin': Admin,
      'maid': Maid,
    };
  
    if (Object.hasOwnProperty.call(passwords, password)) {
      setIsPasswordCorrect(true);
      setHelperText(' ');
      setSelectedComponent(passwords[password] as unknown as React.ReactNode);
    } else {
      setHelperText('Невірний пароль');
      setPassword('');
    }
  };

  return (
    <>
      <header className='header'>
        <div className='logo-wrapper'>
          <a href="#" target="_blank">
            <img src={Logo} className="logo" alt="logo" />
          </a>
        </div>
      </header>
      <main>
        {!isPasswordCorrect ? (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ margin: '0 20px', width: 'calc(100% - 40px)', height: 'calc(80dvh - 46px)'}}
          >
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
            >
              <Paper elevation={1} square>
                <div className='registration'>
                  <StyledTextField
                    label="Введіть пароль"
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                    helperText={helperText}
                  />
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    style={{ backgroundColor: '#47B972' }}
                  >
                    Підтвердити пароль
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <div>
            {selectedComponent}
          </div>
        )}
      </main>
      <footer></footer>
    </>
  );
};

export default App;
