const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");

//NODE_ENV
const isDev = process.env.NODE_ENV !== "production";

// For Cross Platfrom
const isWindows = process.platform === "win32";

// Create Main Window
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "gRio Image Resizer",
    width: isDev ? 1000 : 500,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Open Dev Tools in Dev Mode
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
}

// Create About Window
function createAboutWindow() {
  aboutWindow = new BrowserWindow({
    width: isDev ? 400 : 500,
    height: 400,
    title: "About Electron",
  });

  aboutWindow.loadFile(path.join(__dirname, "./renderer/about.html"));
}

// App Ready
app.whenReady().then(() => {
  createMainWindow();

  //Implement Menu

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

// Menu Template
const menu = [
  ...(isWindows
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  {
    role: "fileMenu",
  },
  ...(!isWindows
    ? [
        {
          label: "Help",
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  ...(isDev
    ? [
        {
          label: "Developer",
          submenu: [
            { role: "reload" },
            { role: "forcereload" },
            { type: "separator" },
            { role: "toggledevtools" },
          ],
        },
      ]
    : []),
];

app.on("window-all-closed", () => {
  if (!isWindows) {
    app.quit();
  }
});
