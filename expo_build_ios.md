Для сборки приложения для Xcode simulator:<br>
```bash turtle build:ios --type simulator --config app.json --output artifact/application_name.tar.gz -u expo_login -p expo_password```
DEVELOPER_DIR=/Applications/Xcode11.3.1.app/Contents/Developer/ \
EXPO_USERNAME=expo_username \
EXPO_PASSWORD=expo_password \
EXPO_IOS_DIST_P12_PASSWORD=cert_password \
npm run build-ios-archive
