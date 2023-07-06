import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein, method, status) {
  return { name, calories, fat, carbs, protein, method, status };
}

const rows = [
  createData(
    1242343,
    "Playsation 5",
    "John Smith",
    "1 March",
    2000,
    "Cash on Delivery",
    "Approved"
  ),
  createData(
    26347234,
    "Redragon S101",
    "John Smith",
    "1 March",
    4030,
    "Online Payment",
    "Pending"
  ),
  createData(
    5638739,
    "Iphone 14",
    "John Smith",
    "1 March",
    6000,
    "Cash on Delivery",
    "Approved"
  ),
  createData(
    673689,
    "Razer Blade 15",
    "John Smith",
    "1 March",
    1200,
    "Cash on Delivery",
    "Pending"
  ),
  createData(
    979781,
    "ASUS ROG Strix",
    "John Smith",
    "1 March",
    7500,
    "Online Payment",
    "Pending"
  ),
];

export default function BasicTable() {
  return (
    <div className="col-span-8 shadow-md px-5 pb-4 rounded-md bg-white">
      <div className=" text-slate-500 py-4">Latest Transactions</div>
      <TableContainer component={Paper} className="rounded-md">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Customer</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Payment Method</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">
                  <div className="flex items-center">
                    <img
                      src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
                      alt=""
                      className="rounded-full object-cover mr-1 w-6 h-6"
                    />
                    <span>{row.calories}</span>
                  </div>
                </TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
                <TableCell align="left">{row.method}</TableCell>
                <TableCell align="left">
                  <div
                    className={`${
                      row.status !== "Pending"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }  p-1 w-fit rounded-md`}
                  >
                    {row.status}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
