import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoDocumentTextOutline } from "react-icons/io5";
import { Mycontext } from '../App';
import { useNavigate } from 'react-router-dom';


const Editpage = () => {

    const navigate = useNavigate()

    const state = useContext(Mycontext)
    const [currentData, setCurrentData] = useState(state.value6)
    console.log(state.value6);

    const handleChange = (e) => {
        e.preventDefault()
        setCurrentData({ ...currentData, [e.target.name]: e.target.value })
    }

    return (
        <div className='editpage'>
            <h1 className='edited'>Edit Note</h1>
            <div className='createedit container-fluid'>
                <Card.Body>
                    <Card.Title className='addnote'></Card.Title>
                    <div className='title'>
                        <Card.Title><input type='text' placeholder='Title'
                            onChange={handleChange}
                            name='title' value={currentData.title}></input>
                        </Card.Title>
                    </div>

                    <Card.Text>
                        <textarea rows='4' type='text' className='text' placeholder='Take a note...'
                            onChange={handleChange}
                            name='para' value={currentData.para}>
                        </textarea>

                    </Card.Text>

                    <div>
                        <input type='datetime-local' className='date'></input>

                    </div>

                    <div>
                        <button onClick={(e) => {
                            e.preventDefault()
                            console.log(!currentData.title||!currentData.para);
                            if(!currentData.title||!currentData.para) return
                            state.value5(currentData.id, currentData)
                            navigate('/')

                        }}
                            className='addnotebtn1' type='submit'>
                            Save Changes
                        </button>
                    </div>

                </Card.Body>
            </div>


        </div>


    );
};


export default Editpage;