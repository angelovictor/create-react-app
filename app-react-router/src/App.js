import { Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {

  return (
    <div className="App">

      <h1>Welcome to React Router!</h1>{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":aboutID" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
