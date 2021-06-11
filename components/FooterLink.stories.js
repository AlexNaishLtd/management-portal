import React from 'react';

import FooterLink from './FooterLink';

export default {
    title: 'FooterLink',
    component: FooterLink
};

const Template = (args) => <FooterLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    href: '#',
    label: 'Google'
};
