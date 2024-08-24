import { Box,Flex,Text } from "@chakra-ui/react";

export default function Navbar(){

    return <>
       <Flex position={"sticky"} top='0px' fontWeight={700} fontSize={'2xl'} p='5px 10px' color={'white'} bg='#673de6'>
        <Text>SMI</Text>
       </Flex>
    </>
}