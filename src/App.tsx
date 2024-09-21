import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register></Register>}></Route>
      </Routes>
    </>
  )
}
