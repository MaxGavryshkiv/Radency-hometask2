import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import TableRow from "./TableRow";

export default {
  title: "Test/TableRow",
  component: TableRow,
  decorators: [
    (story) => (
      <Provider store={store}>
        <table className="w-1200 border-separate border-spacing-y-4">
          <tbody>{story()}</tbody>
        </table>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof TableRow>;

const Template: ComponentStory<typeof TableRow> = (args) => (
  <Provider store={store}>
    <table className="w-1200 border-separate border-spacing-y-4">
      <tbody>
        <TableRow {...args} />
      </tbody>
    </table>
  </Provider>
);

export const ActiveNote = Template.bind({});
ActiveNote.args = {
  rowContent: {
    id: "sd",
    noteName: "asd",
    created: "April 20, 2020",
    category: "Idea",
    content: "sasds",
    dates: "",
  },
  isIncludeSvg: "notesSvg",
  openEditForm: () => {
    console.log("edit");
  },
};

export const ArchiveNote = Template.bind({});
ArchiveNote.args = {
  rowContent: {
    id: "sd",
    noteName: "asd",
    created: "April 20, 2020",
    category: "Idea",
    content: "sasds",
    dates: "",
  },
  isIncludeSvg: "archiveSvg",
};

export const Summary = Template.bind({});
Summary.args = {
  rowContent: {
    category: "Idea",
    active: "2",
    archive: "3",
  },
};
