import './App.css'
import Blog from '@modules/blog'
import Store from '@modules/store'
import { Routes, Route } from "react-router-dom";
import SearchStore from '@modules/store/searchStore';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="/store" element={<Store />} />
      <Route path="/search" element={<SearchStore />} />
    </Routes>
  )
}

export default App
