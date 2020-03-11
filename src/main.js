const {app, BrowserWindow, TouchBar, Tray, globalShortcut, nativeImage} = require('electron')
const path = require('path')
const url = require('url')
const si = require('systeminformation');

const appName = "System Monitor"
const {TouchBarButton, TouchBarLabel, TouchBarSpacer} = TouchBar

let window;

LOAD_NORMAL = "#2ecc71"
LOAD_MEDIUM = "#f1c40f"
LOAD_HIGH = "#d35400"
LOAD_SEVERE = "#e74c3c"

const cpu = new TouchBarButton({
  label: '',
  backgroundColor: "#bdc3c7",
  icon: path.join(__dirname, 'icons/chip.png'),
  iconPosition: "left",
  click: () => {
    updateData()
  }
})
const memory = new TouchBarButton({
  label: '',
  backgroundColor: "#bdc3c7",
  icon: path.join(__dirname, 'icons/ram.png'),
  iconPosition: "left",
  click: () => {
    updateData()
  }
})
const network = new TouchBarButton({
  label: '',
  backgroundColor: '#3498db',
  icon: path.join(__dirname, 'icons/internet.png'),
  iconPosition: "left",
  click: () => {
    updateData()
  }
})
const battery = new TouchBarButton({
  label: '',
  backgroundColor: "#bdc3c7",
  icon: path.join(__dirname, 'icons/power.png'),
  iconPosition: "left",
  click: () => {
    updateData()
  }
})
const disk = new TouchBarButton({
  label: '',
  backgroundColor: "#bdc3c7",
  icon: path.join(__dirname, 'icons/hard-disk-drive.png'),
  iconPosition: "left",
  click: () => {
    updateData()
  }
})


const updateData = () => {
  si.currentLoad(function(data) {
    if (typeof data !== 'undefined' && data){

      load = data.currentload.toFixed(0)
      cpu.label = load+"%"
      if (load <= 20) cpu.backgroundColor = LOAD_NORMAL;
      else if (load > 20 && load <= 40) cpu.backgroundColor = LOAD_MEDIUM;
      else if (load > 40 && load <= 80) cpu.backgroundColor = LOAD_HIGH;
      else if (load > 80 && load <= 100) cpu.backgroundColor = LOAD_SEVERE;
    }
  })
  si.mem(function(data) {
    if (typeof data !== 'undefined' && data){
      load = ((100* data.active ) / data.total).toFixed(0)
      memory.label = load+"%"
      if (load <= 20) memory.backgroundColor = LOAD_NORMAL;
      else if (load > 20 && load <= 40) memory.backgroundColor = LOAD_MEDIUM;
      else if (load > 40 && load <= 80) memory.backgroundColor = LOAD_HIGH;
      else if (load > 80 && load <= 100) memory.backgroundColor = LOAD_SEVERE;
    }
   
  })
  si.networkStats("", function(data) {
    if (typeof data !== 'undefined' && data){
      network.label = "⇡"+(data[0].tx_sec * 0.001).toFixed(0)
                      +" ⇣"+(data[0].rx_sec * 0.001).toFixed(0) +" KB/s"
    }
  })

  si.battery( function(data) {
   
    if (typeof data !== 'undefined' && data){
      if (data.ischarging){
        battery.icon = path.join(__dirname, 'icons/charger.png')
      }else{
        battery.icon = path.join(__dirname, 'icons/power.png')
      }
      load = data.percent.toFixed(0)
      battery.label = load+"%" 
      if (load <= 20) battery.backgroundColor = LOAD_SEVERE;
      else if (load > 20 && load <= 40) battery.backgroundColor = LOAD_HIGH;
      else if (load > 40 && load <= 80) battery.backgroundColor = LOAD_MEDIUM;
      else if (load > 80 && load <= 100) battery.backgroundColor = LOAD_NORMAL
    }
    si.disksIO( function(data) {
     
      if (typeof data !== 'undefined' && data){
        load = data.tIO_sec.toFixed(0)
        disk.label = load+"/s"
     
      }
    })
  })


}
const touchBar = new TouchBar([
  cpu,
  new TouchBarSpacer({size: 'small'}),
  memory,
  new TouchBarSpacer({size: 'small'}),
  network,
  new TouchBarSpacer({size: 'small'}),
  disk,
  new TouchBarSpacer({size: 'small'}),
  battery,
  new TouchBarSpacer({size: 'small'}),
  
])

let  intervalObj;
let val = 0
const focusOnWindow = () => {
  window.show();
  window.setVisibleOnAllWorkspaces(true); 
  window.focus(); 
  window.setVisibleOnAllWorkspaces(false); 
  updateData();
  intervalObj = setInterval(() => {
  //  console.log('timeout beyond time',val++);
    updateData();
  }, 1000);


}
app.once('ready', () => {
  window = new BrowserWindow({
    width: 0, height: 0
  });
 
  window.setTouchBar(touchBar);
  window.on('blur', () => {
    clearInterval(intervalObj);
  });
 
  focusOnWindow()
  // let trayIcon = nativeImage.createFromPath(path.join(__dirname, 'icons/coffee-cup.png'));
  // trayIcon = trayIcon.resize({ width: 16, height: 16 });
  // tray = new Tray(trayIcon)
  // tray.setToolTip(appName)
  // tray.on('click', () => {
  //   focusOnWindow()
  // });
  globalShortcut.register('CommandOrControl+Shift+1', () => {
    focusOnWindow()
  })
 
})

app.on('window-all-closed', () => {
    app.quit();
});

