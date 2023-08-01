import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/config";

const getDate = (timeStamp) => {
  return (
    timeStamp.getDate() +
    "/" +
    (timeStamp.getMonth() + 1) +
    "/" +
    timeStamp.getFullYear()
  );
};

export default function BasicTable() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getAllData = async () => {
      let list = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        let dd = { id: doc.id, ...doc.data() };
        list.push(dd);
        setProducts(list);
        console.log(products);
      });
    };
    getAllData();
  }, []);

  return (
    <div className="col-span-8 shadow-md px-5 pb-4 rounded-md bg-white">
      <div className=" text-slate-500 py-4">Latest Transactions</div>
      <TableContainer component={Paper} className="rounded-md">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tracking ID</TableCell>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Amount $</TableCell>
              <TableCell align="left">Payment Method</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">
                  <div className="flex items-center">
                    <img
                      src={`${row.avatar}`}
                      alt=""
                      className="rounded-full object-cover mr-1 w-6 h-6"
                    />
                    <span>{row.calories}</span>
                  </div>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.product}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>

                <TableCell align="left">{row.price}</TableCell>
                <TableCell align="left">
                  <div className="flex">
                    <div
                      className={`${
                        row.method === "Cash"
                          ? "bg-red-100 text-red-600"
                          : "bg-violet-100 text-violet-600"
                      }  p-1 w-fit rounded-md mr-1`}
                    >
                      <span className="font-semibold">{row.method}</span>
                    </div>
                    <div
                      className={`${
                        row.status === "Pending"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }  p-1 w-fit rounded-md`}
                    >
                      pending
                    </div>
                  </div>
                </TableCell>
                <TableCell align="left">
                  {getDate(
                    new Timestamp(
                      row.timeStamp.seconds,
                      row.timeStamp.nanoseconds
                    ).toDate()
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
