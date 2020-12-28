import uuid from 'node-uuid';
import db from '../database';
const fs = require('fs');
const path = require('path');
export default {
  //登陆接口
  'POST /api/login': (req: any, res: any) => {
    console.log(req)
    //查看有无此人
    db.all(
      `select * from user where username='${req.body.username}'`,
      (err: any, rows: any) => {
        if (rows.length == 0) {
          let uid = uuid.v1();
          db.all(
            `insert into user values ('${req.body.username}','${req.body.password}','${uid}')`,
          );
          res.json({
            username: req.body.username,
            password: req.body.password,
            uid,
            msg: '无此用户，已创建并登陆',
          });
        } else {
          if (rows[0].password != req.body.password) {
            res.json('密码错误，请重新输入');
          }
          res.json(rows[0]);
        }
      },
    );
  },
  // 支持值为 Object 和 Array
  'POST /api/data': (req: any, res: any) => {
    db.all(
      `select * from msgList where uid='${req.body.uid}' or toUid='${req.body.uid}'`,
      (err: any, rows: any) => {
        res.json(rows);
      },
    );
  },
  'POST /api/friendList': (req: any, res: any) => {
    db.all(
      `select * from user where uid!='${req.headers.uid}'`,
      (err: any, rows: any) => {
        res.json(
          rows.map((item: any) => {
            return {
              username: item.username,
              uid: item.uid,
            };
          }),
        );
      },
    );
  },
  'get /api/companyDetail': (req: any, res: any) => {
    let pid = req.query.pid || '';
    let uid = req.headers.uid;
    let toId = req.query.toId;
    if (pid) {
      db.all(
        `select * from company where pid=${pid}`,
        (err: any, rows: any) => {
          res.json([
            {
              key: '企业名称',
              value: rows[0].name,
            },
            {
              key: '地址',
              value: rows[0].address,
            },
            {
              key: '联系人',
              value: rows[0].people,
            },
            {
              key: '实施人员',
              value: rows[0].shishirenyuan,
            },
            {
              key: '账号',
              value: rows[0].zhanghao,
            },
            {
              key: '密码',
              value: rows[0].mima,
            },
            {
              key: '远程账号',
              value: rows[0].yuanchengzhanghao,
            },
            {
              key: '签约金额',
              value: rows[0].qianyuejinge,
            },
            {
              key: '签约时间',
              value: rows[0].qianyueshijian,
            },
            {
              key: '其他备注',
              value: rows[0].qitabeizhu,
            },
          ]);
        },
      );
      //添加关联表
      db.all(
        `update companyConectUser SET pid = '${pid}' WHERE uid = '${uid}' and toId = '${toId}'`,
        () => {},
      );
    } else {
      res.json(null);
    }
  },
  'get /api/company': (req: any, res: any) => {
    db.all(`select * from company`, (err: any, rows: any) => {
      res.json(rows);
    });
  },
  //标签的增删改查
  'get /api/biaoqian': (req: any, res: any) => {
    let uid = req.headers.uid;
    db.all(
      `select * from biaoqian where uid='${req.headers.uid}'`,
      (err: any, rows: any) => {
        res.json(
          rows.map(item => {
            delete item.uid;
            return item;
          }),
        );
      },
    );
  },
  'post /api/biaoqian': (req: any, res: any) => {
    let uid = req.headers.uid;
    let bid = uuid.v1();
    if (req.body.biaoqian) {
      db.all(
        `insert into biaoqian values ('${uid}','${req.body.biaoqian}','${bid}')`,
        (err: any, rows: any) => {
          res.json({
            code: 0,
          });
        },
      );
    }
    if (req.body.delBid) {
      db.all(
        `delete from biaoqian where bid='${req.body.delBid}'`,
        (err: any, rows: any) => {
          res.json({
            code: 0,
          });
        },
      );
    }
  },
  //常用语增删改查
  'get /api/coment': (req: any, res: any) => {
    let uid = req.headers.uid;
    let searchVal = req.query.searchVal || '';
    db.all(
      `select * from coment where uid='${uid}' and coment like '%${searchVal}%'`,
      (err: any, rows: any) => {
        res.json(
          rows.map(item => ({
            cid: item.cid,
            coment: item.coment,
          })),
        );
      },
    );
  },
  'post /api/coment': (req: any, res: any) => {
    let uid = req.headers.uid;
    let cid = req.body.cid;
    if (req.body.type == 'del') {
      db.all(`delete from coment where cid='${cid}'`, (err: any, rows: any) => {
        res.json({
          code: 0,
        });
      });
    } else if (req.body.type == 'add') {
      req.body.data.forEach(item => {
        let cid = uuid.v1();
        db.all(
          `insert into coment values ('${item}','${cid}','${uid}')`,
          (err: any, rows: any) => {
            res.json({
              code: 0,
            });
          },
        );
      });
    }
  },
  //常用链接增删改查
  'get /api/lianjie': (req: any, res: any) => {
    let uid = req.headers.uid;
    let searchVal = req.query.searchVal || '';
    db.all(
      `select * from lianjie where uid='${uid}' and data like '%${searchVal}%'`,
      (err: any, rows: any) => {
        res.json(
          rows.map(item => ({
            cid: item.cid,
            coment: item.data,
          })),
        );
      },
    );
  },
  'post /api/lianjie': (req: any, res: any) => {
    let uid = req.headers.uid;
    let lid = req.body.cid;
    if (req.body.type == 'del') {
      db.all(
        `delete from lianjie where  lid='${lid}'`,
        (err: any, rows: any) => {
          res.json({
            code: 0,
          });
        },
      );
    } else if (req.body.type == 'add') {
      req.body.data.forEach(item => {
        let id = uuid.v1();
        db.all(
          `insert into lianjie values ('${item}','${id}','${uid}')`,
          (err: any, rows: any) => {
            res.json({
              code: 0,
            });
          },
        );
      });
    }
  },
  //问题库
  'get /api/quetion': (req: any, res: any) => {
    let uid = req.headers.uid;
    db.all(`select * from quetion`, (err: any, rows: any) => {
      res.json(rows);
    });
  },

  'get /api/msgLeftList': (req: any, res: any) => {
    let uid = req.headers.uid;
    db.all(
      `select * from msgList where fromUid='${req.headers.uid}' or toUid='${req.headers.uid}'`,
      (err: any, rows: any) => {
        let arr = [];
        let returnArr = [];
        rows = rows.reverse();
        for (var i = 0; i < rows.length; i++) {
          let item = rows[i];
          if (uid == item.fromUid) {
            item.uid = item.toUid;
            item.name = item.toName;
          }
          if (uid == item.toUid) {
            item.uid = item.fromUid;
            item.name = item.fromName;
          }
          if (arr.indexOf(item.uid) != -1) {
            continue;
          }
          arr.push(item.uid);

          returnArr.push(item);
        }
        res.json(returnArr);
      },
    );
  },
  'POST /api/msgList': (req: any, res: any) => {
    if (!req.body.toUid) {
      return res.json([]);
    }
    db.all(
      `select * from msgList where (fromUid='${req.body.fromUid}' and toUid='${req.body.toUid}') or (fromUid='${req.body.toUid}' and toUid='${req.body.fromUid}')`,
      (err: any, rows: any) => {
        res.json(
          rows.map((item: any) => {
            return {
              name: item.fromName,
              uid: item.fromUid,
              msg: item.msg,
              isMe: item.fromUid == req.body.fromUid,
              mid: item.mid,
              date: item.date,
            };
          }),
        );
      },
    );
  },
};
