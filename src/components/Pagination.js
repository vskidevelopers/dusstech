import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({items, itemsPerPage, pageCount, setItemOffset}) => {
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="»"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="«"
            renderOnZeroPageCount={null}
            marginPagesDisplayed={2}
            className="pagination justify-content-center justify-content-lg-end"
            pageClassName="page-item"
            nextClassName="page-item"
            previousClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeLinkClassName="active"
        />
    )
}

export default Pagination