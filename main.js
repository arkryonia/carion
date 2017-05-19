// Electron Modules Required
const { app, BrowserWindow } = require('electron')

// Declaring the main window
let win

// Set the appURL
const appURL = `file://${__dirname}/index.html`

// Create window function
function createWindow(){
  win = new BrowserWindow({ width: 800, height: 600})
  win.loadURL(appURL)

  win.on('closed', () => {
    win = null
  })

  //  Opens the chrome devtool
  win.webContents.openDevTools()
}

// Create the window when ready
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin')
    app.quit()
})

app.on('activate', () => {
  if (win === null)
    createWindow()
})
