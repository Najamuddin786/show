import { Box,Flex,Text,Image,Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";



export default function GetProduct(){
    let [product,setProduct]=useState([])

    useEffect(()=>{
            async function name(params) {
                try {
                    let res=await axios('http://localhost:3100/all/product')
                    console.log(res.data)
                    setProduct(res.data)
                } catch (error) {
                    console.log("Not geting product")
                }
                
            }
            name()
    },[])

    return <>
   
        <Flex flexDir={'column'} gap='10' p='1'>
            {product?.map((ele,i)=>{
                return <Flex gap='2' borderRadius={'md'} pb='2'  key={i} flexDir={'column'} bg='#673de6' color='white'>
                            
                            <Image borderRadius={'md'} src={ele.img} w='full' h='300px'/>
                            <Flex justifyContent={'space-between'} p='5px'>
                                <Box>
                                <Text >Product Name : {ele.name}</Text>
                                <del><Text  opacity={'0.8'}>Orignal Price : ₹ {ele.realPrice}</Text></del>
                                <Text >Sell Price : ₹ {ele.price}</Text>
                                </Box>
                                <Box>
                                <Text >Daily Income : ₹ {Math.round((6/100)*ele.price)}</Text>
                                <Text >Day : {ele.day}</Text>
                                <Text >Total Income: ₹ {ele.price*ele.daily}</Text>
                                </Box>
                            </Flex>
                            
                            <Button m='10px'>Buy Now</Button>
                            
                           
                            

                    
                        </Flex>
            })}
        </Flex>

    </>
}