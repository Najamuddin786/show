import { Box,Flex,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Footer(){
    let menu=[
        {label:"Home",to:'/home',icon:'fa-solid fa-house'},
        {label:"Product",to:'/product',icon:"fa-brands fa-product-hunt"},
        {label:"Income",to:'/income',icon:'fa-solid fa-indian-rupee-sign'},
        {label:"User",to:'/user',icon:'fa-solid fa-user'}
        
    ]

    return <>
       <Flex justifyContent={'space-between'} position={'fixed'} bottom={'0px'} w='full' fontWeight={700} fontSize={'1.5xl'} p='5px 10px' color={'white'} bg='#673de6'>
        {
            menu.map((ele,i)=>{
                return <Link key={i} to={ele.to}>
                        <Flex  align={'center'} flexDir={'column'} key={i}>
                       <Text fontSize={'1.9xl'}  mb='-5px'><i className={ele.icon}></i></Text>
                      
                      <Text>{ele.label}</Text>
                    </Flex>
                </Link>
                    
            })
        }
       </Flex>
    </>
}