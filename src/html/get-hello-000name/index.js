let begin = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  let name = (req.params.name.length > 0) ? req.params.name : "brave world"
  let responseHtml = `
    <!doctype html>
    <html lang=en>
      <head>
        <meta charset=utf-8>
        <title>Hi!</title>
      </head>
      <body style="font-family: sans-serif;">
        <h1>Hello there ${name} !</h1>
      </body>
    </html>
  `

  res({
    html: responseHtml
  })
}

exports.handler = begin.html.get(route)
