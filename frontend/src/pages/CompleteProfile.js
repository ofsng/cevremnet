// src/pages/CompleteProfile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const CompleteProfile = () => {
  const { user, setUser } = useAuth();
  const [profilePicture, setProfilePicture] = useState(null);
  const [company, setCompany] = useState("");
  const [skills, setSkills] = useState([]);
  const [teamStatus, setTeamStatus] = useState("");
  const [socialLinks, setSocialLinks] = useState({ linkedin: "", github: "" });
  const [bio, setBio] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kullanıcı bilgilerini güncelle ve backend'e gönder
    const updatedUser = {
      ...user,
      company,
      skills,
      teamStatus,
      socialLinks,
      bio,
    };

    const formData = new FormData();
    formData.append('profilePicture', profilePicture);
    formData.append('userData', JSON.stringify(updatedUser));

    try {
      const response = await axios.post('http://localhost:5001/api/users/complete-profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUser(response.data.updatedUser);
        localStorage.setItem('user', JSON.stringify(response.data.updatedUser));
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Profil güncellenirken bir hata oluştu.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Profilinizi Tamamlayın</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="profilePicture">
              Profil Fotoğrafı (Opsiyonel)
            </label>
            <input
              type="file"
              id="profilePicture"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="company">
              Çalıştığınız Yer (Zorunlu)
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="skills">
              Yetenekler ve İlgi Alanları (Zorunlu)
            </label>
            <input
              type="text"
              id="skills"
              value={skills.join(', ')}
              onChange={(e) => setSkills(e.target.value.split(","))}
              className="w-full p-2 border rounded"
              placeholder="Örneğin: React, Node.js, Tasarım"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Takım Durumu (Zorunlu)</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  value="Takım Arkadaşı Arıyorum"
                  checked={teamStatus === "Takım Arkadaşı Arıyorum"}
                  onChange={() => setTeamStatus("Takım Arkadaşı Arıyorum")}
                  required
                />
                Takım Arkadaşı Arıyorum
              </label>
              <label>
                <input
                  type="radio"
                  value="Ekip Arıyorum"
                  checked={teamStatus === "Ekip Arıyorum"}
                  onChange={() => setTeamStatus("Ekip Arıyorum")}
                />
                Ekip Arıyorum
              </label>
              <label>
                <input
                  type="radio"
                  value="Hiçbiri"
                  checked={teamStatus === "Hiçbiri"}
                  onChange={() => setTeamStatus("Hiçbiri")}
                />
                Hiçbiri
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="socialLinks">
              Sosyal Medya Linkleri (Opsiyonel)
            </label>
            <input
              type="text"
              placeholder="LinkedIn URL"
              value={socialLinks.linkedin}
              onChange={(e) => setSocialLinks({ ...socialLinks, linkedin: e.target.value })}
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="GitHub URL"
              value={socialLinks.github}
              onChange={(e) => setSocialLinks({ ...socialLinks, github: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="bio">
              Kendiniz Hakkında (Opsiyonel)
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full"
          >
            Profili Tamamla
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
