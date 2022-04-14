import { Table } from "./Table";

export default {
  title: "Components/Table",
  component: Table,
  args: {
    size: "m",
    hover: false,
    caption: "",
  }
};

const DefaultTemplate = (args) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>#</th>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>15</td>
        <td>15</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>2</td>
        <td>21</td>
        <td>21</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>3</td>
        <td>12</td>
        <td>12</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>4</td>
        <td>25</td>
        <td>25</td>
        <td>Name example</td>
      </tr>
    </tbody>
  </Table>
);

const HeaderTemplate = (args) => (
  <Table {...args}>
    <thead className="ifx__thead__background-color">
      <tr>
        <th>#</th>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>15</td>
        <td>15</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>2</td>
        <td>21</td>
        <td>21</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>3</td>
        <td>12</td>
        <td>12</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>4</td>
        <td>25</td>
        <td>25</td>
        <td>Name example</td>
      </tr>
    </tbody>
  </Table>
);

const StripedTemplate = (args) => (
  <Table {...args} striped>
    <thead>
      <tr>
        <th>#</th>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>15</td>
        <td>15</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>2</td>
        <td>21</td>
        <td>21</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>3</td>
        <td>12</td>
        <td>12</td>
        <td>Name example</td>
      </tr>
      <tr>
        <td>4</td>
        <td>25</td>
        <td>25</td>
        <td>Name example</td>
      </tr>
    </tbody>
  </Table>
);

const DefaultNumbersRightTemplate = (args) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
        <th className="text-end">#</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>15</td>
        <td>15</td>
        <td>Name example</td>
        <td className="text-end">1</td>
      </tr>
      <tr>
        <td>21</td>
        <td>21</td>
        <td>Name example</td>
        <td className="text-end">2</td>
      </tr>
      <tr>
        <td>12</td>
        <td>12</td>
        <td>Name example</td>
        <td className="text-end">3</td>
      </tr>
      <tr>
        <td>25</td>
        <td>25</td>
        <td>Name example</td>
        <td className="text-end">4</td>
      </tr>
    </tbody>
  </Table>
);

export const Default = DefaultTemplate.bind({});

export const Header = HeaderTemplate.bind({});

export const Striped = StripedTemplate.bind({});

export const DefaultNumbersRight = DefaultNumbersRightTemplate.bind({});
