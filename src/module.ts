import ChangeMyNameDatasource from './datasource';
import {ChangeMyNameQueryCtrl} from './query_ctrl';
import {ChangeMyNameConfigCtrl} from './config_ctrl';

class ChangeMyNameAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export {
  ChangeMyNameDatasource as Datasource,
  ChangeMyNameQueryCtrl as QueryCtrl,
  ChangeMyNameConfigCtrl as ConfigCtrl,
  ChangeMyNameAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};
