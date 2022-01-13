import { ListGroup } from "./ListGroup";
import { Badge } from "../badge/Badge";
import BsListGroup from "react-bootstrap/ListGroup";

export default {
  title: "Components/List-group",
  component: ListGroup,
};

const DefaultTemplate = (args) => (
  <ListGroup {...args}>
    <BsListGroup.Item>Bear claw cake biscuit</BsListGroup.Item>
    <BsListGroup.Item active = {true}>Bonbon toffee muffin</BsListGroup.Item>
    <BsListGroup.Item>Jujubes cookie donut carrot cake</BsListGroup.Item>
    <BsListGroup.Item>Tart tiramisu cake</BsListGroup.Item>
    <BsListGroup.Item>Carrot cake marshmallow sweet roll</BsListGroup.Item>
    <BsListGroup.Item>Ice cream pastry pudding</BsListGroup.Item>
  </ListGroup>
);

const FlushTemplate = (args) => (
  <ListGroup {...args} variant="flush">
    <BsListGroup.Item>Bear claw cake biscuit</BsListGroup.Item>
    <BsListGroup.Item active = {true}>Bonbon toffee muffin</BsListGroup.Item>
    <BsListGroup.Item>Jujubes cookie donut carrot cake</BsListGroup.Item>
    <BsListGroup.Item>Tart tiramisu cake</BsListGroup.Item>
    <BsListGroup.Item>Carrot cake marshmallow sweet roll</BsListGroup.Item>
    <BsListGroup.Item>Ice cream pastry pudding</BsListGroup.Item>
  </ListGroup>
);

const WithBadgesTemplate = (args) => (
  <ListGroup {...args}>
    <BsListGroup.Item className="d-flex justify-content-between align-items-start">
      <div>
        Bear claw cake biscuit
      </div>
      <Badge pill={true}>14</Badge>
    </BsListGroup.Item>
    <BsListGroup.Item className="d-flex justify-content-between align-items-start" active = {true}>
      <div>
        Bonbon toffee muffin
      </div>
      <Badge pill={true}>14</Badge>
    </BsListGroup.Item>
    <BsListGroup.Item className="d-flex justify-content-between align-items-start">
      <div>
        Jujubes cookie donut carrot cake
      </div>
      <Badge pill={true}>14</Badge>
    </BsListGroup.Item>
    <BsListGroup.Item className="d-flex justify-content-between align-items-start">
      <div>
        Tart tiramisu cake
      </div>
      <Badge pill={true}>14</Badge>
    </BsListGroup.Item>
    <BsListGroup.Item className="d-flex justify-content-between align-items-start">
      <div>
        Carrot cake marshmallow sweet roll
      </div>
      <Badge pill={true}>14</Badge>
    </BsListGroup.Item>
    <BsListGroup.Item className="d-flex justify-content-between align-items-start">
      <div>
        Ice cream pastry pudding
      </div>
      <Badge pill={true}>14</Badge>
    </BsListGroup.Item>
  </ListGroup>
);

export const Default = DefaultTemplate.bind({});

export const Flush = FlushTemplate.bind({});

export const WithBadges = WithBadgesTemplate.bind({});
