import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dishesData from "../data/dishes.json";

export default function IngredientPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = dishesData.find((d) => d.id === parseInt(id));

  if (!dish)
    return (
      <div className="page">
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>Dish not found</h2>
      </div>
    );

  return (
    <div className="page ingredient-page">
      <button className="back" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <h3>Ingredients</h3>
      <ul className="ingredients">
        {dish.ingredients && dish.ingredients.length > 0 ? (
          dish.ingredients.map((it, idx) => (
            <li key={idx}>
              {it.name} — {it.qty}
            </li>
          ))
        ) : (
          <li>No ingredients available</li>
        )}
      </ul>
    </div>
  );
}
