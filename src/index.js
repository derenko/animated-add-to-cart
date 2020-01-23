import { toCss } from './utils/toCssUnits';

class AnimatedAdding {
  constructor(
    cart,
    imagesSelector,
    buttons,
    transitionTime = 0.7,
    onComplete = () => { }
  ) {
    this.imagesSelector = imagesSelector;

    //Z-INDEX FOR CART ICON
    this.MAX_Z_INDEX = 999;

    this.cart = cart;
    this.buttons = buttons;
    this.images = document.querySelectorAll(imagesSelector);

    this.transitionTime = transitionTime;

    this.CART_PARAMETERS = this.cart.getBoundingClientRect();
    this.onComplete = onComplete;

    this.initialization();
  }

  initialization() {
    this.setup();
    this.addListeners();
    this.onComplete();
  }

  setup() {
    this.images.forEach((image, i) => {
      const { style } = image;
      //Add unique data-id to manage images
      image.setAttribute('data-id', i);
      style.transitionDuration = toCss(this.transitionTime, 's');
      style.left = toCss(image.getBoundingClientRect().x);
      style.top = toCss(image.getBoundingClientRect().y);
    });

    this.cart.style.zIndex = this.MAX_Z_INDEX;
  }

  setStyles(image) {
    const { x, y } = this.CART_PARAMETERS;
    const { style } = image;
    style.position = 'fixed';
    style.left = toCss(x);
    style.top = toCss(y);
    style.width = toCss(0);
    style.height = toCss(0);
  };

  addListeners() {
    this.buttons.forEach((button, i) => {
      button.addEventListener('click', () => {
        const image = document.querySelector(`[data-id='${i}']`);
        const cloned = image.cloneNode();

        //Insert clone of image after image which is animated
        image.parentNode.insertBefore(cloned, image);

        this.setStyles(image);

        image.addEventListener('transitionend', () => {
          image.remove();
        });

        this.images = document.querySelectorAll(this.imagesSelector);
      });
    })
  }
};