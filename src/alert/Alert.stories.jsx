import { Alert } from "./Alert";
import BsAlert from "react-bootstrap/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    variant: "primary",
    closable: false,
  }
};

const DefaultTemplate = (args) => (
  <Alert {...args}>
    This is a {args.variant} alert — check it out!
  </Alert>
);

const LinkTemplate = (args) => (
  <Alert {...args}>
    A simple {args.variant} alert with <BsAlert.Link href="#">an example link</BsAlert.Link>. Give it a click if you like.
  </Alert>
);

const AdditionalContentTemplate = (args) => (
  <Alert {...args}>
    <BsAlert.Heading>Well done!</BsAlert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
    </p>
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
  </Alert>
);

export const Default = DefaultTemplate.bind({});

export const Link = LinkTemplate.bind({});

export const AdditionalContent = AdditionalContentTemplate.bind({});
