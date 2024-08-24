import { Box, Flex, Text, Image,Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Filter from "./Filter";

export default function ProductList() {
    const [products, setProducts] = useState([]); // Initialize as an empty array
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost:3100/all/product');
                
                // Ensure res.data is an array before setting it
                if (Array.isArray(res.data)) {
                    setProducts(res.data);
                } else {
                    console.error("Expected an array but got:", res.data);
                    setError("Invalid data format");
                }

            } catch (error) {
                setError(error);
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    if (error) return <div>Error loading data.</div>;
    if (!products.length) return <div>Loading...</div>;

    return (
        <Flex direction="column"  overflowY={'scroll'}>
            <Filter/>
            {products.map((product) => (
                <Flex m='4' zIndex={'1'} align={'center'} w='96%' key={product._id} p={4} border="1px solid #ddd" mb={4} borderRadius="md">
                    <Image src={product.img} alt={product.name} boxSize="150px" />
                    <Text fontSize="lg" fontWeight="bold">{product.name}</Text>
                    
                    <Text>Category: {product.cat}</Text>
                    <Text>Real Price: ${product.realPrice}</Text>
                    <Text>Discounted Price: ${product.price}</Text>
                    <Text>Discount Duration: {product.day} days</Text>
                    <Text>Daily Income %: {product.daily} days</Text>
                    <Text fontSize={'10px'} w='200px'>Description: {product.dis}</Text>
                    <Flex gap='5' flexDir={'column'}>
                    <Button colorScheme='green'><Text>Status: {product.status}</Text></Button>
                    <Button colorScheme='red'>Delete</Button>
                    </Flex>
                    
                </Flex>
            ))}
        </Flex>
    );
}
