let directive = () => {
  return {
    restrict: 'E',
    link: (scope, $el, attrs) => {
      let el = $el[0];
      el.classList.add('form-control');
    }
  };
};

angular.module('foodbox.utils').directive('textarea', directive);