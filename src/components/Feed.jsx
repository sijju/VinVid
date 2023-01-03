import {useState,useEffect} from 'react'
import {Box,Stack,Typography} from '@mui/material'
import SideBar from './SideBar'
import Videos from './Videos'
import { fetchData } from '../utils/fetchData'

const Feed = () => {
  const [selectedCat,setSelectedCat] = useState('New')
  const [videos,setVideos] = useState([])
  useEffect(()=>{
    fetchData(`search?part=snippet&q=${selectedCat}`).then((data)=> setVideos(data.items))
  },[selectedCat])
  return (
    <Stack sx= {{flexDirection:{sx:"column",md:"row"}}} >
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'2px solid #3d3d3d', px:{sx:0,md:2}}}> 
      <SideBar
       selectedCat = {selectedCat} setSelectedCat = {setSelectedCat}
      />
      <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#fff'}}>
       Copyright 2022 Karthik mutyala
      </Typography> 
      </Box>

      <Box p={2} sx={{
        overflowY:'auto', height:'90vh', flex:2
      }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCat} <span style={{color:'#FC1503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed