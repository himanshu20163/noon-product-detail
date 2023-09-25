import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import "./resultbox.css";
import Recommendedbar from './recommand/Recommandbar';

const Topbar = () => {
    return (
        <div>
            <div class="sc-7d1ac0ec-0 topresultbox">
                <Box data-qa="searchHeader" w="45%">
                    <Flex>
                    <label>900 Results for</label>
                    <h6>"HP"</h6>
                    </Flex>
                    
                </Box>
                <Box w="50%" >
                    <Flex  justifyContent={"space-between"}>
                    <Box w="50%">
                    <Flex alignItems='center' justifyContent={"space-between"} >
                    <label ml={20}>SORT BY</label>
                     <Recommendedbar />
                    </Flex>
                    </Box>
                    <Box w="50%">
                    <Flex alignItems='center' justifyContent={"space-between"} >
                    <label ml={20}>SORT BY</label>
                  <Recommendedbar />
                    </Flex>
                    </Box>
                    </Flex>
                </Box>
                </div>
        </div>
    )
}

export default Topbar