class AnimatedCart {
  constructor(
    cart,
    images,
    buttons,
    options = {
      transitionTime: 0.7
    }
  ) {
    this.MAX_Z_INDEX = 999;

    this.cart = cart;
    this.buttons = buttons;
    this.images = images;

    this.transitionTime = options.transitionTime;

    this.CART_PARAMETERS = this.cart.getBoundingClientRect()

    this.init();
  }

  init() {
    this.setup();
    const { x, y, width, height } = this.CART_PARAMETERS;
    this.buttons.forEach((button, i) => {
      button.addEventListener('click', () => {

      });
    })
  }

  setup() {
    this.images.forEach(image => {
      image.style.left = this.getRect(image).x + 'px';
      image.style.top = this.getRect(image).y + 'px';
      image.style.transitionDuration = this.transitionTime + 's';
      image.style.zIndex = 3;
    });

    this.cart.style.zIndex = this.MAX_Z_INDEX;
  }
}
