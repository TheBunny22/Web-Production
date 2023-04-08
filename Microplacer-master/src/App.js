import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Billing from "./components/Billing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App" style={{
      margin:"auto"
    }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="billing" element={<Billing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
