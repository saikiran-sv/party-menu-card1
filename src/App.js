import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuPage from './pages/MenuPage'
import IngredientPage from './pages/IngredientPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
      </Routes>
    </Router>
  )
}