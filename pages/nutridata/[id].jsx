import {
  Flex,
  Heading,
  VStack,
  Grid,
  GridItem,
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Stack,
  Badge,
  Wrap,
  WrapItem,
  Tag,
  HStack,
  Center,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion"

import Navbar from "../../components/nav";
import Search from "../../components/searchBar";
export default function ResultPage(props) {
  const router = useRouter();
  const { id } = router.query;
  let data = props.data;
  let nutr = data.totalNutrients;
  let results = Object.keys(nutr).map((i) => [i, nutr[i]]);
  let tags = data.healthLabels;

  if(results.length==0){
   return(<>

   <Navbar/>
   <VStack
        bg="linear-gradient(to top right, #99ccff 0%, #009933 100%)"
        p="3rem"
      >
        <Search />

        <Heading pt="2rem">Results for {id}</Heading>
      </VStack>

      <Center>
        <Heading pt="4rem">Invalid Search</Heading>
      </Center>
  
    
  </>) 
  } else {
    return(<>
      <Navbar />

      <VStack
        bg="linear-gradient(to top right, #99ccff 0%, #009933 100%)"
        p="3rem"
      >
        <Search />

        <Heading pt="2rem">Results for {id}</Heading>
      </VStack>
      
      
        
     

      <Flex>
        <Container
          fontSize={{
            base: "12px",
            sm: "17px",
            md: "25px",
            xl: "25px",
            "2xl": "25px",
          }}
        >
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Content</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              {results.map((result) => {
                return (
                  <Tr key={result}>
                  
                  <Td><motion.div initial={{scale:0.9}} whileInView={{scale:1.1}} >{result[1].label}</motion.div></Td>
                  


                  
                  <Td>
                  <motion.div initial={{scale:0.9}} whileInView={{scale:1.1}} >
                      {result[1].quantity}
                      {result[1].unit}
                      </motion.div>
                    </Td>

                                      
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Content</Th>
                <Th>Quantity</Th>
              </Tr>
            </Tfoot>
          </Table>
        </Container>
      </Flex>
      <Container alignSelf="center" m="1rem" maxW={{
                base: "90%",
                sm: "90%",
                md: "90%",
                xl: "97%",
                "2xl": "97%",
              }}>
          {tags.map((tag, index) => {
            return (
             
                <Tag m="0.2rem" key={index}>
                  {tag}
                </Tag>
              
            );
          })}
        </Container>
    </>)
  }

  
}

export async function getServerSideProps(context) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': process.env.APIid,
      'X-RapidAPI-Key': process.env.APIkey
    }
  };

  let search = context.params.id;

  const res = await fetch(
    `https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=${search}`,
    options
  );
  const data = await res.json();
  console.log(data);

  return { props: { data } };
}
