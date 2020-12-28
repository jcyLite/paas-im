export function toAllTime(date: number) {
  let a = new Date(date);
  let b = new Date();
  let c = 1000 * 60 * 60 * 24; //一天毫秒数
  if (new Date(b.getTime() - a.getTime()).getTime() < c) {
    return a.toLocaleTimeString();
  } else {
    return a.toLocaleDateString();
  }
}
