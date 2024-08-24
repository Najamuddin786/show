import { Box, Flex, Text, Image,Button, Input, Spacer } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";


export default function CreateProduct() {
    let [data,setData]=useState({name:'',status:'',cat:'',realPrice:'',price:'',day:'',dis:'',img:'',daily:''})

   async function submit(event){
        event.preventDefault()
        try {

            let response = await axios({
                method: 'post',
                url: 'http://localhost:3100/all/productCreate',
                data: data,
            })
            console.log(response)
            alert("Product has been Created")
            setData({ img: '', name: '', daily: '', status: '', cat: '', realPrice: '', price: '', day: '', dis: '' });

        } catch (error) {
            
        }
        console.log(data)
    }

    function View(){
        return <>
                <Flex gap='1' w='400px' p='10' flexDir={'column'} border={'2px solid gray'} borderRadius={'md'}>
            
                    <Image src={data.img} w='400px' h='250px'/>
                    <Text>Product Name : {data.name}</Text>
                    <Text>Daily Income : {data.daily}</Text>
                    <Text>Status : {data.status}</Text>
                    <Text>Category : {data.cat}</Text>
                    <Text>RealPrice : {data.realPrice}</Text>
                    <Text>Price : {data.price}</Text>
                    <Text>Day : {data.day}</Text>
                    <Text>Discription : {data.dis}</Text>

               
                </Flex>
        </>
    }


    return <>
      <Flex p="8" align={'center'}>
  <form onSubmit={submit}>
    <Flex
      gap="3"
      w="400px"
      p="10"
      flexDir="column"
      border="2px solid gray"
      borderRadius="md"
    >
      <Input
        required
        type="url"
        value={data.img}
        placeholder="Image URL"
        onChange={(e) => setData({ ...data, img: e.target.value })}
      />
      <Input
        required
        type="text"
        placeholder="Product Name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <Input
        required
        type="text"
        placeholder="Daily Income %"
        value={data.daily}
        onChange={(e) => setData({ ...data, daily: e.target.value })}
      />
      <Flex>
        <select
          required
          value={data.status}
          onChange={(e) => setData({ ...data, status: e.target.value })}
        >
          <option value="" disabled selected hidden>
            Status
          </option>
          <option value="Deactivate">Deactivate</option>
          <option value="Activate">Activate</option>
        </select>
      </Flex>
      <Flex>
        <select
          required
          value={data.cat}
          onChange={(e) => setData({ ...data, cat: e.target.value })}
        >
          <option value="" disabled selected hidden>
            Category
          </option>
          <option value="A-Series">A-Series</option>
          <option value="B-Series">B-Series</option>
        </select>
      </Flex>
      <Input
        required
        type="number"
        placeholder="Real Price"
        value={data.realPrice}
        onChange={(e) => setData({ ...data, realPrice: e.target.value })}
      />
      <Input
        required
        type="number"
        value={data.price}
        placeholder="Selling Price"
        onChange={(e) => setData({ ...data, price: e.target.value })}
      />
      <Input
        required
        type="number"
        value={data.day}
        placeholder="Day"
        onChange={(e) => setData({ ...data, day: e.target.value })}
      />
      <Input
        required
        type="text"
        value={data.dis}
        placeholder="Product Description"
        onChange={(e) => setData({ ...data, dis: e.target.value })}
      />
      <Button type="submit" colorScheme="green">
        Create Product Now
      </Button>
    </Flex>
  </form>

  <Box ml='200px' >
   
    <View />
  </Box>
</Flex>

        
    </>
}
    