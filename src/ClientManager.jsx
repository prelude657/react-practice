import React, { useState } from 'react';
import './ClientManager.css'; // Optional: if you want to style it

function ClientManager() {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...clients];
      updated[editingIndex] = form;
      setClients(updated);
      setEditingIndex(null);
    } else {
      setClients([...clients, form]);
    }
    setForm({ name: '', phone: '' });
  };

  const handleEdit = (index) => {
    setForm(clients[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  return (
    <div className="client-manager">
      <h2>Client Manager</h2>

      <form onSubmit={handleSubmit} className="client-form">
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editingIndex !== null ? 'Update Client' : 'Add Client'}
        </button>
      </form>

      <ul className="client-list">
        {clients.map((client, index) => (
          <li key={index} className="client-item">
            <span>{client.name} - {client.phone}</span>
            <div className="client-actions">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientManager;
