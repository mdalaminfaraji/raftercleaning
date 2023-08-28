import BasicCard from "@/component/common/BasicCard";
import ImportantLink from "@/component/common/ImportantLink";
import { v4 as uuidv4 } from "uuid";
import {FaBriefcase , FaSackDollar, FaChalkboardUser, FaBagShopping, FaCircleUser} from 'react-icons/fa';
import { AiFillDollarCircle} from 'react-icons/ai';
import { BiSolidBadgeDollar, BiCalendar , BiBriefcase} from "react-icons/bi";
import { IoIosCube } from "react-icons/io";
import { TbCalendarDollar } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";
import { MdAssignmentInd} from "react-icons/md";
import {HiOutlineDesktopComputer} from "react-icons/hi";

import { Box, CardContent, Typography, Grid, Item } from "@mui/material";
import Report from "@/component/common/Report";
import SellingServices from "@/component/common/SellingServices";
import PaymentTypes from "@/component/common/PaymentTypes";
import AreaBooking from "@/component/common/AreaBooking";

export default function Home() {
  const items = [
    {
      icon: "fa6-solid:sack-dollar",
      title: "Gross Sales ",
      price: "938458973",
      color: "#3699FF",
    },
    {
      icon: "bxs:badge-dollar",
      title: "Total Expense ",
      price: "938458973",
      color: "#EFA02A",
    },
    {
      icon: "ri:money-dollar-circle-line",
      title: "Total  Revenue ",
      price: "938458973",
      color: "#27CF33",
    },
    {
      icon: "fluent:briefcase-32-filled",
      title: "Total Job Average",
      price: "938458973",
      color: "#55C0F3",
    },
    {
      icon: "ion:cube",
      title: "Total Quotes",
      price: "938458973",
      color: "#636FF1",
    },
    {
      icon: "solar:calendar-line-duotone",
      title: "Total Booking",
      price: "938458973",
      color: "#F561BB",
    },
    {
      icon: "fa6-solid:chalkboard-user" ,
      title: "Completed Job",
      price: "938458973",
      color: "#F9AD43",
    },
    {
      icon: "mdi:briefcase" ,
      title: "Cancelled Job",
      price: "938458973",
      color: "#FE7979",
    },
    {
      icon: "bxs:shopping-bags"  ,
      title: "Job in Progress",
      price: "938458973",
      color: "#F9956C",
    },
    {
      icon: "tabler:basket-dollar"   ,
      title: "Upcoming payment",
      price: "938458973",
      color: "#FCCE50",
    },
    {
      icon: "carbon:document-signed"   ,
      title: "Total Invoice",
      price: "938458973",
      color: "#AF63FC",
    },
    {
      icon: "fa6-regular:circle-user"    ,
      title: "Total customer",
      price: "938458973",
      color: "#6472FB",
    },
    {
      icon: "fa6-solid:circle-user"   ,
      title: "Total Provider",
      price: "938458973",
      color: "#50F0BD",
    },
    {
      icon: "emojione-monotone:desktop-computer"   ,
      title: "Average Customer Visit",
      price: "938458973",
      color: "#66EC49",
    },
 
    
  ];
  //rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
  return (
    <Box container >
      <Grid
        container
        spacing={2}
        sx={{mx:"auto"}}
      >
       <Grid container spacing={2} item  xs={8}>
       {items.map((item) => (
          <Grid
            item
            sm={6}
            key={uuidv4()}
          >
            <BasicCard {...item} />
          </Grid>
        ))}
      
       </Grid>
     
       <Grid  item xs={4}>
      <ImportantLink></ImportantLink>
      <Report></Report>
      </Grid>
      
     
      </Grid>
     
      <Box>
        <SellingServices></SellingServices>
        <PaymentTypes></PaymentTypes>
        <AreaBooking></AreaBooking>
       </Box>
     

    
    </Box>
  );
}
