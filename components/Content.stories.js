import React from 'react';

import Content from './Content';

export default {
    title: 'Content',
    component: Content
};

const Template = (args) => <Content {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'This is a child thats wrapped in the content component.'
};
