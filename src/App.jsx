import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  Header,
  Home,
  Footer,
  About,
  Document,
  ApiGetAll,
  ApiError,
  ApiGetById,
  ApiGetByName,
  ApiGetBySymbol,
  Pagination,
  Limit,
} from "./components/pages/index";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/docs"} element={<Document />} />
          <Route path={"/getall"} element={<ApiGetAll />} />
          <Route path={"/name"} element={<ApiGetByName />} />
          <Route path={"/id"} element={<ApiGetById />} />
          <Route path={"/symbol"} element={<ApiGetBySymbol />} />
          <Route path={"/limit"} element={<Limit />} />
          <Route path={"/pagination"} element={<Pagination />} />
          <Route path={"/error"} element={<ApiError />} />
        </Routes>
        <footer className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] text-gray-600 bg-white py-10 shadow-violet-50">
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
