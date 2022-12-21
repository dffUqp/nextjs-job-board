const PaginationStyle = {
  containerClassName: [
    'flex justify-center gap-2 max-w-[515px] w-full bg-white font-bold rounded-xl text-bold text-gray text-xl',
    'sm:text-sm sm:w-full shadow-main sm:h-[40px]',
  ].join(' '),

  previousClassName: [
    'flex items-center p-4 relative text-gray mr-auto',
    'sm:hidden',
    "after:content-[''] after:absolute after:right-0 after:w-[1.3px] after:h-[35px] after:bg-gray after:opacity-50",
  ].join(' '),

  nextClassName: [
    'flex items-center p-4 text-gray relative ml-auto',
    'sm:hidden',
    'after:content-[""] after:absolute after:left-0 after:w-[1.3px] after:h-[35px] after:bg-gray after:opacity-50',
  ].join(' '),

  pageClassName: ['w-[31px] relative '].join(' '),
  pageLinkClassName: ['flex items-center justify-center w-full h-full'].join(
    ' '
  ),
  activeClassName: [
    'text-blue after:content-[""] after:absolute after:w-full after:h-[1px] after:bottom-0 after:bg-blue',
  ].join(' '),
};

export default PaginationStyle;
