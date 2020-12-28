interface Item {
  name: string;
  uid: string;
  mid: string;
  msg: string;
  isMe: boolean;
  date: number;
  fromName?: string;
  toName?: string;
  fromUid?: string;
  toUid?: string;
  type?: string;
}
export default Item;
