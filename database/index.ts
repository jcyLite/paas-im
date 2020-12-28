const sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./database/db.db', err => {
  db.run(
    'create table if not exists user (username TEXT,password TEXT,uid TEXT)',
    err => {
      if (err) throw err;
    },
  );
  db.run(
    'create table if not exists msgList (fromUid TEXT,fromName TEXT,toUid TEXT,toName TEXT,msg TEXT,date NUMBER,mid TEXT)',
    err => {
      if (err) throw err;
    },
  );
  db.run(
    'create table if not exists coment (coment TEXT,cid INTEGER,uid INTEGER)',
    err => {
      if (err) throw err;
    },
  );
});
export default db;
