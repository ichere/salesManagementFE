import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { Children, ReactElement, cloneElement, isValidElement } from 'react'
import { COLOURS } from '../constants/colours'
import { ChildrenProps } from '../interfaces/children';

export const CustomDrawer = ({
    children,
    icon: Icon,
    header,
    title,
    cursor,
    color,
    size,
    alignText,
  }: ChildrenProps) => {
    const drawerBg = useColorModeValue(COLOURS.BGgrey, COLOURS.darkModeBg);
    const textColor = useColorModeValue(COLOURS.black, COLOURS.ivory);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const childrenWithProps = Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a TS error too.
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement<any>, { onClose });
      }
  
      return child;
    });
  return (
    <>
        <Flex cursor="pointer" onClick={onOpen} align="center">
          {Icon}
          <Text m="auto" color={color} cursor={cursor} textAlign={alignText}>
            {title}
          </Text>
        </Flex>
  
        <Drawer size={size || 'md'} isOpen={isOpen} onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg={drawerBg}>
            <DrawerCloseButton size="lg" bg={COLOURS.lightGrey} />
            <Flex direction="column" width="100%" p="2rem 3rem !important">
              <Text
                textAlign="center"
                fontSize={'1.6rem'}
                color={textColor}
                fontWeight="semibold"
                textTransform={'capitalize'}
              >
                {header}
              </Text>
            </Flex>
            <DrawerBody p="30px !important">{childrenWithProps}</DrawerBody>
          </DrawerContent>
        </Drawer>
    </>
  )
}
