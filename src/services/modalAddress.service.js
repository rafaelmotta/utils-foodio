let modalAddress = ($modal, $templateCache) => {
  return new class ModalAddress {
    open(address, meCtrl = true){
      return $modal.open({
        template: $templateCache.get('/templates/modal-address.html'),
        controller: 'ModalAddressCtrl as ctrl',
        windowClass: 'modal-address',
        resolve: {
          addressResolved: () => {
            return address;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('modalAddress', modalAddress);