import Login from "./pages/Login";
import {BrowserRouter, Routes,Route, Navigate} from "react-router-dom";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";
function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"}/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;