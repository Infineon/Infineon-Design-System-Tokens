import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    active: false,
    disabled: false,
    href: "",
  }
};

const DefaultTemplate = (args) => (
  <Button {...args}></Button>
);

const BlockLevelTemplate = (args) => (
  <div className="d-grid gap-2">
    <Button {...args}></Button>
  </div>
);

export const Default = DefaultTemplate.bind({});

export const BlockLevel = BlockLevelTemplate.bind({});
