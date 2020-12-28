export default {
  namespace: 'msg',
  state: [],
  reducers: {
    setMsg(state: any, { payload }: any) {
      return payload;
    },
    addMsg(state: any, { payload }: any) {
      return [...state, ...payload];
    },
  },
};
