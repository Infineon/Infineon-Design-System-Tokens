import { ParagraphVertical } from "./ParagraphVertical";

export default {
  title: "Components/Paragraph Vertical",
  component: ParagraphVertical,
  args: {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
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
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. The house was approached by gravelled driveways which wound about through wide-spreading lawns and under the interlacing boughs of tall poplars. At the rear things were on even a more spacious scale than at the front. There were great stables, where a dozen grooms and boys held forth, rows of vineclad servants' cottages, an endless and orderly array of outhouses, long grape arbors, green pastures, orchards, and berry patches. Then there was the pumping plant for the artesian well, and the big cement tank where Judge Miller's boys took their morning plunge and kept cool in the hot afternoon.
            And over this great demesne Buck ruled. Here he was born, and here he had lived the four years of his life. It was true, there were other dogs, There could not but be other dogs on so vast a place, but they did not count. They came and went, resided in the populous kennels, or lived obscurely in the recesses of the house after the fashion of Toots, the Japanese pug, or Ysabel, the Mexican hairless,—strange creatures that rarely put nose out of doors or set foot to ground. On the other hand, there were the fox terriers, a score of them at least, who yelped fearful promises at Toots and Ysabel looking out of the windows at them and protected by a legion of housemaids armed with brooms and mops.
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
        <div className="col-6">
          <p>{args.text}</p>
        </div>
      </div>
    </div>
  </ParagraphVertical>
);

const LongerTextTemplate3 = (args) => (
  <ParagraphVertical {...args}>
    <div className="inf__paragraph-vertical__text-centered">
      <div className="row">
        <div className="col-6">
          <h3>{args.title}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>{args.text}</p>
        </div>
      </div>
    </div>
  </ParagraphVertical>
);

const LongerTextTemplate4 = (args) => (
  <ParagraphVertical {...args}>
    <div>
      <h3>{args.title}</h3>
      <p>{args.text}</p>
    </div>
  </ParagraphVertical>
);

const LongerTextTemplate5 = (args) => (
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
      </div>
    </div>
  </ParagraphVertical>
);

export const LongerText = LongerTextTemplate.bind({});
LongerText.args = {
  text: "Buck did not read the newspapers, or he would have known that trouble was brewing, not alone for himself, but for every tide- water dog, strong of muscle and with warm, long hair, from Puget Sound to San Diego. Because men, groping in the Arctic darkness, had found a yellow metal, and because steamship and transportation companies were booming the find, thousands of men were rushing into the Northland. These men wanted dogs, and the dogs they wanted were heavy dogs, with strong muscles by which to toil, and furry coats to protect them from the frost. Buck lived at a big house in the sun-kissed Santa Clara Valley. Judge Miller's place, it was called. It stood back from the road, half hidden among the trees, through which glimpses could be caught of the wide cool veranda that ran around its four sides. The house was approached by gravelled driveways which wound about through wide-spreading lawns and under the interlacing boughs of tall poplars. At the rear things were on even a more spacious scale than at the front. And over this great demesne Buck ruled. Here he was born, and here he had lived the four years of his life. It was true, there were other dogs, There could not but be other dogs on so vast a place, but they did not count. They came and went, resided in the populous kennels, or lived obscurely in the recesses of the house after the fashion of Toots, the Japanese pug, or Ysabel, the Mexican hairless,—strange creatures that rarely put nose out of doors or set foot to ground. On the other hand, there were the fox terriers, a score of them at least, who yelped fearful promises at Toots and Ysabel looking out of the windows at them and protected by a legion of housemaids armed with brooms and mops.",
};

export const LongerText2 = LongerTextTemplate2.bind({});
LongerText2.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};

export const LongerText3 = LongerTextTemplate3.bind({});
LongerText3.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};

export const LongerText4 = LongerTextTemplate4.bind({});
LongerText4.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};

export const LongerText5 = LongerTextTemplate5.bind({});
LongerText5.args = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.",
};
