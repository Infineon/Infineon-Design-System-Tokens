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
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>The Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
);

const HeaderTemplate = (args) => (
  <Table {...args}>
    <thead className="inf__thead__background-color">
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>The Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
);

const StripedTemplate = (args) => (
  <Table {...args} striped>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry</td>
        <td>The Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
);

const DefaultNumbersRightTemplate = (args) => (
  <Table {...args}>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th className="text-end">#</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td className="text-end">1</td>
      </tr>
      <tr>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td className="text-end">2</td>
      </tr>
      <tr>
        <td>Larry</td>
        <td>The Bird</td>
        <td>@twitter</td>
        <td className="text-end">3</td>
      </tr>
    </tbody>
  </Table>
);

export const Default = DefaultTemplate.bind({});

export const Header = HeaderTemplate.bind({});

export const Striped = StripedTemplate.bind({});

export const DefaultNumbersRight = DefaultNumbersRightTemplate.bind({});
