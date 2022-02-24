import { Input } from "./Input";

export default {
  title: "Forms/Input",
  component: Input,
  args: {
    label: "Default",
    labelPosition: "top",
    size: "m",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <Input {...args}></Input>
);

export const Default = DefaultTemplate.bind({});
