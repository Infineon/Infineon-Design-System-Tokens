import { Button } from "../button/Button";
import { Teaser } from "./Teaser";

const tokenContext = require.context("!!raw-loader!", false, /-tokens\.scss$/);
const tokenFiles = tokenContext.keys().map((filename) => ({
  filename,
  content: tokenContext(filename).default,
}));

export default {
  title: "Teaser",
  component: Teaser,
  parameters: {
    designToken: {
      defaultTab: "Teaser",
      files: tokenFiles,
    },
  },
};

const DefaultTemplate = (args) => (
  <Teaser {...args}>
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <Button color="primary" href="#">
      Go somewhere
    </Button>
  </Teaser>
);
export const Default = DefaultTemplate.bind({});
Default.args = {
  imageSrc: "holder.js/100px180",
};

export const WithoutImage = DefaultTemplate.bind({});
