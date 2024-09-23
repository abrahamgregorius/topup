import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  )
}
