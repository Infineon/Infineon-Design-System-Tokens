import { Paragraph } from "./Paragraph";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  args: {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
  }
};

const DefaultTemplate = (args) => (
  <Paragraph {...args}>
    <p>{args.text}</p>
  </Paragraph>
);

const TwoColumnsTemplate = (args) => (
  <Paragraph {...args}>
    <p className="inf__paragraph__columns">{args.text}</p>
  </Paragraph>
);

const ArticleTemplate = (args) => (
  <Paragraph {...args}>
    <div>
      <div className="row">
        <div className="col-6">
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <p>{args.text}</p>
        </div>
      </div>
    </div>
  </Paragraph>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};

export const TwoColumns = TwoColumnsTemplate.bind({});
TwoColumns.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};

export const Article = ArticleTemplate.bind({});
Article.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};
