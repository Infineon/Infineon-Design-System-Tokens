import BsAccordion from "react-bootstrap/Accordion";

export const Accordion = () => {
  return (
    <BsAccordion flush>      
      <BsAccordion.Item eventKey="0">
        <BsAccordion.Header>
          Accordion Item
        </BsAccordion.Header>
        <BsAccordion.Body>
          This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
        </BsAccordion.Body>
      </BsAccordion.Item>

      <BsAccordion.Item eventKey="1">
        <BsAccordion.Header>
          Accordion Item
        </BsAccordion.Header>
        <BsAccordion.Body>
          This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
        </BsAccordion.Body>
      </BsAccordion.Item>

      <BsAccordion.Item eventKey="2">
        <BsAccordion.Header>
          Accordion Item
        </BsAccordion.Header>
        <BsAccordion.Body>
          This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.
        </BsAccordion.Body>
      </BsAccordion.Item>
    </BsAccordion>
  );
};
