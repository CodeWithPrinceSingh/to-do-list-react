import React,{useState} from 'react'
import uuid from 'react-uuid';
import Form from './components/form/Form';
import './App.css'
const allData = [];
const App = () => {
const [newData,setNewData] = useState(allData);

function dataGet (dataGetting){
  setNewData([dataGetting,...newData]);
}

const removeItem = (e) =>{
 const bool = window.confirm("Are You Sure");
 if(bool){
  const filterData= newData.filter((ele=>e.id!==ele.id));
  setNewData(filterData);
 }
  
  }
  return (
    <div className='App'>
      <h1>To Do List</h1>
      <Form data={dataGet}/>
      <div className='lists'>
        {
      newData.map((e)=><div className='list' key={uuid()}><div className='name-desc'><h2>{e.name}</h2><p>{e.descreption}</p></div><button className='btn btn-danger' onClick={()=>removeItem(e)}>Remove</button></div>)
        }
      </div>
    </div>
  )
}

export default App