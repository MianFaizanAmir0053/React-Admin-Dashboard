import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Graph from "../components/Graph";
import BasicTable from "../components/BasicTable";
import Information from "../components/Information";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

function Single() {
  const params = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", params.userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setUser(() => docSnap.data());
        console.log(user);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getUser();
  }, [params.id]);

  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="px-4 grid grid-cols-8 pt-4 gap-4">
          <Information
            name={user.name}
            email={user.email}
            address={user.address}
            phone={user.phone}
            image={user.image}
            country={user.country}
          />
          <Graph />
          <BasicTable />
        </div>
      </div>
    </div>
  );
}

export default Single;
