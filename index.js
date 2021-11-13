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

// ポート：3000
app.listen(3000);
