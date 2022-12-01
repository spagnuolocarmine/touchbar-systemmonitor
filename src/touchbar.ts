import { TouchBar } from "electron";
import * as path from "path";
import { spawn } from "child_process";
import { updateSystemInfo } from "./system-info";

const { TouchBarButton, TouchBarSpacer } = TouchBar;

export const cpuButton = new TouchBarButton({
  label: "",
  backgroundColor: "#bdc3c7",
  icon: path.join(__dirname, "icons/chip.png"),
  iconPosition: "left",
  click: () => updateSystemInfo(),
});

export const temperatureButton = new TouchBarButton({
  label: "",
  backgroundColor: "#ecf0f1",
  iconPosition: "left",
  click: () => updateSystemInfo(),
});

export const memoryButton = new TouchBarButton({
  label: "",
  backgroundColor: "#bdc3c7",
  icon: path.join(__dirname, "icons/ram.png"),
  iconPosition: "left",
  click: () => updateSystemInfo(),
});

export const networkButton = new TouchBarButton({
  label: "",
  backgroundColor: "#3498db",
  icon: path.join(__dirname, "icons/internet.png"),
  iconPosition: "left",
  click: () => updateSystemInfo(),
});

export const batteryButton = new TouchBarButton({
  label: "",
  backgroundColor: "#bdc3c7",
  icon: path.join(__dirname, "icons/power.png"),
  iconPosition: "left",
  click: () => updateSystemInfo(),
});

export const diskButton = new TouchBarButton({
  label: "",
  backgroundColor: "#9b59b6",
  icon: path.join(__dirname, "icons/hard-disk-drive.png"),
  iconPosition: "left",
  click: () => updateSystemInfo(),
});

export const activityMonitorButton = new TouchBarButton({
  label: "",
  backgroundColor: "#34495e",
  icon: path.join(__dirname, "icons/activity.png"),
  // iconPosition: "center",
  click: () =>
    spawn(
      "/System/Applications/Utilities/Activity Monitor.app/Contents/MacOS/Activity Monitor",
      []
    ),
});

export const touchBar = new TouchBar({
  items: [
    cpuButton,
    new TouchBarSpacer({ size: "small" }),
    memoryButton,
    new TouchBarSpacer({ size: "small" }),
    networkButton,
    new TouchBarSpacer({ size: "small" }),
    diskButton,
    new TouchBarSpacer({ size: "small" }),
    batteryButton,
    new TouchBarSpacer({ size: "small" }),
    temperatureButton,
  ],
});
touchBar.escapeItem = activityMonitorButton;
