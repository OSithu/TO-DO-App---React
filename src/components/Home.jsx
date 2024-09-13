import React from "react";
import Todo from "./Todo";
import { useAuth } from "./AuthContext";

export default function Home() {
  const { currentUser } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center p-8 pl-96">
      <div className="flex w-full max-w-4xl items-center justify-between">
        <div className="text-left mr-6">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Welcome {currentUser.name} !{" "}
          </h2>
          <p className="text-xl font-sans">Add to Save,</p>
          <p className="text-xl font-sans">Save to Read,</p>
          <p className="text-xl font-sans">Read to Remember...</p>
        </div>

        <div className="ml-0" style={{ width: "700px" }}>
          <Todo />
        </div>
      </div>
    </div>
  );
}
