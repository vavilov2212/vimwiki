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
xcrun simctl install ~deviceId~ ~~/Downloads/application_name.app~
```
##### If there is an error when app is booted in simulator.
```bash
xattr -dr com.apple.quarantine ~/Downloads/application_name.app
```
##### Open link in simulator.
```bash
xcrun simctl openurl <|device id i.e. D597E9DC-4217-477E-9D76-75D1F4AE0BB5|> 'URL i.e. https://www.example.com/?link=1C-280'
```
