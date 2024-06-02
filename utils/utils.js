export const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer); // cancelling the previous call, if called within time delay
    timer = setTimeout(() => fn(...args), delay);
  };
};
