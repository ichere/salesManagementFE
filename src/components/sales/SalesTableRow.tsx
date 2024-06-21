import { Flex, IconButton, Text, useColorModeValue } from "@chakra-ui/react"
import { TABLE_BODY_FONT } from "../../constants/appConstants"
import { useState } from "react";
import { COLOURS } from "../../constants/colours";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import SalesModal from "./SalesModal";
import DeleteModal from "../DeleteModal";
import { formatToNaira } from "../../utils/numberFormat";


export const SalesTableRow = () => {
    const tableBg = useColorModeValue(COLOURS.white, COLOURS.tableDark);
    const appTextColor = useColorModeValue(COLOURS.darkGrey, COLOURS.ivory);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  const handleDelete = () => {
    // Your delete logic here
    setIsDeleteModalOpen(false);
  };
  return (
    <Flex
      minWidth="100%"
      textAlign="left"
      justify="space-between"
      p={["1.4rem", "1.4rem", "1.7rem"]}
      px={[".8rem", "1rem", "1.7rem"]}
      fontSize={TABLE_BODY_FONT}
      align="center"
      borderRadius=".5rem"
      bg={tableBg}
      color={appTextColor}
      shadow="sm"
      mb="1.1rem"
      cursor={"pointer"}
    >
      <style>{`
      
      .css-c7p0e4{
        background: #F9F9F9
      
      }
      
      `}</style>
      <Flex
        gap="1rem"
        textAlign={"left"}
        width={["38%", "33%", "26%"]}
        align="center"
      >
        <Text isTruncated width={["100%", "100%", "100%"]}>
          {formatToNaira(0 ?? 0) || "--"}
        </Text>
      </Flex>
      <Text
        width={["36%", "34%", "25%"]}
        isTruncated
        px={["1rem", "1rem", "0"]}
      >
        Shopping
      </Text>

      <Text ml={"1rem"} color={appTextColor} width={["22%", "33%", "25%"]}>
        GT Bank
      </Text>

      <Text
        textAlign="left"
        width={["20rem", "100%", "25%"]}
        display={["none", "none", "block"]}
      >
        Savings
      </Text>

      <Flex
        width={["20rem", "20rem", "14%"]}
        display={["none", "none", "flex"]}
      >
        <Text
          ml={"3rem"}
          color={appTextColor}
          display="flex"
          gap={["2rem", "2rem", "1rem"]}
        >
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit Sale"
            size="m"
            onClick={() => setIsSalesModalOpen(true)}
          ></IconButton>
          <SalesModal
            isOpen={isSalesModalOpen}
            onClose={() => setIsSalesModalOpen(false)}
            isEditing={false}
          />

          <IconButton
            icon={<DeleteIcon />}
            aria-label="Edit Sale"
            size="m"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete Sale
          </IconButton>
          <DeleteModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={handleDelete}
          />
        </Text>
      </Flex>
    </Flex>
  )
}
