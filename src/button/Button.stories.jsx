import { Button } from "./Button";
import { Badge } from "../badge/Badge";
import { Spinner } from "../spinner/Spinner";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Button",
    variant: "solid",
    color: "primary",
    size: "m",
    active: false,
    disabled: false,
    href: "",
  }
};

const DefaultTemplate = (args) => (
  <Button {...args}></Button>
);

const BlockLevelTemplate = (args) => (
  <div className="d-grid gap-2">
    <Button {...args}></Button>
  </div>
);

const ButtonBadgeTemplate = (args) => (
  <Button {...args}>
    {args.label}<Badge background="white" className="btn-badge">4</Badge>
  </Button>
);

const ButtonSpinnerTemplate = (args) => (
  <Button {...args}>
    <Spinner size="s" animation="border"></Spinner>{args.label}
  </Button>
);

export const Default = DefaultTemplate.bind({});

export const BlockLevel = BlockLevelTemplate.bind({});

export const ButtonBadge = ButtonBadgeTemplate.bind({});
ButtonBadge.args = {
  label: "Notifications",
};

export const ButtonSpinner = ButtonSpinnerTemplate.bind({});
