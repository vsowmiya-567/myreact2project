import React, { useContext, useState } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import { CardBody, CardFooter, CardTitle } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Mycontext } from '../App';


const Sidebar = () => {

    const state = useContext(Mycontext)
    console.log(state);
    const navigate = useNavigate()

    const initialValue = { id: null, title: '', para: '' }
    const [newData, SetNewData] = useState(initialValue)
    const [date,setDate] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target
        SetNewData({ ...newData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newData.title || !newData.para) return;
        state.value2(newData)
        SetNewData(initialValue)
    }

          
    return (
        <div className='sidebar'>
            <h1 className='notesapp'>Notes App</h1>
            <button className='notesbuttn'><span className='notesicon'><IoDocumentTextOutline /></span><span className='content'>Notes</span></button>

            <div className='create container-fluid'>
                <form onSubmit={handleSubmit}>
                    <Card.Body>
                        <Card.Title className='addnote'>Add a Note</Card.Title>
                        <div className='title'>
                            <Card.Title><input type='text' placeholder='Title' onChange={handleChange} name='title' value={newData.initialValue}></input></Card.Title>
                        </div>
                        <Card.Text>
                            <textarea rows='4' type='text' className='text' placeholder='Take a note...' onChange={handleChange} name='para' value={newData.initialValue}></textarea>
                        </Card.Text>

                        <div>
                            <input type='datetime-local' className='date' onChange={e=>setDate(e.target.value)}></input>

                        </div>

                        <div>
                            <button className='addnotebtn' type='submit'>Add Note</button>
                        </div>
                        <div className='mynote'>
                            <h2><span className='notesicon'><IoDocumentTextOutline /></span>My Notes</h2>
                        </div>
                        <h2 className='recent'>Recently viewed</h2>
                    </Card.Body>
                </form>
            </div>

            <div>
                <CardGroup className='cards'>
                    {state.value1.map((data) => {
                        return (
                            <div key={data.id}>
                                <Card className='card'>
                                    <CardBody>

                                        <CardTitle className='tit'>
                                         {/* edit button */}
                                            <span >{data.title}</span>
                                            <button onClick={() => {
                                                state.value4(data)
                                                 navigate('/editpage') 
                                                }}
                                                className='editbtn'>
                                                <span className='edit'>
                                                    <MdEdit />
                                                </span>
                                            </button>

                                             {/* sdelete button */}
                                            <button onClick={() => { state.value3(data.id) }}
                                                className='dltbtn'>
                                                <span className='delete'>
                                                    <FaTrashAlt />
                                                </span>
                                            </button>
                                        </CardTitle>
                                        <CardTitle className='para'>{data.para}</CardTitle>
                                    </CardBody>
                                    <CardFooter className='footer'>
                                        <small className="text-muted"> {date}</small>
                                    </CardFooter>
                                </Card>
                            </div>
                        )
                    })}
                </CardGroup>
            </div>
        </div>
    );
};

export default Sidebar;