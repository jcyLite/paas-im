/*
Navicat SQLite Data Transfer

Source Server         : db2
Source Server Version : 30808
Source Host           : :0

Target Server Type    : SQLite
Target Server Version : 30808
File Encoding         : 65001

Date: 2020-06-12 11:28:27
*/

PRAGMA foreign_keys = OFF;

-- ----------------------------
-- Table structure for biaoqian
-- ----------------------------
DROP TABLE IF EXISTS "main"."biaoqian";
CREATE TABLE "biaoqian" (
"uid"  TEXT,
"biaoqian"  TEXT,
"bid"  INTEGER
);

-- ----------------------------
-- Records of biaoqian
-- ----------------------------
INSERT INTO "main"."biaoqian" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '标签1', '94672450-abb1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."biaoqian" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '标签2', '977e0140-abb1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."biaoqian" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '标签3', 'b8646610-abb1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."biaoqian" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', 'asdfas', '827e3b10-abc1-11ea-8233-ef15ab5a8b7a');

-- ----------------------------
-- Table structure for coment
-- ----------------------------
DROP TABLE IF EXISTS "main"."coment";
CREATE TABLE "coment" (
"coment"  TEXT,
"cid"  TEXT,
"uid"  TEXT
);

-- ----------------------------
-- Records of coment
-- ----------------------------
INSERT INTO "main"."coment" VALUES ('按时打算大', '1189f580-a93b-11ea-bd1f-adcf4bff4817', '1a5d0210-a3e6-11ea-b022-7347ab315cf6');
INSERT INTO "main"."coment" VALUES ('asdfasdf', '0641aa00-a93c-11ea-840b-dd31623f9ef9', '1a5d0210-a3e6-11ea-b022-7347ab315cf6');
INSERT INTO "main"."coment" VALUES ('asdfasdf', '08c4d270-a93c-11ea-840b-dd31623f9ef9', '1a5d0210-a3e6-11ea-b022-7347ab315cf6');
INSERT INTO "main"."coment" VALUES ('asdfasdf', '0a7abfd0-a93c-11ea-840b-dd31623f9ef9', '1a5d0210-a3e6-11ea-b022-7347ab315cf6');
INSERT INTO "main"."coment" VALUES ('asdfasdfafds', '0c31bea0-a93c-11ea-840b-dd31623f9ef9', '1a5d0210-a3e6-11ea-b022-7347ab315cf6');
INSERT INTO "main"."coment" VALUES ('ascascasc', '88750fc1-a9fb-11ea-9b41-25b2ed1628c8', '158c58b0-9e6b-11ea-a59b-5d450e710c83');
INSERT INTO "main"."coment" VALUES ('asdasdasdasdasd', '918ec600-a9fb-11ea-9b41-25b2ed1628c8', '158c58b0-9e6b-11ea-a59b-5d450e710c83');
INSERT INTO "main"."coment" VALUES ('asdasd', '918ec601-a9fb-11ea-9b41-25b2ed1628c8', '158c58b0-9e6b-11ea-a59b-5d450e710c83');
INSERT INTO "main"."coment" VALUES ('我', 'ab49fe20-a9fb-11ea-9b41-25b2ed1628c8', '158c58b0-9e6b-11ea-a59b-5d450e710c83');
INSERT INTO "main"."coment" VALUES ('fgjh', 'b3333462-ac50-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('啊是擦', 'd6220170-ac52-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('啊是', 'd6220171-ac52-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('啊是擦', '505edaa1-ac56-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('啊是擦', '5ae25a10-ac56-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('啊是擦', '5ae25a11-ac56-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('啊是擦', '5ae25a12-ac56-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('爱吃啥啊', '645fb420-ac56-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('啊是擦', '645fb421-ac56-11ea-94e8-995d7b60a645', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('asfda', '64a3f3a0-ac57-11ea-baac-c57ab0ed7c28', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('asdf', '64a3f3a2-ac57-11ea-baac-c57ab0ed7c28', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('asdf', '64a3f3a1-ac57-11ea-baac-c57ab0ed7c28', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('asfdas', '6c141890-ac57-11ea-baac-c57ab0ed7c28', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."coment" VALUES ('asdfasf', '6c141891-ac57-11ea-baac-c57ab0ed7c28', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS "main"."company";
CREATE TABLE "company" (
"pid"  INTEGER NOT NULL,
"name"  TEXT,
"address"  TEXT,
"people"  TEXT,
"shishirenyuan"  TEXT,
"zhanghao"  TEXT,
"mima"  TEXT,
"yuanchengzhanghao"  TEXT,
"qianyuejine"  TEXT,
"qianyueshijian"  TEXT,
"qitabeizhu"  TEXT,
PRIMARY KEY ("pid" ASC)
);

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO "main"."company" VALUES (110, 'A企业', '南京市雨花区绿地控股', '青橙', '关羽', '层ddfdfdfd@ddd.com', 'ddfdfdfd@ddd.com', '层ddfdfdfd@ddd.com', '10,000,000', '2020-05-23', '备注说明备注说明备注说明备注说明备注说明');
INSERT INTO "main"."company" VALUES (111, 'B企业', '南京市雨花区绿地控股', '青橙', '关羽', '层ddfdfdfd@ddd.com', 'ddfdfdfd@ddd.com', '层ddfdfdfd@ddd.com', '10,000,000', '2020-05-23', '备注说明备注说明备注说明备注说明备注说明');
INSERT INTO "main"."company" VALUES (112, 'C企业', '南京市雨花区绿地控股', '青橙', '关羽', '层ddfdfdfd@ddd.com', 'ddfdfdfd@ddd.com', '层ddfdfdfd@ddd.com', '10,000,000', '2020-05-23', '备注说明备注说明备注说明备注说明备注说明');

-- ----------------------------
-- Table structure for companyConectUser
-- ----------------------------
DROP TABLE IF EXISTS "main"."companyConectUser";
CREATE TABLE "companyConectUser" (
"pid"  INTEGER NOT NULL,
"uid"  TEXT,
"toId"  TEXT,
PRIMARY KEY ("pid")
);

-- ----------------------------
-- Records of companyConectUser
-- ----------------------------

-- ----------------------------
-- Table structure for kf
-- ----------------------------
DROP TABLE IF EXISTS "main"."kf";
CREATE TABLE "kf" (
"kid"  INTEGER NOT NULL,
"kname"  TEXT,
"ktype"  TEXT,
"kdate"  TEXT,
""  TEXT,
PRIMARY KEY ("kid")
);

-- ----------------------------
-- Records of kf
-- ----------------------------

-- ----------------------------
-- Table structure for lianjie
-- ----------------------------
DROP TABLE IF EXISTS "main"."lianjie";
CREATE TABLE "lianjie" (
"data"  TEXT,
"lid"  TEXT,
"uid"  TEXT
);

-- ----------------------------
-- Records of lianjie
-- ----------------------------
INSERT INTO "main"."lianjie" VALUES ('ascasc', '82c7dd10-ac57-11ea-baac-c57ab0ed7c28', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."lianjie" VALUES ('sdfsdf', 'a14e7ff0-ac57-11ea-baac-c57ab0ed7c28', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."lianjie" VALUES ('sdfsdf', 'a14e7ff1-ac57-11ea-baac-c57ab0ed7c28', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');

-- ----------------------------
-- Table structure for msgList
-- ----------------------------
DROP TABLE IF EXISTS "main"."msgList";
CREATE TABLE "msgList" (
"fromUid"  TEXT,
"fromName"  TEXT,
"toUid"  TEXT,
"toName"  TEXT,
"msg"  TEXT,
"date"  INTEGER,
"mid"  TEXT
);

-- ----------------------------
-- Records of msgList
-- ----------------------------
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '大苏打', 1591765521811, 'fc6ffe30-aad7-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '爱仕达', 1591765523473, 'fd6d9810-aad7-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '按时打算大', 1591765538653, '0679e0d0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '按时打算', 1591765540329, '07799d90-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '啊是擦市场', 1591765554074, '0faaefa0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '啊是擦是', 1591765556074, '10dc1ca0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'face[失望]', 1591765579482, '1ecfe3a0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '自行车自行车', 1591765599938, '2b013a20-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '按时打算', 1591765739115, '7df5f3b0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '爱仕达', 1591765740618, '7edb4aa0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '爱仕达', 1591765744234, '81030ca0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '爱仕达', 1591765746420, '82509b40-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '按时打算大是的', 1591765748341, '8375ba50-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '爱仕达', 1591765752997, '863c2d50-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发生发达', 1591765769058, '8fcee420-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发是否', 1591765782410, '97c43ea0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591765788203, '9b382fb0-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591765791923, '9d6fd030-aad8-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '发生的发生的', 1591766132682, '688b82a0-aad9-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591766136082, '6a924f20-aad9-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591766142130, '6e2d2920-aad9-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591766147826, '71924d20-aad9-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '啊', 1591766150066, '72e81920-aad9-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '是否地方', 1591766326492, 'dc1091c0-aad9-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '撒点粉', 1591766329050, 'dd96e3a0-aad9-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591766339067, 'e38f5cb0-aad9-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '爱仕达', 1591766405932, '0b6a26c0-aada-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发生地方啊', 1591766408731, '0d153eb0-aada-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591766416964, '11fd8040-aada-11ea-848b-e11c71de20b3');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '大苏打', 1591766510836, '49f13b40-aada-11ea-a686-4743e36de948');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'dsfsdf ', 1591766574059, '6fa04bb0-aada-11ea-a686-4743e36de948');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'afasdfa', 1591766647406, '9b5828e0-aada-11ea-b22b-e1db1ff0eb5b');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasdasdasdasd', 1591766651514, '9dcafda0-aada-11ea-b22b-e1db1ff0eb5b');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'ascasc', 1591766668218, 'a7bfd1a0-aada-11ea-b22b-e1db1ff0eb5b');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'ascascsa', 1591766693436, 'b6c7c7c0-aada-11ea-b22b-e1db1ff0eb5b');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 32, 1591766714139, 'c31eceb0-aada-11ea-b22b-e1db1ff0eb5b');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 5, 1591766987607, '661eb670-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 1212, 1591766990507, '67d937b0-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'sdf ', 1591767005883, '710368b0-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdf', 1591767010187, '739425b0-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdf ', 1591767013659, '75a5eeb0-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdf', 1591767019451, '7919b8b0-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdf', 1591767022002, '7a9ef920-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasdasd', 1591767030635, '7fc443b0-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdf', 1591767115971, 'b2a18130-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asd', 1591767195005, 'e1bd22d0-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asd', 1591767202676, 'e64fa340-aadb-11ea-a936-11962b511a43');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasd', 1591767915388, '8f1edbc0-aadd-11ea-a437-9f53ca929d63');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asd', 1591767924972, '94d542c0-aadd-11ea-a437-9f53ca929d63');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasd', 1591767940187, '9de6e2b0-aadd-11ea-a437-9f53ca929d63');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '啊是擦上', 1591767981827, 'b6b8a530-aadd-11ea-a437-9f53ca929d63');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '啊是擦三次', 1591767984493, 'b84f71d0-aadd-11ea-a437-9f53ca929d63');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'ascasc', 1591767989517, 'bb4e0bd0-aadd-11ea-a437-9f53ca929d63');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasd', 1591767997243, 'bfe8f0b0-aadd-11ea-a437-9f53ca929d63');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '按时打算大的', 1591768295719, '71d0c370-aade-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '爱仕达', 1591768357868, '96dbf2c0-aade-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '啊是擦市场', 1591769145109, '6c176450-aae0-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '啊啊啊啊', 1591769150278, '6f2c1e60-aae0-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '说的方式的方式', 1591769218172, '97a3ebc0-aae0-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发生', 1591769306903, 'cc873270-aae0-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591769310172, 'ce7a01c0-aae0-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '萨达', 1591769317845, 'd30cd050-aae0-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591769330439, 'da8e8170-aae0-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'sdfsdf', 1591769711765, 'bdd83c50-aae1-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'sdfsdfsdf', 1591769713902, 'bf1e50e0-aae1-11ea-b53c-1d730e0af2cb');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasdasd', 1591769749437, 'd44cade0-aae1-11ea-ad16-a52655aa5bfe');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasdasdasdasd', 1591769752686, 'd63c48e0-aae1-11ea-ad16-a52655aa5bfe');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'ad', 1591769756373, 'd86ee050-aae1-11ea-ad16-a52655aa5bfe');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdfasdf', 1591770048575, '86995cf0-aae2-11ea-ad16-a52655aa5bfe');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'as', 1591770052877, '8929f2e0-aae2-11ea-ad16-a52655aa5bfe');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasd', 1591770111551, 'ac22bcf0-aae2-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'a', 1591770115494, 'ae7c6460-aae2-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'wefwe', 1591770377951, '4aec26f0-aae3-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'qw', 1591770382141, '4d6b7ed0-aae3-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'a', 1591770400029, '5814fcd0-aae3-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'sacasc', 1591770406797, '5c1db3d0-aae3-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'sdfsdf', 1591770437101, '6e2db9d0-aae3-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'tyty', 1591770463862, '7e212160-aae3-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'dfgdfg', 1591770671598, 'f9f320e0-aae3-11ea-8158-8b37010c2528');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'asdasdasd', 1591770710367, '110ecef0-aae4-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'a', 1591770712893, '12903ed0-aae4-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'a', 1591770716430, '14abf2e0-aae4-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'dasdasdasd', 1591770718392, '15d75380-aae4-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'asdfasdf', 1591770839902, '5e4447e0-aae4-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'asdfadfasf', 1591774225576, '40492280-aaec-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'g', 1591774269616, '5a891b00-aaec-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '阿斯顿发撒点粉', 1591774309552, '7256db00-aaec-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '啊我发生地方', 1591774312472, '74146980-aaec-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'face[汗]', 1591774317911, '77525670-aaec-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdfasfd', 1591774486888, 'dc0a2e80-aaec-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '阿斯顿发撒点粉', 1591774501800, 'e4ed9280-aaec-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdf', 1591774678369, '4e2bdd10-aaed-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591775779082, 'de3f56a0-aaef-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591775903833, '289ad490-aaf0-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '', 1591775906282, '2a1084a0-aaf0-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '', 1591775908721, '2b84ae10-aaf0-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '', 1591775911177, '2cfb6f90-aaf0-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '啊是擦', 1591776252001, 'f8210d10-aaf0-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '收复失地', 1591776275538, '06288320-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发撒点粉', 1591776278827, '081e5fb0-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591776360436, '38c2eb40-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 99, 1591776363833, '3ac94290-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发撒点粉', 1591776370289, '3ea25e10-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591776372833, '40268d10-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591776374937, '41679890-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发啊', 1591776379945, '4463c190-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '阿斯顿发', 1591776409737, '5625a790-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '爱仕达', 1591776413009, '5818ec10-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '按时打算', 1591776562569, 'b13df790-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '阿斯顿发', 1591776569017, 'b515da90-aaf1-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '615d5d20-9fbf-11ea-a2c6-6f27c1544360', '刘备', '都是分公司对方', 1591776765555, '2a3b2c30-aaf2-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '615d5d20-9fbf-11ea-a2c6-6f27c1544360', '刘备', '啊发达的', 1591776776857, '30f7b890-aaf2-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '615d5d20-9fbf-11ea-a2c6-6f27c1544360', '刘备', '阿斯顿发生', 1591776904881, '7d46a210-aaf2-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯顿发', 1591776914730, '832578a0-aaf2-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '615d5d20-9fbf-11ea-a2c6-6f27c1544360', '刘备', '阿斯顿发', 1591776927490, '8ac07e20-aaf2-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', '爱的色放', 1591776929746, '8c18bb20-aaf2-11ea-aa7a-b52fbf274884');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'asdf', 1591778278601, 'b013ab90-aaf5-11ea-835c-0bc07fabb73e');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'asdf ', 1591778280793, 'b1622490-aaf5-11ea-835c-0bc07fabb73e');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'asdf ', 1591778285121, 'b3f68b10-aaf5-11ea-835c-0bc07fabb73e');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'asdf', 1591778298609, 'bc00a610-aaf5-11ea-835c-0bc07fabb73e');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'a', 1591778301575, 'bdc53970-aaf5-11ea-835c-0bc07fabb73e');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'wqerwerqwer', 1591785716279, '01474470-ab07-11ea-b477-3d5cbdea5a9a');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'qwerqwerqwer', 1591785718622, '02acc7e0-ab07-11ea-b477-3d5cbdea5a9a');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'qwerqwerqwerqwerqwer', 1591785721286, '04434660-ab07-11ea-b477-3d5cbdea5a9a');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b', '王亚军', 'qwerqwerqwerqwerqwer', 1591785724269, '060a71d0-ab07-11ea-b477-3d5cbdea5a9a');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'img[/file/part-00556-3606.158c58b0-9e6b-11ea-a59b-5d450e710c83.jpg]', 1591861786327, '1e8f6e70-abb8-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'asdfasdfa', 1591865832687, '8a60f7f0-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', '615d5d20-9fbf-11ea-a2c6-6f27c1544360', '刘备', 'face[左哼哼]', 1591865836487, '8ca4cd70-abc1-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '158c58b0-9e6b-11ea-a59b-5d450e710c83', '陈坚', 'ascascasca', 1591867577614, '9a6fb2e0-abc5-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasdasd', 1591867593904, 'a4255b00-abc5-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'asdasdqasd', 1591867608271, 'acb595f0-abc5-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'ascasc', 1591867804735, '21cf9cf0-abc6-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'ascascasc', 1591867834579, '33997230-abc6-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'a', 1591867838108, '35b3edc0-abc6-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'ascascasc', 1591867843933, '392cc0d0-abc6-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', '阿斯蒂芬', 1591872267159, '859f7a70-abd0-11ea-8233-ef15ab5a8b7a');
INSERT INTO "main"."msgList" VALUES ('bc53d570-abc1-11ea-8233-ef15ab5a8b7a', 'chenjian', '3a11bb60-9e59-11ea-9efb-3982eb646e59', '杨晓东', 'fhj', 1591927315183, 'b0cd57f0-ac50-11ea-a94a-816dcb27d761');

-- ----------------------------
-- Table structure for quetion
-- ----------------------------
DROP TABLE IF EXISTS "main"."quetion";
CREATE TABLE "quetion" (
"title"  TEXT,
"content"  TEXT,
"qid"  INTEGER
);

-- ----------------------------
-- Records of quetion
-- ----------------------------
INSERT INTO "main"."quetion" VALUES ('如何在代账平台实现一键报税？', '1、看到金发科技疯狂夺金阿加咖啡；2、的借口借口借；3、看到金发科技疯狂夺金阿加咖啡；4、的借口借口借', 'q1');
INSERT INTO "main"."quetion" VALUES ('如何在代账平台实现一键报税如何在代账平台实现一键报税？', '1、看到金发科技疯狂夺金阿加咖啡；2、的借口借口借；3、看到金发科技疯狂夺金阿加咖啡；4、的借口借口借看到金发科技疯狂夺金阿加咖看到金发科技疯狂夺金…', 'q2');
INSERT INTO "main"."quetion" VALUES ('如何在代账平台实现一键报税如何在代账平台实现一键报税？', '1、看到金发科技疯狂夺金阿加咖啡；2、的借口借口借；3、看到金发科技疯狂夺金阿加咖啡；4、的借口借口借', 'q3');
INSERT INTO "main"."quetion" VALUES ('如何在代账平台实现一键报税如何在代账平台实现一键报税？', '1、看到金发科技疯狂夺金阿加咖啡；2、的借口借口借；3、看到金发科技疯狂夺金阿加咖啡；4、的借口借口借看到金发科技疯狂夺金阿加咖看到金发科技疯狂夺金…', 'q4');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS "main"."user";
CREATE TABLE user (username TEXT,password TEXT,uid TEXT);

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO "main"."user" VALUES ('杨晓东', 'yangxiaodong', '3a11bb60-9e59-11ea-9efb-3982eb646e59');
INSERT INTO "main"."user" VALUES ('陈坚', 'chenjian', '158c58b0-9e6b-11ea-a59b-5d450e710c83');
INSERT INTO "main"."user" VALUES ('章启程', 'zhangqicheng', 'a247f4b0-9e6d-11ea-a59b-5d450e710c83');
INSERT INTO "main"."user" VALUES ('王亚军', 'wangyajun', '3e286c50-9f2e-11ea-86e4-3157a0a4eb3b');
INSERT INTO "main"."user" VALUES ('刘备', '刘备', '615d5d20-9fbf-11ea-a2c6-6f27c1544360');
INSERT INTO "main"."user" VALUES ('关羽', '关羽', '7cd77f30-a3e4-11ea-a9b6-35e95ee7cdad');
INSERT INTO "main"."user" VALUES ('张飞', '张飞', '40ddd6e0-a3e5-11ea-a9b6-35e95ee7cdad');
INSERT INTO "main"."user" VALUES ('测试1', 1, '1a5d0210-a3e6-11ea-b022-7347ab315cf6');
INSERT INTO "main"."user" VALUES ('测试2', 2, 'ddfcf490-a49b-11ea-8903-cb31b6e453f8');
INSERT INTO "main"."user" VALUES ('测试3', 3, '00a168b0-a63f-11ea-9fa7-c396865a0e99');
INSERT INTO "main"."user" VALUES ('测试4', 'ceshi4', '92a4ae90-aa16-11ea-adf8-65045a6b9211');
INSERT INTO "main"."user" VALUES ('测试5', 'ceshi5', '99f31ab0-aa16-11ea-adf8-65045a6b9211');
INSERT INTO "main"."user" VALUES ('测试6', 'ceshi6', 'a17e41b0-aa16-11ea-adf8-65045a6b9211');
INSERT INTO "main"."user" VALUES ('测试7', 'ceshi7', 'a78b7b40-aa16-11ea-adf8-65045a6b9211');
INSERT INTO "main"."user" VALUES ('测试8', 'ceshi8', 'b19250a0-aa16-11ea-adf8-65045a6b9211');
INSERT INTO "main"."user" VALUES ('y', 'y', '0f73a780-aa1e-11ea-8b31-450c0f2f5a98');
INSERT INTO "main"."user" VALUES ('b', 'b', '4fbb2fb0-aa29-11ea-8b31-450c0f2f5a98');
INSERT INTO "main"."user" VALUES ('a', 'a', '57a77790-aa2b-11ea-8b31-450c0f2f5a98');
INSERT INTO "main"."user" VALUES ('chenjian', 'chenjian', 'bc53d570-abc1-11ea-8233-ef15ab5a8b7a');

-- ----------------------------
-- Table structure for _quetion_old_20200612
-- ----------------------------
DROP TABLE IF EXISTS "main"."_quetion_old_20200612";
CREATE TABLE "_quetion_old_20200612" (
"title"  TEXT,
"content"  TEXT,
"qid"  INTEGER,
""  TEXT
);

-- ----------------------------
-- Records of _quetion_old_20200612
-- ----------------------------
