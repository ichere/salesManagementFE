import { ResponsiveAuthWrapper } from '../components/ResponsiveAuthWrapper'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { AuthHeader } from '../components/AuthHeader'
import { AiTwotoneLock } from 'react-icons/ai'
import { COLOURS } from '../constants/colours'
import { LargeBtn } from '../components/LargeBtn'
import { PageTitle, useDocumentTitle } from '../utils/pageTitle'
import { useState } from 'react'

export const ResetSuccessPage = () => {
    useDocumentTitle(PageTitle.Reset_Successful);
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async () => {
        setLoading(false);
    };
  return (
    <ResponsiveAuthWrapper heading={'Create, Track, Manage'} subHeading={'Password changed sucessfully!'}>
      <Box width={'100%'}>
        <AuthHeader heading="Forgot Password" />
        <Flex
          flexDirection={'column'}
          justifyContent={'center'}
          align={'center'}
          width={'100%'}
          mt="1.5rem"
        >
          <Flex
            justify={'center'}
            align="center"
            w="8rem"
            h="8rem"
            bg={'#FEFAE6'}
            borderRadius={'50%'}
            >
            <AiTwotoneLock size={50} color={COLOURS.blue} />
          </Flex>
          <Box mt="1.5rem" maxW="40rem">
            <Heading as="h3" textAlign={'center'}>
              Password Reset Successfully.
            </Heading>
            <Text fontSize="1.5rem" mt="1.5rem" textAlign={'center'} color={COLOURS.grey}>
              You have successfully changed your password. Use the button below to login.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt="5rem" position="relative">
        <LargeBtn
          text={'Proceed'}
          bg={COLOURS.blue}
          color={COLOURS.black}
          h={['4rem', '4rem', '4.5rem']}
          handleSubmit={handleSubmit}
          loading={loading}
        />
      </Box>
    </ResponsiveAuthWrapper>
  )
}
