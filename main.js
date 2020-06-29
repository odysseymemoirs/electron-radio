const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {
  // Создаем окно браузера.
  const win = new BrowserWindow({
    width: 450,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    show: false ,
    resizable: false,
    title : 'Electron Radio',
    menu: false
    })

  // and load the index.html of the app.
  win.loadFile('src/index.html')

  win.once('ready-to-show', () => {
    win.show()
  })
  
  // Отображаем средства разработчика.
  // win.webContents.openDevTools()
}

Menu.setApplicationMenu(false)
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Некоторые API могут использоваться только после возникновения этого события.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // Для приложений и строки меню в macOS является обычным делом оставаться
  // активными до тех пор, пока пользователь не выйдет окончательно используя Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
   // На MacOS обычно пересоздают окно в приложении,
   // после того, как на иконку в доке нажали и других открытых окон нету.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
