import React, { useState } from "react";

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

function AddModal({ submit }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");
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
              <Input
                type="text"
                placeholder="Suspendisse elit massa"
                value={label}
                onChange={(e) => {
                  setLabel(e.target.value);
                }}
              />
              <FormLabel mt="1em">Photo URL</FormLabel>
              <Input
                type="text"
                placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                }}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="solid"
              colorScheme="green"
              onClick={() => {
                if (label.length !== "" && url !== "") {
                  submit({ label, url });

                  setUrl("");
                  setLabel("");
                  onClose();
                }
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default AddModal;
