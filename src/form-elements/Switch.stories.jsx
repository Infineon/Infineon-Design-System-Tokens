import { Switch } from "./Switch";

export default {
  title: "Forms/Switch",
  component: Switch,
  args: {
    label: "Default",
    disabled: false,
  }
};

const DefaultTemplate = (args) => (
  <Switch {...args}></Switch>
);

export const Default = DefaultTemplate.bind({});
