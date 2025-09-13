import React from 'react'

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="searchbar">
      <input
        placeholder="Search dishes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}