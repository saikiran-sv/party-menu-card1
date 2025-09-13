import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function DishCard({ dish, isSelected, toggleSelect }) {
  const navigate = useNavigate()
  return (
    <div className={`dish-card \${isSelected ? 'selected' : ''}`}>
      <div className="dish-main">
        <div className="dish-image">
          {dish.image ? <img src={dish.image} alt={dish.name} width="150" /> : <div className="image-placeholder">🍽️</div>}
          

        </div>
        <div className="dish-info">
          <h4>{dish.name}</h4>
          <p className="desc">{dish.description}</p>
          <div className="dish-actions">
            <button onClick={() => toggleSelect(dish.id)}>
              {isSelected ? 'Remove' : 'Add'}
            </button>
            <button onClick={() => navigate(`/ingredients/\${dish.id}`)}>
              Ingredient
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}