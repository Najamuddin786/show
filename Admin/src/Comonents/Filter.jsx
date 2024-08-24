import { Box,Flex,Text} from "@chakra-ui/react"
export default function Filter(){
    return <>
            <Flex borderRadius={'md'} zIndex={999} position={'sticky'} top='0px' p='8px' justifyContent={'space-around'}  mb={'10px'} bg='#10ac84'>
                <Box>
                    <label>Price</label>
                    <select name="" id="">
                        <option value="">Normal</option>
                        <option value="">Low To Hight</option>
                        <option value="">Hight to Low</option>
                    </select>
                    
                </Box>
                <Box>
                    <label>Category</label>
                    <select name="" id="">
                        <option value="">All-Series</option>
                        <option value="">A-Series</option>
                        <option value="">B</option>
                        <option value="">C</option>
                    
                    </select>
                    
                </Box>
                <Box>
                    <label>Status</label>
                    <select name="" id="">
                        
                        <option value="">All</option>
                        <option value="">Active</option>
                        <option value="">Deactive</option>

                    
                    </select>
                    
                </Box>
            </Flex>
    </>
}