import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { Children, ReactElement, cloneElement, isValidElement } from 'react'
import { BUTTON_ICON_SIZE } from '../constants/appConstants'
import { COLOURS } from '../constants/colours'
import { MdClose } from 'react-icons/md'
import { ChildrenProps } from '../interfaces/children'

export const CustomTableModal = ({
    children,
    icon: Icon,
    header,
    title,
    cursor,
    color,
    size,
    alignText,
    isEdit,
    editIcon: EditIcon,
    deleteIcon: DeleteIcon,
    height,
  }: ChildrenProps) => {
    const appBg = useColorModeValue(COLOURS.white, COLOURS.darkModeBg);
    const appTextColor = useColorModeValue(COLOURS.black, COLOURS.ivory);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const childrenWithProps = Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a TS error too.
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement<any>, { onClose });
      }
  
      return child;
    });
  return (
    <Box>
        <Flex cursor="pointer" onClick={onOpen} align="center">
          {Icon}
          <Text m="auto" color={color} cursor={cursor} textAlign={alignText}>
            {title}
          </Text>
        </Flex>
  
        <Modal size={size || 'md'} isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent
            px={['2rem', '2rem', '2rem']}
            py={'2rem'}
            height={height}
            bg={appBg}
            color={appTextColor}
            width={['90%', '90%', '100%']}
          >
            <Flex
              width="100%"
              justify="space-between"
              pt="1.5rem !important"
              mb="1rem"
              bg={appBg}
              color={appTextColor}
            >
              <Text
                textAlign="center"
                fontSize={['1.6rem', '1.6rem', '2rem']}
                color={appTextColor}
                fontWeight="semibold"
                textTransform={'capitalize'}
              >
                {header}
              </Text>
              {isEdit && (
                <Flex gap={'2rem'} align="center">
                  {EditIcon}
                  {DeleteIcon}
                  <MdClose
                    size={BUTTON_ICON_SIZE}
                    onClick={onClose}
                    cursor="pointer"
                    color={COLOURS.grey}
                  />
                </Flex>
              )}
            </Flex>
            {!isEdit ? (
              <ModalCloseButton
                style={{
                  color: COLOURS.grey,
                  padding: '1.5rem',
                  marginTop: '3rem',
                  marginRight: '4rem',
                  backgroundColor: appBg,
                  fontSize: '1.5rem',
                }}
              />
            ) : null}
            <ModalBody p="0px !important" color={appTextColor} bg={appBg}>
              {childrenWithProps}
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
  )
}
