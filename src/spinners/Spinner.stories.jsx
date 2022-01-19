import { Spinner } from "./Spinner";
import { Button } from "../button/Button";

export default {
  title: "Components/Spinner",
  component: Spinner,
  args: {
    size: "m",
    animation: "border",
  }
};

const DefaultTemplate = (args) => (
  <Spinner {...args}></Spinner>
);

const ButtonSpinnerTemplate = (args) => (
  <Button>
    <Spinner {...args}></Spinner>Button
  </Button>
);

export const Default = DefaultTemplate.bind({});

export const ButtonSpinner = ButtonSpinnerTemplate.bind({});
ButtonSpinner.args = {
  size: "s",
};
