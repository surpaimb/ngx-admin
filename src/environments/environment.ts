/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_URL: 'http://back.tmp',
  TOKEN_NAME: 'token',
  DB_DATABAS: 'caiyun.db',
  LOCAL_URL: 'http://localhost:8100/',
  OPENID_NAME: 'openid',
  NEXTURL_NAME: 'login_target_url_name',
  WECAHT_PAY_URL: 'https://api.youshui.ren',
  UPLOAD_IMAGE_URL: 'http://back.tmp',
  WECHAT_JSSDK_URL: 'http://res.wx.qq.com/open/js/jweixin-1.2.0.js',
  CYL_CLIENT: 'web',
};
