import { Box,Button ,Container,Text,Flex,Center, Input} from "@chakra-ui/react";
import { useState } from "react";
import axios from 'axios'
import Home from "./Home";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const navigate = useNavigate();
    
    let [userid,setUserid]=useState()
    let [Password,setPassword]=useState()

    async function getData(event) {
        event.preventDefault();
    
        // Assuming `userid` and `Password` are defined variables holding the user input
        let obj = { number: userid, password: Password };
    
        try {
            let response = await axios({
                method: 'post',
                url: 'http://localhost:3100/admin/login',
                data: obj,
            })
                  
            
    
            console.log(response.data); // Log the response data
            console.log("First");
            navigate('/home') 
        } catch (error) {
            console.error('There was an error making the request:', error); // Improved error logging
            console.log("Second");
        }
    }
    

    return <>
            <Box bg='#222f3e' h={'100vh'} w={'100vw'}>
                <Center h='100vh'>
                    <Container bg='white' borderRadius={'10px'}>
                        <form onSubmit={getData}>
                        <Text color='#341f97' fontSize={'40px'} fontWeight={700} textAlign={'center'} pt='5'>Admin Login</Text>
                        <Flex gap='8' flexDir={'column'} my='5'>
                            <Input onChange={(e)=>{setUserid(e.target.value)}} type="number" placeholder="Please Enter User I'd"/>
                            <Input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Please Enter Password"/>
                            <Button type="submit">Login Now</Button>
                        </Flex>
                        </form>
                    </Container>
                </Center>

            </Box>
    </>
}