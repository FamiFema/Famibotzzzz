import http from 'http';

const server = http.createServer((req, res) => {
  res.write("${index2.html}");
  res.end();
}).listen(8080);

export default server