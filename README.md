# REST API

This is a simple and basic REST API, which is developed while learning.

### Tech Stack Used

1. NodeJS

   - For javascript server runtime.

2. ExpressJS

   - Server Framework

3. MongoDB

   - For Database.

4. NodeMon

   - For automatic updation of server, when changes are made.

5. PostMan

   - To check Http requests.

### Usage Guide

1. To use the project, firstly clone or download from the Github.
2. After cloning to your local machine, go into project and run `npm install`.
3. By doing the above process, it will install neccessary dependencies.

4. First check whether `nodemon` is installed or not.

   1. If not Installed

      - first install it using `npm install nodemon --save-dev`. Here, i'm installing nodemon as _devDependency_ because we don't want it in the production environment.
      - After installing, go to `package.json` --> check for `scripts`.
      - Next, change the script to `"start" : "nodemon <main-file-name>` (In my project it is app.js).
      - To start the server, run `npm start` command in your terminal, it will start your server in the specified port (Here, it is 9000)

   2. If Installed

      - Firstly, go to `package.json` and check for `scripts`.
      - If it is like this, `"start" : "nodemon app.js` (nodemon <main-file-name>, In my project it is app.js), then your good to go, if not please change it to above.
      - To start the server, run `npm start` command in your terminal, it will start your server in the specified port (Here, it is 9000)
