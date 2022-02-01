import { Bulletpoints } from "./Bulletpoints";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  title: "Components/Bulletpoints",
  component: Bulletpoints,
};

const Bulletpoints2Template = (args) => (
  <Bulletpoints {...args}>
    <div className="col-md-4">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>

    <div className="col-md-4">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>
  </Bulletpoints>
);

const Bulletpoints3Template = (args) => (
  <Bulletpoints {...args}>
    <div className="col-md-4">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>

    <div className="col-md-4">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>

    <div className="col-md-4">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>
  </Bulletpoints>
);

const Bulletpoints4Template = (args) => (
  <Bulletpoints {...args}>
    <div className="col-md-3">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>

    <div className="col-md-3">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>

    <div className="col-md-3">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>

    <div className="col-md-3">
      <FontAwesomeIcon icon={["fa", "check"]}/>
      <p className="mb-0">Bear claw cake biscuit</p>
      <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
    </div>
  </Bulletpoints>
);

export const Bulletpoints2 = Bulletpoints2Template.bind({});

export const Bulletpoints3 = Bulletpoints3Template.bind({});

export const Bulletpoints4 = Bulletpoints4Template.bind({});
