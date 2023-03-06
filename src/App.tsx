import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { loadGameAsync } from './redux/games/gamesSlice';

const App: React.FC<{}> = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const games = useAppSelector(store => store.games.list);
  useEffect(() => {
    dispatch(loadGameAsync());
  }, [])
  if(location.pathname === "/"){
    navigate("/choiceOfAction");
  }

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
