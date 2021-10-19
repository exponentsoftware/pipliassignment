import React, { useState,useEffect } from 'react';
import axios from 'axios';

import { useColorMode } from '@chakra-ui/color-mode';
import Navigation from './Navigation';
function NavBar() {

    const { colorMode, toggleColorMode } = useColorMode();
    const [time,setTime]=useState([])

    const getTime=async()=>{

         await axios.get("http://worldtimeapi.org/api/ip")
             
              .then(res => setTime(res.data))
             .catch(error=>error)
        };

        useEffect(() => { getTime() }, []);

        const {client_ip, timezone, utc_datetime}=time;
        
    return <Navigation
        toggleColorMode={toggleColorMode}
        colorMode={colorMode}
        client_ip={"IP:" + client_ip}
        timezone={timezone}
        utc_datetime={utc_datetime} 
        />
}

export default NavBar;
