import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Spinner from './Spinner';
import { mobilePortrait, tabletPortrait } from '../styles/themes';

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

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
    setSuccess(false);
    setFailure(false);
    setLoading(true);
    axios
      .post('/', encode({ 'form-name': 'contact', ...formValues }), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setFormValues({
          name: '',
          email: '',
          message: ''
        });
        setTimeout(() => {
          setSuccess(false);
        }, 1500);
      })
      .catch(() => {
        setFailure(true);
        setLoading(false);
        setTimeout(() => {
          setFailure(false);
        }, 1500);
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

          <button
            onClick={handleSubmit}
            disabled={
              !(formValues.email && formValues.name && formValues.message)
            }
          >
            {!loading ? (
              <span style={{ color: '#333' }}>
                Send <i className="fas fa-paper-plane"></i>
              </span>
            ) : (
              <Spinner />
            )}
          </button>
          {success && <div className="success">Message sent successfully</div>}
          {failure && <div className="failure">Something went wrong</div>}
        </form>
        <div className="socials">
          <a
            href="http://www.github.com/VictorArowo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="http://www.twitter.com/ArowoV"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/victor-arowo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:arowov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>
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
  font-family: 'Varela Round', sans-serif;
  @media ${mobilePortrait} {
    flex-direction: column;
  }

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 70%;
    width: 30%;
    text-align: center;

    @media ${mobilePortrait} {
      margin-top: -120px;
      width: 100%;
    }

    @media ${tabletPortrait} {
      margin-top: -120px;
      width: 80%;
    }
    h1 {
      font-size: 40px;
      color: #333;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    width: 100%;
    @media ${mobilePortrait} {
      height: 100%;
      margin-top: -20px;

      input {
        height: 100px;
      }
    }
    input {
      height: 40px;
      border-radius: 20px;
      border: none;
      padding: 20px 20px;
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
      @media ${mobilePortrait} {
        height: 40px;
      }
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }

      &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
      }
    }
  }

  img {
    width: 600px;
    object-fit: cover;
    @media ${mobilePortrait} {
      display: none;
    }
    @media ${tabletPortrait} {
      display: none;
    }
  }

  .success {
    margin: auto;
    margin-top: 30px;
    width: 80%;
    color: #3ad29f;
    background-color: #333;
    font-size: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .failure {
    margin: auto;
    margin-top: 30px;
    width: 80%;
    color: red;
    background-color: #333;
    font-size: 20px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .socials {
    margin-top: auto;
    font-size: 50px;
    @media ${mobilePortrait} {
      margin-top: 50px;
      font-size: 30px;
    }
    * {
      margin: 10px;
      color: #6c63ff;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export default Contact;
