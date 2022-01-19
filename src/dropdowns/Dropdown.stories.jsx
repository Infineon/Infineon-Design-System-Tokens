import { Dropdown } from "./Dropdown";
import BsDropdown from "react-bootstrap/Dropdown";
import BsFormControl from "react-bootstrap/FormControl";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  args: {
    label: "Secondary",
    size: "m",
    active: false,
    split: false,
    icon: "none",
  }
};

const DefaultTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Item href="#/action-1">Action</BsDropdown.Item>
    <BsDropdown.Item href="#/action-2" active>Active action</BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">Something else here</BsDropdown.Item>
    <BsDropdown.Item href="#/action-4">Another action</BsDropdown.Item>
    <BsDropdown.Divider />
    <BsDropdown.Item href="#/action-5">Separated link</BsDropdown.Item>
  </Dropdown>
);

const HeaderTemplate = (args) => (
  <Dropdown {...args}>
    <BsDropdown.Header>Dropdown header</BsDropdown.Header>
    <BsDropdown.Item href="#/action-1" active>Something else</BsDropdown.Item>
    <BsDropdown.Item href="#/action-2">Hover action</BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">Another action</BsDropdown.Item>
    <BsDropdown.Divider />
    <BsDropdown.Item href="#/action-4">Separated link</BsDropdown.Item>
  </Dropdown>
);

const SearchTemplate = (args) => (
  <Dropdown {...args}>
    <BsFormControl autoFocus className="mx-3 my-2 w-auto" placeholder="Search"></BsFormControl> 
    <BsDropdown.Item href="#/action-1" active>Something else</BsDropdown.Item>
    <BsDropdown.Item href="#/action-2">Hover action</BsDropdown.Item>
    <BsDropdown.Item href="#/action-3">Another action</BsDropdown.Item>
    <BsDropdown.Divider />
    <BsDropdown.Item href="#/action-4">Separated link</BsDropdown.Item>
  </Dropdown>
);

export const Default = DefaultTemplate.bind({});

export const Header = HeaderTemplate.bind({});

export const Search = SearchTemplate.bind({});
