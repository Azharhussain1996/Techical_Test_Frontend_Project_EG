import React from "react";

const CustomPagination = ({
  totalPages,
  currentPage,
  onChangePage,
  pageSize,
  onChangePageSize,
}) => {
  return (
    <div className="d-block d-md-flex justify-content-between align-items-center mt-3">
      <div className="d-flex align-items-center mb-2">
        <label className="me-2">Rows per page:</label>
        <select
          className="form-select w-auto"
          value={pageSize}
          onChange={(e) => onChangePageSize(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
        </select>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-2">
        <div className="me-3">
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>

        <nav>
          <ul className="pagination mb-0">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => onChangePage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => onChangePage(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => onChangePage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CustomPagination;
