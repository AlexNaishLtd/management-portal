import React from 'react';

import Select from './Select';

export default {
    title: 'Form/Select',
    component: Select,
    argTypes: {
        children: false,
        register: false
    }
};

const Template = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: [
        React.createElement('option', { value: 'first' }, 'First'),
        React.createElement('option', { value: 'second' }, 'Second'),
        React.createElement('option', { value: 'third' }, 'Third')
    ],
    register: () => ({})
};
