import React from 'react';

import CheckBox from './CheckBox';

export default {
    title: 'Form/Checkbox',
    component: CheckBox,
    argTypes: {
        required: { control: 'boolean' }
    }
};

const Template = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: 'checkbox',
    label: 'Do you accept?',
    required: true,
    register: () => ({})
};
