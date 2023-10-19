import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
//import { DashboardLogo1 } from "components/icons/Icons";
import {DashboardLogo1} from '../../icons/Icons'
//import { HSeparator } from "components/separator/Separator";
import { HSeparator } from "../../../components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column' justify='flex-start'>
      <DashboardLogo1 h='30px' w='200px' my='16px' mb='30px'mr='30px' color={logoColor} />
     <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
