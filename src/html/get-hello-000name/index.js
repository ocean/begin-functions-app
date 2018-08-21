let begin = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  let name = req.params.name || "you there";
  let responseHTML = `
    <!doctype html>
    <html lang=en>
      <head>
        <meta charset=utf-8>
        <title>Hi!</title>
      </head>
      <body style="font-family: sans-serif;">
        <h1>Hello ${name}</h1>
      </body>
    </html>
  `
  res({
    html: responseHTML
  })
}

exports.handler = begin.html.get(route)
