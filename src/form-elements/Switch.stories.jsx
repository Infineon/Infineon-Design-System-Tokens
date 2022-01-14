import { Switch } from "./Switch";

export default {
  title: "Forms/Switch",
  component: Switch,
  args: {disabled: false}
};

const DefaultTemplate = (args) => (
  <Switch {...args}></Switch>
);

export const Default = DefaultTemplate.bind({});
