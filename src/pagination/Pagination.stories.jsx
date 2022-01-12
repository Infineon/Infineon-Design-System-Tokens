import { Pagination } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  args: {active: 1}
};

const DefaultTemplate = (args) => (
  <Pagination {...args}></Pagination>
);

export const Default = DefaultTemplate.bind({});
