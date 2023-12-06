import React, { useContext } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import { CardBody, CardFooter, CardTitle } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


const Sidebar = (props) => {

    // const [side,setData] = useContext(mycontext)
    const navigate = useNavigate();

    return (
        <div className='sidebar'>
            <h1 className='notesapp'>Notes App</h1>
            <button className='notesbuttn'><span className='notesicon'><IoDocumentTextOutline /></span><span className='content'>Notes</span></button>

            <div className='create container-fluid'>
                <Card.Body>
                    {/* <h2><span className='addnote'>Add a Note</span></h2> */}
                    <Card.Title className='addnote'>Add a Note</Card.Title>
                    <div className='title'>
                        <Card.Title><input type='text' placeholder='Title'></input></Card.Title>
                    </div>
                    {/* <h2 className='title'>Title</h2> */}
                    <Card.Text>
                        <textarea rows='4' type='text' className='text' placeholder='Take a note...'></textarea>
                    </Card.Text>

                    <div>
                        <input type='datetime-local' className='date'></input>
                        
                    </div>

                    <div>
                        <button className='addnotebtn' type='submit'>Add Note</button>
                    </div>
                    <div className='mynote'>
                        <h2><span className='notesicon'><IoDocumentTextOutline /></span>My Notes</h2>
                    </div>
                    <h2 className='recent'>Recently viewed</h2>
                </Card.Body>
            </div>

            <div>
                <CardGroup className='cards'>
                    {props.datas.map((item, index) => {
                        return (
                            <div key={index}>
                                <Card className='card'>
                                    <CardBody>
                                        <CardTitle><span className='tit'>{item.title}</span><button className='editbtn'><span className='edit'><MdEdit /></span></button> <button className='dltbtn'><span className='delete'><FaTrashAlt /></span></button></CardTitle>
                                        <CardTitle className='para'>{item.para}</CardTitle>
                                    </CardBody>
                                    <CardFooter className='footer'>
                                        <small className="text-muted"> 10 days ago</small>
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