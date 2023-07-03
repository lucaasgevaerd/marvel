import ReactPaginate from 'react-paginate';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { PaginationContainer } from './styles';
import { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    totalPages: number | undefined;
}

export default function Pagination({ setCurrentPage, totalPages = 0 }: PaginationProps) {
    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };

    return (
        <PaginationContainer>
            <ReactPaginate
                pageCount={totalPages || 0}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageLinkClassName="pagination-item"
                breakClassName="pagination-item"
                previousClassName="arrow-previous"
                nextClassName="arrow-next"
                activeLinkClassName="pagination-link-active"
                disabledClassName="arrow-inactive"
                previousLabel={<div className="pagination-arrow-container"><FaAngleLeft /></div>}
                nextLabel={<div className="pagination-arrow-container"><FaAngleRight /></div>}
                onPageChange={handlePageChange}
            />
        </PaginationContainer>
    );
}
