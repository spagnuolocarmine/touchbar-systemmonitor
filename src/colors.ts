import type { TouchBarButton } from "electron";

// colors https://flatuicolors.com/palette/defo

const LOAD_NORMAL = "#2ecc71";
const LOAD_MEDIUM = "#f1c40f";
const LOAD_HIGH = "#d35400";
const LOAD_SEVERE = "#e74c3c";

export const setButtonColor = (button: TouchBarButton, value: number) => {
  if (value <= 20) {
    button.backgroundColor = LOAD_NORMAL;
  } else if (value > 20 && value <= 40) {
    button.backgroundColor = LOAD_MEDIUM;
  } else if (value > 40 && value <= 80) {
    button.backgroundColor = LOAD_HIGH;
  } else if (value > 80 && value <= 100) {
    button.backgroundColor = LOAD_SEVERE;
  }
};
