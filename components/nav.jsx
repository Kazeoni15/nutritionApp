import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Heading,
  Link,
  Box,
  Image,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
import { useState } from "react";
import DarkMode from "./darkMode";



export default function Navbar() {

  const [display, changeDisplay] = useState('none')
  const [visibility, setVisibility] = useState(false)


  const variants={
    visible: { opacity: 1, transition:{duration:0.3}},
    hidden: { opacity: 0 , transition:{duration:0.3}}, 
   
    
  }
  

  return (
    <Flex>
      <Box>
        <Link href="/">
          <Image width={70} src="/BlogLogo.png" alt="logo" />
        </Link>
      </Box>
      <Flex display={["none", "flex", "flex", "flex"]}>
      <Box p="1rem">
        <Heading>
          <Link href="/">Nutrition</Link>
        </Heading>
      </Box>

      <Box p="1rem">
        <Heading>
          <Link href="/recipes">Recipes</Link>
        </Heading>
      </Box>

      </Flex>
      
      <Flex pos="Fixed" top="1rem" right="1rem" align="center">
      <DarkMode />
      <IconButton aria-label="Open Menu" size="lg" mr={2} icon={<HamburgerIcon/>} onClick={()=>{
         setVisibility(true)
         changeDisplay("flex")
         }} display={["flex", "none", "none", "none"]}/>
        
      </Flex>

     

      <motion.div
      
      variants={variants}
      animate={visibility ? "visible" : "hidden"}
      
      
      
    >
     <Flex w="100vw" bg="linear-gradient(to top right, #99ccff 0%, #009933 100%)" zIndex={20} h="100vh" pos="fixed" top="0" left="0" overflowY="auto" flexDir="column" display={display}>
     <Flex justify="flex-end">
       <IconButton mt={4} mr={6} aria-label="Close Menu" onClick={()=>{
         setVisibility(false)
         setTimeout(()=>{changeDisplay("none")}, 300);
         
         }} size="lg" icon={<CloseIcon/>} />
     </Flex>
     <Flex flexDir="column" align="center">
      <Box p="1rem">
        <Heading>
          <Link href="/">Nutrition</Link>
        </Heading>
      </Box>

      <Box p="1rem">
        <Heading >
          <Link href="/recipes">Recipes</Link>
        </Heading>
      </Box>

      </Flex>
      </Flex>

     </motion.div>

     
     </Flex>


    
  );
}
