import ReactPaginate from 'react-paginate';
import { PaginationEventType } from '../../ts/GeneralTypes';
import { ArrowLeftIcon, ArrowRightIcon } from '../UI/icons';
import style from './Pagination.style';

type PaginationProps = {
  onPageChange: (event: PaginationEventType) => void;
  page: number;
  pageCount: number;
};

const Pagination = ({
  page,
  onPageChange,
  pageCount,
}: PaginationProps): JSX.Element => {
  return (
    <ReactPaginate
      forcePage={page}
      breakLabel="..."
      nextLabel={<ArrowRightIcon opacity={0.49} />}
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel={<ArrowLeftIcon opacity={0.49} />}
      renderOnZeroPageCount={() => null}
      containerClassName={style.containerClassName}
      previousClassName={style.previousClassName}
      nextClassName={style.nextClassName}
      pageClassName={style.pageClassName}
      breakClassName={style.pageClassName}
      activeClassName={style.activeClassName}
      pageLinkClassName={style.pageLinkClassName}
    />
  );
};

export default Pagination;
