const path = require("path");
const { app, BrowserWindow } = require("electron");

//NODE_ENV
const isDev = process.env.NODE_ENV !== "production";

// For Cross Platfrom
const isWindows = process.platform === "win32";
const isMac = process.platform === "darwin";

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "gRio Image Resizer",
    width: isDev ? 1000 : 500,
    height: 600,
  });

  // Open Dev Tools in Dev Mode
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isWindows || !isMac) {
    app.quit();
  }
});
