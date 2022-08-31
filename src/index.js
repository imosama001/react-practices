import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./index.css"
import {UseState,UseEffect,UseEffectTimer, UseEffectApi, UseContext, UseReducer2, UseReducerApi, UseCallback, UseMemo, UseRefFocus, UseRefTimer} from './component';
import { useNavigate ,BrowserRouter,Routes,Route,Link} from "react-router-dom";
import UseReducer from './component/UseReducer/UseReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/useState' element={<UseState/>}/>
      <Route path='/useEffect' element={<UseEffect/>}/>
      <Route path='/useEffect/timer' element={<UseEffectTimer/>}/>
      <Route path='/useEffect/api' element={<UseEffectApi/>}/>
      <Route path='/useContext' element={<UseContext/>}/>
      <Route path='/useReducer' element={<UseReducer/>}/>
      <Route path='/useReducer2' element={<UseReducer2/>}/>
      <Route path='/useReducerApi' element={<UseReducerApi/>}/>
      <Route path="/useCallback" element={<UseCallback/>}/>
      <Route path="/useMemo" element={<UseMemo/>}/>
      <Route path="/useRefFocus" element={<UseRefFocus/>}/>
      <Route path="/useRefTimer" element={<UseRefTimer/>}/>

      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

