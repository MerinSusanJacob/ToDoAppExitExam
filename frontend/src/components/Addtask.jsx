import React,{ useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Addtask = () => {
    const[inputs,setInputs]=useState({});
    const[notcompleted, setCompleted] = useState("notcompleted");
    // const[ongoing, setOngoing] = useState(false);

    const navigate=useNavigate();

    const inputHandler=(e)=>{
        // console.log("clicked");
        const{name,value}=e.target;
        setCompleted("completed");
        // setOngoing(true);
        setInputs({
            ...inputs,[name]:value
        });
        console.log(inputs);
    }
    const submitHandler=()=>{
        axios.post('http://localhost:5000/api/postdata',inputs)
        .then((response)=>{
            if(response.data.message==="Posted successfully"){
                alert(response.data.message); 
                navigate('/');
            }
            else{
                alert(response.data.message);
            }
        })
        .catch((err)=>{console.log(err)})
    }
    
    
  return (
    <div>
        <div className="container w-50 mt-5 pt-5 bg-secondary-subtle rounded">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-4">

                {/* Item No */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                    <label htmlFor="ItemNo" className="form-label">Item No:</label>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <input type="Number" 
                    id="ItemNo" 
                    className="form-control" 
                    name="itemno" 
                    value={inputs.itemno} 
                    onChange={inputHandler}/>
                    </div>
                </div>
                </div>

                {/* Task */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                    <label htmlFor="Task" className="form-label">Task:</label>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <input type="text" 
                     id="Task" 
                     className="form-control" 
                     name="task" 
                     value={inputs.task} 
                     onChange={inputHandler}/>
                    </div>
                </div>
                </div>

                {/* Status */}

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex">
                <label className="form-label">Status :</label>
                </div>
                    <div className="col col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <label htmlFor="Completed">Completed</label>
                    &nbsp;&nbsp;
                    <input type="checkbox"
                    label="Completed"
                    name="status"
                    value={notcompleted}
                    onChange={inputHandler}
                    />
                    &nbsp; &nbsp;
                    {/* <label htmlFor="Ongoing">Ongoing</label>
                    &nbsp;&nbsp;
                    <input type="checkbox"
                    label="Ongoing"
                    name="status"
                    value={ongoing}
                    onChange={inputHandler}
                    /> */}
                                  
                    </div>
                </div>
                </div>

               
                {/* Button Submit */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
                    <button className="btn btn-success" onClick={submitHandler}>Submit</button>
                    &nbsp; &nbsp;
                    <a href="/"><button className="btn btn-success">Back to Dashboard</button></a>
                </div>

                </div>
                </div>    
            </div>
        </div>
    </div>
  )
}

export default Addtask