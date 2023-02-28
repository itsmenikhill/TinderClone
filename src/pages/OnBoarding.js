import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import "./OnBoarding.css";

function OnBoarding() {
  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    console.log(value + " " + name);
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender_identity: "male",
    gender_preference: "woman",
    email: "",
    url: "",
    about: "",
    matches: [],
  });

  return (
    <div>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="first_name"
              placeholder="First Name"
              onChange={handleChange}
              required={true}
              value={formData.first_name}
            />
            <label htmlFor="dob_day">Birthday</label>
            <div className="multiple-input-container">
              <input
                type="number"
                id="dob_day"
                name="dob_day"
                placeholder="DD"
                onChange={handleChange}
                required={true}
                value={formData.dob_day}
              />
              <input
                type="number"
                id="dob_month"
                name="dob_month"
                placeholder="MM"
                onChange={handleChange}
                required={true}
                value={formData.dob_month}
              />
              <input
                type="number"
                id="dob_year"
                name="dob_year"
                placeholder="YYYY"
                onChange={handleChange}
                required={true}
                value={formData.dob_year}
              />
            </div>

            <label htmlFor="gender_identity">Gender</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-identity"
                name="gender_identity"
                onChange={handleChange}
                value="man"
                checked={formData.gender_identity === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                type="radio"
                id="woman-gender-identity"
                name="gender_identity"
                onChange={handleChange}
                value="woman"
                checked={formData.gender_identity === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                type="radio"
                id="more-gender-identity"
                name="gender_identity"
                onChange={handleChange}
                value="more"
                checked={formData.gender_identity === "more"}
              />
              <label for="more-gender-identity">Other</label>
            </div>
            <div className="show-gender-checkbox">
              <label htmlFor="show_gender">Show gender on my profile</label>
              <input
                id="show-gender"
                name="show_gender"
                type="checkbox"
                onChange={handleChange}
                checked={formData.show_gender}
              />
            </div>
            <label htmlFor="interest">Show me</label>
            <div className="multiple-input-container">
              <input
                type="radio"
                id="man-gender-interest"
                name="gender_preference"
                onChange={handleChange}
                required={true}
                value="man"
                checked={formData.gender_preference === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                type="radio"
                id="woman-gender-interest"
                name="gender_preference"
                onChange={handleChange}
                required={true}
                value="woman"
                checked={formData.gender_preference === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                type="radio"
                id="more-gender-interest"
                name="gender_preference"
                onChange={handleChange}
                required={true}
                value="more"
                checked={formData.gender_preference === "more"}
              />
              <label for="more-gender-interest">Everyone</label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              type="text"
              name="about"
              id="about"
              required={true}
              placeholder="Something about yourself.."
              value={formData.about}
              onChange={handleChange}
            />
            <input type="submit" />
          </section>

          <section className="section-photo">
            <label htmlFor="photo">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              <img src={formData.url} alt="profile pic preview" />
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default OnBoarding;
