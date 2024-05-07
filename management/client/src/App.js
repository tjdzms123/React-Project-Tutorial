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
import { useEffect, useState } from "react";
import api from './axios/api'

function App() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    try {
      const res = await api.get("/api/customers");
      // setCustomers(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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

const StyledPaper = styled(Paper)({
  width: "100%",
  marginTop: (theme) => theme.spacing(3),
  overflowX: "auto",
});

const StyledTable = styled(Table)({
  minWidth: 1080,
});
