import React, { useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";

import { useUser } from "../context/UserContext";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);
  const { register } = useUser();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = [];

    if (formData.password !== formData.confirmPassword) {
      formErrors.push("Les mots de passe ne correspondent pas");
    }

    if (formErrors.length === 0) {
      register(formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
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
        required
        name="password"
        className="mb-4"
        type="password"
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
        label="Mot de passe"
        value={formData.password}
        onChange={handleChange}
      />
      <MDBInput
        required
        name="confirmPassword"
        className="mb-4"
        type="password"
        label=" Confirmation mot de passe"
        value={formData.confirmPasswordd}
        onChange={handleChange}
      />

      <MDBRow className="mb-4">
        <MDBCol className="d-flex justify-content-center">
          <MDBCheckbox id="form1Example3" label="Remember me" defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href="#!">Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type="submit" block>
        Enregistrez-vous
      </MDBBtn>
      {errors.map((error) => (
        <p key={error}>{error}</p>
      ))}
    </form>
  );
}
