import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableHeader from "./TableHeader";
import * as TableHeaderRow from "./TableHeaderRow.stories";
import Provider from "../../utils/provider";
import { store } from "../../redux/store";

export default {
  title: "Test/TableHeader",
  component: TableHeader,
  decorators: [
    (story) => (
      <Provider store={store}>
        <table className="w-1200 border-separate border-spacing-y-4">
          {story()}
        </table>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => (
  <TableHeader {...args} />
);
export const Default = Template.bind({});
Default.args = {
  arrOfHeaderName: TableHeaderRow.Note.args?.arrOfHeaderName,
};

export const Summary = Template.bind({});
Summary.args = {
  arrOfHeaderName: TableHeaderRow.Summary.args?.arrOfHeaderName,
};
