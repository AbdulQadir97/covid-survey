import { Routes as AppRoutes, Route, } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Home from "../pages/Home";
// import Setting from "../pages/Setting"; 
// import Result from "../pages/Result"; 

const Routes = () => {
return(
    <AppRoutes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/settings" element={<Setting />} />
        <Route path='/result' element={<Result/>}/> */}
    </AppRoutes>

)
}

export default Routes;