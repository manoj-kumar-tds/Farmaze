import React from "react";
import { ContentHeader, Header } from "../../Components/header";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Orders() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-ful">
      <ContentHeader />
      <Header />
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12 d-flex align-items-center justify-content-evenly">
                <LinkTab
                  label="Orders"
                  className="nav-button-section"
                  href="/orders"
                />
                <LinkTab
                  label="Cart"
                  className="nav-button-section"
                  href="/cart"
                />
                <LinkTab
                  label="Invoices"
                  className="nav-button-section"
                  href="/invoices"
                />
                <LinkTab
                  label="Analytics"
                  className="nav-button-section"
                  href="/analytics"
                />
              </div>
            </div>
          </div>
        </Tabs>
      </Box>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
    <h3>Products</h3>
          </div>
        <Stack spacing={2}>
        <Pagination count={10} showFirstButton showLastButton />
      </Stack>
          <div className="col-lg-12">
            {value === 0 && (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                      <StyledTableCell align="right">Calories</StyledTableCell>
                      <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                      <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                      <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
            {value === 1 && <div>Cart Content</div>}
            {value === 2 && <div>Invoices Content</div>}
            {value === 3 && <div>Analytics Content</div>}
          </div>
        </div>
      </div>
    </div>
  );
}