"use client";
import React from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import InputUser from "../components/InputUser";
import { deleteUser } from "../redux/userSlice";

export default function CreateUser() {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch()
  const handleDelete=(id:any)=>{
        dispatch(deleteUser({id:id}))
  }

  return (
    <div>
      <h2 className="bg-sky-500 text-center font-bold text-3xl py-3">
        Todo Application
      </h2>
      <Container>
        
        <InputUser />
        <table className="min-w-full bg-white border border-gray-200 mt-10">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.id} className="border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm ">
                  <button onClick={()=>handleDelete(user.id)} className="text-blue-600 hover:text-blue-900 font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
}
