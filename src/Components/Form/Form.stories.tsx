import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Form from "./Form";
import Provider from "../../utils/provider";
import { store } from "../../redux/store";

export default {
  title: "Test/Form",
  component: Form,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;
export const Default = Template.bind({});
Default.args = {
  closeModal: () => {
    console.log("close modal");
  },
};
