import React from 'react';
import './App.css';
import Header from './components/header/Header';
import MainLink from './components/UI/main-button/mainLink';

function App() {
  return (
    <>
      <Header></Header>
      <MainLink value='Создать игру'></MainLink>
      <MainLink value='Присоединиться к игре'></MainLink>
    </>
  );
}

export default App;
