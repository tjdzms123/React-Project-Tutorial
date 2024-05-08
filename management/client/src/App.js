import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import Customer from "./components/Customer";
import { useEffect, useState } from "react";
import api from "./axios/api";
import { styled } from "@mui/system";

function App(props) {
  const [customers, setCustomers] = useState([]);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    try {
      const { data } = await api.get("/api/customers");
      setCustomers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInterval(progress(), 20);
  }, []);

  const progress = () => {
    if (completed >= 100) {
      setCompleted(0);
    } else {
      setCompleted(completed + 1);
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
          {customers?.length > 0 ? (
            customers?.map((c) => <Customer key={c.id} customers={c} />)
          ) : (
            <TableRow variant="determinate">
              <StyledProgress value={completed} />
            </TableRow>
          )}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  overflowX: "auto",
}));

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const StyledProgress = styled(CircularProgress)(({ theme }) => ({
  margin: theme.spacing(3),
}));
