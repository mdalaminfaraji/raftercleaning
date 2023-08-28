"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Color from "color";
import { v4 as uuidv4 } from "uuid";
const Report = () => {
  const ReportLink = [
    {
      link: "https//:example.com",
      title: "Total Customer",
      total: 2384,
      color: "#F64E60",
    },
    {
      link: "https//:example.com",
      title: "New Customer",
      total: 234,
      color: "#8950FC",
    },
    {
      link: "https//:example.com",
      title: "Returning Customer",
      total: 556,
      color: "#0BB783",
    },
    {
      link: "https//:example.com",
      title: "Average Site Visit",
      total: 834,
      color: "#3699FF",
    },
    {
      link: "https//:example.com",
      title: "Invoices",
      total: 834,
      color: "#FCCE50",
    },
    {
      link: "https//:example.com",
      title: "Total Quotes",
      total: 834,
      color: "#FCCE50",
    },
    {
      link: "https//:example.com",
      title: "Total Discount",
      total: 834,
      color: "#D33FF8",
    },
    {
      link: "https//:example.com",
      title: "Content Published",
      total: 834,
      color: "#3FC0F8",
    },
  ];
  return (
    <Box sx={{width:"330px"}}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold", color: "#090707" }}>
          Last 30 Days Report
        </Typography>
        <Box sx={{ ml: 2, border: 1, p: "4px", borderRadius: "5px" }}>
          30{" "}
          <Icon
            icon="fluent:ios-arrow-24-regular"
            rotate={3}
            hFlip={true}
            vFlip={true}
          />
        </Box>
      </Box>
      <Box>
        {ReportLink.map(({ link, title, total, color }) => (
          <Box sx={{ borderBottom: "1px dashed #E7E7E7", p: 1 }} key={uuidv4()}>
            <Link
              href={link}
              style={{
                textDecoration: "none",
                display:"flex",
                alignItems:"center"
              }}
            >
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: 3,
                  
                  backgroundColor: Color(color).alpha(1).string(),
                }}
              ></Box>
              <Typography sx={{ mr: 3, ml: 1, color: "#686868" }}>
                {title}
              </Typography>
             <Box sx={{display:"flex", alignItems:"center" , justifyContent:"flex-end"}}>
             <Typography sx={{ ml: 1, color: "#686868" ,}}>{total}</Typography>
              <Icon
                style={{ color: "#686868" }}
                icon="fluent:ios-arrow-24-regular"
                rotate={2}
                hFlip={true}
                vFlip={true}
              />
             </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Report;
