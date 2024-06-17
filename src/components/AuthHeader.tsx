import { Box, Heading, Text } from "@chakra-ui/react"
import { HeaderProps } from "../interfaces/pageProps"
import { COLOURS } from "../constants/colours"

export const AuthHeader = ({heading, subHeading}: HeaderProps) => {
  return (
    <Box mb="1.2rem" textAlign={'center'}>
      <Heading
        color={COLOURS.BGgrey}
        fontSize={['2.2rem !important', '1.6rem', '2rem']}
        as="h2"
        className="heading-txt"
        fontWeight={'semibold'}
      >
        {heading}
      </Heading>
      <Text color={COLOURS.black} fontSize={['1.4rem', '1.6rem', '2rem']}>
        {subHeading}
      </Text>
    </Box>
  )
}

