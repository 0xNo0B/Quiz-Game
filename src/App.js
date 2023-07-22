import { useState } from "react";
import questions from "./Data";

function App() {
  return (
    <div className="container">
      <Quiez q={questions} />
    </div>
  );
}

function Quiez({ q }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [isCorrect, setIsCorrect] = useState("");

  return (
    <div className="quiez">
      <Quistion q={q} current={currentQ} />

      <Buttons
        setCorrect={setIsCorrect}
        correct={isCorrect}
        q={q}
        current={currentQ}
        onCorrect={setCurrentQ}
      />
    </div>
  );
}

function Quistion({ q, current }) {
  return <h2 className="quis">{q[current].question}</h2>;
}

function Buttons({ q, current, onCorrect, correct }) {
  function handleClick(i, e) {
    if (q[current].correct_answer === i) {
      // setCorrect((cur) => (cur = e.target.className = "correct"));
      e.target.className = "btn-correct";
      setTimeout(() => {
        onCorrect((e) => e + 1);
        e.target.className = "btn";
      }, 1000);
    } else {
      e.target.className = "btn-wrong";
      setTimeout(() => {
        e.target.className = "btn";
      }, 1000);
    }
  }

  return (
    <div className="buttons ">
      {q[current].answers.map((e, i) => (
        <button
          value={i}
          className={`btn ${correct}`}
          onClick={(e) => handleClick(i, e)}
          key={i}
        >
          {e}
        </button>
      ))}
    </div>
  );
}

export default App;
