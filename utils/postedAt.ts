import formatDate from './formatDate';

const postedAt = (time: string) => {
  const item = formatDate(time, 'd');

  switch (item) {
    case '0':
      return `Posted ${formatDate(time, 'h')} hours ago`;
    case '1':
      return `Posted ${item} day ago`;
    default:
      return `Posted ${item} days ago`;
  }
};

export default postedAt;
