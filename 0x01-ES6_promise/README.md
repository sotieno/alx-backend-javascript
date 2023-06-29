# 0x01. ES6 Promises

## Learning Objectives

* Explain promises (how, why, and what)
* How to use the then, resolve, catch methods
* How to use every method of the Promise object
* Throw / Try
* The await operator
* How to use an async function

## Setup
### Install NodeJS 12.11.x
```
(in the home directory)
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Install Jest, Babel, and ESLint
```
(in the project directory)
* Install Jest using: npm install --save-dev jest
* Install Babel using: npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
* Install ESLint using: npm install --save-dev eslint
```

### Response Data Format
* uploadPhoto returns a response with the format
```
{
  status: 200,
  body: 'photo-profile-1',
}
```
* createUser returns a response with the format
```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

## Configuration files

* package.json
* babel.config.js
* .eslintrc.js

In the project directory run ```npm install``` when you have package.json

