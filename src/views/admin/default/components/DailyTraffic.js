import React from "react";

// Chakra imports
import { Box, Flex, Icon, Text,Select, useColorModeValue } from "@chakra-ui/react";
//import LineChart from "components/charts/LineChart";
//import BarChart from "components/charts/BarChart";
import BarChart from "../components/../../../../components/charts/BarChart";
// Custom components
//import Card from "components/card/Card.js";
import Card from "../components/../components/../../../../components/card/Card";
//import { barChartDataDailyTraffic, barChartOptionsDailyTraffic,} from "variables/charts";
import { barChartDataDailyTraffic, barChartOptionsDailyTraffic,} from "../../../../variables/charts";

// Assets
import { RiArrowUpSFill } from "react-icons/ri";

export default function DailyTraffic(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
         
          <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        mb='8px'>
        <Text color={textColor} fontSize='2xl' fontWeight='600' mt='4px'>
          Overview
        </Text>
        
        <Select
          fontSize='sm'
          variant='subtle'
          defaultValue='monthly'
          width='unset'
          fontWeight='700'>
          <option value='daily'>Daily</option>
          <option value='monthly'>Quarterly</option>
          <option value='yearly'>Yearly</option>
        </Select>
      </Flex>
         
        </Flex>
        
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
          
        />
      </Box>
     
    </Card>
  );
}
