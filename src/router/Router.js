import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Hospital from "../components/Hospital";
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
               loader:() => fetch('http://localhost:5000/hospitals'),
               element: <Home></Home>
            },
            {
                loader:({params}) => fetch(`http://localhost:5000/hospital/${params.id}`),
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