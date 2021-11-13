const express = require("express");
const app = express();

app.use("/", (req, res) => {
  const data = {
    title: "タイトル",
    items: [
      { name: "ABC" },
      { name: "DEF" },
      { name: "GHI" }
    ]
  };
  res.json(data);
});

// ポート：8080
app.listen(8080);
