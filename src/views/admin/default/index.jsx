
import {
  Box,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components

//import MiniStatistics from "components/card/MiniStatistics";
import MiniStatistics from "../../../components/card/MiniStatistics";

import React from "react";
//import ComplexTable from "views/admin/default/components/ComplexTable";
import ComplexTable from "../../admin/default/components/ComplexTable";
//import DailyTraffic from "views/admin/default/components/DailyTraffic";
import DailyTraffic from "../../admin/default/components/DailyTraffic";

//import PieCard from "views/admin/default/components/PieCard";
import PieCard from "../../admin/default/components/PieCard";
//import { columnsDataCheck,columnsDataComplex,} from "views/admin/default/variables/columnsData";
import { columnsDataCheck,columnsDataComplex,} from "../../../views/admin/default/variables/columnsData";

//import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

import tableDataComplex from "../../../views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
        
        <MiniStatistics growth='↑37.8%' name='Earning' value='$198k' />
       
        <MiniStatistics growth='↓2%' name='Orders' value='$2.4k' />
        <MiniStatistics growth='↓2% ' name='Balance' value='$2.4k' />
        <MiniStatistics growth='↑11%' name='Total Sales' value='$89k' />
      </SimpleGrid>

      
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          
          
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
