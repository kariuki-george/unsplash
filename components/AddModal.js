import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Form,
  FormLabel,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function AddModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button
        w={{ base: "90px", md: "150px" }}
        fontSize={{ base: "14px", md: "18px" }}
        onClick={onOpen}
        colorScheme="green"
      >
        Add a Photo
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new Photo</ModalHeader>

          <ModalBody>
            <form>
              <FormLabel>Label</FormLabel>
              <Input type="text" placeholder="Suspendisse elit massa" />
              <FormLabel mt="1em">Photo URL</FormLabel>
              <Input
                type="text"
                placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="solid" colorScheme="green">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddModal;
