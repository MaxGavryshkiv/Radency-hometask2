import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Test/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  handleClick: () => {
    console.log("hello");
  },
  text: "Add Note",
};

export const Secondary = Template.bind({});
Secondary.args = {
  handleClick: () => {
    console.log("second hello");
  },
  text: "Open Archive",
};
