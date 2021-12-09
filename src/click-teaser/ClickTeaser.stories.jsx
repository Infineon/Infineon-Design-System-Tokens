import { ClickTeaser } from './ClickTeaser';

export default {
  title: "ClickTeaser",
  component: ClickTeaser,
  parameters: {
    designTokens: { files: [] }
  }
};

const DefaultTemplate = (args) => (
  <ClickTeaser {...args}>
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
  </ClickTeaser>
);
export const Default = DefaultTemplate.bind({});
Default.args = {
  imageSrc: "holder.js/100px180",
  buttonLabel: "Click me"
};
