import React from 'react';
import Logo from '/public/logo.jpg';
import './App.css';

const App: React.FC = () => {

  return (
    <>
    <header className='header'>
      <div className='logo-wrapper'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Logo} className="logo" alt="logo" />
        </a>
      </div>
    </header>
    <main>
      
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
