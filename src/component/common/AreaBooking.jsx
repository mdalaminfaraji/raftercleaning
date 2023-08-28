import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import map from '../../../public/map.PNG';
import { v4 as uuidv4 } from "uuid";
const AreaBooking = () => {
    const areaBookings=[
        {
            area:"Burlington",
            price:8000,
            percent:30,
        },
        {
            area:"Campbellville",
            price:8000,
            percent:30,
        },
        {
            area:"Carlisle",
            price:8000,
            percent:30,
        },
        {
            area:"Dundas",
            price:8000,
            percent:30,
        },
        {
            area:"Etobicoke",
            price:8000,
            percent:30,
        },
        {
            area:"Hamilton",
            price:8000,
            percent:30,
        },
        {
            area:"Hannon",
            price:8000,
            percent:30,
        },
        {
            area:"Milton",
            price:8000,
            percent:30,
        },
        {
            area:"Mississauga",
            price:8000,
            percent:30,
        },
        {
            area:"Oakville",
            price:8000,
            percent:30,
        },
    ]
    return (
        <Box>
            <Typography variant='h5' sx={{fontWeight:"bold"}}>Top 10 Area By Booking</Typography>
            <Box sx={{display:"flex"}}>
                <Box>
                    {
                        areaBookings.map(({area, price, percent})=>(
                            <Box sx={{display:"flex"}} key={uuidv4()}>
                              <Typography>{area}</Typography>
                              <Box sx={{display:"inline-flex"}}>
                              <Typography>{price}</Typography>
                              <Typography>{percent}</Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box>
                    <Image
                    src={map}
                    alt="map image"
                    width={347}
                    height={305}


                    
                    />

                   
                </Box>
            </Box>

        </Box>
    );
};

export default AreaBooking;