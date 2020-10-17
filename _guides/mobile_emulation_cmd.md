---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: IOS Simulator
---

IOS simulator

##### Target booted device and do stuff
```bash
xcrun simctl --help
```
##### List all available devices
```bash
xcrun simctl list
```
##### Install app in simulator.
```bash
xcrun simctl install <deviceId> <~/Downloads/application_name.app>
```
##### If there is an error when app is booted in simulator.
```bash
xattr -dr com.apple.quarantine <~/Downloads/application_name.app>
```
##### Open link in simulator.
```bash
xcrun simctl openurl <deviceId> 'https://www.example.com/?link=1C-280'
```
