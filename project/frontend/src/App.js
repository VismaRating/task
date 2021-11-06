// tools
import { Route, Routes } from "react-router";
// component
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
