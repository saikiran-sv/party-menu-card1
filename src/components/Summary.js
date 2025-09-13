import React from 'react'

export default function Summary({ selected, dishes }) {
  const total = selected.length
  const countsByCategory = selected.reduce((acc, id) => {
    const d = dishes.find((x) => x.id === id)
    if (!d) return acc
    acc[d.mealType] = (acc[d.mealType] || 0) + 1
    return acc
  }, {})

  return (
    <div className="summary">
      <div className="summary-counts">
        {Object.entries(countsByCategory).map(([k, v]) => (
          <div key={k} className="summary-item">
            {k}: {v}
          </div>
        ))}
      </div>
      <div className="summary-total">Total Selected: {total}</div>
      <button className="continue">Continue</button>
    </div>
  )
}