import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Title = createContext();
const About = createContext();
const Location = createContext();
const User = createContext();

const address = "Dang"
const userdetail = [
  {
    id: 1,
    name: "ram",
    email : "ram@gmail.com"
  },
  {
    id: 2,
    name: "shyam",
    email : "shyam@gmail.com"
  }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <Title.Provider value={"All component details"}>
    <About.Provider value={"for all values"}>
      <Location.Provider value={address}>
        <User.Provider value={userdetail}>
       <App />
       </User.Provider>
       </Location.Provider>
    </About.Provider>
    </Title.Provider>
  </>
);

export {Title, About, Location, User};

