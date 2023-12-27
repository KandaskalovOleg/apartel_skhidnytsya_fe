import React from 'react';
import { Container, Paper, Typography, Radio, RadioGroup, FormControlLabel, FormControl, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import './Maid.css';

const StyledTextField = styled(TextField)({
  backgroundColor: 'white',
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

const GreenRadio = styled(Radio)({
  '&.Mui-checked': {
    color: "#47B972",
  },
});

const questions = [
  {
    "question": "Як ви реагуєте на непорядок у приміщенні?",
    "options": [
      "Швидко і ефективно прибираю все на місце.",
      "Ігнорую, мене це не турбує.",
      "Спочатку розгублююсь, а потім прибираю.",
      "Прошу когось іншого це зробити."
    ]
  },
  {
    "question": "Як ви ставитесь до роботи в різних приміщеннях?",
    "video": "https://www.youtube.com/embed/Y6FAKq1KiqM?si=SWtYTTIKVFrudMy1",
    "options": [
      "Готовий/готова працювати в будь-якому приміщенні.",
      "Бажаю працювати тільки в офісах або готелях.",
      "Обираю роботу в просторих будинках.",
      "Інше."
    ]
  },
  {
    "question": "Як ви оцінюєте свою організованість?",
    "options": [
      "Дуже організований/організована.",
      "Зазвичай все на своєму місці.",
      "Не дуже організований/організована.",
      "Це точно не про мене."
    ]
  },
  {
    "question": "Чи вмієте ви ефективно використовувати час?",
    "options": [
      "Так, завжди встигаю все зробити.",
      "Зазвичай встигаю, але іноді бувають затримки.",
      "Не завжди вдається встигнути усе.",
      "Час - це рідка річ для мене."
    ]
  },
  {
    "question": "Як ви реагуєте на конструктивну критику?",
    "options": [
      "Вважаю це можливістю вдосконалитися.",
      "Зазвичай приймаю, але іноді реагую емоційно.",
      "Не завжди легко слухати критику.",
      "Відмовляюсь приймати критику."
    ]
  },
  {
    "question": "Як ви ставитеся до роботи в команді?",
    "options": [
      "Люблю працювати в команді.",
      "Обираю самотню роботу.",
      "Мені все одно, команда чи самотність.",
      "Мені тяжко пристосовуватися до інших."
    ]
  },
  {
    "question": "Як ви боретеся з стресом на роботі?",
    "options": [
      "Швидко знаходжу способи розслабитися.",
      "Роблю короткі перерви для відпочинку.",
      "Зазвичай працюю без перерв.",
      "Стрес - це не моє."
    ]
  },
  {
    "question": "Чи вмієте ви організовувати свою робочу зону?",
    "options": [
      "Так, у мене завжди чисто і організовано.",
      "Спробую, але не завжди виходить.",
      "Не дуже охоче приділяю увагу порядку.",
      "Моя робоча зона - це хаос."
    ]
  },
  {
    "question": "Як ви ставитеся до додаткових обов'язків на роботі?",
    "options": [
      "З радістю виконую будь-які завдання.",
      "Роблю те, що передбачено у моєму обов'язку.",
      "Не завжди готовий/готова приймати додаткові обов'язки.",
      "Відмовляюсь від додаткових завдань."
    ]
  },
  {
    "question": "Як ви ставитеся до вивчення нових методів та технік прибирання?",
    "options": [
      "Активно вивчаю нові методи та техніки.",
      "Використовую вже вивчені методи.",
      "Не завжди маю час вивчати нове.",
      "Мені це нецікаво."
    ]
  }
]

const Maid: React.FC = () => {
  return (
    <Container className='user-style'>
      <StyledTextField
        label="Ім'я"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <StyledTextField
        label="Прізвище"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      {questions.map((q, questionIndex) => (
        <Paper key={questionIndex} elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6">{q.question}</Typography>
          {q.video && (
            <div>
              <iframe
                src={q.video}
                title={`Video for question ${questionIndex}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <FormControl component="fieldset">
            <RadioGroup
              aria-label={`question_${questionIndex}`}
              name={`question_${questionIndex}`}
            >
              {q.options.map((option, optionIndex) => (
                <FormControlLabel
                  key={optionIndex}
                  value={option}
                  control={<GreenRadio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Paper>
      ))}
      <div className='send-button'>
        <Button variant="contained" style={{ backgroundColor: '#47B972', margin: '0 auto'}}>
          Відправити
        </Button>
      </div>
    </Container>
  );
};

export default Maid;
