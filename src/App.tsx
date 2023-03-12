import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavigation from "./layout/TopNavigation";
import Home from "./pages/Home";
import Editor from "./components/Editor";
import { Blank } from "./layout/Blank";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<TopNavigation />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route element={<Blank />}>
            <Route path="/login" element={<Editor />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
