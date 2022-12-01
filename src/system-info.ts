import { nativeImage } from "electron";
import {
  battery,
  cpuTemperature,
  currentLoad,
  disksIO,
  mem,
  networkStats,
} from "systeminformation";
import * as path from "path";
import { setButtonColor } from "./colors";
import {
  batteryButton,
  cpuButton,
  diskButton,
  memoryButton,
  networkButton,
  temperatureButton,
} from "./touchbar";

export const updateSystemInfo = () => {
  currentLoad((data) => {
    if (!data) {
      return;
    }

    const load = +data.currentLoad.toFixed(0);
    cpuButton.label = load + "%";

    setButtonColor(cpuButton, load);
  });

  mem((data) => {
    if (!data) {
      return;
    }

    const load = +((100 * data.active) / data.total).toFixed(0);
    memoryButton.label = load + "%";

    setButtonColor(memoryButton, load);
  });

  networkStats("", (data) => {
    if (!data) {
      return;
    }

    const kbtx = +(data[0].tx_sec * 0.001).toFixed(0);
    const kbrx = +(data[0].rx_sec * 0.001).toFixed(0);

    networkButton.label =
      "⇡" +
      (kbtx * 0.001).toFixed(2) +
      " ⇣" +
      (kbrx * 0.001).toFixed(2) +
      " MB/s";
  });

  battery((data) => {
    if (!data) {
      return;
    }

    if (data.isCharging) {
      batteryButton.icon = nativeImage.createFromPath(
        path.join(__dirname, "icons/charger.png")
      );
    } else {
      batteryButton.icon = nativeImage.createFromPath(
        path.join(__dirname, "icons/power.png")
      );
    }

    const load = +data.percent.toFixed(0);
    batteryButton.label = load + "%";

    setButtonColor(batteryButton, load);
  });

  disksIO((data) => {
    if (!data) {
      return;
    }

    if (data.tIO_sec !== null) {
      const load = data.tIO_sec.toFixed(0);
      diskButton.label = load + "/s";
    } else {
      diskButton.label = "Unsupported";
    }
  });

  cpuTemperature((data) => {
    if (!data) {
      return;
    }

    if (data.main !== -1) {
      const temperature = +data.main.toFixed(0);
      temperatureButton.label = temperature + "°C";

      setButtonColor(batteryButton, data.main);
    } else {
      temperatureButton.label = "Unsupported";
    }
  });
};
