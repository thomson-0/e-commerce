import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { Provider } from "react-redux";
import store from "./redux/Store";
import ProductDetail from "./Componets/ProductDetail";

function App() {
  return (
    <div className="overflow-hidden">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
