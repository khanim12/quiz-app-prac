import React, { useState } from "react";
import "./Introduce.css";
import logo from "../../assets/images/logo.png";
import DropDown from "../../components/dropdown/DropDown";
import { useNavigate } from "react-router-dom";
function Introduce() {
  const difficulty = ["easy", "medium", "hard"];
  const [difficultyChange, setDifficultyChange] = useState("");
  const navigate = useNavigate();
  const Total_amount = 10;
  const startQuiz = () => {
    if (difficultyChange) {
      navigate(`/quiz/${difficultyChange}/${Total_amount}`);
    }
  };
  return (
    <div className="introduce">
      <div className="introduce-container">
        <img src={logo} />
        <DropDown data={difficulty} setDifficultyChange={setDifficultyChange} />
        <div onClick={startQuiz} className="quiz-btn">
          Start Quiz
        </div>
      </div>
    </div>
  );
}

export default Introduce;
