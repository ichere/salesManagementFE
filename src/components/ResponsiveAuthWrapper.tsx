import { Box, Flex, Image } from "@chakra-ui/react"
import { ReactChildren } from "../interfaces/children"
import { COLOURS } from "../constants/colours"
import { BackgroundImage } from "./BackgroundImage"
import { BackgroundImage2 } from "./BackgroundImage2"
import LogoImage from "../assets/images/logo.png"

export const ResponsiveAuthWrapper = ({children, heading, subHeading}: ReactChildren) => {
  return (
    <Flex
        direction={['column', 'column', 'column', 'row']}
        background={COLOURS.BGgrey}
        width='full'
        minH={['100%', '100%', '100vh']}
        alignItems={'center'}
        justify={['center', 'center', 'space-between']}
    >
        <Box
            width={['100%', '100%', '50%']}
            h={['30rem', '30rem', '100vh']}
            display={['none', 'none', 'block']}
        >
            <BackgroundImage heading={heading} subHeading={subHeading} />
        </Box>
        <Box
            width={['100%', '100%', '50%']}
            h={['30rem', '30rem', '100vh']}
            display={['block', 'block', 'none']}
        >
            <BackgroundImage2 heading={heading} subHeading={subHeading} />
        </Box>
        <Box
            position='relative'
            mt={['-10%', '-10%', '0']}
            h='100%'
            width={['100%', '100%', '100%', '50%']}
            textAlign='left'
            bg={COLOURS.BGgrey}
            borderTopRadius={['2.5rem', '2.5rem', '0']}
            px={['3rem', '3rem', '5rem', '10rem']}
            pb={['5rem', '3rem', '0']}
        >
            <Flex
                width='100%'
                justify='center'
                pt={['2.5rem', '2.5rem', '0']}
            >
                <Image src={LogoImage} height={['6rem', '10rem']} width={['6rem', '7rem', '10rem']} borderRadius={'50%'} />
            </Flex>
            {children}
        </Box>
    </Flex>
  )
}
