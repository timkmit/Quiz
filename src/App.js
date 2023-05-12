import React from 'react';
import './index.css';

const questions = [
  {
    title: 'Какой протокол данных чаще всего используется в Интернете?',
    variants: ['TCP', 'FTP', 'UDP'],
    correct: 0,
  },
  {
    title: 'Какое поколение веб будет следующим после HTML?',
    variants: ['HTML5', 'CSS', 'WebAssembly'],
    correct: 2,
  },
  {
    title: 'Какой мобильный интернет наиболее популярен на сегодняшний день?',
    variants: [
      '4G LTE',
      '5G',
      'Wi-Fi',
    ],
    correct: 1,
  },
  {
    title: 'Какой протокол используется для передачи электронной почты?',
    variants: [
      'SMTP',
      'FTP',
      'HTTP',
    ],
    correct: 0,
  },
  {
    title: 'Какая социальная сеть наиболее популярна в настоящее время?',
    variants: [
      'Facebook',
      'Twitter',
      'Instagram',
    ],
    correct: 2,
  },
  {
    title: 'Какой тип файлового формата используется для сохранения документов?',
    variants: [
      'PDF',
      'MP3',
      'JPG',
    ],
    correct: 0,
  },
  {
    title: 'Какой протокол используется для доступа к веб-страницам?',
    variants: [
      'HTTP',
      'FTP',
      'UDP',
    ],
    correct: 0,
  },
  {
    title: 'Какой браузер наиболее популярен в настоящее время?',
    variants: [
      'Google Chrome',
      'Mozilla Firefox',
      'Safari',
    ],
    correct: 0,
  },
  {
    title: 'Какой тип соединения поддерживает телефон?',
    variants: [
      '3G',
      '4G',
      'Оба',
    ],
    correct: 2,
  },
  {
    title: 'Какой протокол используется для передачи файлов между компьютерами??',
    variants: [
      'FTP',
      'TCP',
      'UDP',
    ],
    correct: 0,
  }
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} / {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
      
    </div>
  );
}

function Game({ step, question, onClickVariant}) {
  const perc = Math.round(step / questions.length * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${perc}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => 
          <li onClick={() => onClickVariant(index)} key={text}>  {text}
          </li>)}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);

    if (index == question.correct){
      setCorrect(correct + 1);
    }
  }
  return (
    <div className="App">
      
      {
        step != questions.length ? <Game step={step} question = {question} onClickVariant={onClickVariant}/> : <Result correct={correct}/>
      }
    </div>
  );
}

export default App;
