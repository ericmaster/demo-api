'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data));
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    const newItem = await res.json();
    setItems([...items, newItem]);
    setName('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl">Aprendiendo APIs</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
        />
        <br />
        <button type="submit">Agregar Item</button>
      </form>
    </main>
  );
}
