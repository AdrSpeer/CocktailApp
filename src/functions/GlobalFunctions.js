const globalFunctions = {
  scrollWithOffset: function (el) {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -20;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }
};

export default globalFunctions;
