import FleetCard from "../components/FleetCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Admin(){

    return(
        <>
            <h1>welcome admin</h1>
            <Navbar/>
            <Sidebar/>
            <FleetCard/>
        </>
    )
}

export default Admin;