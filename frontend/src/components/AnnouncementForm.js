// Cevrem.net Duyuru Formu Bileşeni - AnnouncementForm.js
import React, { useState } from 'react';
import './AnnouncementForm.css';

const AnnouncementForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && category) {
      onSubmit({ title, content, category });
      setTitle('');
      setContent('');
      setCategory('');
    } else {
      alert('Lütfen tüm alanları doldurun.');
    }
  };

  return (
    <form className="announcement-form bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Yeni Duyuru Oluştur</h2>
      <div className="form-group mb-4">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Başlık</label>
        <input
          type="text"
          id="title"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="content" className="block text-gray-700 font-semibold mb-2">İçerik</label>
        <textarea
          id="content"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          rows="5"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">Kategori</label>
        <select
          id="category"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Kategori Seçin</option>
          <option value="Genel">Genel</option>
          <option value="Etkinlik">Etkinlik</option>
          <option value="Duyuru">Duyuru</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Duyuru Oluştur
      </button>
    </form>
  );
};

export default AnnouncementForm;
