import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavigation from "./layout/TopNavigation";
import { Home } from "./pages/Home";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<TopNavigation />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
