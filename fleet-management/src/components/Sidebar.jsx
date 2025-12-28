import React, { useState } from 'react'

const Sidebar = () => {

    const [formData,setFormData] = useState([]);
    const [regNo,setRegNo] = useState("");
    const [driverName,setDriverName]= useState("");  
    const handleFleetData = (e)=>{
        e.preventDefault();
        const fleet = {
            regNo,
            driverName,
            
        }
    }

  return (
    <div className='sidebar'>
       <h2>Add Fleet</h2>
        <form>
            <input type="text" placeholder='Vehicle Registration number' value={regNo} onChange={(e)=>setRegNo(e.target.value)} />
            <select value={value} onChange={(e)=>setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="Auto">Auto</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Bus">Bus</option>
            </select>
            <input type="text" placeholder='Driver name' value={driverName} onChange={(e)=>setDriverName(e.target.value)}/>
            <select>
                <option value="">Availability Status</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
            </select>
            <button type='submit' onClick={handleFleetData}>Add Fleet</button>
        </form>

    </div>
  )
}

export default Sidebar
