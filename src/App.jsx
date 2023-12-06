import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Page1 from './Components/Page1';
import Navbar from './Components/Navbar';
import './App.css';
import Sidebar from './Components/Sidebar';
import Createpage from './Components/Editpage';
import Container from 'react-bootstrap/Container';
import Editpage from './Components/Editpage';

export const mycontext = createContext();

const App = () => {
  const details = [
    { id: 1, title: 'Feedbacks', para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'},
    { id: 2, title: 'Weekly Task', para: 'Explicabo, minima distinctio ad nam dolorem aut reprehenderit error.' },
    { id: 3, title: 'Lyrics', para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' }
  ]
  const [data, setData] = useState(details)
  useEffect(() => {
    data;
  }, [])

  console.log(data)
  return (

    <div className='container'>
      <Navbar />
      <div>
        {/* <mycontext.provider value={data}> */}

          <Sidebar datas={data} />

        {/* </mycontext.provider> */}
      </div>

      <Editpage />


      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/page1' element={<Page1 />} />
      </Routes>
    </div>
  );
};

export default App;