import React from 'react'
import { useState } from 'react'
import { userLists } from '../../assets/users'
import { UserItem } from './UserItem'
import { PreviousNextButtons, RangePaginatedButtons } from './PaginatedButtons'

export const Pagination = () => {
    const ITEM_PER_PAGE = 7

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(userLists.length / ITEM_PER_PAGE)

    const selectedUsers = userLists.slice(ITEM_PER_PAGE * (currentPage - 1), ITEM_PER_PAGE * currentPage)

    return (
        <div className='space-y-2'>
            <div className='space-y-2'>
                {
                    selectedUsers.map((item) => {
                        return (
                            <UserItem key={item.id} user={item} />
                        )
                    })
                }
            </div>
            <PreviousNextButtons currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            <RangePaginatedButtons currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} showFooter={true} />
        </div>
    )
}


