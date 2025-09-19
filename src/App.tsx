import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/Home';
import About from "./pages/About";
import Account from "./pages/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from './components/PageLayout';
import Products from "./pages/Products";

function App() {

  return (
    <>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/account' element={<Account />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
