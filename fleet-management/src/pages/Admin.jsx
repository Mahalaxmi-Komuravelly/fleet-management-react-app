// import FleetCard from "../components/FleetCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Admin(){

    return(
        <>
            <h1>welcome admin</h1>
            <Navbar/>
            <Sidebar/>
            <div className="container">
                {
                    formData.map((fleet,index)=>(
                        <div key={fleet.index} className="card">
                            <p>Vehicle Reg No:{fleet.regNo}</p>
                            <p>Category:{fleet.category}</p>
                            <p>Driver Name:{fleet.driverName}</p>
                            <p>Availability Status:{fleet.status}</p>
                            
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Admin;