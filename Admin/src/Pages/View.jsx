import { Box, Text, Flex, Table, Thead, Th, Tbody, Tr, Td } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function View() {
  const { number } = useParams();
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.post('http://localhost:3100/user/dynamic', {
          number: number
        });
        console.log(res.data);
        setInfo(res.data);
      } catch (error) {
        console.error("User Detail not getting", error);
      }
    }

    fetchData();
  }, [number]);

  return (
    <Box w='100vw' h='100vh' border={'30px solid #222f3e'}>
      {info ? (
        <>
          <Flex justifyContent={'space-between'} bg='#00b894' p='10px'>
            <Box>
                <select name="transactionType" id="transactionType" defaultValue="recharge">
                    <option value="recharge">Recharge</option>
                    <option value="wallet">Wallet</option>
                    <option value="withdrawal">Withdrawal</option>
                    <option value="withdrawal">Refer and Earn</option>
                    <option value="withdrawal">Product</option>
                 
                </select>
            </Box>

            <Text>User Name: {info.name}</Text>
            <Text>User Number: {info.number}</Text>
            <Text>Password: {info.password}</Text>
            <Text>User Created: {new Date(info.createdAt).toLocaleString()}</Text>
          </Flex>
         
          <Flex>
            <Table variant="striped" colorScheme="teal" mt={4} w="100%">
              <Thead>
                <Tr>
                  <Th>Recharge</Th>
                  <Th>UTR</Th>
                  <Th>Amount</Th>
                  <Th>Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {info.recharge?.map((recharge, i) => (
                  <Tr key={i}>
                    <Td>{recharge.amount}</Td>
                    <Td>{recharge.UTR}</Td>
                    <Td>{recharge.amount}</Td>
                    <Td>{new Date(recharge.currentTime).toLocaleString()}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Flex>
        </>
      ) : (
        <Text>Loading user details...</Text>
      )}
    </Box>
  );
}
