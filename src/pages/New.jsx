import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function New() {
  const submitFormData = async ({ data }) => {
    const User = await createUserWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
    );
    const Doc = await setDoc(doc(db, "users", User.user.uid), {
      ...data,
      timeStamp: serverTimestamp(),
    });
  };

  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className=" shadow w-full text-slate-400 font-semibold text-lg m-4 max-w-max rounded-sm p-4 ">
          Add New User
        </div>
        <Form submitFormDataHandler={submitFormData} />
      </div>
    </div>
  );
}

export default New;
