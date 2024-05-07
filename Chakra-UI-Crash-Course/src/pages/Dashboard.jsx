import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Heading, Text, Container, Box, SimpleGrid, Card, HStack, Divider, CardHeader, Flex, CardBody, CardFooter, Button, Avatar } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData()
  // const boxStyles = {
  //   p: "10px",
  //   bg: "purple.400",
  //   color: "white",
  //   m: "10px",
  //   textAlign: "center",
  //   // filter: "blur(1px)",
  //   ":hover": {
  //     color: "black",
  //     bg: "blue.200"
  //   }
  // }

  
  return (
    // <Container as="section" maxWidth="4xl" py="20px">
    //   <Heading my="30px" p="10px">Chakra UI Components</Heading>
    //   <Text marginLeft="30px">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, enim?</Text>
    //   <Text ml="30px" color="blue" fontWeight="bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, enim?</Text>
    //   <Box my="30px" p="20px" bg="orange">
    //     <Text color="white">This is a box</Text>
    //   </Box>
    //   <Box sx={boxStyles}>
    //     Hello ninjas
    //   </Box>
    // </Container>

    <SimpleGrid spacing={10} minChildWidth="300px">
      {tasks && tasks.map((task) => (
        <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">
          <CardHeader>
            <Flex gap={5}>
              <Box w="50px" h="50px">
                <Avatar src={task.img}></Avatar>
              </Box>
              <Box>
                <Heading as="h3" size="sm" >{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color = "gray.500">
            <Text>{Card.description}</Text>
          </CardBody>
          <Divider borderColor="gray.200"></Divider>
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon/>}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon/>}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async () => {
 const res = await fetch("http://localhost:3000/tasks") 
 console.log(res);
 return res.json()
}