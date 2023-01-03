import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom"
import { Box } from "@mui/material" 
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import ChannelDetail from './components/ChannelDetail'
import VideoDetail from './components/VideoDetail'
import SearchFeed from "./components/SearchFeed"

const Layout = () =>{
  return (
    <>
     <Navbar/>
     <Outlet/>
     
    </>
  )
}

const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[{
        path:'/',
        element:<Feed/>,
      },{
        path:'/video/:id',
        element:<VideoDetail/>,
      },
      {
        path:'/channel/:id',
        element:<ChannelDetail/>,
      },
      {
        path:'/search/:searchTerm',
        element:<SearchFeed/>
      }
      
    ]
    },

  ])
const App = () =>{
 return(
   <Box sx={{backgroundColor:"#000"}}>
    
    <RouterProvider router ={router} />
   </Box> 
    
  )
}

export default App