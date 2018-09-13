///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import coreModule from 'app/core/core_module';

export default class FindUSGSSiteModal {
  /** @ngInject */
  constructor(private $scope) {
    console.log('TODO... find USGS sites with', this);
  }

  onSave() {
    console.log('TODO... update the site ID');
    this.dismiss();
  }

  dismiss() {
    this.$scope.$parent.dismiss();
  }
}

export function findUSGSSiteModalDirective() {
  return {
    restrict: 'E',
    templateUrl: 'public/plugins/natel-usgs-datasource/partials/find_site_modal.html',
    controller: FindUSGSSiteModal,
    bindToController: true,
    transclude: true,
    controllerAs: 'ctrl',
    scope: {
      target: '<', // The difference to '=' is that the bound properties are not watched
      datasource: '<',
    },
  };
}

coreModule.directive('findUsgsSiteModal', findUSGSSiteModalDirective);
