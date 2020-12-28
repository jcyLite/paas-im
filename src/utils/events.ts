let queue: any = {};
let events = {
  emit(type: string, data?: any) {
    queue[type]?.forEach((item: any) => {
      item(data);
    });
  },
  on(type: string, fn: Function) {
    if (queue[type]) {
      //判断fn是否同源
      let index = queue[type]
        .map((item: Function) => item.toString())
        .indexOf(fn.toString());
      if (index == -1) {
        queue[type].push(fn);
      } else {
        queue[type].splice(index, 1, fn);
      }
    } else {
      queue[type] = [fn];
    }
  },
};

export default events;
