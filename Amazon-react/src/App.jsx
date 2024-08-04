import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage/HomePage";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";
import CheckOutPage from "./Pages/CheckOutPage/CheckOutPage";

function App() {
  // return (
  //   <BrowserRouter>
  //     <Header />
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/orders" element={<OrdersPage />} />
  //         <Route path="/checkout" element={<CheckOutPage />} />
  //       </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
