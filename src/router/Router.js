import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Hospital from "../components/Hospital";
import HospitalList from "../components/HospitalList";
import Login from "../components/Login";
import PatientReg from "../components/PatientReg";
import Register from "../components/Register";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path:'/',
               element: <Home></Home>
            },
            {
                path:'/list',
                loader:() => fetch('https://patient-register-server-nishatroyhana011.vercel.app/hospitals'),
                element: <HospitalList></HospitalList>
            },
            {
                loader:({params}) => fetch(`https://patient-register-server-nishatroyhana011.vercel.app/hospital/${params.id}`),
                path: '/hospital/:id',
                element:<Hospital></Hospital>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/pregister',
                element:<PatientReg></PatientReg>
            }
        ]    
    }
])
export default router;