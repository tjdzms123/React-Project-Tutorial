import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Customer from "./components/Customer";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: (theme) => theme.spacing(3),
  overflowX: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const customers = [
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
];

function App() {
  return (
    <StyledPaper>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((c) => (
            <Customer key={c.id} customers={c} />
          ))}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;
