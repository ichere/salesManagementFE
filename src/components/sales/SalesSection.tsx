import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { COLOURS } from "../../constants/colours"
import { LANDING_SUB_HEADER_FONT } from "../../constants/appConstants"


export const SalesSection = () => {
  return (
    <Box bg={COLOURS.BGgrey} p={['4rem 2rem', '4rem 2rem', '6rem 20rem']}>
        <Box textAlign={'center'} display="flex" justifyContent="center" w="100%">
          <Flex align={'center'}>
            <Text fontWeight="620" color={COLOURS.black} fontSize=".90rem">
              THESE ARE YOUR PREVIOUS SALES
            </Text>
          </Flex>
        </Box>
        <Text
          fontWeight="800"
          color={COLOURS.black}
          fontSize={LANDING_SUB_HEADER_FONT}
          textAlign="center"
          pb={['3rem', '5rem', '5rem']}
        >
          Your Highlights:
        </Text>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View here</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
        
    </Box>
  )
}
