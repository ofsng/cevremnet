// Cevrem.net Arama Sayfası Bileşeni - Search.js
import React, { useState, useEffect } from 'react';
import userService from '../services/userService';
import ProfileCard from '../components/ProfileCard';

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await userService.searchUsers(query);
      setResults(response);
    } catch (error) {
      console.error("Arama sırasında hata oluştu:", error);
    }
  };

  useEffect(() => {
    if (query.length > 2) {
      handleSearch();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kullanıcı Ara</h1>
      <input
        type="text"
        placeholder="Aramak istediğiniz kullanıcıyı girin..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
      <div>
        {results.length > 0 ? (
          results.map((user) => <ProfileCard key={user._id} user={user} />)
        ) : (
          <p className="text-gray-600">Sonuç bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
