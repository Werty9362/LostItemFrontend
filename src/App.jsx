import { Route, Routes } from "react-router"
import LostItemPage from "./pages/LostItemPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LostItemPage/>} />
      </Routes>
      
    </>
  )
}

export default App
