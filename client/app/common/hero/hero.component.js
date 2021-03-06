import template from './hero.html';
import controller from './hero.controller';
import './hero.styl';

const heroComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
};

export default heroComponent;
