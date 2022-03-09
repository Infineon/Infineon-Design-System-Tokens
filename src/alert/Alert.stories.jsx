import { Alert } from "./Alert";
import BsAlert from "react-bootstrap/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  args: {
    variant: "primary",
    closable: true,
    icon: true,
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
    <BsAlert.Heading>Headline</BsAlert.Heading>
    <p className="mb-0">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>
  </Alert>
);

export const Default = DefaultTemplate.bind({});

export const AdditionalContent = AdditionalContentTemplate.bind({});
AdditionalContent.args = {
  variant: "color-gray-100",
  icon: false,
};
