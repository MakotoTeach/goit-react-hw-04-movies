import moment from 'moment';


const formatDate = (date, mask = 'YYYY') =>{ 
  return moment(date).format(mask);
}

export default formatDate;
