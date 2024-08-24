import { Box,Flex,Text,Image } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"
import AllUser from "../Comonents/AllUser"

import Product from "../Comonents/Product"
import CreateProduct from "../Comonents/CreateProduct"
export default function Home(){
    let [active,setActive]=useState({User:1,Recharge:0,Product:0})
        let navbar=[
            {title:"User",link:'/'},
            {title:"Recharge",link:'/'},
            {title:"Product",link:'/'},
            {title:"createProduct",link:'/'},
            {title:"Recharge",link:'/'},
            {title:"Recharge",link:'/'},
            {title:"Recharge",link:'/'}
        ]

    function show(ele){
        if(ele=='User'){
            setActive({User:1,Recharge:0,Product:0,createProduct:0})
        }
        if(ele=='Recharge'){
            setActive({User:0,Recharge:1,Product:0,createProduct:0})
        }
        if(ele=='Product'){
            setActive({User:0,Recharge:0,Product:1,createProduct:0})
        }
        if(ele=='createProduct'){
            setActive({User:0,Recharge:0,Product:0,createProduct:1})
        }
        console.log(active)

    }

    return <>
        <Flex justifyContent={'space-between'} p='2%' bg='#222f3e' w='100vw' h='100vh'>
            <Flex py='5px' color={'#222f3e'} fontWeight={600} fontSize={'20px'} flexDir={'column'}  w='15%' borderRadius={'md'} borderColor={'white'} bg='#10ac84' border={'2px solid white'} >
                {
                    navbar.map((ele,i)=>{
                        return    <Box onClick={()=>{show(ele.title)}} _hover={{bg:'#222f3e',color:'white'}} pl='25%' key={i}><Link>{ele.title}</Link></Box>

                    })
                }

            </Flex>
            <Flex  bg='white' w='80%' borderRadius={'md'}>
            {active.Product === 1 && <Product />}
            {active.createProduct === 1 && <CreateProduct />}
            {active.User === 1 && <AllUser />}
               
            </Flex>

        </Flex>
            
    </>
}