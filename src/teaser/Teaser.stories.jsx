import { Button } from "../button/Button";
import { Teaser } from "./Teaser";

export default {
  title: "Teaser",
  component: Teaser,
};

const DefaultTemplate = (args) => (
  <Teaser {...args}>
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <Button variant="primary" href="#">
      Go somewhere
    </Button>
  </Teaser>
);
export const Default = DefaultTemplate.bind({});
Default.args = {
  imageSrc: "holder.js/100px180",
};

export const WithoutImage = DefaultTemplate.bind({});

