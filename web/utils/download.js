function download(url, filename) {
  const el = document.createElement("a");
  el.href = url;
  el.download = filename;
  el.click();
}

function test() {
  console.log("hello world");
}
