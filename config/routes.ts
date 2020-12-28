export default [
  {
    path: '/login',
    component: '@/pages/login',
  },
  {
    path: '/iframe-im',
    component: '@/pages/im',

    routes: [
      {
        path: 'msgList',
        component: '@/pages/TMsgList',
      },
      {
        path: 'FriendList',
        component: '@/pages/TFriendList',
      },
      {
        path: 'groupSend',
        component: '@/pages/groupSend',
      },
    ],
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/im',
        component: '@/pages/index',
      },
      {
        path: '/customManager',
        component: '@/pages/customManager',
      },
    ],
  },
];
