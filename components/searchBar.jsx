import { Flex, Box, Input, Button} from "@chakra-ui/react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion";

export default function Search(){
    const [search, setSearch] = useState("");
    


  

   

    return(  <Flex>
        <Box pt="2rem" pr="1rem">
             <Input width="15rem" variant="outline" placeholder="1 cup Rice"  _placeholder={{ opacity: 0.4, color: 'inherit' }} onChange={(e)=>setSearch(e.target.value)}></Input>
           </Box>
           <Box pt="2rem">
           <motion.button whileHover={{scale: 1.1}} whileTap={{scale:0.9}}>
           <Button as="a" href={"/nutridata/"+search} onClick={()=>{if(search.length==0){alert("Please enter your search")}}} colorScheme="teal">Search</Button>

           </motion.button>
           

         
          
           

           
             
           </Box>
   
   
       </Flex>)
}


