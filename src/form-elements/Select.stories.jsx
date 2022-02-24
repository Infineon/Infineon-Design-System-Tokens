import { Select } from "./Select";

export default {
  title: "Forms/Select",
  component: Select,
  args: {
    label: "Default",
    labelPosition: "top",
    size: "m",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <Select {...args}></Select>
);

export const Default = DefaultTemplate.bind({});
