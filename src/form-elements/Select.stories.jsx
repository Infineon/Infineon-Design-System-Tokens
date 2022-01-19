import { Select } from "./Select";

export default {
  title: "Forms/Select",
  component: Select,
  args: {
    size: "m",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <Select {...args}></Select>
);

export const Default = DefaultTemplate.bind({});
