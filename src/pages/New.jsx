import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import ProdForm from "../components/ProdForm";
import { useNavigate } from "react-router-dom";

function New({ type }) {
  const productsCollectionRef = collection(db, "products");
  const navigate = useNavigate();

  const user = auth.currentUser;
  console.log(user, "user");
  const submitFormData = async ({ data }) => {
    try {
      console.log(data, "data");
      if (type === "user") {
        const User = await createUserWithEmailAndPassword(
          auth,
          data?.email,
          data?.password
        );
        const Doc = await setDoc(doc(db, "users", User.user.uid), {
          ...data,
          timeStamp: serverTimestamp(),
        });
      } else {
        await setDoc(doc(productsCollectionRef), {
          ...data,
          email: user?.email,
          timeStamp: serverTimestamp(),
        });
        console.log(data, "data");
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className=" shadow w-full text-slate-400 font-semibold text-lg m-4 max-w-max rounded-sm p-4 ">
          Add New {type === "user" ? "User" : "Product"}
        </div>
        {type === "user" ? (
          <Form submitFormDataHandler={submitFormData} />
        ) : (
          <ProdForm submitFormDataHandler={submitFormData} />
        )}
      </div>
    </div>
  );
}

export default New;
