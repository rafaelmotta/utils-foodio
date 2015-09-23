'use strict';

var app = angular.module('foodbox.utils', []);
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/back-button.html', '<a href="javascript:history.back()" class="btn btn-default">Voltar</a>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/box.html', '<div class="box-container">\n' + '  <div class="box-header" ng-hide="hideHeader">\n' + '    <h2>\n' + '      <i class="icon icon-{{ icon }}"></i>\n' + '      {{ title }}\n' + '    </h2>\n' + '  </div>\n' + '  <div ng-transclude class="box-content {{ sizeClass }} {{ hideHeader ? \'box-hide-header\' : \'\' }}">\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/experience-points.html', '<div class="experience-points-container">\n' + '  <div class="total-points"><i class="icon icon-shirtsinbulk"></i>3000 pontos</div>\n' + '  <div class="progress">\n' + '    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n' + '      <span class="sr-only">60% Complete</span>\n' + '    </div>\n' + '  </div>\n' + '  <div class="level-container">\n' + '    <div class="current-level">\n' + '      Level 5\n' + '    </div>\n' + '    <div class="next-level">\n' + '      <span>165 pontos para</span>\n' + '      Level 6\n' + '    </div>\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/form-group.html', '<div class="form-group" >\n' + '  <div ng-if="!vertical">\n' + '    <label for="{{ id }}" class="col-sm-4 control-label">{{ label }}\n' + '      <span ng-show="required" tooltip="Campo obrigatório" class="required-marker">*</span>\n' + '    </label>\n' + '    <div class="col-sm-8" ng-transclude></div>\n' + '  </div>\n' + '  <div ng-if="vertical">\n' + '    <label for="{{ id }}" class="control-label">{{ label }}</label>\n' + '    <div ng-transclude></div>\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/limit.html', '<p class="help-block">Restando <strong>{{ maxlength - length }}</strong> caracteres</p>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/map.html', '<div class="map-canvas"></div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-address.html', '<div class="modal-header">\n' + '  <h4 class="modal-title" ng-hide="address.id">Adicionar</h4>\n' + '  <h4 class="modal-title" ng-show="address.id">Editar</h4>\n' + '</div>\n' + '<div class="modal-body clearfix">\n' + '  <form name="addressForm" class="form-horizontal" ng-submit="ctrl.submit()">\n' + '    <form-group label="Nome" required="true">\n' + '      <input type="text" tabindex="1" ng-model="address.name" autofocus />\n' + '    </form-group>\n' + '    <form-group label="CEP" required="true">\n' + '      <input type="text" tabindex="2" ng-model="address.zipcode" required mask="99999-999" auto-unmask="true" zipcode zipcode-model="address" />\n' + '    </form-group>\n' + '    <form-group label="Cidade" required="true">\n' + '      <input type="text" tabindex="3" ng-model="address.city.name" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Bairro" required="true">\n' + '      <input type="text" tabindex="4" ng-model="address.neighborhood.name" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Rua" required="true">\n' + '      <input type="text" tabindex="5" ng-model="address.street" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Número" required="true">\n' + '      <input type="text" tabindex="6" ng-model="address.number" required />\n' + '    </form-group>\n' + '    <form-group label="Complemento">\n' + '      <textarea ng-model="address.complement" tabindex="7" rows="3"></textarea>\n' + '    </form-group>\n' + '    <div class="modal-footer">\n' + '      <button class="btn btn-success">Salvar</button>\n' + '      <button class="btn btn-default" type="button" ng-click="ctrl.close()">Cancelar</button>\n' + '    </div>\n' + '  </form>\n' + '</div>\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-custom-period.html', '<div class="modal-header">\n' + '  <h4 class="modal-title">Escolher período</h4>\n' + '</div>\n' + '<div class="modal-body clearfix">\n' + '  <div class="row">\n' + '    <div class="col-md-6" ng-click="ctrl.open(\'fromDate\')">\n' + '      <div class="input-group">\n' + '        <input ng-model="period.fromDate" datepicker-options="options" datepicker-popup="dd/MM/yyyy" is-open="status.fromDate" disabled />\n' + '        <div class="input-group-addon">\n' + '          <i class="icon icon-calendar"></i>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '    <div class="col-md-6" ng-click="ctrl.open(\'toDate\')">\n' + '      <div class="input-group">\n' + '        <input ng-model="period.toDate" datepicker-options="options" datepicker-popup="dd/MM/yyyy" is-open="status.toDate" disabled />\n' + '        <div class="input-group-addon">\n' + '          <i class="icon icon-calendar"></i>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '  </div>\n' + '  <hr />\n' + '  <div class="row">\n' + '    <div class="col-md-6">\n' + '      <timepicker ng-model="period.fromTime" readonly-input="true" hour-step="1" minute-step="15" show-meridian="false" prevent-table="true" style="margin: 0 auto;"></timepicker>\n' + '    </div>\n' + '    <div class="col-md-6">\n' + '      <timepicker ng-model="period.toTime" readonly-input="true" hour-step="1" minute-step="15" show-meridian="false" prevent-table="true" style="margin: 0 auto;"></timepicker>\n' + '    </div>\n' + '  </div>\n' + '</div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-default" type="button" ng-click="ctrl.close()">Cancelar</button>\n' + '  <button class="btn btn-success" ng-click="ctrl.next()">Próximo</button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-product.html', '<div class="modal-header">\n' + '  <button type="button" class="close" data-dismiss="modal" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' + '  <div class="modal-title">\n' + '    <i class="icon icon-shopping-cart"></i>\n' + '    {{ product.name }}\n' + '  </div>\n' + '  <div class="product-total-price">\n' + '    {{ cartItem.total | currency: "R$" }}\n' + '  </div>\n' + '</div>\n' + '\n' + '<div class="modal-body clearfix">\n' + '\n' + '  <aside class="pull-left">\n' + '    <img class="product-image img-thumbnail" ng-src="http://lorempixel.com/280/280/food/" width="280" height="280" alt="Foto do produto com nome {{ product.name }}">\n' + '    <p class="product-description">\n' + '      <i class="icon icon-shopping-cart"></i>\n' + '      {{ product.name }}\n' + '    </p>\n' + '    <p class="product-description">\n' + '      <i class="icon icon-info-circle"></i>\n' + '      {{ product.description }}\n' + '    </p>\n' + '    <p class="product-description">\n' + '      <i class="icon icon-money"></i>\n' + '      A partir de {{ product.price | currency: "R$" }}\n' + '    </p>\n' + '    <p class="product-sps">\n' + '      <i class="icon icon-trophy"></i>\n' + '      Dá direito a <b><a href="">30 sps</a></b>\n' + '    </p>\n' + '  </aside>\n' + '\n' + '  <div class="product-options pull-right">\n' + '\n' + '    <label for="cart-item-amount">Selecione a quantidade:</label>\n' + '    <select id="cart-item-amount" ng-model="cartItem.amount" ng-options="i as i for i in [1,2,3,4,5,6,7,8,9,10]"></select>\n' + '\n' + '    <hr ng-show="product.addon_categories.length > 0">\n' + '\n' + '    <div ng-repeat="addonCategory in product.addon_categories" class="addon-categories-list">\n' + '\n' + '      <div class="addon-category-name">\n' + '        {{ addonCategory.name }}\n' + '        <small ng-show="addonCategory.max_itens > 0">\n' + '          Escolha até {{ addonCategory.max_itens }}\n' + '          <span ng-show="addonCategory.max_itens > 1">\n' + '            itens\n' + '          </span>\n' + '          <span ng-show="addonCategory.max_itens === 1">\n' + '            item\n' + '          </span>\n' + '        </small>\n' + '        <small ng-show="addonCategory.max_itens === 0">\n' + '          Escolha quantos itens você desejar\n' + '        </small>\n' + '      </div>\n' + '\n' + '      <div class="addons-list">\n' + '        <div ng-repeat="addon in addonCategory.addons" class="addon-item">\n' + '          <label ng-if="addonCategory.max_itens === 1" ng-disabled="!addon.available">\n' + '            <input type="radio" ng-disabled="!addon.available" ng-value="addon.id"  ng-model="cartItem.customization_fields[addonCategory.id]">\n' + '            {{ addon.name }}\n' + '            <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' + '            <span class="addon-unavailable" ng-show="!addon.available">Item não disponível</span>\n' + '          </label>\n' + '          <label ng-if="addonCategory.max_itens === 0" ng-disabled="!addon.available">\n' + '            <input type="checkbox" ng-disabled="!addon.available" ng-model="cartItem.customization_fields[addonCategory.id][addon.id]" ng-init="cartItem.customization_fields[addonCategory.id][addon.id] = cartItem.customization_fields[addonCategory.id][addon.id] && addon.available ? true : false" />\n' + '            {{ addon.name }}\n' + '            <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' + '            <span class="addon-unavailable" ng-show="!addon.available">Item não disponível</span>\n' + '          </label>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '\n' + '    <hr>\n' + '    <label for="cart-item-note">Deseja fazer alguma observação?</label>\n' + '    <textarea id="cart-item-note" rows="3" ng-model="cartItem.note"></textarea>\n' + '    <limit maxlength="150" model="cartItem.note"></limit>\n' + '  </div>\n' + '</div>\n' + '\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="!isEditing">\n' + '    <i class="icon icon-plus-square"></i>\n' + '    Adicionar\n' + '  </button>\n' + '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="isEditing">\n' + '    <i class="icon icon-pencil"></i>\n' + '    Confirmar edição\n' + '  </button>\n' + '  <button class="btn btn-default" ng-click="ctrl.close()">\n' + '    Cancelar\n' + '  </button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-rating.html', '<div class="modal-header">\n' + '  <h4 class="modal-title">\n' + '    Avaliar pedido\n' + '  </h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <p>1. Em uma escala de 1 a 10, sendo 1 altamente improvavel e 10 altamente provavel, qual a probabilidade de você indicar o speedy food a um amigo(a)?</p>\n' + '  <rating ng-model="rating.score" max="10" state-on="\'icon icon-star icon-star-filled\'" state-off="\'icon icon-star-o\'"></rating>\n' + '  <hr />\n' + '  <p>2. Qual a nota você daria para qualidade dos nossos produtos?</p>\n' + '  <rating ng-model="rating.quality" max="10" state-on="\'icon icon-star icon-star-filled\'" state-off="\'icon icon-star-o\'"></rating>\n' + '  <hr />\n' + '  <p>3. Qual a nota você daria para nosso serviço de entrega?</p>\n' + '  <rating ng-model="rating.delivery" max="10" state-on="\'icon icon-star icon-star-filled\'" state-off="\'icon icon-star-o\'"></rating>\n' + '  <hr /\n' + '  <p>4. Há algo que você não gostou que gostaria de registrar?</p>\n' + '  <textarea ng-model="rating.good_comment" rows="4" placeholder="Deixe em branco se você não tiver nenhum comentário"></textarea>\n' + '  <hr />\n' + '  <p>5. Há algo que você gostou que gostaria de registrar?</p>\n' + '  <textarea ng-model="rating.bad_comment" rows="4" placeholder="Deixe em branco se você não tiver nenhum comentário"></textarea>\n' + '  </div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-success" ng-click="ctrl.save()">\n' + '    <i class="icon icon-pencil"></i>\n' + '    Confirmar edição\n' + '  </button>\n' + '  <button class="btn btn-default" ng-click="ctrl.close()">\n' + '    Cancelar\n' + '  </button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/no-results.html', '<div class="row no-results">\n' + '  <div ng-class="{ \'col-md-4\': icon, \'hide\': !icon }">\n' + '    <i class="icon icon-{{ icon }}"></i>\n' + '  </div>\n' + '  <div ng-class="{ \'col-md-8\': icon, \'col-md-12\': !icon }">\n' + '    <p>{{ text }}</p>\n' + '  </div>\n' + '</div>\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/submit-form.html', '<div class="form-group form-submit">\n' + '  <div class="col-lg-offset-4 col-lg-8">\n' + '    <button type="submit" class="btn btn-success" tabindex="20">{{ text || "Salvar" }}</button>\n' + '    <div ng-transclude style="display: inline-block;"></div>\n' + '  </div>\n' + '</div>\n' + '\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/tik-tak.html', '<span>\n' + '  {{ value }}\n' + '</span>');
  }]);
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalCustomPeriodCtrl = function modalCustomPeriodCtrl($scope, $modalInstance, $filter) {

  return new ((function () {
    function ModalCustomPeriodCtrl() {
      _classCallCheck(this, ModalCustomPeriodCtrl);

      var date = $filter('date')(new Date(), "dd/MM/yyyy");

      $scope.period = { fromDate: date, toDate: date, fromTime: new Date().setHours(0, 0, 0, 0), toTime: new Date().setHours(23, 59, 59, 0) };
      $scope.status = { fromDate: false, toDate: false };
      $scope.options = { showWeeks: false };
    }

    // Abre o datepicker

    _createClass(ModalCustomPeriodCtrl, [{
      key: 'open',
      value: function open(name) {
        $scope.status[name] = !$scope.status[name];
      }

      // Fecha o modal e envia os dados selecionados
    }, {
      key: 'next',
      value: function next() {
        $modalInstance.close($scope.period);
      }

      // Fecha o modal sem enviar os dados selecionados
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }]);

    return ModalCustomPeriodCtrl;
  })())();
};

angular.module('foodbox.utils').controller('ModalCustomPeriodCtrl', modalCustomPeriodCtrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalMeAddressCtrl = function modalMeAddressCtrl($scope, $modalInstance, meAddressApi, addressResolved) {

  return new ((function () {
    function ModalMeAddressCtrl(onSubmit) {
      _classCallCheck(this, ModalMeAddressCtrl);

      $scope.address = addressResolved;
    }

    _createClass(ModalMeAddressCtrl, [{
      key: 'submit',
      value: function submit() {
        var method = this._getMethod();

        meAddressApi[method]($scope.address).then(function (address) {
          var responseAddress = method === 'update' ? $scope.address : address.plain().data;
          $modalInstance.close({ address: responseAddress, method: method });
        });
      }
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }, {
      key: '_getMethod',
      value: function _getMethod() {
        return $scope.address.id ? 'update' : 'create';
      }
    }]);

    return ModalMeAddressCtrl;
  })())();
};

angular.module('foodbox.utils').controller('ModalMeAddressCtrl', modalMeAddressCtrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalProductCtrl = function modalProductCtrl($scope, $modalInstance, TempCart, meCartItemApi, cartResolved, storeProductResolved, cartItemResolved) {

  return new ((function () {
    function ModalProductCustomizationCtrl() {
      _classCallCheck(this, ModalProductCustomizationCtrl);

      $scope.product = storeProductResolved;
      $scope.cart = cartResolved;
      $scope.cartItem = cartItemResolved;

      new TempCart($scope, cartItemResolved);
    }

    _createClass(ModalProductCustomizationCtrl, [{
      key: 'add',
      value: function add() {
        meCartItemApi[this._getCartMethod()]({ cart_id: $scope.cart.id }, $scope.cartItem).then(function (cart) {
          $modalInstance.close({ cart: cart.plain() });
        });
      }
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }, {
      key: '_getCartMethod',
      value: function _getCartMethod() {
        return $scope.cartItem.id ? 'update' : 'create';
      }
    }]);

    return ModalProductCustomizationCtrl;
  })())();
};

angular.module('foodbox.utils').controller('ModalProductCtrl', modalProductCtrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalRatingCtrl = function modalRatingCtrl($scope, $modalInstance) {

  return new ((function () {
    function ModalRatingCtrl() {
      _classCallCheck(this, ModalRatingCtrl);

      $scope.rating = {};
    }

    _createClass(ModalRatingCtrl, [{
      key: 'save',
      value: function save() {
        $modalInstance.close({ rating: rating.plain() });
      }
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }]);

    return ModalRatingCtrl;
  })())();
};

angular.module('foodbox.utils').controller('ModalRatingCtrl', modalRatingCtrl);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: $templateCache.get('/templates/box.html'),
    scope: {
      title: '@',
      icon: '@',
      containerClass: '@'
    }
  };
};

angular.module('foodbox.utils').directive('box', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    require: '^form',
    transclude: true,
    replace: true,
    template: $templateCache.get('/templates/form-group.html'),
    priority: 10000,
    scope: {
      label: '@',
      vertical: '@'
    },
    link: function link(scope, $el, attrs) {
      scope.id = 'field-' + Math.floor(Math.random() * 50000 + 1);
    }
  };
};

angular.module("foodbox.utils").directive('formGroup', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      var el = $el[0];

      if (el.type !== 'radio' && el.type !== 'checkbox') {
        el.classList.add('form-control');
      }
    }
  };
};

angular.module('foodbox.utils').directive('input', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('directives/limit.html'),
    replace: true,
    scope: {
      maxlength: '=',
      model: '='
    },
    link: function link(scope, $el, attrs) {
      scope.maxlength = parseInt(scope.maxlength, 10);

      if (_.isNaN(scope.maxlength) || !_.isNumber(scope.maxlength)) {
        throw new Error('Valor do atributo maxlength da directiva limit deve ser numeral.');
      }

      // Verifica se o elemento antes da directiva é um input
      var $textarea = $element.prev();
      var type = $textarea.get(0).type;

      if (type !== 'textarea') {
        throw new Error('Elemento antes da directiva limit deve ser um textarea');
      }

      // Adiciona atributo maxlength no HTML para previnir de usuário digitar um valor com mais de 300 carácteres
      $textarea.attr('maxlength', scope.maxlength);

      // Usamos o valor length para lidar com o tamanho de chars do textarea
      scope.length = 0;
      scope.$watch('model', function (message) {
        scope.length = message ? message.length : 0;
      });
    }
  };
};

angular.module('foodbox.utils').directive('limit', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/map.html'),
    replace: true,
    scope: {
      latitude: '=',
      longitude: '=',
      scrollWheel: '=',
      zoom: '=',
      markers: '=',
      route: '=',
      disableButtons: '='
    },
    link: function link(scope, $el, attrs) {
      var markers = [];

      scope.$watch('[latitude, longitude, markers]', function () {
        scope.map ? reset() : initialize();
      }, true);

      var initialize = function initialize() {
        if (!scope.latitude || !scope.longitude) {
          return false;
        }

        scope.map = new GMaps({
          div: $el.get(0),
          lat: scope.latitude,
          lng: scope.longitude,
          zoom: scope.zoom || 15,
          scrollwheel: scope.scrollWheel || true,
          disableDefaultUI: scope.disableButtons || false
        });

        if (scope.markers) {
          addMarkers();
        }

        if (scope.route) {
          drawRoute();
        }
      };

      var addMarkers = function addMarkers() {
        for (var i in markers) {
          var marker = markers[i];
          marker.setMap(null);
        }

        markers = [];

        if (!angular.isArray(scope.markers)) {
          throw new Error('Markers must be an array');
        }

        var _loop = function (i) {
          var m = scope.markers[i];

          if (!m.latitude || !m.longitude) {
            throw new Error('Marker must have a latitude and longitude');
          }

          var marker = scope.map.addMarker({
            lat: m.latitude,
            lng: m.longitude,
            infoWindow: m.title ? { content: '<p>' + m.title + '</p>' } : null,
            draggable: angular.isFunction(m.onDrag) ? true : false
          });

          if (m.animate) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }

          if (angular.isFunction(m.onDrag)) {
            google.maps.event.addListener(marker, 'dragend', function (event) {
              marker.onDrag({ latitude: event.latLng.lat(), longitude: event.latLng.lng() });
            });
          }

          markers.push(marker);
        };

        for (var i in scope.markers) {
          _loop(i);
        }
      };

      var drawRoute = function drawRoute() {
        if (!scope.route.destination || !scope.route.origin) {
          throw new Error('Route must have a destination and a origin');
        }

        scope.map.drawRoute({
          destination: [scope.route.destination.latitude, scope.route.destination.longitude],
          origin: [scope.route.origin.latitude, scope.route.origin.longitude],
          travelMode: 'driving',
          strokeColor: '#DD390D',
          strokeOpacity: 0.6,
          strokeWeight: 6
        });
      };

      var reset = function reset() {
        if (scope.markers) {
          addMarkers();
        }

        var position = new google.maps.LatLng(scope.latitude, scope.longitude);
        scope.map.panTo(position);
      };
    }
  };
};

angular.module('foodbox.utils').directive('map', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'A',
    link: function link(scope, $el, attrs) {
      if (attrs.mask === 'phone') {
        return $el.inputmask("(99) 9999-9999[9]");
      } else {
        if (attrs.mask === 'date') {
          return $el.inputmask("99/99/9999");
        }
      }
      $el.inputmask(attrs.mask, { autoUnmask: attrs.autoUnmask || false });
    }
  };
};

angular.module('foodbox.utils').directive('mask', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/no-results.html'),
    scope: {
      text: '@',
      icon: '@'
    }
  };
};

angular.module('foodbox.utils').directive('noResults', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      $el[0].classList.add('form-control');
    }
  };
};

angular.module('foodbox.utils').directive('select', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    require: 'ngModel',
    link: function link(scope, $el, attrs, ngModel) {
      if ($el.get(0).type === 'number') {
        ngModel.$parsers.push(function (value) {
          if (value) return value.toString();
        });

        ngModel.$formatters.push(function (value) {
          if (value) return parseFloat(value, 10);
        });
      }
    }
  };
};

angular.module('foodbox.utils').directive('input', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/submit-form.html'),
    replace: true,
    transclude: true,
    require: '^form',
    scope: {
      text: '@'
    }
  };
};

angular.module('foodbox.utils').directive('submitForm', directive);
"use strict";

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      $el.addClass("table table-hover table-striped").wrap("<div class='table-responsive'></div>");
    }
  };
};

angular.module('foodbox.utils').directive('table', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      var el = $el[0];
      el.classList.add('form-control');
    }
  };
};

angular.module('foodbox.utils').directive('textarea', directive);
'use strict';

var directive = function directive($templateCache, $interval) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/tik-tak.html'),
    scope: {
      interval: '@',
      value: '=',
      operator: '@'
    },
    link: function link(scope, $el, attrs) {
      var operator = scope.operator && (scope.operator == '+' || scope.operator == '-') ? scope.operator : '-';

      var operation = {
        '+': function _(a, b) {
          return parseFloat(a) + parseFloat(b);
        },
        '-': function _(a, b) {
          return parseFloat(a) - parseFloat(b);
        }
      };

      $interval(function () {
        scope.value = operation[operator](scope.value, 1);
      }, scope.interval);
    }
  };
};

angular.module('foodbox.utils').directive('tikTak', directive);
'use strict';

var directive = function directive(zipcodeApi) {
  return {
    restrict: 'A',
    scope: {
      zipcode: '&ngModel',
      model: '=zipcodeModel'
    },
    link: function link(scope, $el, attrs) {
      var _zipcode = null;

      scope.$watch(scope.zipcode, function (value, oldValue) {
        if (!value) return false;
        if (value.length !== 8) return false;
        if (value === oldValue) return false;
        if (_zipcode === value) return false;

        _zipcode = value;

        var number = scope.model.number ? scope.model.number : null;

        zipcodeApi.fetch({ zipcode: _zipcode, number: number }).then(function (response) {
          var data = response.data;

          scope.model.latitude = data.latitude;
          scope.model.longitude = data.longitude;
          scope.model.neighborhood = data.neighborhood;
          scope.model.city = data.city;
          scope.model.street = data.street;
          scope.model.city_id = data.city.id;
          scope.model.neighborhood_id = data.neighborhood.id;

          $el.parents('.form-group').siblings().find("input[ng-model='address.number']").focus();
        });
      });
    }
  };
};

angular.module('foodbox.utils').directive('zipcode', directive);
'use strict';

var pusher = function pusher() {
  var settings = {
    key: null,
    authEndpoint: '/pusher/auth',
    authTransport: 'ajax'
  };

  return {
    setKey: function setKey(value) {
      settings.key = value;
    },

    setAuthEndpoint: function setAuthEndpoint(authEndpoint) {
      settings.authEndpoint = authEndpoint;
    },

    setAuthTransport: function setAuthTransport(authTransport) {
      if (authTransport !== 'ajax' && authTransport !== 'jsonp') {
        authTransport = 'ajax';
      }

      settings.authTransport = authTransport;
    },

    $get: function $get() {
      return {
        subscribe: function subscribe(channel) {
          if (!settings.key) {
            throw new Error('A key must be setted to initialize pusher');
          }

          var pusher = new Pusher(settings.key, { authEndpoint: settings.authEndpoint });
          return pusher.subscribe(channel);
        }
      };
    }
  };
};

angular.module('foodbox.utils').provider('pusher', pusher);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var hint = function hint($timeout, $window, ngAudio) {

  return new ((function () {
    function Hint() {
      _classCallCheck(this, Hint);

      this.notifications = [];
      this.timeout = 5000;
      this.notification = $window.Notification || $window.mozNotification || $window.webkitNotification;

      this.sound = {
        success: ngAudio.load('/audios/success_notification.mp3'),
        info: ngAudio.load('/audios/success_notification.mp3'),
        error: ngAudio.load('/audios/error_notification.mp3')
      };

      if (!this.notification) {
        return false;
      }

      this.notification.requestPermission();
    }

    _createClass(Hint, [{
      key: 'success',
      value: function success(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('success', 'Sucesso :)', message, options);
      }
    }, {
      key: 'error',
      value: function error(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('error', 'Ops...', message, options);
      }
    }, {
      key: 'info',
      value: function info(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('info', 'Atenção', message, options);
      }
    }, {
      key: '_notify',
      value: function _notify(type, title, message, options) {
        var _this = this;

        if (!options.timeout) {
          options.timeout = this.timeout;
        }

        if (!options.autoClose) {
          options.autoClose = true;
        }

        if (this.notification.permission === 'granted') {

          var settings = {
            body: message,
            icon: '/assets/app/icon-' + type + '.png'
          };

          // Só adiciona um hint se não houver nenhum hint com o mesmo conteudi
          if (!this._hasMessage(settings.body)) {
            var _notification = new this.notification(title, settings);
            this.notifications.push(_notification);

            if (options.autoClose) {
              $timeout(function () {

                // Acha posicão da notificação no array
                var index = _this.notifications.indexOf(_notification);
                _notification = _this.notifications[index];

                // Força fechamento
                _notification.close();

                // Remove do array
                _this.notifications.splice(index, 1);
              }, options.timeout);
            }
          }
        }

        this.sound[type].play();
      }
    }, {
      key: '_hasMessage',
      value: function _hasMessage(message) {
        var hasMessage = false;

        angular.forEach(this.notifications, function (notification) {
          if (notification.body === message) {
            hasMessage = true;
          }
        });

        return hasMessage;
      }
    }, {
      key: '_randonNumber',
      value: function _randonNumber() {
        return Math.floor(Math.random() * (99999999 - 1 + 1)) + 1;
      }
    }]);

    return Hint;
  })())();
};

angular.module('foodbox.utils').factory('hint', hint);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HttpToken = function HttpToken($q, $state, $http, hint, storage) {

  return (function () {
    function HttpToken(userKey) {
      _classCallCheck(this, HttpToken);

      this._setUserKey(userKey);
      return this;
    }

    _createClass(HttpToken, [{
      key: 'initialize',
      value: function initialize() {
        var _this = this;

        return $q(function (resolve, reject) {
          return _this.get().then(function (user) {
            if (!user) return reject();

            _this.set(user).then(function (user) {
              resolve(user);
            });
          });
        });
      }
    }, {
      key: 'get',
      value: function get() {
        return storage.get('current' + this.key).then(function (currentUser) {
          return currentUser;
        });
      }
    }, {
      key: 'set',
      value: function set(user) {
        var _this2 = this;

        return $q(function (resolve, reject) {
          $http.defaults.headers.common['X-' + _this2.key + '-Email'] = user.email;
          $http.defaults.headers.common['X-' + _this2.key + '-Token'] = user.authentication_token;

          storage.set('current' + _this2.key, user);

          resolve(_this2.get());
        });
      }
    }, {
      key: 'remove',
      value: function remove() {
        var _this3 = this;

        return $q(function (resolve, reject) {
          return storage.remove('current' + _this3.key).then(function () {
            delete $http.defaults.headers.common['X-' + _this3.key + '-Email'];
            delete $http.defaults.headers.common['X-' + _this3.key + '-Token'];
            resolve();
          });
        });
      }
    }, {
      key: '_setUserKey',
      value: function _setUserKey() {
        var key = arguments.length <= 0 || arguments[0] === undefined ? 'Employee' : arguments[0];

        if (key !== 'Employee' && key !== 'Costumer') {
          throw new Error('Chave para uso do serviço HttpToken deve ter os valores Employee ou Costumer');
        }
        this.key = key;
      }
    }]);

    return HttpToken;
  })();
};

angular.module('foodbox.utils').factory('HttpToken', HttpToken);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalAddress = function modalAddress($modal, $templateCache) {
  return (function () {
    function ModalAddress() {
      _classCallCheck(this, ModalAddress);
    }

    _createClass(ModalAddress, [{
      key: 'open',
      value: function open(address) {
        var meCtrl = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        return $modal.open({
          template: $templateCache.get('/templates/modal-address.html'),
          controller: meCtrl ? 'ModalMeAddressCtrl as ctrl' : 'ModalCostumerAddressCtrl as ctrl',
          windowClass: 'modal-address',
          resolve: {
            addressResolved: function addressResolved() {
              return address;
            }
          }
        });
      }
    }]);

    return ModalAddress;
  })();
};

angular.module('foodbox.utils').factory('ModalAddress', modalAddress);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalCustomPeriod = function modalCustomPeriod($modal, $templateCache) {
  return new ((function () {
    function ModalCustomPeriod() {
      _classCallCheck(this, ModalCustomPeriod);
    }

    _createClass(ModalCustomPeriod, [{
      key: 'open',
      value: function open() {
        return $modal.open({
          template: $templateCache.get('/templates/modal-custom-period.html'),
          controller: 'ModalCustomPeriodCtrl as ctrl',
          windowClass: 'modal-custom-period'
        });
      }
    }]);

    return ModalCustomPeriod;
  })())();
};

angular.module('foodbox.utils').factory('ModalCustomPeriod', modalCustomPeriod);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalProduct = function modalProduct($modal, storeProductApi, $templateCache) {
  return (function () {
    function ModalProduct() {
      _classCallCheck(this, ModalProduct);
    }

    _createClass(ModalProduct, [{
      key: 'open',
      value: function open(cart, storeProduct) {
        var cartItem = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

        return $modal.open({
          template: $templateCache.get('/templates/modal-product.html'),
          controller: 'ModalProductCtrl as ctrl',
          windowClass: 'modal-product',
          resolve: {
            cartResolved: function cartResolved() {
              return cart;
            },
            storeProductResolved: function storeProductResolved() {
              return storeProductApi.show(storeProduct).then(function (storeProduct) {
                return storeProduct.plain().data;
              });
            },
            cartItemResolved: function cartItemResolved() {
              return cartItem;
            }
          }
        });
      }
    }]);

    return ModalProduct;
  })();
};

angular.module('foodbox.utils').factory('ModalProduct', modalProduct);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalRating = function modalRating($modal, $templateCache) {
  return (function () {
    function ModalRating() {
      _classCallCheck(this, ModalRating);
    }

    _createClass(ModalRating, [{
      key: 'open',
      value: function open(order) {
        return $modal.open({
          template: $templateCache.get('/templates/modal-rating.html'),
          controller: 'ModalRatingCtrl as ctrl',
          windowClass: 'modal-rating',
          resolve: {
            orderResolvedd: function orderResolvedd() {
              return order;
            }
          }
        });
      }
    }]);

    return ModalRating;
  })();
};

angular.module('foodbox.utils').factory('ModalRating', modalRating);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var popup = function popup($window, $q) {
  return new ((function () {
    function Popup() {
      _classCallCheck(this, Popup);
    }

    _createClass(Popup, [{
      key: 'open',
      value: function open(pageURL, width, height) {
        return $q(function (resolve, reject) {
          var left = Number(screen.width / 2 - width / 2);
          var top = Number(screen.height / 2 - height / 2);

          var popup = $window.open(pageURL, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
          resolve(popup);
        });
      }
    }]);

    return Popup;
  })())();
};

angular.module('foodbox.utils').factory('popup', popup);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var storage = function storage($localStorage, $q) {
  return new ((function () {
    function Storage() {
      _classCallCheck(this, Storage);
    }

    _createClass(Storage, [{
      key: 'get',
      value: function get(key) {
        return $q(function (resolve, reject) {
          var response = $localStorage[key] || null;
          resolve(response);
        });
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        return $q(function (resolve, reject) {
          $localStorage[key] = value;
          resolve();
        });
      }
    }, {
      key: 'remove',
      value: function remove(key) {
        return $q(function (resolve, reject) {
          delete $localStorage[key];
          var response = $localStorage[key] || null;
          resolve(response);
        });
      }
    }]);

    return Storage;
  })())();
};

angular.module('foodbox.utils').factory('storage', storage);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var tempCart = function tempCart() {
  return (function () {
    function TempCart($scope, cartItem) {
      _classCallCheck(this, TempCart);

      this.$scope = $scope;
      $scope.isEditing = cartItem ? true : false;

      if ($scope.isEditing) {
        cartItem.customization_fields = JSON.parse(cartItem.customization_fields);
      }

      $scope.cartItem = cartItem || { amount: 1, note: null, total: $scope.product.price * 1, product: $scope.product, customization_fields: {}, addons: [] };

      this._setCustomizationFields();
      this._listenScopeEvents();
    }

    _createClass(TempCart, [{
      key: '_setCustomizationFields',
      value: function _setCustomizationFields() {
        var _this = this;

        if (this.$scope.isEditing) {
          return false;
        }

        angular.forEach(this.$scope.product.addon_categories, function (addonCategory) {
          _this.$scope.cartItem.customization_fields[addonCategory.id] = {};

          angular.forEach(addonCategory.addons, function (addon) {
            if (addonCategory.max_itens === 1) {
              _this.$scope.cartItem.customization_fields[addonCategory.id] = addonCategory.addons[0].id;
            } else {
              var fill = addonCategory.auto_fill && !parseFloat(addon.price) && addon.available ? true : false;
              _this.$scope.cartItem.customization_fields[addonCategory.id][addon.id] = fill;
            }
          });
        });
      }
    }, {
      key: '_listenScopeEvents',
      value: function _listenScopeEvents() {
        var _this2 = this;

        var findAndInsert = function findAndInsert(addonId) {
          var _addon = null;

          angular.forEach(_this2.$scope.product.addon_categories, function (addonCategory) {
            var find = _.findWhere(addonCategory.addons, { id: parseInt(addonId, 10) });
            if (find) {
              _addon = find;
            }
          });

          if (!_addon) {
            return false;
          }

          _this2.$scope.cartItem.addons.push({
            id: _addon.id,
            name: _addon.name,
            price: _addon.price,
            product_addon_id: _addon.product_addon_id
          });
        };

        this.$scope.$watch('cartItem', function (newObject, oldObject) {
          _this2.$scope.cartItem.addons = [];

          angular.forEach(_this2.$scope.cartItem.customization_fields, function (addon) {
            if (!_.isObject(addon)) {
              return findAndInsert(addon);
            }

            angular.forEach(addon, function (checked, addonId) {
              if (!checked) {
                return false;
              }

              return findAndInsert(addonId);
            });
          });
        }, true);

        this.$scope.$watch('cartItem', function (newValue, oldValue) {
          var addonsPrice = 0;

          angular.forEach(_this2.$scope.cartItem.addons, function (addon) {
            addonsPrice += parseFloat(addon.price);
          });

          _this2.$scope.cartItem.total = (parseFloat(_this2.$scope.product.price) + addonsPrice) * _this2.$scope.cartItem.amount;
        }, true);
      }
    }]);

    return TempCart;
  })();
};

angular.module('foodbox.utils').factory('TempCart', tempCart);