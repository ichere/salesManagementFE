import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import send from '../assets/images/send.png'
import markIcon from '../assets/images/mark.png'
import { PageTitle, useDocumentTitle } from '../utils/pageTitle'
import { SalesSection } from '../components/sales/SalesSection'
import { SaleSection } from '../components/sales/SaleSection'

export const HomePage = () => {
    useDocumentTitle(PageTitle.Home);
  return (
    <>
        <Box width={'100%'}>
            <Flex width="100%" justifyContent={"space-between"}>
            <Box width={"100%"}>
            <Heading as="h2" fontSize={"20px"} mb="5px">
                Welcome, Monica
            </Heading>
            <Text fontSize={"50px"} fontWeight="semibold">
                {dayjs().format("hh:mm A")}
            </Text>
            </Box>
            <Flex justifyContent="flex-end">
            <Image
                mr="50px"
                width={"50px"}
                height="50px"
                src={send}
                alt=""
                cursor={"pointer"}
            />
            <Image
                width={"50px"}
                height="50px"
                src={markIcon}
                alt=""
                cursor={"pointer"}
            />
            </Flex>
            </Flex>
        </Box>
        <SalesSection />
        <SaleSection />
    </>
  )
}
