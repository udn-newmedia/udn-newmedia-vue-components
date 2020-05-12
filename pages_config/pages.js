const contentGenerator = require('./utils/contentGenerator.js')

// /* seo內容文件 */
const monitorCode = contentGenerator('../contents/monitor.html');
const authorContent = contentGenerator('../contents/author.html');
const mainContent = contentGenerator('../contents/main_content.html');

/* 正式路徑 */
// const mainPage = 'https://udn.com/newmedia/MAIN_PAGE/';
// const pathRoot = process.env.NODE_ENV === 'production' ? 'https://udn.com/newmedia/MAIN_PAGE/SUB_PAGE/' : './';

/* 測試路徑 */
const mainPage = 'http://nmdap.udn.com.tw/test/MAIN_PAGE/';
const pathRoot = process.env.NODE_ENV === 'production' ? 'http://nmdap.udn.com.tw/test/MAIN_PAGE/SUB_PAGE/' : './';

module.exports = {
  publicPath: pathRoot,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'THE PROJECT TITLE',
      description: 'THE PROJECT DESCRIPTION',
      keywords: 'THE PROJECT KEYWORD',
      author: 'THE JSON-LD AUTHOR',
      datePublished: '2020-06-08T07:00:00+08:00',
      dateModified: '2020-06-08T07:00:00+08:00',
      MONITOR: monitorCode,
      CONTENT: mainContent + authorContent,
      pageUrl: pathRoot,
      mainPage,
      theme: '#ffffff'
    },
  }
}