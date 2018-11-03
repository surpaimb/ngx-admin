import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '统计',
    icon: 'nb-bar-chart',
    link: '/shops/dashboard',
    home: true,
  },
  {
    title: '订单管理',
    icon: 'nb-keypad',
    link: '/shops/order-processing',
    children: [
      {
        title: '订单列表',
        link: '/shops/order-processing/index',
      },
      {
        title: '发货管理',
        link: '/shops/order-processing/shipping',
      },
    ],
  },
  {
    title: '商品管理',
    icon: 'nb-e-commerce',
    link: '/shops/catalogue-manager',
    children: [
      {
        title: '商品',
        link: '/shops/catalogue-manager/products',
      },
      {
        title: '分类',
        link: '/shops/catalogue-manager/categories',
      },
      {
        title: '分组',
        link: '/shops/catalogue-manager/collections',
      },
    ],
  },
  {
    title: '会员管理',
    icon: 'nb-person',
    link: '/shops/customers',
    children: [
      {
        title: '会员列表',
        link: '/shops/customers/index',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
