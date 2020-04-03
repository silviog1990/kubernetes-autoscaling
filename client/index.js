const http = require("http");
let pods = [];
for (let index = 0; index < 500; index++) {
  setTimeout(() => {
    http.get("http://192.168.99.100:30000", res => {
      let output = "";
      res.on("data", chunk => {
        output += chunk;
      });

      res.on("end", () => {
        const podfound = pods.filter(pod => pod === output);
        if (podfound.length === 0) {
          pods = [...pods, output];
          console.log(output);
        }
      });
    });
  }, 250);
}
