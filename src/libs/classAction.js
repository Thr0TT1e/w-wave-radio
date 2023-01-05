function addClass(el, targetClass) {
  el.classList.add(targetClass);
}

function removeClass(el, targetClass) {
  el.classList.remove(targetClass);
}

export default {
  addClass,
  removeClass,
};
