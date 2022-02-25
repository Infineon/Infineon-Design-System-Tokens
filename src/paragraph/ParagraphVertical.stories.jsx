import { ParagraphVertical } from "./ParagraphVertical";

export default {
  title: "Components/Paragraph Vertical",
  component: ParagraphVertical,
  args: {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
    imagePosition: "top",
  }
};

const LongerTextTemplate = (args) => (
  <ParagraphVertical {...args}>
    <div>
      <div className="row">
        <div className="col-6">
          <h3>{args.title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>{args.text}</p>
        </div>
        <div className="col-6">
          <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.
          </p>
        </div>
      </div>
    </div>
  </ParagraphVertical>
);

const LongerTextTemplate2 = (args) => (
  <ParagraphVertical {...args}>
    <div>
      <div className="row">
        <div className="col-6">
          <h3>{args.title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <p>{args.text}</p>
        </div>
      </div>
    </div>
  </ParagraphVertical>
);

const LongerTextTemplate3 = (args) => (
  <ParagraphVertical {...args}>
    <div>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
    </div>
  </ParagraphVertical>
);

export const LongerText = LongerTextTemplate.bind({});
LongerText.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};

export const LongerText2 = LongerTextTemplate2.bind({});
LongerText2.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};

export const LongerText3 = LongerTextTemplate3.bind({});
LongerText3.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};
