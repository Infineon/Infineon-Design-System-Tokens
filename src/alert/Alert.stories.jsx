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

const DefaultTemplate = (args) => {
  const variantUppercase = 
    args.variant === "primary" ? "Primary"
    : args.variant === "secondary" ? "Secondary"
    : args.variant === "success" ? "Success" 
    : args.variant === "danger" ? "Danger" 
    : args.variant === "warning" ? "Warning" 
    : args.variant === "color-gray-100" ? "Color-gray-100" 
    : undefined;

  return (
    <Alert {...args}>
      <span className="inf__alert-highlighted">{variantUppercase}!</span> A simple {args.variant} alert with <BsAlert.Link href="#">an example link</BsAlert.Link>. Give it a click if you like.
    </Alert>
  );
}

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

export const AdditionalContent = AdditionalContentTemplate.bind({});
AdditionalContent.args = {
  variant: "color-gray-100",
};
