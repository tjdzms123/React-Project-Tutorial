const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: "1",
      image: "https://picsum.photos/64",
      name: "홍길동",
      birthday: "000101",
      gender: "남자",
      job: "대학생",
    },
    {
      id: "2",
      image: "https://picsum.photos/64",
      name: "김길동",
      birthday: "000202",
      gender: "남자",
      job: "백수",
    },
    {
      id: "3",
      image: "https://picsum.photos/64",
      name: "이길동",
      birthday: "000303",
      gender: "여자",
      job: "간호사",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
