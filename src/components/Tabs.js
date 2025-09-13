import React from 'react'

const MEAL_TYPES = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES']

export default function Tabs({ category, setCategory, counts }) {
  return (
    <div className="tabs">
      {MEAL_TYPES.map((t) => (
        <button
          key={t}
          className={`tab \${category === t ? 'active' : ''}`}
          onClick={() => setCategory(t)}
        >
          <div>{t}</div>
          <div className="tab-count">{counts[t] || 0}</div>
        </button>
      ))}
    </div>
  )
}