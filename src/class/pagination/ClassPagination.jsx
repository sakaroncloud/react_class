import React from "react";
import { UserItem } from "./UserItem";
import { userLists } from "../../assets/users";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = React.useState(3);

  const ITEM_PER_PAGE = 4
  // 1 page ---- 0,1,2,3
  // 2 page --- 4,5,6,7
  // 3 page --- 8,9,10,11

  const paginatedUsers = userLists.slice(ITEM_PER_PAGE * (currentPage - 1), ITEM_PER_PAGE * currentPage)

  return <div className="space-y-2">
    {paginatedUsers.map((item) => {
      return <UserItem key={item.id} user={item} />;
    })}
    <div className='flex gap-x-2'>
      <button
        className='text-xs border border-gray-300 p-1 rounded cursor-pointer'>Prev</button>

      <button
        className='text-xs border border-gray-300 p-1 rounded cursor-pointer'>Next</button>
    </div>
  </div>;
};
