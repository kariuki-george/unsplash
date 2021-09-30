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

function DeleteModal({ display, id, handleDelete }) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [password, setPassword] = React.useState("");
  return (
    <div>
      <Button
        position="absolute"
        top="2px"
        right="5px"
        onClick={onOpen}
        colorScheme="red"
        display={display}
        variant="outline"
        w="60px"
        h="30px"
      >
        delete
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalBody>
            <FormLabel>Password</FormLabel>
            <Input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />
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
            <Button
              variant="solid"
              colorScheme="red"
              onClick={() => {
                if (password === "password") {
                  handleDelete(id);
                  onClose();
                }
                setPassword("");
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default DeleteModal;
