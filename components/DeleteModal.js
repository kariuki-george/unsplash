import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  FormLabel,
  ModalBody,
  Input,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure, Button, Text } from "@chakra-ui/react";

function DeleteModal() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen} colorScheme="red" variant="outline">
        delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalBody>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              colorScheme="grey.100"
              mr="2em"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button variant="solid" colorScheme="red">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DeleteModal;
