import moment from 'moment';

const formatDate = (value: string, format = 'DD/MM/YYYY') => {
  const result = moment(new Date(value)).format(format);
  if (result === 'Invalid date') {
    return '';
  }

  return result;
};

export default formatDate;
