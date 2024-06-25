import { Box, Flex, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { COLOURS } from '../constants/colours'
import { AiOutlineSearch } from 'react-icons/ai'
import { BUTTON_ICON_SIZE, TAB_BREAKPOINT } from '../constants/appConstants'
import { LargeBtn } from './LargeBtn'
import { ParentCompProps } from '../interfaces/formInputs'
import { BsFilter } from 'react-icons/bs'
import { SearchField } from './SearchField'
import { CustomDrawer } from './CustomDrawer'
import LogoImage from '../assets/images/logo.png'
import { CustomTableModal } from './CustomTableModal'
import { PlusSquareIcon } from '@chakra-ui/icons';

type HeaderProp = Omit<ParentCompProps, 'bg' | 'color'> & {
    header: string;
    btn?: boolean;
    modalHeader?: string;
    handleSearch?: () => void;
    modalChildren?: React.ReactNode;
    drawerChildren?: React.ReactNode;
    size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
};

export const PageHeader = ({
    header,
    text,
    btn,
    loading,
    childComp,
    modalHeader,
    drawerChildren: DrawerChildren,
    modalChildren: ModalChildren,
    handleSearch = () => null,
    handleSubmit = () => null,
    height,
    size,
  }: HeaderProp) => {
    const appTextColor = useColorModeValue(COLOURS.headingGrey, COLOURS.ivory);
    const btnBg = useColorModeValue(COLOURS.white, COLOURS.blue);
    const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  return (
    <Box position="relative">
      <Flex
        display={['flex', 'flex', 'none']}
        justifyContent="space-between"
        width={['50%', '50%', '33%']}
        justify="end"
        marginTop="-.3rem"
        marginLeft="45%"
        mb="2rem"
      >
        <Box w='40'>
          <Image w='full' src={LogoImage} />
        </Box>
        <Flex align="center" gap="1rem">
          <Box position="relative">
            <AiOutlineSearch
              size={BUTTON_ICON_SIZE + 2}
              color={COLOURS.blue}
              onClick={() => setShowSearchBar(!showSearchBar)}
            />
          </Box>

          <CustomDrawer
            heading=''
            subHeading=''
            size="xl"
            height={height}
            cursor="pointer"
            header={modalHeader}
            color={COLOURS.white}
            alignText="center"
            icon={
              window.innerWidth > TAB_BREAKPOINT ? (
                <LargeBtn
                  bg={COLOURS.white}
                  w="15rem"
                  color={COLOURS.darkGrey}
                  text={'Filter'}
                  loading={loading}
                  childComp={<BsFilter size={BUTTON_ICON_SIZE} />}
                />
              ) : (
                <BsFilter size={BUTTON_ICON_SIZE + 2} color={COLOURS.blue} fontWeight="bold" />
              )
            }
          >
            {DrawerChildren}
          </CustomDrawer>
        </Flex>
      </Flex>
      {showSearchBar && (
        <Box width="100%">
          <SearchField placeholder={`Search for ${header}`} handleSearch={handleSearch} />
        </Box>
      )}
      <Flex
        mt={['4rem']}
        direction={['row']}
        maxW="100%"
        pl={['1rem']}
        pr={['2rem', '2rem', '0']}
        justify={['space-between']}
        align={['center']}
      >
        <Box width="33%">
          <Heading
            as="h2"
            fontSize={['1.6rem', '1.6rem', '2.5rem']}
            color={appTextColor}
            fontWeight={'bold'}
          >
            {header}
          </Heading>
        </Box>
        {window.innerWidth > TAB_BREAKPOINT && (
          <Box width="30%">
            <SearchField placeholder={`Search for ${header}`} handleSearch={handleSearch} />
          </Box>
        )}

        <Flex
          width={['80%', '80%', '33%']}
          gap={['2rem', '2rem', '1rem']}
          justify="end"
          align="center"
        >
          <Box display={['none', 'none', 'block']}>
            <CustomDrawer
              heading=''
              subHeading=''
              size="xl"
              height={height}
              cursor="pointer"
              header={modalHeader}
              color={COLOURS.white}
              alignText="center"
              icon={
                window.innerWidth > TAB_BREAKPOINT ? (
                  <LargeBtn
                    bg={btnBg}
                    w="15rem"
                    color={COLOURS.darkGrey}
                    text={'Filter'}
                    loading={loading}
                    childComp={<BsFilter size={BUTTON_ICON_SIZE} />}
                  />
                ) : (
                  <BsFilter size={BUTTON_ICON_SIZE} color={COLOURS.blue} fontWeight="bold" />
                )
              }
            >
              {DrawerChildren}
            </CustomDrawer>
          </Box>
          {btn && (
            <CustomTableModal
              heading=''
              subHeading=''
              size={size || '6xl'}
              height={height}
              cursor="pointer"
              header={modalHeader}
              color={COLOURS.white}
              alignText="center"
              icon={
                window.innerWidth > TAB_BREAKPOINT ? (
                  <LargeBtn
                    bg={btnBg}
                    color={COLOURS.darkGrey}
                    text={text}
                    loading={loading}
                    childComp={childComp}
                    handleSubmit={handleSubmit}
                  />
                ) : (
                  <PlusSquareIcon  color={COLOURS.blue} fontWeight="bold" />
                )
              }
            >
              {ModalChildren}
            </CustomTableModal>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
