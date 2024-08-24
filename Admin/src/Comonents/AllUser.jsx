import { Box, Flex, Text, Table, Thead, Tr, Td, Th, Tbody, Button } from "@chakra-ui/react";
import moment from 'moment-timezone';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllUser() {
    let [data, setData] = useState([]);
    let [ti, setTi] = useState({ time: '', date: "" });

    function formatTime(t) {
        const utcDateFromDB = t;
        const istDateForDisplay = moment(utcDateFromDB).tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
        const [da, time] = istDateForDisplay.split('T');
        const trimmedTime = time.split('+')[0].slice(0, 5);
        setTi({ ...ti, time: trimmedTime, date: da });
    }

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get('http://localhost:3100/admin/nivaAll');
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Flex flexDir="column" w="100%">
                <Table variant="simple" w="100%">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Number</Th>
                            <Th>Product</Th>
                            <Th>Recharge</Th>
                            <Th>Wallet</Th>
                            <Th>Withdrawal</Th>
                            <Th>Date</Th>
                            <Th>Time</Th>
                            <Th>GoToDetail</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.slice().reverse().map((ele, i) => {
                            const istDateForDisplay = moment(ele.createdAt).tz('Asia/Kolkata').format('YYYY-MM-DDTHH:mm:ss.SSSZ');
                            const [da, time] = istDateForDisplay.split('T');
                            const trimmedTime = time.split('+')[0].slice(0, 5);

                            return (
                                <Tr key={i}>
                                    <Td>{ele.name}</Td>
                                    <Td>{ele.number}</Td>
                                    <Td>{ele.product}</Td>
                                    <Td>{ele.recharge[i].amount}</Td>
                                    <Td>{ele.wallet}</Td>
                                    <Td>{ele.withdrawal}</Td>
                                    <Td>{da}</Td>
                                    <Td>{trimmedTime}</Td>
                                    <Link to={`/view/${ele.number}`}><Td><Button>Goto</Button></Td></Link>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </Flex>
        </>
    );
}
