import "./App.css";
import RecentSchedule from "./components/RecentSchedule";
import Program from "./components/Program";
import Container from "react-bootstrap/Container";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="section">
        <Container>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<RecentSchedule />} />
              <Route exact path="/tv-show/episode/:id" element={<Program />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
}

export default App;
