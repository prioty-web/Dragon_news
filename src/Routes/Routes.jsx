import { createBrowserRouter, Navigate} from "react-router-dom";
import HeaderLayout from "../HeaderLayouts/HeaderLayout";
import CategoryNews from "../Page/CategoryNews";


const Routes = createBrowserRouter([
    {
        path:'/',
        element:<HeaderLayout></HeaderLayout>,
        children:[
            {
                path:'',
                element:<Navigate to={"/category/01"}></Navigate>

            },
           {
            path:"/category/:id",
            element:<CategoryNews></CategoryNews>,
            loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
           },
        ]
    },
    {
        path:'*',
        element: <h1>ERROR</h1>
    }
])

export default Routes;