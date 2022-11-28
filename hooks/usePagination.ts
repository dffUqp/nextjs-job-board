import { useMemo } from 'react';
import { JobsType } from '../ts/JobsTypes';

export const usePagination = (
  data: JobsType[],
  page: number,
  perPage: number
) =>
  useMemo(() => {
    const itemOffset = (page * perPage) % data.length;
    const pageCount = Math.ceil(data.length / perPage);
    const endOffset = itemOffset + perPage;
    const currentItems = data.slice(itemOffset, endOffset);

    return { pageCount, currentItems };
  }, [data, page, perPage]);
