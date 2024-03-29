import request from '@/services';

/**
 * 是否是字符串
 * @param param
 */
function isString(param: any) {
  return Object.prototype.toString.call(param) === '[object String]';
}

/**
 * 是否是空对象
 * @param param
 */
function isEmpty(param: any) {
  return !Object.keys(param).length;
}

// /**
//  * 是否是空对象
//  * @param param
//  */
// function isPlainParam(param: any) {
//   return !Object.keys(param).length
// }

/**
 * 拼装完整host
 * @param host
 * @param input
 */

interface IFetch {
  host: string;
  url: string;
  method?: string;
  data?: Object;
  params?: Object;
  contentType?: string;
}

async function Common<T = object>(arg: IFetch): Promise<AsyncResult<T>> {
  let { host = '', url, data, params, method } = arg;
  let methodUrl = host + url;
  url = methodUrl;
  let options: any = {
    method,
  };
  isEmpty(data) || (options.data = data);
  isEmpty(params) || (options.params = params);
  try {
    let res: any = await request(url, options);
    return res;
  } catch (e) {
    //@ts-ignore
    window.Raven && window.Raven.captureException(e);
    // console.error(e)
    throw e;
  }
}

export function fetch<T = object>(params: IFetch) {
  return Common<T>(params);
}

// let host = config.host || 'http://118.31.238.229:8390';
let host = '';

export function get<T = any>(
  url: string,
  data: object,
  params: object,
  option: any = { host },
) {
  //TODO 把当前的权限 记录下来.
  return fetch<T>({
    host: option.host,
    url,
    data,
    params,
    method: 'get',
  });
}

export function patch<T = any>(
  url: string,
  data: object,
  option: any = { host },
) {
  //TODO 把当前的权限 记录下来.
  return fetch<T>({
    host: option.host,
    url,
    method: 'patch',
  });
}

export function head<T = any>(
  url: string,
  data: object,
  option: any = { host },
) {
  //TODO 把当前的权限 记录下来.
  return fetch<T>({
    host: option.host,
    url,
    method: 'head',
  });
}

export function put<T = any>(
  url: string,
  data: object,
  params: object,
  option: any = { host },
) {
  return fetch<T>({
    host: option.host,
    url,
    method: 'put',
    data,
    params,
  });
}

export function post<T = any>(
  url: string,
  data: object,
  params: object,
  option: any = { host },
) {
  return fetch<T>({
    host: option.host,
    url,
    method: 'post',
    data,
    params,
  });
}

export function options<T = any>(
  url: string,
  data: object,
  params: object,
  option: any = { host },
) {
  return fetch<T>({
    host: option.host,
    url,
    method: 'options',
    data,
  });
}

export function deleteF<T = any>(
  url: string,
  data: object,
  params: object,
  option: any = { host },
) {
  return fetch<T>({
    host: option.host,
    url,
    method: 'delete',
    data,
  });
}
