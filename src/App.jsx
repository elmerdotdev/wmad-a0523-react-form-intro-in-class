import './App.css';

import { useState } from 'react';
import RefForm from './components/RefForm';

const App = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    age: '',
    message: '',
    education: 'high school',
    married: false,
    gender: '',
    email: '',
    hobbies: [],
    pets: []
  });

  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((currFormData) => ({ ...currFormData, [name]: value }));

    if (name === 'firstname' && value.length > 0 && value.length < 4) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleCheck = (event) => {
    const name = event.target.name;
    setFormData((currFormData) => ({
      ...currFormData,
      [name]: !formData.married,
    }));
  };

  const handleMultipleCheckBox = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    if (!formData[name].includes(value) && checked) {
      setFormData((currFormData) => ({
        ...currFormData,
        [name]: [...formData[name], value],
      }));
    } else {
      setFormData((currFormData) => ({
        ...currFormData,
        [name]: formData[name].filter(item => item != value)
      }))
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // alert(`Thanks for filling out the form, ${formData.firstname}!`)
    setFormData({
      firstname: '',
      lastname: '',
      age: '',
      message: '',
      education: 'high school',
      married: false,
      gender: '',
      email: '',
      hobbies: [],
    });
  };

  return (
    <>
    <div className="react-form">
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            First name:
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
            <div className="error-message">
              {error && 'Need at least 10 characters'}
            </div>
          </label>
          <label htmlFor="">
            Last name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Education Level:
            <select
              name="education"
              value={formData.education}
              onChange={handleChange}
            >
              <option value="high school">High School</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="graduate">Graduate</option>
            </select>
          </label>
          <label htmlFor="">
            Married?
            <input
              type="checkbox"
              name="married"
              checked={formData.married}
              onChange={handleCheck}
            />
          </label>
          <label htmlFor="">
            Gender: Male
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Other
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Hobbies: Dancing
            <input
              type="checkbox"
              name="hobbies"
              value="dancing"
              onChange={handleMultipleCheckBox}
            />
            Swimming
            <input
              type="checkbox"
              name="hobbies"
              value="swimming"
              onChange={handleMultipleCheckBox}
            />
            Surfing
            <input
              type="checkbox"
              name="hobbies"
              value="surfing"
              onChange={handleMultipleCheckBox}
            />
          </label>
          <label htmlFor="">
            Pets: Dog
            <input
              type="checkbox"
              name="pets"
              value="dog"
              onChange={handleMultipleCheckBox}
            />
            Cat
            <input
              type="checkbox"
              name="pets"
              value="cat"
              onChange={handleMultipleCheckBox}
            />
            Bird
            <input
              type="checkbox"
              name="pets"
              value="bird"
              onChange={handleMultipleCheckBox}
            />
          </label>
          <label htmlFor="">
            <input type="submit" value="SUBMIT" />
          </label>
        </form>
      </div>

      <div className="output">
        <div>Firstname: {formData.firstname}</div>
        <div>Lastname: {formData.lastname}</div>
        <div>Email: {formData.email}</div>
        <div>Age: {formData.age}</div>
        <div>Message: {formData.message}</div>
        <div>Education: {formData.education}</div>
        <div>Married: {formData.married ? 'yes' : 'no'}</div>
        <div>Gender: {formData.gender}</div>
        <div>Hobbies: {formData.hobbies.join(', ')}</div>
        <div>Pets: {formData.pets.join(', ')}</div>
      </div>
    </div>

    <hr />

    <RefForm />
    </>
  );
};

export default App;
