import './App.css';
import axios from 'axios';
import { useState } from "react";
import ReactDOM from "react-dom/client";


function App() {
  const[name,setName]= useState(" ");
  const [dim_min,setDimn]= useState(0);
  const [dim_max,setDimx]= useState(0);
  const [rel_vel,setRelvel]= useState(0);
  const [miss_dist,setMissdist]= useState(0);
  const [abs_magnitude,setAbsmagnitude]= useState(0);
 
  return (
    <div className="App">
      <form name='A' className='Form'>
    <table>

      <tr>
        <td><strong>ID:</strong></td>
        <td><input class="IN" type="text"  /></td>
      </tr>
      <tr>
        <td><strong>Name:</strong></td>
        <td><input class="IN" type="text" id='name' onChange={(name)=>setName(name.target.value)} required/></td>
      </tr>
      <tr>
        <td><strong>Estimated Diameter Min:</strong></td>
        <td><input class="IN" type="text" id='dim_min' onChange={(name)=>setDimn(name.target.value)} required/></td>
      </tr>
      <tr>
        <td><strong>Estimated Diameter Max:</strong></td>
        <td><input class="IN" type="text" id='dim_max' onChange={(name)=>setDimx(name.target.value)} required/></td>
      </tr>
      <tr>
        <td><strong>Relative Velocity:</strong></td>
        <td><input class="IN" type="text" id='rel_vel' onChange={(name)=>setRelvel(name.target.value)} required/></td>
      </tr>
      <tr>
        <td><strong>Miss Distance:</strong></td>
        <td><input class="IN" type="text" id='miss_dist' onChange={(name)=>setMissdist(name.target.value)} required/></td>
      </tr>
      <tr>
        <td><strong>Orbiting Body:</strong></td>
        <td><input class="IN" type="text"/></td>
      </tr>
      <tr>
        <td><strong>Sentry Object:</strong></td>
        <td><input class="IN" type="text"/></td>
      </tr>
      <tr>
        <td><strong>Absolute Magnitude:</strong></td>
        <td><input class="IN" type="text" id='abs_magnitude' onChange={(name)=>setAbsmagnitude(name.target.value)} required/></td>
      </tr>
      <tr>
        <td><button id='b1' type='Reset'>Clear</button></td>
        <td><button id='b2' type='button' 
    onClick={()=>{axios.post("http://127.0.0.1:8000/test/",{data:0}).then(data=>console.log(data.data))}}>Submit</button></td>
      </tr>
    </table>
      </form>
    </div>
  );
}

export default App;
