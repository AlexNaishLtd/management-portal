import React from 'react';

import Input from './Input';

export default {
    title: 'Form/Input',
    component: Input
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    name: 'text',
    label: 'Default Input',
    required: true,
    type: 'text',
    register: () => ({})
};

export const Password = Template.bind({});
Password.args = {
    name: 'password',
    label: 'Password',
    required: true,
    type: 'password',
    register: () => ({})
};
