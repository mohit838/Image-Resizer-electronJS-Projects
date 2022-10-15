# Image-Resizer-electronJS-Projects

Very Simple Desktop Image Resizer App Projects Using electron JS

## Package.json Setups

> Add this line after 'name' in package.json file

    "productName": "gRio Image Resizer App",

## Install Packages

    npm i electron resize-img toastify-js

## Add Script in Package.json file

    "start": "electron ."

## Restart Problem Solve By

    npx electronmon .

## How To Make Software From ElectronJS

    npm install electron-packager --save-dev

## For Mac OS

    electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds

## For Windows OS

    electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Electron Tutorial App"

## For Linux OS

    electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds

## Making your package.json look like this

> Replace This Script
> Old One

        "scripts": {
        "start": "electron .",
        "test": "echo \"Error: no test specified\" && exit 1"
        },

> New One

        "scripts": {
            "start": "electron .",
            "package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",
            "package-win": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Electron Tutorial App\"",
            "package-linux": "electron-packager . electron-tutorial-app --overwrite --asar=true --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds"
        }

## Then You Can Run

> For Mac

    npm run package-mac

> For Windows

    npm run package-win

> For Linux

    npm run package-linux

## For More Details

    https://www.christianengvall.se/electron-packager-tutorial/
