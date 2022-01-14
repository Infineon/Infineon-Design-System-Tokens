import { Paragraph } from "./Paragraph";
import { Button } from "../button/Button";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
};

const DefaultTemplate = (args) => (
  <Paragraph {...args}>
    <div className="d-flex align-items-center">
      <div>
        <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
        <Button color="primary" href="#">
          Primary
        </Button>
      </div>
      <img className="w-100" src="holder.js/100px180" alt=""/>
    </div>
  </Paragraph>
);

const DefaultCenterRightTemplate = (args) => (
  <Paragraph {...args}>
    <div className="d-flex align-items-center">
      <img className="w-100" src="holder.js/100px180" alt=""/>
      <div>
        <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
        <Button color="primary" href="#">
          Primary
        </Button>
      </div>
    </div>
  </Paragraph>
);

const DefaultTopLeftTemplate = (args) => (
  <Paragraph {...args}>
    <div className="d-flex">
      <div>
        <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
        <Button color="primary" href="#">
          Primary
        </Button>
      </div>
      <img className="w-100" src="holder.js/100px180" alt=""/>
    </div>
  </Paragraph>
);

const DefaultTopRightTemplate = (args) => (
  <Paragraph {...args}>
    <div className="d-flex">
      <img className="w-100" src="holder.js/100px180" alt=""/>
      <div>
        <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
        <Button color="primary" href="#">
          Primary
        </Button>
      </div>
    </div>
  </Paragraph>
);

const DefaultTopLeftBulletpointsTemplate = (args) => (
  <Paragraph {...args}>
    <div className="d-flex">
      <div>
        <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
        <ul className="list-unstyled">
          <li>Bear claw cake biscuit</li>
          <li>Bear claw cake biscuit</li>
          <li>Bear claw cake biscuit</li>
        </ul>
      </div>
      <img className="w-100" src="holder.js/100px180" alt=""/>
    </div>
  </Paragraph>
);

export const Default = DefaultTemplate.bind({});

export const CenterRight = DefaultCenterRightTemplate.bind({});

export const TopLeft = DefaultTopLeftTemplate.bind({});

export const TopRight = DefaultTopRightTemplate.bind({});

export const TopLeftBulletpoints = DefaultTopLeftBulletpointsTemplate.bind({});
