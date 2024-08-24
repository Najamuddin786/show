import { Box, Flex, Input, Text, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'

async function sendDataBackEnd(data){
    const navigate = useNavigate();
    try {
       let a=await axios({
            method: 'post',
            url: 'http://localhost:3000/apnaSingUp',
            data: data
          });
          if(a.status==202){
            alert(a.data)
          }else{
            // navigate='/login'
          }
    } catch (error) {
        console.log("Errorrrrr.......")
        console.log(error)
        
    }
}

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    number: "",
    password1: "",
    password2: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.password1!==data.password2){
        alert("Password should be the same")
    }else{
        console.log(data);
        sendDataBackEnd(data)
    }
    // Handle form submission logic here
    
  };

  return (
    <Center h="100vh" bg="#673de6">
      <Box>
        <Flex
          fontWeight="700"
          fontSize="1.8xl"
          justifyContent="space-between"
          borderRadius="10px 50px"
          p="10px 50px"
          bg="linear-gradient(to right, white 50%, black 50%)"
          color="white"
        >
          <Text color="#673de6">
            <Link to="/singup">SignUp</Link>
          </Text>
          <Text>
            <Link to="/login">Login</Link>
          </Text>
        </Flex>
        <br />
        <br />

        <form onSubmit={handleSubmit}>
          <Flex flexDir="column" gap="6">
            <Text color="white">Create ID Here</Text>
            <Input
              name="name"
              placeholder="Enter Your Name"
              value={data.name}
              onChange={handleChange}
              required
            />
            <Input
              name="number"
                type="number"
              placeholder="Enter Your Mobile Number"
              value={data.number}
              onChange={handleChange}
              required
            />
            <Input
              name="password1"
            //   type="password"
              placeholder="Enter Your Password"
              value={data.password1}
              onChange={handleChange}
              required
            />
            <Input
              name="password2"
            //   type="password"
              placeholder="Confirm Password"
              value={data.password2}
              onChange={handleChange}
              required
            />
            <Button type="submit">Submit</Button>
          </Flex>
        </form>
      </Box>
    </Center>
  );
}
