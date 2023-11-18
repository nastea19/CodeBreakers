import React, { useState } from 'react';
import "../App.css";


interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    questionText: 'Republica Moldova este o republică parlamentară, în care funcționează principiul separației puterii în stat. Care sunt puterile de luare a deciziilor de bază în Republica Moldova?',
    options: 
    ['Puterea Legislativă (Parlamentul) și Puterea Executivă (Guvernul)', 
    'Puterea Executivă (Guvernul) și Puterea Judiciară (Curtea Constituțională)', 
    'Puterea Executivă (Guvernul), Puterea Legislativă (Parlamentul)  și Puterea Judiciară (Curtea Constituțională)', 
    'Puterea Electorală și Puterea Internațională'],
    correctAnswer: 'Puterea Executivă (Guvernul), Puterea Legislativă (Parlamentul)  și Puterea Judiciară (Curtea Constituțională)',
  },
  {
    questionText: 'Cum sunt aleși cei 101 deputați din parlamentul Republicii Moldova?',
    options: 
    ['Aceștia sunt aleși prin vot direct pentru un mandat de patru ani.', 
    'Aceștia sunt numiți direct de către Președintele Republicii Moldova, fără a fi necesare alegeri.', 
    'Cei 101 deputați sunt desemnați de către partidele politice reprezentate în Parlament, fără a fi implicat votul direct al cetățenilor.', 
    'Aceștia sunt selectați prin tragere la sorți din rândul cetățenilor eligibili, indiferent de opțiunile lor politice.'],
    correctAnswer: 'Aceștia sunt aleși prin vot direct pentru un mandat de patru ani.',
  },
  {
    questionText: 'Ce este constituția?',
    options: 
    ['Constituția este o lege fundamentală a unei țări care stabilește structura, funcțiile, drepturile și responsabilitățile fundamentale ale guvernului și cetățenilor.', 
    'Constituția reprezintă un cod de conduită pentru cetățeni, dar nu are legătură cu funcțiile guvernamentale.',
    ' Constituția este un document simbolic, fără putere legală, care descrie istoria și valorile unei țări', 
    'Constituția este emisă doar de către liderul suprem al unei țări, fără consultarea sau aprobarea cetățenilor.'],
    correctAnswer: 'Constituția este o lege fundamentală a unei țări care stabilește structura, funcțiile, drepturile și responsabilitățile fundamentale ale guvernului și cetățenilor.',
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h1 className="h1Col">Testarea nivelului</h1>
      {currentQuestion < questions.length ? (
        <div>
          <p>Question {currentQuestion + 1}</p>
          <p>{questions[currentQuestion].questionText}</p>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerClick(option)}
                style={{
                  cursor: 'pointer',
                  backgroundColor:
                    option === selectedAnswer ? 'lightblue' : 'white',
                }}
              >
                {option}
              </li>
            ))}
          </ul>
          {selectedAnswer && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
          <p>Score: {score}</p>
        </div>
      ) : (
        <div>
          <h2>Esti un user avansat!</h2>
          <p>Scorul tau final: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
