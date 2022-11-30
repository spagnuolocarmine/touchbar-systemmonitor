import { app, BrowserWindow, globalShortcut } from "electron";
import { updateSystemInfo } from "./system-info";
import { touchBar } from "./touchbar";

const appName = "TouchBar System Monitor";

let window: BrowserWindow;
let intervalObj: NodeJS.Timer;

const focusOnWindow = () => {
  window.show();
  window.setVisibleOnAllWorkspaces(true);
  window.focus();
  window.setVisibleOnAllWorkspaces(false);
  updateSystemInfo();
  intervalObj = setInterval(() => updateSystemInfo(), 1_000);
};

app.once("ready", () => {
  window = new BrowserWindow({
    width: 0,
    height: 0,
    title: appName,
  });

  window.setTouchBar(touchBar);
  window.on("blur", () => clearInterval(intervalObj));

  focusOnWindow();

  globalShortcut.register("CommandOrControl+Shift+1", () => focusOnWindow());
  globalShortcut.register("CommandOrControl+Shift+0", () => app.quit());

  app.dock.hide();
});

app.on("window-all-closed", () => app.quit());
