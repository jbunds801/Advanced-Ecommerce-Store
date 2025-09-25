import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import About from "./pages/About";
import Cart from "./pages/Cart";
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
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </>
  );
};

export default App;
