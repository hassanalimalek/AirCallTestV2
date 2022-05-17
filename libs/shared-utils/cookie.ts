import { IncomingMessage } from 'http';
import cookie, { CookieAttributes } from 'js-cookie';

const getCookieFromBrowser = (key: string) => {
  return cookie.get(key) || '';
};

export const getCookieFromServer = (
  key: string,
  req?: IncomingMessage
): string => {
  if (!req?.headers.cookie) {
    return '';
  }
  const rawCookie = req?.headers.cookie
    .split(';')
    .find((c: string) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return '';
  }
  const cookie = rawCookie.split('=')[1];
  return cookie.replace(/%22/g, '"').replace(/%2C/g, ',');
};

export const setCookie: typeof cookie['set'] = (key, value, options) => {
  if (typeof window !== 'undefined') return cookie.set(key, value, options);
  return;
};

export const removeCookie = (key: string, options?: CookieAttributes) => {
  if (typeof window !== 'undefined') cookie.remove(key, options);
};

export const getCookie = (key: string, req?: IncomingMessage) => {
  return typeof window !== 'undefined'
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};
