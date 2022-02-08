import { Sidebar } from "./Sidebar";
import BsNav from "react-bootstrap/Nav";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
};

const DefaultTemplate = (args) => (
  <Sidebar {...args}>
    <BsNav.Item as="li">
      <BsNav.Link href="#" eventKey="link-1">Overview</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="#" eventKey="link-2">Documents</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="#" eventKey="link-3">Support</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="#" eventKey="link-4">Boards</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="#" eventKey="link-5">Applications</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link href="#" eventKey="link-6">Videos</BsNav.Link>
    </BsNav.Item>
  </Sidebar>
);

export const Default = DefaultTemplate.bind({});
