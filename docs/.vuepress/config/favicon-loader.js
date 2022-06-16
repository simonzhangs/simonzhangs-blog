const MarkdownIt = require("markdown-it");

module.exports = function (source) {
  const options = this.query || {};
  const md = new MarkdownIt({
    html: true,
    ...options,
  });
  let html = md.render(source);
  let htmlList = html.replace(/<a/g, "$*(<a").split("$*(");
  htmlList = htmlList
    .map((item) => {
      //TODO: style样式的确定
      if (item.indexOf("<a") !== -1) {
        let url = item.match(/href="(.*?)"/)[1];
        url = new URL(url);
        let host = url.hostname;
        item = item.replace(
          />/,
          ` target="_blank"><img src="https://${host}/favicon.ico" style="width:24px;heigth:24px"/>`
        );
        return `${item}`;
      }
    })
    .join("");
  html = `module.exports = ${JSON.stringify(htmlList)}`;
  this.callback(null, html);
};
