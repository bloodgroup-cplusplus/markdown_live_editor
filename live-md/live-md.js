const fs = require("fs");
const md = require("markdown-it")();
const chokidar = require("chokidar");
const browserSync = require("browser-sync").create();

function render() {
  const content = fs.readFileSync("webhooks_markdown.md", "utf8");
  const html = `
    <html>
      <head><meta charset="UTF-8"><title>Markdown Preview</title></head>
      <body>${md.render(content)}</body>
    </html>`;
  fs.writeFileSync("index.html", html);
}

render();
browserSync.init({ server: ".", files: ["index.html"] });

chokidar.watch("webhooks_markdown.md").on("change", () => {
  render();
  browserSync.reload();
});
