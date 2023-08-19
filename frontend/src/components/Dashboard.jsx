import React,{ useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const[data,setData]=useState([]);

    const fetchDatafromAPI=()=>{
        axios.get("http://localhost:5000/api/getdata")
        .then((response)=>{
             setData(response.data);
        }) 
        .catch(err=>console.log(err));
    }

     const deleteTask=(id)=>{
        axios.delete(`http://localhost:5000/api/deldata/${id}`)
        .then((response)=>{
            if(response.data.message==="Deleted successfully"){
              alert(response.data.message); 
                    fetchDatafromAPI();
                }
                else{
                    alert(response.data.message);
                }
        })
        .catch((err)=>{console.log(err)})
      }

      useEffect(()=>{
        fetchDatafromAPI()
      },[]);


  return (
    <div>
        
        <a href="/add"><button className="btn btn-success mb-3 mt-5">Add Task</button></a>
        <br></br>
        <div className='container table-responsive  w-50'>
        <table className="table table-striped table-success">
            <thead>
            <tr>
                <th>Item No</th>
                <th>Task</th>
                <th>Status</th>
                <th>Delete</th>
            </tr>
            </thead>
        <tbody>
            {data.map((value,index)=>{
                return <tr>
                    <td>{value.itemno}</td>
                    <td>{value.task}</td>
                    <td><input type="checkbox" checked={value.status === 'completed' ? true : false}/></td>
                    <td><button className="btn btn-secondary" onClick={()=>deleteTask(value._id)}><ion-icon name="trash-outline" size="small"></ion-icon></button></td>
                </tr>
                
            })}
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default Dashboard