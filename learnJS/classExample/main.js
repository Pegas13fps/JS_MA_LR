"use strict";

class Component {
  constructor({element}) {
      this._element = element;
      this._id = Math.random();
  }

  hide() {
      this._element.hidden = true;
  }
}

class Menu extends Component {
  constructor({element, title, items}) {
      super({element});
      this._title = title;
      this._items = items;
  }
  hide() {
    console.log('hide');
    super.hide();
  }
}