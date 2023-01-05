import ToggleContent from '../libs/toggleContent';

export default class BurgerMenu extends ToggleContent {
  constructor(options) {
    super(options);

    this.element.firstElementChild.addEventListener('click', options.onClick);
  }
}
