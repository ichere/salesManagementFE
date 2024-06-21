import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";
  
interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete: () => void;
}
  
const DeleteModal: React.FC<DeleteModalProps> = ({
    isOpen,
    onClose,
    onDelete,
}) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">Want to Delete?</ModalHeader>
          <ModalBody textAlign="center">
            <Button colorScheme="red" mr={3} onClick={onDelete}>
              Yes
            </Button>
            <Button onClick={onClose}>No</Button>
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    );
};
  
export default DeleteModal;