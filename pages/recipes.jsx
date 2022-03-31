import { Flex, Heading, Container, Center, VStack, HStack, Box, Image } from "@chakra-ui/react";
import Navbar from "../components/nav";

export default function Recepies(){
    

    return(<>
        <Navbar/>
        <Flex bg="linear-gradient(to top right, #99ccff 0%, #009933 100%)" pb="40rem">
        
        <VStack>
        <Box p="4rem" width={{
                base: "100%",
                sm: "45%",
                md: "55%",
                xl: "60%",
                "2xl": "100%",
              }}>
              <Image src="/construction.svg" alt="Yoga Illustration" />
              
            </Box>
            <Heading pt="1rem">Page Under Construction!</Heading>

            <Heading>Please visit at a later date.</Heading>

        </VStack>
        
       
        

        
        


        


        
            
        </Flex>
    </>)

}