import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdOutlineLiveHelp,
  MdHome,
  MdProductionQuantityLimits,
} from "react-icons/md";
import {  FaMoneyCheckDollar } from "react-icons/fa6";
import {  BsPersonSquare } from 'react-icons/bs'
import { CiDiscount1 } from "react-icons/ci";
// Admin Imports
//import MainDashboard from "views/admin/default";
import MainDashboard from "./views/admin/default";


const routes = [
  {
    name: "Dashboard ",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Product",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdProductionQuantityLimits}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    
    secondary: true,
  },
  {
    name: "Customers",
    layout: "/admin",
    icon: <Icon as={BsPersonSquare} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    
  },
  {
    name: "Income",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={FaMoneyCheckDollar} width='20px' height='20px' color='inherit' />,
  
  },
  {
    name: "Promote",
    layout: "/admin",
    path: "/sign-in",
    icon: <Icon as={CiDiscount1} width='20px' height='20px' color='inherit' />,
    
  },
  {
    name: "Help",
    layout: "/admin",
    path: "/rtl-default",
    icon: <Icon as={MdOutlineLiveHelp} width='20px' height='20px' color='inherit' />,
    
  },
];

export default routes;
