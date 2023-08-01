import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../App.css";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../Firebase/config";

export default function ProductsTable() {
  const getDate = (timeStamp) => {
    let d =
      timeStamp.getDate() +
      "/" +
      (timeStamp.getMonth() + 1) +
      "/" +
      timeStamp.getFullYear();

    return d;
  };

  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const getAllData = async () => {
      let list = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        let dd = {
          id: doc.id,
          ...doc.data(),
          timeStamp: getDate(doc.data().timeStamp.toDate()),
        };
        list.push(dd);
        setProducts(() => list);
        console.log(products);
      });
    };
    doc && getAllData();
  }, []);

  const deleteRow = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    {
      field: "avatar",
      headerName: "Image",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              src={params.row.avatar}
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 180,
    },
    {
      field: "product",
      headerName: "product",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price $",
      width: 100,
    },

    {
      field: "method",
      headerName: "Payment Details",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <div
              className={`${
                params.row.method === "Cash"
                  ? "bg-red-100 text-red-600"
                  : "bg-violet-100 text-violet-600"
              }  p-1 w-fit rounded-md mr-1`}
            >
              <span className="font-semibold">{params.row.method}</span>
            </div>
            <div
              className={`${
                params.row.status === "Pending"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }  p-1 w-fit rounded-md`}
            >
              pending
            </div>
          </>
        );
      },
    },
    {
      field: "timeStamp",
      headerName: "Time",
      width: 130,
    },
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div>
            <Link
              to={params.row.id}
              target="_blank"
              className="hover:bg-violet-600 hover:text-white border border-violet-500 mr-3 text-violet-500 rounded p-1"
            >
              View
            </Link>
            <Link
              onClick={() => deleteRow(params.row.id)}
              className=" hover:bg-red-600 hover:text-white cursor-pointer border border-red-500 text-red-500 rounded p-1"
            >
              Delete
            </Link>
          </div>
        );
      },
    },
  ];

  let rows = [
    {
      id: 8,
      price: 123,
      product: "Iphone 12",
      avatar:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
