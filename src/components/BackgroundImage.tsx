import { Box, Flex, Text } from '@chakra-ui/react';
import backgroundImage from '../assets/images/backgroundImage.svg';
import { HeaderProps } from '../interfaces/pageProps';
import { COLOURS } from '../constants/colours';

export const BackgroundImage = ({heading, subHeading}: HeaderProps) => {
  return (
    <Flex
      width={'100%'}
      height={['100vh', '100%', '100vh']}
      backgroundImage={backgroundImage}
      justifyContent={'center'}
      backgroundSize={'cover'}
    >
      <Box
          textAlign={['center', 'center', 'left']}
          color={COLOURS.white}
          position={'absolute'}
          bottom={['75%', '75%', '4rem']}
          p={['2rem', '3rem', '4rem']}
      >
          <Text color={COLOURS.black} fontSize={'2rem'} mb='1rem'>
              {heading}
          </Text>
          <Text color={COLOURS.black} fontSize='2.6rem' lineHeight={1.2}>
              {subHeading}
          </Text>
      </Box>
    </Flex>
  )
}
