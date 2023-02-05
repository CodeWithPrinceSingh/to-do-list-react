import React, {useState} from 'react';
import uuid from 'react-uuid';
import './Form.css'
const Form = (props) => {
     const [descValue,setDescValue]=useState("");
    const [nameValue,setNameValue]=useState("");
    const changeDescValue = (e) =>{
        setDescValue(e.target.value);
    }
    const changeNameValue = (e) =>{
        setNameValue(e.target.value);
    }

    const addInData =(e)=>{
       e.preventDefault();
       const ObjData ={
        id:uuid(),
        name:nameValue,
        descreption:descValue
       }
       props.data(ObjData);
       setDescValue(e.target.value);
       setNameValue(e.target.value);
    }
  

  return (
    <form className='form d-flex flex-column align-items-start'>
        <div className='item-name d-flex flex-column'>
            <label className='level'>Today Work </label>
            <input type="text" className='inp' required value={nameValue} onChange={changeNameValue} placeholder=' Name'/>
        </div>
        <div className='item-name d-flex flex-column'>
            <label className='level'>Description</label>
            <input type="text" value={descValue} onChange={changeDescValue} className='inp' placeholder='Desc'/>
        </div>
        <input type='submit' className='btn btn-primary add-btn' onClick={addInData} />
    </form>
  )
}

export default Form