import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
