import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/config";

export default function UserTable() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getAllData = async () => {
      let list = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        let dd = { id: doc.id, ...doc.data() };
        list.push(dd);
        setUsers(list);
        console.log(users);
      });
    };
    getAllData();
  }, []);

  const deleteRow = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "User",
      headerName: "User",
      width: 60,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <img
              className="w-7 h-7 mr-2 object-cover rounded-full"
              src={params.row.image}
              alt="avatar"
            />
            <span>{params.row.User}</span>
          </div>
        );
      },
    },

    {
      field: "email",
      headerName: "Email",
      width: 170,
    },
    {
      field: "address",
      headerName: "address",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 70,
      renderCell: (params) => {
        return (
          <div
            className={`${
              params.row.status !== "Pending"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-600"
            }  p-1 w-fit rounded-md`}
          >
            {params.row.status}
          </div>
        );
      },
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
      email: "Frances@gmail.com",
      User: "Rossini",
      age: 36,
      status: "active",
      avatar:
        "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={users}
        // rows={rows}
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
