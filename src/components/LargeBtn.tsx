import React from "react";
import { Button } from "@chakra-ui/react";

interface ParentCompProps {
  childComp?: React.ReactElement;
  bg: string;
  color: string;
  text: string;
  loading: boolean;
  handleSubmit: () => void;
}

export const LargeBtn = ({
  childComp,
  bg,
  color,
  text,
  handleSubmit,
  loading,
}: ParentCompProps) => {
  return (
    <Button
      type="submit"
      leftIcon={childComp}
      width="100%"
      height={"50px"}
      color={color}
      bg={bg}
      borderRadius={"10px"}
      border={"1px solid btnblue"}
      fontSize="20px"
      onClick={handleSubmit}
      isLoading={loading}
    >
      {text}
    </Button>
  );
};
