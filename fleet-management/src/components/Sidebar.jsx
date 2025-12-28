import React, { useState } from 'react'

const Sidebar = () => {

    const [formData,setFormData] = useState([]);
    const handleFleetData = ()=>{

    }

  return (
    <div className='sidebar'>
       <h2>Add Fleet</h2>
        <form>
            <input type="text" placeholder='Vehicle Registration number' />
            <select>
                <option value="">Select Category</option>
                <option value="Auto">Auto</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Bus">Bus</option>
            </select>
            <input type="text" placeholder='Driver name' />
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
