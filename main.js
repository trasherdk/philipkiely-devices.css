const DEVICE_NATIVE_WIDTH = 375;

const indicator = document.getElementById('font-size-indicator');
const screen = document.querySelector('.marvel-device .screen');

function updateDivisor(wrapper) {
  const available = wrapper.clientWidth;
  if (available > 0) {
    wrapper.style.setProperty('--size-divisor', DEVICE_NATIVE_WIDTH / available);
  }
  if (indicator && screen) {
    const computed = parseFloat(getComputedStyle(screen).fontSize).toFixed(1);
    indicator.textContent = `font-size: ${computed}px`;
  }
}

const wrapper = document.querySelector('.device-wrapper');
if (wrapper) {
  requestAnimationFrame(() => updateDivisor(wrapper));
  new ResizeObserver(() => updateDivisor(wrapper)).observe(wrapper);
}
