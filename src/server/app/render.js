import webpackAssets from "../../config/webpack-assets"

export default function handleRender(req, res, next) {
  res.end(renderHtml())
}

function renderHtml(body = "", styleTags, preloadedState = {}, global = {}, css) {
  return `
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>
        <div id="app">${body}</div>
        <script src="${webpackAssets.vendor.js}"></script>
        <script src="${webpackAssets.app.js}"></script>
      </body>
    </html>
  `.replace(/\s\s+/g, "")
}
