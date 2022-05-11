import "./App.css";
import { Onboarding, UserInfo } from "./pages/";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/info" element={<UserInfo />} />
      </Routes>
    </div>
  );
}

export default App;
