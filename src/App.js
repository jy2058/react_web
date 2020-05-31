import React from "react";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
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
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
