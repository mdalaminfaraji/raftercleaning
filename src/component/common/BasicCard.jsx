"use client";
import * as React from "react";
import { Icon } from "@iconify/react";
import {
  FaBriefcase,
  FaSackDollar,
  FaChalkboardUser,
  FaBagShopping,
  FaCircleUser,
} from "react-icons/fa";
import Color from "color";
import {
  Box,
  CardContent,
  Typography,
  Grid,
  Item,
  Button,
  alpha,
  CardActions,
  Card,
} from "@mui/material";

const BasicCard = ({ icon, title, price, color }) => {
  return (
    <Card
      sx={{
        borderBottom: "2px solid",
        borderColor: color,
        borderRadius: "5px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",

          alignItems: "center",
        }}
        component="div"
      >
        <Box
          sx={{
            width: "58px",
            height: "58px",
            borderRadius: "5px",
            textAlign: "center",

            backgroundColor: Color(color).alpha(0.2).string(),
            svg: { color: color },
          }}
        >
          <Icon
            style={{ width: "34px", marginTop: "10px", height: "34px" }}
            icon={icon}
          />
        </Box>
        <Box sx={{ marginLeft: "15px" }}>
          <Typography variant="h6" sx={{ opacity: ".7" }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
