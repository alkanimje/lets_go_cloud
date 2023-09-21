import logo from './logo.svg';
import './App.css';
import MainComponent from './Componennts/MainComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="">
        <BrowserRouter>
        <Routes> 
           <Route path="/" element={<MainComponent />}/> *
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
