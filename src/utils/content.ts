import faces from '@/components/TMessagePanel/Ttoolbar/Tfacepanel/faces';
import './content.less';
//转换内容
export default function(content: string) {
  //支持的html标签
  var html = function(end?: any) {
    return new RegExp(
      '\\n*\\[' +
        (end || '') +
        '(code|pre|div|span|p|table|thead|th|tbody|tr|td|ul|li|ol|li|dl|dt|dd|h2|h3|h4|h5)([\\s\\S]*?)\\]\\n*',
      'g',
    );
  };
  content = (content || '')
    .replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;') //XSS
    .replace(/@(\S+)(\s+?|$)/g, '@<a href="javascript:;">$1</a>$2') //转义@

    .replace(/face\[([^\s\[\]]+?)\]/g, function(face: any) {
      //转义表情
      var alt = face.replace(/^face/g, '');
      return (
        '<img alt="' + alt + '" title="' + alt + '" src="' + faces[alt] + '">'
      );
    })
    .replace(/img\[([^\s]+?)\]/g, function(img: any) {
      //转义图片
      return (
        '<img class="layui-layim-photos" src="' +
        img.replace(/(^img\[)|(\]$)/g, '') +
        '">'
      );
    })
    .replace(/file\([\s\S]+?\)\[[\s\S]*?\]/g, function(str: any) {
      //转义文件
      var href = (str.match(/file\(([\s\S]+?)\)\[/) || [])[1];
      var text = (str.match(/\)\[([\s\S]*?)\]/) || [])[1];
      if (!href) return str;
      return (
        '<a class="layui-layim-file" href="' +
        href +
        '" download target="_blank"><i class="layui-icon">&#xe61e;</i><cite>' +
        (text || href) +
        '</cite></a>'
      );
    })
    .replace(/audio\[([^\s]+?)\]/g, function(audio: any) {
      //转义音频
      return (
        '<div class="layui-unselect layui-layim-audio" layim-event="playAudio" data-src="' +
        audio.replace(/(^audio\[)|(\]$)/g, '') +
        '"><i class="layui-icon">&#xe652;</i><p>音频消息</p></div>'
      );
    })
    .replace(/video\[([^\s]+?)\]/g, function(video: any) {
      //转义视频
      return `<div class="layui-unselect layui-layim-video" layim-event="playVideo">
          <video controls="controls" src='${video.replace(
            /(^video\[)|(\]$)/g,
            '',
          )}'></video>
        </div>`;
    })

    .replace(/a\([\s\S]+?\)\[[\s\S]*?\]/g, function(str: any) {
      //转义链接
      var href = (str.match(/a\(([\s\S]+?)\)\[/) || [])[1];
      var text = (str.match(/\)\[([\s\S]*?)\]/) || [])[1];
      if (!href) return str;
      return (
        '<a href="' + href + '" target="_blank">' + (text || href) + '</a>'
      );
    })
    .replace(html(), '<$1 $2>')
    .replace(html('/'), '</$1>') //转移HTML代码
    .replace(/\n/g, '<br>'); //转义换行
  return content;
}
function RenderToList(content: string) {
  content = content
    .replace(/img\[([^\s]+?)\]/g, function(img: any) {
      //转义图片
      return '[图片]';
    })
    .replace(/file\([\s\S]+?\)\[[\s\S]*?\]/g, function(str: any) {
      //转义文件
      return '[文件]';
    })
    .replace(/audio\[([^\s]+?)\]/g, function(audio: any) {
      //转义音频
      return '[音频]';
    })
    .replace(/video\[([^\s]+?)\]/g, function(video: any) {
      //转义音频
      return '[视频]';
    });
  return content;
}
export { RenderToList };
