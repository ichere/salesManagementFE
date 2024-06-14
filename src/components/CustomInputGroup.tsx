import React from 'react'
import {
    Box,
    Input,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
  } from "@chakra-ui/react";
import { FormControlProps } from '../interfaces/formInputs'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const CustomInputGroup = ({
  placeholder,
  type,
  label,
  name,
  value,
  handleChange,
}: FormControlProps) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
  return (
    <Box width={"100%"}>
      <FormControl width="100%" mb="10px">
        <FormLabel width={"100%"} color="#000000">
          {label}
        </FormLabel>
        <InputGroup size="md">
          <Input
            bg="gray"
            height={"50px"}
            pr="4.5rem"
            type={show ? "text" : type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            {show ? (
              <AiOutlineEye onClick={handleClick} />
            ) : (
              <AiOutlineEyeInvisible onClick={handleClick} />
            )}
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  )
}
