import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RecipeListPage, RecipeDetailsPage, AddRecipePage } from '../pages'
import { Header } from '../components'
import './style.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main-content">
        <AppRoutes />
      </div>
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RecipeListPage />} />
      <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
      <Route path="/add-recipe" element={<AddRecipePage />} />
    </Routes>
  )
}

export default App
