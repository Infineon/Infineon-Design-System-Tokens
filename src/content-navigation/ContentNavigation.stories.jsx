import { ContentNavigation } from "./ContentNavigation";
import BsNav from "react-bootstrap/Nav";
import BsNavDropdown from "react-bootstrap/NavDropdown";

export default {
  title: "Components/Content Navigation",
  component: ContentNavigation,
};

const DefaultTemplate = (args) => (
  <ContentNavigation {...args}>
    <BsNav.Item as="li">
      <BsNav.Link href="/home">Active</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="link-1">Link</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="link-2">Link</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="disabled" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

const TabsTemplate = (args) => (
  <ContentNavigation {...args} variant="tabs">
    <BsNav.Item as="li">
      <BsNav.Link href="/home">Active</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="link-1">Link</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="link-2">Link</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="disabled" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

const TabsDropdownsTemplate = (args) => (
  <ContentNavigation {...args} variant="tabs">
    <BsNav.Item as="li">
      <BsNav.Link href="/home">Active</BsNav.Link>
    </BsNav.Item>
    <BsNavDropdown as="li" title="Dropdown" id="nav-dropdown">
      <BsNavDropdown.Item eventKey="4.1">Action</BsNavDropdown.Item>
      <BsNavDropdown.Item eventKey="4.2">Another action</BsNavDropdown.Item>
      <BsNavDropdown.Item eventKey="4.3">Something else here</BsNavDropdown.Item>
      <BsNavDropdown.Divider />
      <BsNavDropdown.Item eventKey="4.4">Separated link</BsNavDropdown.Item>
    </BsNavDropdown>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="link-2">Link</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="disabled" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

const PillsTemplate = (args) => (
  <ContentNavigation {...args} variant="pills">
    <BsNav.Item as="li">
      <BsNav.Link href="/home">Active</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="link-1">Link</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="link-2">Link</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="disabled" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

const PillsDropdownsTemplate = (args) => (
  <ContentNavigation {...args} variant="pills">
    <BsNav.Item as="li">
      <BsNav.Link href="/home">Active</BsNav.Link>
    </BsNav.Item>
    <BsNavDropdown as="li" title="Dropdown" id="nav-dropdown">
      <BsNavDropdown.Item eventKey="4.1">Action</BsNavDropdown.Item>
      <BsNavDropdown.Item eventKey="4.2">Another action</BsNavDropdown.Item>
      <BsNavDropdown.Item eventKey="4.3">Something else here</BsNavDropdown.Item>
      <BsNavDropdown.Divider />
      <BsNavDropdown.Item eventKey="4.4">Separated link</BsNavDropdown.Item>
    </BsNavDropdown>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="link-2">Link</BsNav.Link>
    </BsNav.Item>
    <BsNav.Item as="li">
      <BsNav.Link eventKey="disabled" disabled>
        Disabled
      </BsNav.Link>
    </BsNav.Item>
  </ContentNavigation>
);

export const Default = DefaultTemplate.bind({});

export const Tabs = TabsTemplate.bind({});

export const TabsWithDropdowns = TabsDropdownsTemplate.bind({});

export const Pills = PillsTemplate.bind({});

export const PillsWithDropdowns = PillsDropdownsTemplate.bind({});
