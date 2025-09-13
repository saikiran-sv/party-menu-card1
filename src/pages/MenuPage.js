import React, { useMemo, useState } from 'react'
import dishesData from '../data/dishes.json'
import Tabs from '../components/Tabs'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import DishCard from '../components/DishCard'
import Summary from '../components/Summary'

export default function MenuPage() {
  const [category, setCategory] = useState('MAIN COURSE')
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('ALL')
  const [selected, setSelected] = useState([])

  const counts = useMemo(() => {
    return selected.reduce((acc, id) => {
      const d = dishesData.find((x) => x.id === id)
      if (!d) return acc
      acc[d.mealType] = (acc[d.mealType] || 0) + 1
      return acc
    }, {})
  }, [selected])

  const filtered = useMemo(() => {
    return dishesData.filter((d) => {
      if (d.mealType !== category) return false
      const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase())
      if (!matchesSearch) return false
      if (filter === 'ALL') return true
      return d.type === filter
    })
  }, [category, search, filter])

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Party Menu Selection</h1>
      </header>
      <div className="controls">
        <Tabs category={category} setCategory={setCategory} counts={counts} />
        <div className="top-controls">
          <SearchBar search={search} setSearch={setSearch} />
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </div>

      <main>
        {filtered.length === 0 ? (
          <div className="no-results">No dishes found</div>
        ) : (
          <div className="dish-grid">
            {filtered.map((d) => (
              <DishCard
                key={d.id}
                dish={d}
                isSelected={selected.includes(d.id)}
                toggleSelect={toggleSelect}
              />
            ))}
          </div>
        )}
      </main>

      <Summary selected={selected} dishes={dishesData} />
    </div>
  )
}