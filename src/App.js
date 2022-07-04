import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShoesPage from "./Pages/ShoesPage";
import WorkersPage from "./Pages/WorkersPage";
import MainNavigation from "./components/MainNavigation";
import AddShoe from "./Pages/ShoesForm";
import AddWorker from "./Pages/WorkersForm";
function App() {
  return (
    <section className="MainBody">
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<ShoesPage />} />
        <Route path="/WorkersPage" element={<WorkersPage />} />
        <Route path="/ShoesForm" element={<AddShoe />} />
        <Route path="/WorkersForm" element={<AddWorker />} />
      </Routes>
    </section>
  );
}

export default App;
