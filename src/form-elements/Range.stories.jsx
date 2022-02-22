import { Range } from "./Range";

export default {
  title: "Forms/Range",
  component: Range,
  args: {
    label: "Example range",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <Range {...args}></Range>
);

export const Default = DefaultTemplate.bind({});
