import React from "react";

export const UserItem = ({ user }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-3">
      <div className="text-xs">
        <div className="flex">
          <div className="font-medium mr-1">ID: </div>
          <div className="text-gray-500">{user.id} </div>
        </div>
        <div className="flex">
          <div className="font-medium mr-1">Name: </div>
          <div className="text-gray-500">
            {user.firstName} {user.lastName}
          </div>
        </div>
        <div className="flex">
          <div className="font-medium mr-1">Username: </div>
          <div className="text-gray-500">{user.username}</div>
        </div>
        <div className="flex">
          <div className="font-medium mr-1">Email: </div>
          <div className=" text-gray-500"> {user.email}</div>
        </div>
      </div>
    </div>
  );
};
