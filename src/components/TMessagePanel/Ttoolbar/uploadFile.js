import Cos from 'cos-js-sdk-v5';

var cos = new Cos({
  SecretId: 'AKIDmNksnTjNZeV9Y4qo37UcbS6WhdKtaI8j',
  SecretKey: 'KQdhV4SdaPCvZ4PbbibEfy6ziH1Yu31n',
});

let buckets = [
  'publicservice-1257122416',
  'publicservice1-1257122416',
  'publicservice2-1257122416',
  'publicservice3-1257122416',
  'publicservice4-1257122416',
  'publicservice5-1257122416',
  'publicservice6-1257122416',
  'publicservice7-1257122416',
  'publicservice8-1257122416',
  'publicservice9-1257122416',
];

/**
 * 上传文件到阿里云
 * @param fileObject
 * @param onProgress  '/test/case1'
 * @returns {Promise<unknown>}
 */
export async function uploadeFile2Cos({
  companyId,
  file,
  visitPath,
  onProgress,
}) {
  return new Promise((resolve, reject) => {
    cos.putObject(
      {
        Bucket: companyId
          ? getBucket(companyId)
          : 'publicservice-1257122416' /* 必须 */,
        Region: 'ap-shanghai' /* 存储桶所在地域，必须字段 */,
        Key: visitPath /* 必须 */,
        StorageClass: 'STANDARD',
        Body: file, // 上传文件对象
        onProgress,
      },
      function(err, data) {
        err ? reject(err) : resolve(data);
      },
    );
  });
}

/**
 * 获取文件临时访问url
 * @param visitPath
 * @returns {Promise<*>}
 */
export function getFileUrl({ companyId, visitPath }) {
  let url = cos.getObjectUrl({
    Bucket: companyId
      ? getBucket(companyId)
      : 'publicservice-1257122416' /* 必须 */,
    Region: 'ap-shanghai' /* 存储桶所在地域，必须字段 */,
    Key: visitPath,
  });
  return url;
}

function getBucket(companyId) {
  try {
    let _index = companyId % 10;

    if (isNaN(_index)) {
      return buckets[0];
    } else {
      return buckets[_index];
    }
  } catch (err) {
    return buckets[0];
  }
}
