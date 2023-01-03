import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import {fetchData} from '../utils/fetchData'
const ChannelDetail = () => {
  const [channel,setChannel] = useState(null)
  const [videos,setVideos] = useState([])
  let {id} = useParams()
  
  useEffect(()=>{
     fetchData(`channels?part=snippet&id=${id}`)
     .then((data)=> setChannel(data?.items[0]))
     fetchData(`search?channelId=${id}&part=snippet&order=date`)
     .then((data)=> setVideos(data?.items))
  },[id])
  return (
    <Box minHeight="95vh">
       <Box>
        <div 
         style={{background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',zIndex:10,height:'300px'}}
        
        />
         <ChannelCard channel={channel} marginTop="-110px"/>
       </Box>
       <Box display="flex"  p="2">
        <Box sx={{mr:{sm:'100px'}}} />
        <Videos videos={videos}/>
       </Box>
    </Box>
  )
}

export default ChannelDetail