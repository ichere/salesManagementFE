import React from 'react'
import {
    Box,
    Input,
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from "@chakra-ui/react";
import { COLOURS } from '../constants/colours';
import { FormControlProps } from '../interfaces/formInputs'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const CustomInputGroup = ({
  placeholder,
  type,
  label,
  icon: Icon,
  name,
  value,
  isInvalid,
  borderColor = COLOURS.blue,
  handleChange,
  onBlur,
}: FormControlProps) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box width={'100%'}>
        <FormControl width="100%" mb="1rem">
          <FormLabel width={'100%'} color={COLOURS.black} fontSize={'1.5rem'}>
            {label}
          </FormLabel>
          <InputGroup size="md">
            <Input
              bg="white"
              fontSize={'1.5rem'}
              height={'4.5rem'}
              border={`1px solid ${borderColor}`}
              borderRadius=".7rem"
              pr="4.5rem"
              type={show ? 'text' : type}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={handleChange}
              onBlur={onBlur}
              isInvalid={isInvalid}
              errorBorderColor={COLOURS.red}
              _focusVisible={{
                outline: 'none',
              }}
            />
            <InputLeftElement height="100%">{Icon}</InputLeftElement>
            {name === 'password' && (
              <InputRightElement width="4.5rem" height="100%">
                {show ? (
                  <AiOutlineEye onClick={handleClick} />
                ) : (
                  <AiOutlineEyeInvisible onClick={handleClick} />
                )}
              </InputRightElement>
            )}
          </InputGroup>
        </FormControl>
    </Box>
  )
}
