import BsAccordion from "react-bootstrap/Accordion";

export const Accordion = () => {
  return (
    <BsAccordion flush>      
      <BsAccordion.Item eventKey="0">
        <BsAccordion.Header>
          Accordion Item #1
        </BsAccordion.Header>
        <BsAccordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BsAccordion.Body>
      </BsAccordion.Item>

      <BsAccordion.Item eventKey="1">
        <BsAccordion.Header>
          Accordion Item #2
        </BsAccordion.Header>
        <BsAccordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BsAccordion.Body>
      </BsAccordion.Item>

      <BsAccordion.Item eventKey="2">
        <BsAccordion.Header>
          Accordion Item #3
        </BsAccordion.Header>
        <BsAccordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BsAccordion.Body>
      </BsAccordion.Item>
    </BsAccordion>
  );
};
