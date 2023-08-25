"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Color from "color";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const importantLink = [
  {
    link: "https//:example.com",
    icon: <Icon icon="ei:user" />,
    title: "create New Customer",
    color: "#5A9AFC",
  },
  {
    link: "https//:example.com",
    icon: <Icon icon="material-symbols:create-new-folder-outline" />,
    title: "create a Booking",
    color: "#35DE41",
  },
  {
    link: "https//:example.com",
    icon: <Icon icon="fa6-solid:file-invoice-dollar" />,
    title: "create an Invoice",
    color: "#55C0F3",
  },
  {
    link: "https//:example.com",
    icon: <Icon icon="lucide:calendar-clock" />,
    title: "schedules Management",
    color: "#F9956C",
  },
];
const ImportantLink = () => {
  return (
    <Box>
      <Typography sx={{ marginTop: "10px", fontWeight: "bold" }}>
        Important Link
      </Typography>
      {importantLink.map(({ link, icon, title, color }) => (
        <Box
          key={title}
          sx={{
            width: "330px",
            height: "40px",

            backgroundColor: Color(color).alpha(0.2).string(),
            my: 1,
          }}
        >
          <Link style={{ textDecoration: "none", display: "flex" }} href={link}>
            <Box
              sx={{
                color: color,
                ml: 1,
                mr: "3px",
                fontSize: "20px",
                pt: 1,
              }}
            >
              {icon}
            </Box>
            <Typography
              sx={{
                color: "#686868",
                fontSize: "16px",
                lineHeight: "18px",
                pt: 1,
              }}
            >
              {title}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default ImportantLink;
