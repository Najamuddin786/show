import { Box,Flex,Input,Text,Button,Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Login(){

    return <>
        <Center h='100vh' bg='#673de6'>
       <Box >
        <Flex fontWeight={'700'} fontSize={'1.8xl'} justifyContent={'space-between'} borderRadius={'10px 50px '} p={'10px 50px'} bg={'linear-gradient(to right, white 50%, black 50%);'} color={'white'}>
            <Text color={'#673de6'}><Link to='/login'>Login</Link></Text>
            <Text ><Link to='/singup'>SingUp</Link></Text>
        </Flex>
        <br /><br />
        <br />
        
        <form action="">
        <Flex flexDir={'column'}  gap='6'>
            <Text color={'white'}>Login Here</Text> 
            <Input placeholder="Enter Your Mobile Number"/>
            <Input placeholder="Enter Your Password"/>
            <Button type="submit">Submit</Button>

        </Flex>
        </form>
        
       </Box>
       </Center>
    </>
}