import USGSDatasource from './datasource';
import {USGSDatasourceQueryCtrl} from './query_ctrl';

// Exports the modal window
import './find_site_modal';

class USGSConfigCtrl {
  static templateUrl = 'partials/config.html';
}

class USGSQueryOptionsCtrl {
  static templateUrl = 'partials/query.options.html';
}

export {
  USGSDatasource as Datasource,
  USGSDatasourceQueryCtrl as QueryCtrl,
  USGSConfigCtrl as ConfigCtrl,
  USGSQueryOptionsCtrl as QueryOptionsCtrl,
};
