import { Modal } from "./Modal";
import { Input } from "../form-elements/Input";
import { Textarea } from "../form-elements/Textarea";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {size: "m"}
};

const DefaultTemplate = (args) => (
  <Modal {...args}></Modal>
);

const MessageTemplate = (args) => (
  <Modal {...args}>
    <Input></Input>
    <Textarea></Textarea>
  </Modal>
);

export const Default = DefaultTemplate.bind({});

export const Message = MessageTemplate.bind({});
