import React from 'react'

export default function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <button
        className={filter === 'ALL' ? 'active' : ''}
        onClick={() => setFilter('ALL')}
      >
        All
      </button>
      <button
        className={filter === 'VEG' ? 'active' : ''}
        onClick={() => setFilter('VEG')}
      >
        Veg
      </button>
      <button
        className={filter === 'NON-VEG' ? 'active' : ''}
        onClick={() => setFilter('NON-VEG')}
      >
        Non-Veg
      </button>
    </div>
  )
}