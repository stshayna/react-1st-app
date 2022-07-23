import './App.css';
import React from "react";
import Main from './components/Main';
import Navbar from './components/Navbar'

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main darkMode={darkMode} />
    </>
  );
}
