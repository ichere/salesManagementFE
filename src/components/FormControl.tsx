import { Box, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FormControlProps } from "../interfaces/formInputs";

export const Formcontrol = ({
  type,
  placeholder,
  label,
  name,
  value,
  handleChange,
}: FormControlProps) => {
  return (
    <Box width={"100%"}>
      <FormControl width="100%" mb="10px">
        <FormLabel width={"100%"} color="#000">
          {label}
        </FormLabel>
        <Input
          bg={"gray"}
          color="#000"
          name={name}
          width="100%"
          height={"50px"}
          type={type}
          placeholder={placeholder}
          border="1px solid #BEBEBE"
          borderRadius={"10px"}
          value={value}
          onChange={handleChange}
        />
        
      </FormControl>
    </Box>
  )
}


