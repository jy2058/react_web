const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "다음",
      birthday: "123333",
      gender: "여자",
      job: "직장인",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "네이버",
      birthday: "122824",
      gender: "여자",
      job: "프로그래머",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "카카오",
      birthday: "212321",
      gender: "여자",
      job: "학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
