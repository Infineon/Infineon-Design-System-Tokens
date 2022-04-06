import { Paragraph } from "./Paragraph";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <div className="ifx__paragraph-without-icon">
      <p>{args.text}</p>
    </div>
  </Paragraph>
);

const TwoColumnsTemplate = (args) => (
  <Paragraph {...args}>
    <div className="ifx__paragraph-without-icon">
      <p className="inf__paragraph__columns">{args.text}</p>
    </div>
  </Paragraph>
);

const ArticleTemplate = (args) => (
  <Paragraph {...args}>
    <div className="ifx__paragraph-without-icon">
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

const Bulletpoints2Template = (args) => (
  <Paragraph {...args}>
    <div className="row ifx__bulletpoints">
      <div className="col-md-6">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-6">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>
    </div>
  </Paragraph>
);

const Bulletpoints3Template = (args) => (
  <Paragraph {...args}>
    <div className="row ifx__bulletpoints">
      <div className="col-md-4">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-4">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-4">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>
    </div>
  </Paragraph>
);

const Bulletpoints4Template = (args) => (
  <Paragraph {...args}>
    <div className="row ifx__bulletpoints">
      <div className="col-md-3">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-3">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-3">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
      </div>

      <div className="col-md-3">
        <FontAwesomeIcon icon={["fal", "check"]}/>
        <h5>Collumn Headline</h5>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
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

export const Bulletpoints2 = Bulletpoints2Template.bind({});

export const Bulletpoints3 = Bulletpoints3Template.bind({});

export const Bulletpoints4 = Bulletpoints4Template.bind({});
