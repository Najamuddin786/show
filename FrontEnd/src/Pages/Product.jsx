import { Box,Button,Flex,Text,Image } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GetProduct from "../Components/GetProduct";
import { useState,useEffect } from "react";


export default function Product(){


    function Product(){
        return <>
            <hr />
            <Flex bg='white' position={'sticky'} top='70px' justifyContent={'space-around'}><Button>Master-Series</Button><Button>B-Series</Button><Button>A-Series</Button></Flex>
            <hr />
            <GetProduct/>
           
      
        </>
    }

    return <>
        <Navbar/>
        <Box bg='white' position={'sticky'} top='45px'>
            <select name="transactionType" id="transactionType" defaultValue="product">
                <option value="recharge">Product</option>
                <option value="wallet">Ongoing</option>
                <option value="withdrawal">Expire</option>
            </select>
        </Box>
        <Product/>

        <Footer/>
    </>
}