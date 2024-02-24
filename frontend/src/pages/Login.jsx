import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { MDBInput, MDBBtn } from "mdb-react-ui-kit";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // le state qui contient les infos du user connecté
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/api`;
  const setToken = (token) => localStorage.setItem("token", token);

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  /* fonction qui vérifie le token :
  - déconnecte si pas de token ou non valide ou expiré
  - remplit state user avec les infos du token */
  const getUserInfos = async () => {
    const jwtToken = localStorage.getItem("token");
    if (!jwtToken) {
      logout();
    } else {
      const token = jwtDecode(jwtToken);
      try {
        const data = await axios.get(`${baseUrl}/user/${token.id}`);
        setUser(data);
      } catch (error) {
        console.error(error.message);
        logout();
      }
    }
  };

  const login = async (credentials) => {
    try {
      const result = await axios.post(`${baseUrl}/login`, credentials);
      localStorage.setItem("token", result.data.token);
      setToken(result.data.token);
      getUserInfos();
      setUser(credentials);

      alert(`Bienvenue ${user.email}`);
      navigate("/");
      // return await login(newUser);
    } catch (err) {
      alert(err.message);
    }
    return null;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = [];

    if (formData.password !== formData.confirmPassword) {
      formErrors.push("Les mots de passe ne correspondent pas");
    }

    if (formErrors.length === 0) {
      login(formData);
    } else {
      setErrors(formErrors);
    }
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <MDBInput
          required
          name="email"
          className="mb-4"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <MDBInput
          name="password"
          className="mb-4"
          type="password"
          label="Mot de passe"
          value={formData.password}
          onChange={handleChange}
        />
        <MDBInput
          required
          name="confirmPassword"
          className="mb-4"
          type="password"
          label="Confirmaton mot de passe"
          value={formData.confirmPasswordd}
          onChange={handleChange}
        />

        <MDBBtn type="submit" color="dark" block>
          Connexion
        </MDBBtn>
        {errors.map((error) => (
          <p key={error}>{error}</p>
        ))}
      </form>
    </div>
  );
}
