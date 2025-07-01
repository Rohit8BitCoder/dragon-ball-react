import React from 'react';

export default function Pagination ({ currentPage, totalItems, itemsPerPage, onPageChange}) {
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];

  for (let i= 1 ; i<=totalPages;i++){
    pageNumbers.push(i);
  }



  return(
    <div className='flex justify-center items-center gap-2 w-full mt-4 mb-4'>

      <button
          onClick={() => onPageChange(Math.max(currentPage -1 , 1))}
          disabled={currentPage === 1} 
          className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50">
         Previous
         </button>

         {pageNumbers.map((number)=>(
          <button
            key={number}
            onClick={()=>onPageChange(number)}
            className={`mx-1 px-4 py-2 rounded ${currentPage===number ? "bg-blue-500 text-white" : "bg-white"
            }`}
            >
              {number}
          </button>
         ))}

         <button 
          onClick={()=> onPageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage ===totalPages}
          className='px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50'
         >
              Next
         </button>
      </div>
    )
}