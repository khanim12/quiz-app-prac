import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Introduce from "./pages/introduce/Introduce";
import Quiz from "./pages/quiz/Quiz";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path="/quiz/:difficulty/:amount" element={ <Quiz/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
