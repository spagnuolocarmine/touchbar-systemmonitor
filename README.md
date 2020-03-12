# What is the Touch Bar Macbook Pro System Monitor?

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/) 
[![Open Source Love svg3](https://badges.frapsoft.com/os/v3/open-source.svg?v=103)](https://github.com/spagnuolocarmine/touchbar-systemmonitor)
[![NPM version](https://img.shields.io/npm/v/electron-badge.svg)](https://www.npmjs.com/package/electron-badge)


[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/graphs/commit-activity) 
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/issues/) 
[![GitHub issues-closed](https://img.shields.io/github/issues-closed/Naereen/StrapDown.js.svg)](https://github.com/spagnuolocarmine/touchbar-systemmonitor/issues?q=is%3Aissue+is%3Aclosed)
[![Build Status](https://travis-ci.com/spagnuolocarmine/touchbar-systemmonitor.svg?token=8TzLmEF5PP5fj4VXsAJG&branch=master)](https://travis-ci.com/spagnuolocarmine/touchbar-systemmonitor)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/madisvain/upcount?include_prereleases) 

[![Donate](https://img.shields.io/badge/PayPal-Donate%20to%20Author-blue.svg)](https://www.paypal.me/CarmineSpagnuolo) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/spagnuolocarmine/TwentySecondsCurriculumVitae-LaTex/issues)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Download%20and%20use%20the%20Twenty%20Seconds%20Curriculum%20Vitae%20in%20LaTex&url=https://github.com/spagnuolocarmine/TwentySecondsCurriculumVitae-LaTex&hashtags=curriculum,resume,templates,cv,latex,interview,résumé) 

![screenshot](https://raw.githubusercontent.com/spagnuolocarmine/touchbar-systemmonitor/master/screenshots/touchbar_systemmonitor3.gif?token=ACPXSE6H3RJQIYCIGDVGCAC6OOISG)

By using this application you can see in your Macbook Pro touch bar the status of your system (hardware). When you need you can open the application, which runs as a background process, by digit CMD+SHIFT+1. 

Each metrics is shown in different color accordingly to the load on the particular resource. Moreover, differently to other system monitors, when it is not used, it will be in an idle state, which means it does not will waste your battery.

Features:
- the average percentage CPU usage;
- the average percentage RAM memory used, this does not include reserved memory or cache and so on and will show you only the real amount of used memory;
- the network traffic on your active interface in KB/s;
- the average percentage IO operations on your disk;
- the percentage of your battery.


## Running and building by yourself

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
