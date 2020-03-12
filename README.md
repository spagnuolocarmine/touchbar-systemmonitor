<img src="src/icons/coffee-cup.png" alt="logo" height="120" align="right" />

# Touch Bar System Monitor

*A better simple reactive system monitor on macOS for your MacBook pro. Built with [Electron](https://github.com/atom/electron).*

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/spagnuolocarmine/touchbar-systemmonitor)


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/graphs/commit-activity) 
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/issues/) 
[![Build Status](https://travis-ci.com/spagnuolocarmine/touchbar-systemmonitor.svg?token=8TzLmEF5PP5fj4VXsAJG&branch=master)](https://travis-ci.com/spagnuolocarmine/touchbar-systemmonitor)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/spagnuolocarmine/touchbar-systemmonitor?include_prereleases) 

[![Donate](https://img.shields.io/badge/PayPal-Donate%20to%20Author-blue.svg)](https://www.paypal.me/CarmineSpagnuolo) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/issues)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Download%20and%20use%20the%20System%20Monitor%20Touch%20Bar%20for%20your%20MacbookPro&url=https://github.com/spagnuolocarmine/touchbar-systemmonitor&hashtags=macbook,osx,systemmonitor,hardware,touchbar) 

![screenshot](https://raw.githubusercontent.com/spagnuolocarmine/touchbar-systemmonitor/master/screenshots/touchbar_systemmonitor3.gif?token=ACPXSE6H3RJQIYCIGDVGCAC6OOISG)


By using this application you can see in your Macbook Pro touch bar the status of your system (hardware). When you need you can open the application, which runs as a background process, by digiting CMD+SHIFT+1. For quitting the system monitor you can digit CMD+SHIFT+0.

Each metrics is shown in different color accordingly to the load on the particular resource. Moreover, differently to other system monitors, when it is not used, it will be in an idle state, which means it does not will waste your battery.

Features:
- :chart_with_upwards_trend: the average percentage CPU usage;
- :chart_with_downwards_trend: the average percentage RAM memory really used, without reserved memory or cache and so.
- :satellite: the network traffic on your active interface in KB/s;
- :file_folder: the average percentage IO operations on your disk;
- :battery: the percentage of your battery;
- :bar_chart: open ther MacOS Activity Monitor Application.


## Do it by yourself

In order to run locally type the following:
```
npm install
npm start
```

In order to  build locally type the following:
```
npm install
npm run dist
```
