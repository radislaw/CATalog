export default {
  install(Vue) {
    let newObserver;
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$observe = (el, handler, options = {}) => {
      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handler();
          }
        });
      };
      newObserver = new IntersectionObserver(handleIntersect, options);
      newObserver.observe(el);
    };
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$unobserve = (el) => {
      newObserver.unobserve(el);
    };
  },
};
