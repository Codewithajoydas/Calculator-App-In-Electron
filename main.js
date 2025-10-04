const { app, BrowserWindow, Notification } = require("electron");
const path = require("path");
app.setAppUserModelId("com.mycompany.myapp");

app.whenReady().then(() => {
   const notification = new Notification({
     title: "File Downloaded",
     body: "What do you want to do?",
     actions: [
       { type: "button", text: "Open" },
       { type: "button", text: "Dismiss" },
     ],
     closeButtonText: "Close",
   });

   notification.show();

   notification.on("action", (event, index) => {
     if (index === 0) {
       console.log("User clicked Open");
     } else if (index === 1) {
       console.log("User clicked Dismiss");
     }
   });

   notification.on("close", () => {
     console.log("Notification closed");
   });
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    autoHideMenuBar: true,
    width: 340,
    height: 500,
    minHeight: 480,
    minWidth: 340,
    setTitleBarOverlay: true,
    titleBarStyle: "hiddenInset",
    frame: false,
    icon: "icon.png",
    titleBarStyle: "hidden",
    titleBarOverlay: {
      height: 40,
      color: "#e0e0e0",
    },
    resizable: false,
    roundedCorners: false,
  });

  win.loadFile("index.html");
});
