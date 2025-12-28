import React from 'react'

const FleetCard = () => {
    const fleets=localStorage.getItem(JSON.parse("fleets"));
  return (
    <div>
      <div className="container">
                {
                    fleets.map((fleet,index)=>(
                        <div key={fleet.index} className="card">
                            <p>Vehicle Reg No:{fleet.regNo}</p>
                            <p>Category:{fleet.category}</p>
                            <p>Driver Name:{fleet.driverName}</p>
                            <p>Availability Status:{fleet.status}</p>
                            
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default React.memo(FleetCard)
