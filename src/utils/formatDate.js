import moment from 'moment'
import localization from 'moment/locale/pl'

const formatDate = date =>
  moment(date)
    .locale('pl', localization)
    .format('LL')

export default formatDate
