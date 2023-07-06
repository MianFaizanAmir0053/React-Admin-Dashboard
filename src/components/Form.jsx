import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ImageIcon from "@mui/icons-material/Image";
import { useEffect, useState } from "react";
import { storage } from "../Firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Form({ submitFormDataHandler }) {
  const [file, setFile] = useState("");
  const [uploadBtn, setUploadBtn] = useState(false);
  const initial = {
    name: "",
    username: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    country: "",
    image: "",
  };
  const [data, setData] = useState(initial);

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setData((prev) => {
              return { ...prev, image: downloadURL };
            });
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  return (
    <div className="shadow ml-4 overflow-hidden">
      <div className="w-full flex mx-auto  min-[768px]:flex-row flex-col max-w-4xl">
        <div className="text-center m-auto">
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt=""
              className="rounded-full w-[15rem] aspect-square object-cover"
            />
          ) : (
            <div className="p-10 bg-slate-100  rounded-full">
              <ImageIcon />
            </div>
          )}
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
          className="grid grid-cols-2 mx-auto w-full items-center place-items-center"
        >
          {!uploadBtn && (
            <div
              className=" cursor-pointer"
              onClick={() => setUploadBtn((prev) => !prev)}
            >
              Image:
              <UploadFileIcon />
            </div>
          )}
          {uploadBtn && (
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          )}
          <TextField
            id="filled-basic"
            key={1}
            label="Name"
            variant="filled"
            value={data.name}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, name: e.target.value };
              })
            }
          />
          <TextField
            id="filled-basic"
            key={2}
            label="Username"
            variant="filled"
            value={data.username}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, username: e.target.value };
              })
            }
          />
          <TextField
            id="filled-basic"
            key={3}
            label="Phone"
            type="number"
            variant="filled"
            value={data.phone}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, phone: e.target.value };
              })
            }
          />
          <TextField
            id="filled-basic"
            key={4}
            label="Address"
            variant="filled"
            value={data.address}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, address: e.target.value };
              })
            }
          />
          <TextField
            id="filled-basic"
            key={5}
            label="Email"
            type="email"
            variant="filled"
            value={data.email}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
          />
          <TextField
            id="filled-basic"
            key={6}
            label="Password"
            variant="filled"
            type="password"
            value={data.password}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
          />
          <TextField
            id="filled-basic"
            key={7}
            label="Country"
            variant="filled"
            value={data.country}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, country: e.target.value };
              })
            }
          />
          <a
            onClick={() => {
              submitFormDataHandler({ data, file });
              setData(initial);
              setFile("");
            }}
            href="#"
            className="text-center col-span-2 max-w-[10rem] rounded-sm  bg-teal-700 text-white py-2 "
          >
            Submit
          </a>
        </Box>
      </div>
    </div>
  );
}
