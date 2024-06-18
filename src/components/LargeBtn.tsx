import { Button } from '@chakra-ui/react';

import { COLOURS } from '../constants/colours'; 
import { ParentCompProps } from '../interfaces/formInputs'; 

export const LargeBtn = ({
  childComp,
  rightIcon,
  bg,
  color,
  text,
  fontSize,
  h,
  w,
  disabled,
  borderColor,
  handleSubmit = () => null,
  loading,
  ...rest
}: ParentCompProps): JSX.Element => {
  return (
    <Button
      type='submit'
      leftIcon={childComp}
      rightIcon={rightIcon}
      width={w || '100%'}
      height={h || ['3rem', '3rem', '4rem']}
      color={color}
      bg={bg}
      borderRadius={'.8rem'}
      border={
        borderColor ? `1px solid ${borderColor}` : `1px solid ${COLOURS.blue}`
      }
      fontSize={fontSize || ['1.2rem', '1.2rem', '1.4rem']}
      fontWeight='semibold'
      _hover={{
        bg: bg || COLOURS.blue,
        color,
      }}
      isDisabled={disabled}
      onClick={handleSubmit}
      isLoading={loading}
      {...rest}
    >
      {text}
    </Button>
  );
};
