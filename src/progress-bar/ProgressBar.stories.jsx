import { ProgressBar } from "./ProgressBar";

export default {
  title: "Components/Progress-bar",
  component: ProgressBar,
  args: {now: 70}
};

const DefaultTemplate = (args) => (
  <ProgressBar {...args}></ProgressBar>
);

export const Default = DefaultTemplate.bind({});
