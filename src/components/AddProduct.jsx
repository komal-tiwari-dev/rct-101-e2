import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Select,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
const AddProduct = () => {
  // function BasicUsage() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();

  //   return (
  //     <>
  //       <Button onClick={onOpen}>Open Modal</Button>

  //       <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  //         <ModalOverlay />
  //         <ModalContent>
  //           <ModalHeader>Modal Title</ModalHeader>
  //           <ModalCloseButton />
  //           <ModalBody>
  //             <Text fontWeight="bold" mb="1rem">
  //               You can scroll the content behind the modal
  //             </Text>
  //             <Lorem count={2} />
  //           </ModalBody>

  //           <ModalFooter>
  //             <Button colorScheme="blue" mr={3} onClick={onClose}>
  //               Close
  //             </Button>
  //             <Button variant="ghost">Secondary Action</Button>
  //           </ModalFooter>
  //         </ModalContent>
  //       </Modal>
  //     </>
  //   );
  // }
  return (
    <>
      <Button style={{}} my={4} data-cy="add-product-button" >AddProduct</Button>
      
      <Modal>
        <ModalBody pb={6}>
          <Input data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
    </>
  );
};

export default AddProduct;
