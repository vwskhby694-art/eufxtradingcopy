import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Preview from './pages/Preview';
export default function App(){const location=useLocation();useEffect(()=>{document.title=location.pathname==='/'?'Meridian Markets | A clearer view of the markets':`${location.pathname.split('/').pop()?.replaceAll('-',' ')} | Meridian Markets`;if(location.hash)requestAnimationFrame(()=>document.querySelector(location.hash)?.scrollIntoView())},[location]);return <Routes><Route element={<Layout/>}><Route index element={<Home/>}/>{['about-us','education','accounts','promotions','markets/:market','portal/sign-up','portal/login','legal/:document','platform-demo','*'].map(path=><Route key={path} path={path} element={<Preview/>}/>)}</Route></Routes>}
