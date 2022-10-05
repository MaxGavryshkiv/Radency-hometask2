import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import TableHeaderRow from "./TableHeaderRow";

export default {
  title: "Test/TableHeaderRow",
  component: TableHeaderRow,
  decorators: [
    (story) => (
      <Provider store={store}>
        <table className="w-1200 border-separate border-spacing-y-4">
          <thead>{story()}</thead>
        </table>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof TableHeaderRow>;

const Template: ComponentStory<typeof TableHeaderRow> = (args) => (
  <TableHeaderRow {...args} />
);

export const Note = Template.bind({});
Note.args = {
  arrOfHeaderName: ["Name", "Created", "Category", "Content", "Dates", "svg"],
};

export const Summary = Template.bind({});
Summary.args = {
  arrOfHeaderName: ["Category Name", "Active", "Archive"],
};
