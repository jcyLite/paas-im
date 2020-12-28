// 1.user.js ==>model
export default {
  namespace: 'session',
  state: {
    name: '',
    uid: '',
  },
  reducers: {
    setData(state: any, { payload }: any) {
      return { ...payload };
    },
  },
};
