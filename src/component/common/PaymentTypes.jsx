import { Box, Card, Grid, Typography } from "@mui/material";
import img from "../../../public/img.png";
import Image from "next/image";
import React from "react";
import Color from "color";
import { v4 as uuidv4 } from "uuid";

const PaymentTypes = () => {
  const services = [
    {
      color: "#F64E60",
      title: "Card",
      price: 1500,
      percent: 40,
    },
    {
      color: "#8950FC",
      title: "Cash",
      price: 1500,
      percent: 40,
    },
    {
      color: "#0BB783",
      title: "Check",
      price: 1500,
      percent: 40,
    },
    {
      color: "#3699FF",
      title:"Bank Deposit" ,
      price: 1500,
      percent: 40,
    },
    {
      color: "#FCCE50",
      title: "Money Order",
      price: 1500,
      percent: 40,
    },
    {
      color: "#FFAE34",
      title: "Crypto",
      price: 1500,
      percent: 40,
    },
    {
      color: "#43F254",
      title: "Other",
      price: 1500,
      percent: 40,
    },
  ];
  return (
    <Card container>
      <Typography variant="h5" sx={{ fontWeight: "bold", p: 1 }}>
        Payment Types
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box>
          <Image
            src={img}
            alt="Picture of pie chart"
            width={200}
            height={200}
          />
        </Box>
        <Box >
          {services.map(({ color, title, price, percent }) => (
            <Box sx={{display:"flex", alignItems:"center"}} key={uuidv4()}>
              <Box sx={{ display: "flex" ,alignItems:"center" }}>
                <Box
                  sx={{
                    width: "10px",
                    height: "10px",
                    borderRadius: 3,
                    mr:1,
                    backgroundColor: Color(color).alpha(1).string(),
                  }}
                ></Box>
                <Typography>{title}</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography>${price}</Typography>
                <Typography>{percent}%</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default PaymentTypes;
