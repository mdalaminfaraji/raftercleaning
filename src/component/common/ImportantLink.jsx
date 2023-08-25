"use client";
import React from "react";
import { Icon } from "@iconify/react";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
const importantLink = [
  {
    link: "https//:example.com",
    icon: <Icon icon="ei:user" />,
    title: "create New Customer",
  },
  {
    link: "https//:example.com",
    icon: <Icon icon="material-symbols:create-new-folder-outline" />,
    title: "create a Booking",
  },
  {
    link: "https//:example.com",
    icon: <Icon icon="fa6-solid:file-invoice-dollar" />,
    title: "create an Invoice",
  },
  {
    link: "https//:example.com",
    icon: <Icon icon="carbon:gui-management" />,
    title: "schedules Management",
  },
];
const ImportantLink = () => {
  return (
    <Box>
        <Typography sx={{marginTop:"10px"}}>Important Link</Typography>
      {importantLink.map(({ link, icon, title }) => (
        <Box sx={{textDecoration:"none"}} key={title}>
          <Link href={link}>
            {icon} {title}
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default ImportantLink;
