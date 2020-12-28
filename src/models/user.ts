// 1.user.js ==>model
export default {
  namespace: 'user',
  state: {
    name: '',
    uid: '',
  },
  reducers: {
    setInfo(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
};
