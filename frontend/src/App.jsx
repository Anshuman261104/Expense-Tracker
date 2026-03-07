import Homepage from "./components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
    </BrowserRouter>
    
  )
}
export default App;