import React from 'react'
import {db} from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const AddTodo = () => {

    const [title, setTitle] = React.useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(title !== ""){
            await addDoc(collection (db, 'todos'), {
                title,
                completed: false
        });
        setTitle("");
    }
    };
  return (
    <form onSubmit={handleSubmit}>
        <div className='input-container'>
            <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Add a new todo'/>
            </div>
            <div className='btn_container'>
                <button type='submit'>Add</button>
            </div>
        </form>
  )
}


export default AddTodo;