import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const CustomModal = ({ toggle, onSave, activeItem: initialActiveItem }) => {
  const [activeItem, setActiveItem] = useState(initialActiveItem);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setActiveItem((prevState) => ({
      ...prevState,
      [name]: e.target.value.type === "checkbox" ? e.target.checked : value,
    }));
  };

  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="todo-title">Title</Label>
            <Input
              type="text"
              id="todo-title"
              name="title"
              value={activeItem.title}
              onChange={handleChange}
              placeholder="Enter Todo Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="todo-description">Description</Label>
            <Input
              type="text"
              id="todo-description"
              name="description"
              value={activeItem.description}
              onChange={handleChange}
              placeholder="Enter Todo Description"
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="completed"
                checked={activeItem.completed}
                onChange={handleChange}
              />
              Completed
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={() => onSave(activeItem)}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
