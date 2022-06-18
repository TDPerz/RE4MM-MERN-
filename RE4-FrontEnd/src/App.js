  import 'antd/dist/antd.css';
import 'antd'
import '@ant-design/icons'
import './App.css';
import {Layout, Menu } from 'antd';
import { Routes, Route, Router } from 'react-router-dom';
import Main from './Container/Main/main';
import Home from './Container/Main/Home/home';
import SplashLoad from './Container/splashLoad';
import NotFound from './Container/notFoutnd';
import Settings from './Container/Main/Settings/Settings';

const ipcRender = window.ipcRenderer

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Main/> }>
        <Route path='' element={ <Home/> }/>
        <Route path='/settings' element={ <Settings/> }/>
      </Route>
      <Route path='/splash' element={ <SplashLoad/> }/>
      <Route path='*' element={ <NotFound/> }/>
    </Routes>
  );
}

export default App;
