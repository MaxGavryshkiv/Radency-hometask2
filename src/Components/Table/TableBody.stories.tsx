import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableBody from "./TableBody";
import * as TableRow from "./TableRow.stories";
import Provider from "../../utils/provider";
import { store } from "../../redux/store";

export default {
  title: "Test/TableBody",
  component: TableBody,
  decorators: [
    (story) => (
      <Provider store={store}>
        <table className="w-1200 border-separate border-spacing-y-4">
          {story()}
        </table>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof TableBody>;

const Template: ComponentStory<typeof TableBody> = (args) => (
  <TableBody {...args} />
);
export const Default = Template.bind({});
Default.args = {
  arrOfObj: [
    {
      ...TableRow.ActiveNote.args?.rowContent,
      id: "12322331",
      noteName: "first",
      content: "adasd qwjdk saksnd skamsmd sjdnjkm",
    },
    {
      ...TableRow.ActiveNote.args?.rowContent,
      id: "12322332",
      noteName: "second",
      content: "ajdjdj jdj 10.10.2020",
      dates: "10.10.2020",
    },
    {
      ...TableRow.ActiveNote.args?.rowContent,
      id: "12322333",
      noteName: "third",
    },
  ],
  isIncludeSvg: "notesSvg",
  openEditForm: () => {
    console.log("edit");
  },
};
export const Archived = Template.bind({});
Archived.args = {
  arrOfObj: [
    {
      ...TableRow.ArchiveNote.args?.rowContent,
      id: "asd1",
      noteName: "text",
      content: "ajdjdj jdj 10.10.2020",
      dates: "10.10.2020",
    },
    {
      ...TableRow.ArchiveNote.args?.rowContent,
      id: "asd2",
      noteName: "a lot of text",
    },
    {
      ...TableRow.ArchiveNote.args?.rowContent,
      id: "asd3",
      noteName: "more than a lot",
    },
  ],
  isIncludeSvg: "archiveSvg",
  openEditForm: undefined,
};
export const Summary = Template.bind({});
Summary.args = {
  arrOfObj: [
    {
      ...TableRow.Summary.args?.rowContent,
      category: "Task",
    },
    {
      ...TableRow.Summary.args?.rowContent,
    },
    {
      ...TableRow.Summary.args?.rowContent,
      category: "Random Thought",
    },
  ],
  isIncludeSvg: undefined,
  openEditForm: undefined,
};
