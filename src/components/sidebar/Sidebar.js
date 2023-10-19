import React from "react";

// chakra imports
import {
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
//import Content from "components/sidebar/components/Content";
import Content from "./components/Content"
//import {renderThumb,renderTrack,renderView,} from "components/scrollbar/Scrollbar";
import {
  renderThumb,
  renderTrack,
  renderView,
} from "../scrollbar/Scrollbar.js";

import { Scrollbars } from "react-custom-scrollbars-2";


function Sidebar(props) {
  const { routes } = props;

  let variantChange = "0.2s linear";
  let shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.08)",
    "unset"
  );
  // Chakra Color Mode
  let sidebarBg = useColorModeValue("#452c63", "navy.800");
  let sidebarMargins = "0px";

  // SIDEBAR
  return (
    <Box display={{ sm: "none", xl: "block" }} w="100%" position='fixed' minH='100%'>
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w='300px'
        h='100vh'
        m={sidebarMargins}
        minH='100%'
        overflowX='hidden'
        boxShadow={shadow}>
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={renderView}>
          <Content routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  );
}


   

export default Sidebar;
