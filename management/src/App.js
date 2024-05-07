import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: "1",
    image: "https://picsum.photos/200",
    name: "홍길동",
    birthday: "000101",
    gender: "남자",
    job: "대학생",
  },
  {
    id: "2",
    image: "https://picsum.photos/200",
    name: "김길동",
    birthday: "000202",
    gender: "남자",
    job: "백수",
  },
  {
    id: "3",
    image: "https://picsum.photos/200",
    name: "이길동",
    birthday: "000303",
    gender: "여자",
    job: "간호사",
  },
];

function App() {
  return (
    <div className="flex-center">
      {customers.map((c) => {
        return <Customer key={c.id} customers={c} />;
      })}
    </div>
  );
}

export default App;
