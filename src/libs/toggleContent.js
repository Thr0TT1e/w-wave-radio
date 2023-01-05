import ClassAction from './classAction';

export default class ToggleContent {
  constructor(options) {
    this.element = options.element;
    this.animDilay = options.animDilay;
    this.classStyleName = options.classStyleName;
    this.isFirstElementAdd = options.isFirstElementAdd;
    this.isOpen = false;
    this.isAction = false;
  }

  open() {
    ClassAction.addClass(this.element, this.classStyleName);

    if (this.isFirstElementAdd)
      ClassAction.addClass(this.element.firstElementChild, this.classStyleName);

    this.isAction = true;

    setTimeout(() => {
      this.isOpen = true;
      this.isAction = false;
    }, this.animDilay);
  }

  close() {
    ClassAction.removeClass(this.element, this.classStyleName);

    if (this.isFirstElementAdd)
      ClassAction.removeClass(
        this.element.firstElementChild,
        this.classStyleName
      );

    this.isAction = true;

    setTimeout(() => {
      this.isOpen = false;
      this.isAction = false;
    }, this.animDilay);
  }
}
