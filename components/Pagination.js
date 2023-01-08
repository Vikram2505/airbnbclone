import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div>
      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="...."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={pageCount}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        hrefAllControls
      />
    </div>
  );
};

export default Pagination;
