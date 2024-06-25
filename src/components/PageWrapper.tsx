import { Flex, useColorModeValue } from '@chakra-ui/react'
import { COLOURS } from '../constants/colours';
import { ReactChildren } from '../interfaces/children';

export const PageWrapper = ({ children }: ReactChildren) => {
    const appBg = useColorModeValue(COLOURS.BGgrey, COLOURS.darkModeBg);
    const appTextColor = useColorModeValue(COLOURS.black, COLOURS.ivory);
  return (
    <Flex
      bg={appBg}
      color={appTextColor}
      direction="column"
      gap={['0', '0', '5rem']}
      width="100%"
      pb="4rem"
      minH={'100vh'}
    >
      {children}
    </Flex>
  )
}
