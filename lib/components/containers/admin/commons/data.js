import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Web from 'material-ui/svg-icons/av/web';

const data = {
    menus: [
        { text: 'Admin', icon: <Assessment />, link: '/admin' },
        { text: 'Partners', icon: <Web />, link: '/admin/partners' },
        { text: 'Communities', icon: <Web />, link: '/admin/communities' },
        { text: 'Categories', icon: <Web />, link: '/admin/categories' },
        { text: 'Business', icon: <Web />, link: '/admin/business' },
        { text: 'Deals', icon: <Web />, link: '/admin/deals' },
        { text: 'Deals Type', icon: <Web />, link: '/admin/deal_type' },
        { text: 'Coupon Modes', icon: <Web />, link: '/admin/coupon_used_modes' },
        { text: 'Coupons', icon: <Web />, link: '/admin/coupons' },
        { text: 'Visits', icon: <Web />, link: '/admin/visits' },
        // { text: 'Business Form', icon: <Web />, link: '/admin/business/add' },
        // { text: 'Table Page', icon: <GridOn />, link: '/table' },
        // { text: 'Login Page', icon: <PermIdentity />, link: '/login' }
    ],

};

export default data;
