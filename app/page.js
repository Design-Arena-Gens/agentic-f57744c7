'use client';

import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <h1 style={styles.title}>DS</h1>
        <div style={styles.inputGroup}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            placeholder="Add new item..."
            style={styles.input}
          />
          <button onClick={addItem} style={styles.button}>Add</button>
        </div>
        <div style={styles.list}>
          {items.map(item => (
            <div key={item.id} style={styles.item}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
                style={styles.checkbox}
              />
              <span style={{
                ...styles.itemText,
                textDecoration: item.completed ? 'line-through' : 'none',
                opacity: item.completed ? 0.6 : 1
              }}>
                {item.text}
              </span>
              <button onClick={() => deleteItem(item.id)} style={styles.deleteButton}>×</button>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div style={styles.stats}>
            {items.filter(i => !i.completed).length} remaining
          </div>
        )}
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  container: {
    background: 'white',
    borderRadius: '16px',
    padding: '40px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '0 0 30px 0',
    color: '#667eea',
    textAlign: 'center'
  },
  inputGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '12px 16px',
    fontSize: '16px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s'
  },
  button: {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    background: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    background: '#f8f9fa',
    borderRadius: '8px',
    transition: 'background 0.2s'
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer'
  },
  itemText: {
    flex: 1,
    fontSize: '16px',
    color: '#333'
  },
  deleteButton: {
    width: '28px',
    height: '28px',
    fontSize: '24px',
    background: '#ff4444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '1'
  },
  stats: {
    marginTop: '20px',
    padding: '12px',
    textAlign: 'center',
    color: '#666',
    fontSize: '14px',
    background: '#f0f0f0',
    borderRadius: '8px'
  }
};
