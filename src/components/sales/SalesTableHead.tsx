import { Flex, Text } from '@chakra-ui/react'
import { TABLE_HEAD_FONT } from '../../constants/appConstants'

export const SalesTableHead = () => {
  return (
    <Flex
      width="100%"
      p={["1.4rem", "1.4rem", "1.7rem"]}
      px={[".8rem", "1rem", "1.7rem"]}
      fontSize={TABLE_HEAD_FONT}
      align="center"
      justify="space-between"
      textAlign="left"
      bgColor="#333436"
      borderRadius="md"
      boxShadow="md"
    >
      <Flex gap="1rem" width={["35%", "33%", "20%"]}>
        <Text width={["100%", "100%", "100%"]} textAlign="left">
          Balance
        </Text>
      </Flex>
      <Text width={["35%", "33%", "20%"]} px={["1rem", "1rem", "0"]}>
        Purpose
      </Text>
      <Text width={["22%", "33%", "22%"]} textAlign="left">
        Bank Name
      </Text>
      <Text width={["33%", "33%", "22%"]} display={["none", "none", "block"]}>
        Account Type
      </Text>

      <Text
        width={["20rem", "20rem", "10%"]}
        display={["none", "none", "block"]}
      >
        Action
      </Text>
    </Flex>
  )
}
