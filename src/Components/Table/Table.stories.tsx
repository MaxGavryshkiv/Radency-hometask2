import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table from "./Table";
import * as TableHeader from "./TableHeader.stories";
import * as TableBody from "./TableBody.stories";
import Provider from "../../utils/provider";
import { store } from "../../redux/store";

export default {
  title: "Test/Table",
  component: Table,
  decorators: [
    (story) => (
      <Provider store={store}>
        <table className="w-1200 border-separate border-spacing-y-4">
          {story()}
        </table>
      </Provider>
    ),
  ],
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;
export const Default = Template.bind({});
Default.args = {
  arrOfHeaderName: TableHeader.Default.args?.arrOfHeaderName,
  arrOfObj: TableBody.Default.args?.arrOfObj,
  isIncludeSvg: "notesSvg",
  openEditForm: () => {
    console.log("edit");
  },
};
export const Archived = Template.bind({});
Archived.args = {
  arrOfHeaderName: TableHeader.Default.args?.arrOfHeaderName,
  arrOfObj: TableBody.Archived.args?.arrOfObj,
  isIncludeSvg: "archiveSvg",
  openEditForm: undefined,
};
export const Summary = Template.bind({});
Summary.args = {
  arrOfHeaderName: TableHeader.Summary.args?.arrOfHeaderName,
  arrOfObj: TableBody.Summary.args?.arrOfObj,
  isIncludeSvg: undefined,
  openEditForm: undefined,
};
