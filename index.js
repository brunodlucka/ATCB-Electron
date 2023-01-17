const { app, BrowserWindow} = require('electron')

let janelaPrincipal

app.on('ready', () => {
    janelaPrincipal = new BrowserWindow({

    })
    janelaPrincipal.loadURL(`file://${__dirname}/index.html`)
})
