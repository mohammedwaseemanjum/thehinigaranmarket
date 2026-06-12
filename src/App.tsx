import './App.css'
import Blog from '@modules/blog'
import Store from '@modules/store'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  )
}

export default App
