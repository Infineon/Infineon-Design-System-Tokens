import { Textarea } from "./Textarea";

export default {
  title: "Forms/Textarea",
  component: Textarea,
  args: {
    label: "Default",
    size: "m",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <Textarea {...args}></Textarea>
);

export const Default = DefaultTemplate.bind({});
