import { Box, Flex, Card, CardBody, Text, CardHeader, Heading, Stack, StackDivider } from '@chakra-ui/react'
import { LANDING_SUB_HEADER_FONT } from '../../constants/appConstants'
import { COLOURS } from '../../constants/colours'
import { landingPageData, LandingPageData } from '../../data/landingPage'
import { LargeBtn } from '../LargeBtn'

export const SaleSection = () => {
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
        <Flex justify={'space-between'} direction={['column', 'column', 'row']} w="100%">
            <Box w={['100%', '100%', '47%']}>
                {[...Array(1).fill(landingPageData[3])].map((data: LandingPageData, i: number) => (
                    <>
                        <h2>
                            <Card key={i}>
                              <CardHeader>
                                <Heading size='md'> Sales Report </Heading>
                              </CardHeader>
                              <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
                                  <Box>
                                    <Heading size='xs' textTransform='uppercase'>Date of Report</Heading>
                                    <Text pt='2' fontSize='sm'>{data.date}</Text>
                                  </Box>
                                  <Box>
                                    <Heading size='xs' textTransform='uppercase'>Description</Heading>
                                    <Text pt='2' fontSize='sm'>{data.description}</Text>
                                  </Box>
                                  <Box>
                                    <Heading size='xs' textTransform='uppercase'>Total</Heading>
                                    <Text pt='2' fontSize='sm'>{data.total}</Text>
                                  </Box>
                                  <Box width={['5rem', '5.5rem', '8rem']}>
                                    <LargeBtn 
                                    bg={COLOURS.blue} 
                                    color={COLOURS.black} 
                                    text={'View Here'} 
                                    loading={false} />
                                  </Box>
                                </Stack>
                              </CardBody>
                            </Card>
                        </h2>  
                    </>
                ))}
            </Box>
            <Box w={['100%', '100%', '47%']}>
                {[...Array(1).fill(landingPageData[4])].map((data: LandingPageData, i: number) => (
                    <>
                        <h2>
                            <Card key={i}>
                              <CardBody>
                                  <Text>{data.date}</Text>
                                  <Text>{data.description}</Text>
                                  <Text>{data.total}</Text>
                              </CardBody>
                            </Card>
                        </h2>  
                    </>
                ))}
            </Box>
        </Flex>
        
    </Box>
  )
}
