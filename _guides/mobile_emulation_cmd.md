---
layout: default
title: IOS Simulator
---

## IOS simulator

* * *

<br>
### - Target booted device and do stuff

```bash
xcrun simctl --help
```
### - List all available devices
```bash
xcrun simctl list
```
### - Install app in simulator.
```bash
xcrun simctl install <deviceId> <~/Downloads/application_name.app>
```
### - If there is an error when app is booted in simulator.
```bash
xattr -dr com.apple.quarantine <~/Downloads/application_name.app>
```
### - Open link in simulator.
```bash
xcrun simctl openurl <deviceId> 'https://www.example.com/?link=1C-280'
```


<br><br>
### Usefull links
[How to run .IPA file on a iOS Simulator — Xamarin Community Forums](https://forums.xamarin.com/discussion/105840/how-to-run-ipa-file-on-a-ios-simulator)

