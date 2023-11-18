import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

export const Pagination = ({ limit, countPages, currentPage, onChangePage }) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={limit}
    pageCount={countPages}
    forcePage={currentPage - 1}
  />
);

