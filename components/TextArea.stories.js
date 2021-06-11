import React from 'react';

import TextArea from './TextArea';

export default {
    title: 'Form/TextArea',
    component: TextArea
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'textarea',
    label: 'An Example TextArea',
    register: () => ({})
};
