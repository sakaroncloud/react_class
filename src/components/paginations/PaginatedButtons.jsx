import React from 'react'

export const PreviousNextButtons = ({
  currentPage,
  setCurrentPage,
  totalPages,
  showFooter
}) => {
  return (
    <div className='space-y-2'>

      {/* Only Previous and Next */}
      <div className='flex gap-x-2'>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className='text-xs border border-gray-300 p-1 rounded cursor-pointer'>Prev</button>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='text-xs border border-gray-300 p-1 rounded cursor-pointer'>Next</button>
      </div>

      {showFooter && (
        <div className='text-sm text-gray-600'> {currentPage} of {totalPages} pages</div>
      )}
    </div>
  )
}

export const RangePaginatedButtons = ({
  currentPage,
  setCurrentPage,
  totalPages,
  showFooter
}) => {

  return (
    <div className='space-y-2'>
      <div className='flex flex-wrap gap-0.5'>
        {Array.from({ length: totalPages }, (_, i) => {
          if (totalPages < 4) {
            return (
              <RangePaginatedSingleButton
                key={i}
                currentPage={currentPage}
                i={i}
                setCurrentPage={setCurrentPage}
              />
            )
          }
          else {
            if (i < 4) {
              return (
                <RangePaginatedSingleButton
                  key={i}
                  currentPage={currentPage}
                  i={i}
                  setCurrentPage={setCurrentPage}
                />
              )
            }
            else if (i == totalPages - 1 || i == totalPages - 2) {
              return (
                <RangePaginatedSingleButton
                  key={i}
                  currentPage={currentPage}
                  i={i}
                  setCurrentPage={setCurrentPage}
                />
              )
            }
            else if (i == totalPages - 3) {
              return <span className='px-1' key={i}>...</span>
            }
          }
        })}
      </div>
      {showFooter && (
        <div className='text-sm text-gray-600'> {currentPage} of {totalPages} pages</div>
      )}
    </div>
  )
}

export const RangePaginatedSingleButton = ({ currentPage, i, setCurrentPage }) => {
  return (
    <button
      key={i}
      onClick={() => setCurrentPage(i + 1)}
      className={`text-xs border border-gray-300 p-1 w-fit min-w-[24px] rounded cursor-pointer ${currentPage === i + 1 ? 'bg-gray-900 text-white' : ''}`}>
      {i + 1}
    </button>
  )
}