<img src="src/icons/coffee-cup.png" alt="logo" height="120" align="right" />

# Touch Bar System Monitor

*A better simple reactive system monitor on macOS for your MacBook pro. Built with [Electron](https://github.com/atom/electron).*

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/spagnuolocarmine/touchbar-systemmonitor)


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/graphs/commit-activity) 
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/issues/) 
[![Build Status](https://travis-ci.com/spagnuolocarmine/touchbar-systemmonitor.svg?token=8TzLmEF5PP5fj4VXsAJG&branch=master)](https://travis-ci.com/spagnuolocarmine/touchbar-systemmonitor)


[![Donate](https://img.shields.io/badge/PayPal-Donate%20to%20Author-blue.svg)](https://www.paypal.me/CarmineSpagnuolo) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/issues)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Download%20and%20use%20the%20System%20Monitor%20Touch%20Bar%20for%20your%20MacbookPro&url=https://github.com/spagnuolocarmine/touchbar-systemmonitor&hashtags=macbook,osx,systemmonitor,hardware,touchbar) 

![screenshot](https://raw.githubusercontent.com/spagnuolocarmine/touchbar-systemmonitor/master/screenshots/touchbar_systemmonitor3.gif?token=ACPXSE6H3RJQIYCIGDVGCAC6OOISG)


This application will let you know the status of your system (hardware) in your Macbook Pro touch bar. The application runs as a background process; you can open it by digiting `CMD+SHIFT+1`. For quitting the system monitor, you can digit `CMD+SHIFT+0`.

The color each metric is displayed with represents the load of the associated resource. Differently from other system monitors, the application is in an idle state when it is not used, meaning that it does not waste your battery.

## Features:
- `:chart_with_upwards_trend`: the average percentage of CPU usage;
- `:chart_with_downwards_trend`: the average percentage of actually used RAM, without considering reserved memory or cache and so.
- `:satellite`: the network traffic on your active interface in MB/s;
- `:file_folder`: the average percentage of IO operations on your disk;
- `:battery`: the percentage of your battery;
- `:bar_chart`: it opens the MacOS Activity Monitor Application.


## Usage

|Command| Operation|
|--------|----------|
|  CMD+SHIFT+1  | Open |
|  CMD+SHIFT+0  | Close |



## RELEASES

|Tag| Name | Description | Download|
|--------|----------|--------|:---:|
|  0.0.1 | Alpha pre-release |Macbook Pro macOS Catalina 10.15.2 |[:arrow_down:](https://github.com/spagnuolocarmine/touchbar-systemmonitor/releases/tag/0.0.1)  |
|  0.0.2 | Alpha pre-release |Macbook Pro macOS Catalina 10.15.2 |[:arrow_down:](https://github.com/spagnuolocarmine/touchbar-systemmonitor/releases/tag/0.0.2)  |


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

# Project curiosity "#iorestoacasa -> #stayathome"

In March 2020, I began working on this project in my nights to contrast my bad feeling during the isolation caused by the Pandemic Influenza of COVID-19 in Italy :-( 

This project aims to send a message to all people that, unfortunately, have to fight the COVID-19. All of us can contribute to breaking the outbreaks by staying at home. If we are passionate about something, we can find more time to do what we love. 

**We must remember and understand that a pandemic will eventually end, the problem is when and how.** 

This is my personal small (or useless) contribution (better say message) to help the community to better recognize the importance of social interventions in case of a pandemic. 



