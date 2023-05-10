import Header from "./components/Header"
import Footer from "./components/Footer"
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Errror404 from "./pages/Error404"
import NavMenu from "./components/NavMenu/NavMenu";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavMenu>
        <Routes>
          <Route path="/page1" element = {<Page1 />} />
          <Route path="/page2" element = {<page2 />} />
          <Route path="/" element = {<home />} />
          <Route path="#" element = {<Error404 />} />
        </Routes>
        </NavMenu>
      </BrowserRouter>

    </div>
  );
}

export default App;
