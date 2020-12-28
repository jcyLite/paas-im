import React, { useState, useRef } from 'react';
import Style from './index.less';
import Tfacepanel from './Tfacepanel';
import request from '@/services';
const html2canvas = require('html2canvas');
var webPage = require('webpage');
import { uploadeFile2Cos, getFileUrl } from './uploadFile.js';
import {
  SmileOutlined,
  FolderOpenOutlined,
  ScissorOutlined,
} from '@ant-design/icons';
interface propsType {
  emitFace: any;
  ws: any;
  mine: any;
  toInfo: any;
}
function Ttoolbar(props: propsType) {
  let { ws, mine, toInfo } = props;
  const [facePanelShow, setFacePanelShow] = useState(false);
  let face: any = useRef();
  let faceIcon: any = useRef();
  return (
    <>
      <div className={Style.wrapper}>
        <div className="face">
          <SmileOutlined
            ref={faceIcon}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setFacePanelShow(true);
            }}
          />
          <FolderOpenOutlined
            onClick={() => {
              var input = document.createElement('input');
              input.setAttribute('type', 'file');

              input.onchange = function(this: any, e: any) {
                let fileList = this.files;
                var extensionName = fileList[0].name.split('.');
                let name = extensionName.slice(0, -1).join('.');

                uploadeFile2Cos({
                  companyId: fileList[0].name,
                  visitPath: `/im/${fileList[0].name}`,
                  onProgress() {},
                  file: fileList[0],
                }).then(() => {
                  let url = getFileUrl({
                    companyId: fileList[0].name,
                    visitPath: `/im/${fileList[0].name}`,
                  });
                  let txt = '';
                  let isImage = /png|jpe?g|gif|svg/.test(extensionName);
                  let isAudio = /mp3/.test(extensionName);
                  let isVideo = /mp4/.test(extensionName);
                  if (isImage) {
                    txt = `img[${url}]`;
                  } else if (isVideo) {
                    txt = `video[${url}]`;
                  } else if (isAudio) {
                    txt = `audio[${url}]`;
                  } else {
                    txt = `file(${url})[${fileList[0].name}]`;
                  }
                  //防止本地出现闪屏

                  ws.send({
                    type: 'msg',
                    fromName: mine.name,
                    fromUid: mine.uid,
                    toName: toInfo.name,
                    toUid: [mine.uid, toInfo.uid],
                    msg: txt,
                  });
                });
              };
              input.click();
            }}
            style={{ marginLeft: '10px' }}
          />
          <ScissorOutlined
            onClick={() => {
              html2canvas(document.querySelector('body'), {
                useCORS: true,
              }).then(function(canvas: any) {
                //获取年月日作为文件名
                var timers = new Date();
                var fullYear = timers.getFullYear();
                var month = timers.getMonth() + 1;
                var date = timers.getDate();
                var randoms = Math.random() + '';
                //年月日加上随机数
                var numberFileName =
                  fullYear + '' + month + date + randoms.slice(3, 10);
                var imgData = canvas.toDataURL();
                //保存图片
                var saveFile = function(data: any, filename: any) {
                  var save_link: any = document.createElementNS(
                    'http://www.w3.org/1999/xhtml',
                    'a',
                  );
                  save_link.href = data;
                  save_link.download = filename;

                  var event = document.createEvent('MouseEvents');
                  event.initMouseEvent(
                    'click',
                    true,
                    false,
                    window,
                    0,
                    0,
                    0,
                    0,
                    0,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null,
                  );
                  save_link.dispatchEvent(event);
                };
                //最终文件名+文件格式
                var filename = numberFileName + '.png';
                saveFile(imgData, filename);
                //document.body.appendChild(canvas);  把截的图显示在网页上
              });
            }}
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div r-if={facePanelShow} ref={face}>
          <Tfacepanel
            setFacePanelShow={setFacePanelShow}
            emitFace={function(this: any, alt: any) {
              //告知父组件选择的index
              props.emitFace?.call(this, alt);
            }}
            className="facePanel"
          ></Tfacepanel>
        </div>
      </div>

      {/* <Tfacepanel r-if={facePanelShow}></Tfacepanel> */}
    </>
  );
}
export default Ttoolbar;
