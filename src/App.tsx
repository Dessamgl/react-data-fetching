import { Route, Routes } from "react-router-dom";
import { Repo } from "./services/pages/Repo";
import { Repos } from "./services/pages/Repos";

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Repos />}/>
      <Route path="/repos/*" element={<Repo />}/>
    </Routes>
  )
}

export default App
