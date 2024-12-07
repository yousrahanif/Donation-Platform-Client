import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Root from "../components/Root";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";
import AllCampaign from "../components/AllCampaign";
import ErrorPage from "../components/ErrorPage";
import AddCampaign from "../components/AddCampaign";
import DetailsPage from "../components/DetailsPage";
import MyCampaign from "../components/MyCampaign";
import { useContext } from "react";
import { AuthContext } from "../providers/Authprovider";
import UpdateCampaign from "../components/UpdateCampaign";
import MyDonation from "../components/MyDonation";
  const Router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
        path: "/",
      element: <Home></Home>,
      loader: ()=>fetch('http://localhost:5000/campaigns')


        },
        {
            path: "/register",
          element: <Register></Register>
    
            },
            {
                path: "/login",
              element: <Login></Login>
        
                },
                {
                  path:'/allcampaigns',
                  element: <AllCampaign></AllCampaign>,
                  loader: ()=>fetch('http://localhost:5000/allcampaigns')

                },
                {
                
                    path:'/allcampaigns/:id',
                    element: <PrivateRoute>
                      <DetailsPage></DetailsPage>
                    </PrivateRoute>,

                    loader: ({params})=>fetch(`http://localhost:5000/allcampaigns/${params.id}`)
           
                    },


                

                {
                  path:'/addCampaign',
                  element: <PrivateRoute>
                   <AddCampaign></AddCampaign>
                  </PrivateRoute>
                },
                {
                  path:'/mycampaign',
                  element: <PrivateRoute>
                   <MyCampaign></MyCampaign>
                  </PrivateRoute>,
                  
                },
                {
                  path:'/mydonation',
                  element: <PrivateRoute>
                  <MyDonation></MyDonation>
                  </PrivateRoute>,
                  
                },
                {
                  path:'/updatecampaign/:id',
                  element: <PrivateRoute>
                  <UpdateCampaign></UpdateCampaign>
                  </PrivateRoute>,
loader: ({params})=>fetch(`http://localhost:5000/updatecampaign/${params.id}`)

                  
                  
                },

      ]
    },
  ]);
  export default Router;