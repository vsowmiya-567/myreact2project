import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Editpage from './Components/Editpage';
import { Navbar } from 'react-bootstrap';
import Dialog from './Components/Dialog';

export const Mycontext = createContext();

const App = () => {
  const details = [
    { id: 1, title: 'Feedbacks', para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 2, title: 'Weekly Task', para: 'Explicabo, minima distinctio ad nam dolorem aut reprehenderit error.' },
    { id: 3, title: 'Lyrics', para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.' }
  ]
  const [data, setData] = useState(details)
  const[dialog,setDialog] = useState(false)
  const [deleteid,setDeleteId] =useState(undefined)
  
  useEffect(() => {
    data;
  }, [])

  const addData = (add)=>{
     add.id = data.length + 1;
     setData([...data,add])
  }

  const deletebyid =(id)=>{
    console.log(id)
    setData(data.filter((datas)=> datas.id !== id))
    setDialog(false)

  }
  const deleteData = (id)=>{
    setDialog(true)
    setDeleteId(id)
    // setData(data.filter((datas)=> datas.id !== id))
  }
    
  const initialValue = { id: null, title: '', para: '' }
  const [currentData , setCurrentData] =useState(initialValue)

  const edit = (data)=>{
    setCurrentData(
      {
        id:data.id,
        title:data.title,
        para:data.para
      }
      )
      console.log(data);
  }
  
  const updateData =(id,updatedData)=>{
    setData(data.map((datas)=>(datas.id === id? updatedData:datas)))
  }
  console.log(data);
  
  return (

    <div className='container'>
      <Navbar />
      <div>
        <Mycontext.Provider value={{value1:data,value2:addData,value3 :deleteData,
          value4:edit ,value5:updateData,value6:currentData}}>
          <Routes>
            <Route path='/' element={<Sidebar/>} />
            <Route path='/editpage' element={<Editpage />} />
          </Routes>

        </Mycontext.Provider>
        
        {dialog&&deleteid? <Dialog id ={deleteid} deletebyid={deletebyid}/>: "" 
        }
      </div>




    </div>
  );
};

export default App;
    
      




