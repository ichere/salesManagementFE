import { Box, Flex, Image, Text } from '@chakra-ui/react';
import backgroundImage from '../assets/images/backgroundImage.png';
import logo from '../assets/images/logo.png';

export const BackgroundImage = () => {
  return (
    <Flex
      width={"100%"}
      height="100%"
      backgroundImage={backgroundImage}
      borderRadius="20px"
      justifyContent={"center"}
      alignItems="center"
    >
      <Box textAlign={"center"} height="80%">
        <Flex width="100%" justify={"center"} mb="10px">
          <Image
            width="100px"
            borderRadius={"20px"}
            src={logo}
            alt="background"
          />
        </Flex>
        <Text fontSize={"20px"}>Easily manage your Sales</Text>
      </Box>
    </Flex>
  )
}
