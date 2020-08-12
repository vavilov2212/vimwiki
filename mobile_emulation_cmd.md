IOS simulator

##### target booted device and do stuff
```bash
xcrun simctl --help
```

```bashxcrun simctl list``` - list all available devices

```bashxcrun simctl install <|device id i.e. D597E9DC-4217-477E-9D76-75D1F4AE0BB5|> <|/path/to/app/ i.e. ~/Downloads/application_name.app|>``` - install app in simulator.

```bashxattr -dr com.apple.quarantine ~/Downloads/application_name.app``` - if there is an error when app is booted in simulator.

```bashxcrun simctl openurl <|device id i.e. D597E9DC-4217-477E-9D76-75D1F4AE0BB5|> 'URL i.e. https://www.example.com/?link=1C-280'``` - open link in simulator.
