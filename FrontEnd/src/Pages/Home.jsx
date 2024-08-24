import { Box,Flex,Text,Image,Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import GetProduct from "../Components/GetProduct";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Home(){
   

    return <>
        <Navbar/>
        <Box w={'full'} h='300px' bg='red'></Box>
        <Box w={'full'} h='200px' bg='gray'></Box>
        <GetProduct/>
        
        <Footer/>
    </>
}