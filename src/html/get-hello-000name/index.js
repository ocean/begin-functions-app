let begin = require('@architect/functions')

let defaultHTML = `
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

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  let name = req.params.name ? req.params.name : "brave world";
  res({
    html: defaultHTML
  })
}

exports.handler = begin.html.get(route)
