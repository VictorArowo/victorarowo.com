import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = event => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/', encode({ 'form-name': 'contact', ...formValues }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setSuccess(false);
        setLoading(false);
      });
  };

  return (
    <Div id="contact">
      <img src="./mail.svg" alt="mail" />
      <div className="copy">
        <h1>GET IN TOUCH</h1>
        <form netlify>
          <input type="hidden" name="form-name" value="contact" />
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formValues.message}
            onChange={handleChange}
          />

          <button onClick={handleSubmit}>
            Send <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </Div>
  );
};

const Div = styled.div`
  height: 100vh;
  padding-top: 50px;
  background-color: #44ccff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  scroll-snap-align: start;

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 70%;
    width: 30%;
    text-align: center;

    h1 {
      font-size: 40px;
      color: white;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;

    input[type='text'] {
      height: 40px;
      border-radius: 20px;
      border: none;
      padding: 0 20px;
      margin: 10px;
      &::-webkit-input-placeholder {
        font-size: 16px;
      }
      &::-moz-placeholder {
        font-size: 16px;
      }
      &:-ms-input-placeholder {
        font-size: 16px;
      }
      &:-moz-placeholder {
        font-size: 16px;
      }
    }

    textarea {
      border-radius: 20px;
      border: none;
      padding: 20px;
      margin: 10px;
      height: 100px;
      &::-webkit-input-placeholder {
        font-size: 16px;
      }
      &::-moz-placeholder {
        font-size: 16px;
      }
      &:-ms-input-placeholder {
        font-size: 16px;
      }
      &:-moz-placeholder {
        font-size: 16px;
      }
    }

    button {
      margin: auto;
      margin-top: 30px;
      height: 40px;
      border-radius: 25px;
      background-color: #6c63ff;
      color: white;
      font-size: 20px;
      border: none;
      font-weight: bold;
      transition: 0.5s opacity;
      width: 70%;

      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    }
  }

  img {
    width: 600px;
    object-fit: cover;
  }
`;

export default Contact;
