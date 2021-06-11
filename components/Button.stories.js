import React from 'react';

import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        disabled: { control: 'boolean' }
    }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'button',
    onClick: () => alert('Default click'),
    children: 'Click Me'
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
    disabled: true,
    children: 'Click Me'
};

export const Success = Template.bind({});
Success.args = {
    type: 'button',
    theme: 'success',
    onClick: () => alert('Success click'),
    children: 'Success Action'
};

export const SuccessDisabled = Template.bind({});
SuccessDisabled.args = {
    theme: 'success',
    disabled: true,
    children: 'Success Action'
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'button',
    theme: 'warn',
    onClick: () => alert('Warn click'),
    children: 'Warn Me'
};

export const WarningDisabled = Template.bind({});
WarningDisabled.args = {
    theme: 'warn',
    disabled: true,
    children: 'Warn Me'
};

export const Danger = Template.bind({});
Danger.args = {
    type: 'button',
    theme: 'danger',
    onClick: () => alert('Danger click'),
    children: 'Danger'
};

export const DangerDisabled = Template.bind({});
DangerDisabled.args = {
    theme: 'danger',
    disabled: true,
    children: 'Danger'
};
