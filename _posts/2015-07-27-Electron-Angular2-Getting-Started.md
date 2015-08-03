# Electron starter app with Angular 2 [GitHub](https://github.com/bsanth/electron-angular2)

I had an idea in mind and decided that I will learn Electron and Angular2 in the process.

I did not want to clone an existing starter branch and start off from there, rather wanted to start from scratch. Here is all that I learnt and did.

* Set up a Github project. Add a readme and licence. Also add node to gitignore. Here's mine: https://github.com/bsanth/electron-angular2.git
* Git clone the repo to your system.

    ```git clone https://github.com/bsanth/electron-angular2.git```
    
* Get Node Package Manager ready.

    ``` 
    npm init
    ```
    
   Here's how mine looks:
    
```
    name: (electron-angular2) 
    version: (1.0.0) 0.0.0
    description: Starter app for electron-angular2
    entry point: (index.js) app/index.js
    test command: electron .
    git repository: (https://github.com/bsanth/electron-angular2.git) 
    keywords: 
    author: Santhosh Kumar Bala Krishnan
    license: (ISC) MIT
    About to write to /Users/sbalakrishnan/repos/electron-angular2/package.json:
    
    {
      "name": "electron-angular2",
      "version": "0.0.0",
      "description": "Starter app for electron-angular2",
      "main": "app/index.js",
      "scripts": {
        "test": "electron ."
      },
      "repository": {
        "type": "git",
        "url": "git+https://github.com/bsanth/electron-angular2.git"
      },
      "author": "Santhosh Kumar Bala Krishnan",
      "license": "MIT",
      "bugs": {
        "url": "https://github.com/bsanth/electron-angular2/issues"
      },
      "homepage": "https://github.com/bsanth/electron-angular2#readme"
    }
```
    
* Electron uses a js file as an entry point to the app. Let's create that next.

    ```
         mkdir app
         touch app/index.js
    ```
* I installed electron globally and added electron as a dependency to this project next.

    ```
    npm install electron-prebuilt -g
    npm install electron-prebuilt --save-dev
    ```

* Let's create a base index file:

    ```
    touch browser/index.html
    ```
* Let's now write the entry point js file to electron. Go to index.js file and type out the following. This is directly taken from electron starter app. [https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md](https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md)

   Only change I made was the path to the index.html file. 

```
    var app = require('app');  // Module to control application life.
    var BrowserWindow = require('browser-window');  // Module to create native browser window.
    
    // Report crashes to our server.
    require('crash-reporter').start();
    
    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is GCed.
    var mainWindow = null;
    
    // Quit when all windows are closed.
    app.on('window-all-closed', function() {
      // On OS X it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform != 'darwin') {
        app.quit();
      }
    });
    
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    app.on('ready', function() {
      // Create the browser window.
      mainWindow = new BrowserWindow({width: 800, height: 600});
    
      // and load the index.html of the app.
      mainWindow.loadUrl('file://' + __dirname + '/../browser/index.html');
    
      // Open the devtools.
      mainWindow.openDevTools();
    
      // Emitted when the window is closed.
      mainWindow.on('closed', function() {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
      });
    });
```
    
* Let's tell electron where to look for the entry point js file. Edit package.json and add the following line if not already added.

    ```
      "main": "app/index.js",
    ```
* Just to make sure I got the electron part working, I ran the following command to see if I can see my app running - after adding some content to index.html. HOORAY!

    ```
    electron .
    ```
* **Let's get to the angular2 part!**

* Angular2 is based off TypeScript. Let's install TypeScript next. These are taken from [AngularJS QuickStart guide](https://angular.io/docs/js/latest/quickstart.html)

    ```
    npm install -g tsd@^0.6.0
    tsd install angular2 es6-promise rx rx-lite
    npm install -g typescript
    ```

* Let's init TSD so that we have the config file set up.

    ```
    tsd init
    ```
* Get angular2.js, systemJS and reflect-metadata from NPM.

    ```
    npm install angular2 --save
    npm install systemjs --save
    npm install reflect-metadata --save
    ```
* Moving on to index.html inside browser folder. Added all the dependent js file scripts and SystemJS configuration.

* Create new main.ts file as found in this git repo. This is also form the [angular quickstart guide](https://angular.io/docs/js/latest/quickstart.html).

* Watch and compile the .ts file.

    ```
    tsc -m commonjs -t es5 --emitDecoratorMetadata browser/main.ts --watch
    ```
* Once the compile completes, run electron again and **you're done!**

### Heavily inspired from
* [https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md](https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md)
* [http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/](http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/)
* [https://github.com/SebastianM/angular2-bootstrap/blob/01e0e99a51466772af77aa351217a1d87aabe7b6/examples/index.html](https://github.com/SebastianM/angular2-bootstrap/blob/01e0e99a51466772af77aa351217a1d87aabe7b6/examples/index.html)