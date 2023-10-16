const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});
/*const server = http.createServer((req, res) => { ... });
  http modülündeki createServer fonksiyonu, bir HTTP sunucusu oluşturur.
  İki parametre alır:
  req (request): İstemciden gelen isteği temsil eden nesne.
  res (response): İstemciye gönderilecek yanıtı oluşturmak için kullanılan nesne.*/

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); //burayı hiç anlamadım.
