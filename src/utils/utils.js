import moment from 'moment';

export class UtilsService {
  static formatDate(date, mask = 'YYYY') {
    return moment(date).format(mask);
  }
}
