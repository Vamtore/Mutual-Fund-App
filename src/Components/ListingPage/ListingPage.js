import React from "react";
import { TextField } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";
const columns = [{ id: "name", label: "Mutual Fund Name", minWidth: 170 }];

function createData(name) {
  return { name };
}

const rows = [
  createData("ICICI Prudential US Bluechip Equity Fund - IDCW"),
  createData("SBI MAGNUM DEBT FUND SERIES - 60 DAYS - 2 - DIVIDEND"),
  createData("HDFC Balanced Fund - Growth Option"),
  createData(
    "Axis All Seasons Debt Fund of Funds - Regular Plan - Regular Dividend Option"
  ),
  createData("Tata Long Term Debt Fund - Regular Plan - Quarterly Dividend"),
];

export default function ListingPage() {
  const history = useHistory();
  const profileadd = () => {
    history.push("/userprofile");
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100%",
        textAlign: "right",
        marginTop: "5%",
      }}
    >
      <div
        onCick={profileadd}
        style={{
          marginBottom: "5%",
          textAlign: "center",
          background: "blue",
          marginLeft: "0px",
          width: "100px",
          height: "20px",
          borderRadius: "20px",
          padding: "10px",
        }}
      >
        User Profile
      </div>

      <TextField
        sx={{ marginBottom: "40px" }}
        label="Search input"
        type="search"
      />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
}
