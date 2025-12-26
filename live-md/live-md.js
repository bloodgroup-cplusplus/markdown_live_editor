const fs = require("fs");
const md = require("markdown-it")();
const chokidar = require("chokidar");
const browserSync = require("browser-sync").create();

function render() {
  const content = fs.readFileSync("pub_sub.md", "utf8");
  const html = `
    <html>
      <head><meta charset="UTF-8"><title>Markdown Preview</title></head>
      <body>${md.render(content)}</body>
    </html>`;
  fs.writeFileSync("index.html", html);
}

render();
browserSync.init({ server: ".", files: ["index.html"] });

chokidar.watch("pub_sub.md").on("change", () => {
  render();
  browserSync.reload();
});
