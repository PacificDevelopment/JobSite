# jobsite
The default Start and Build commands are available.

Various scripts available and what they do:

1. To run a hotloading webpack server so that you can see changes to react components or styling in real time, without having to refresh the web page, run:
```
npm run serve-react-dev
```
Then visit localhost:9000

Resource to learn more: https://javascript.plainenglish.io/react-fast-refresh-the-new-react-hot-reloader-652c6645548c

2. To run the regular webpack watch build without hot reloading
```
npm run react-dev
```

3. To run the server with nodemon watching for changes at port 3000
```
npm run server-dev
```

4. To run the server with node debugger attached and watching for changes at port 3000
```
npm run debug
```