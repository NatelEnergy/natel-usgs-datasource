import {USGSDatasource} from './datasource';
import {USGSDatasourceQueryCtrl} from './query_ctrl';

class USGSConfigCtrl {
  templateUrl = 'partials/config.html';
}

class USGSQueryOptionsCtrl {
  templateUrl = 'partials/query.options.html';
}

export {
  USGSDatasource as Datasource,
  USGSDatasourceQueryCtrl as QueryCtrl,
  USGSConfigCtrl as ConfigCtrl,
  USGSQueryOptionsCtrl as QueryOptionsCtrl
};
