
const { ipcMain } = require('electron');

module.exports = [
    {
        label: 'Dmusic',
        submenu: [
            {label : 'Home', click : () => { require('./main')("home") }},
            {label : 'About', click : () => { require('./main')("about") }},
            {role : 'quit'},
        ]
    },
    {
        label: 'Edition',
        submenu: [
            {role : 'undo'},
            {role : 'redo'},
            {role : 'cut'},
            {role : 'copy'},
            {role : 'paste'},
            { type: 'separator' },
            {label : 'Print', click: printPage},
        ]
    },
    {
        label: 'Affichage',
        submenu: [
            {role : 'togglefullscreen'},
            {role : 'reload'},
            {role : 'zoomIn'},
            {role : 'zoomOut'},
        ]
    },
]

// Print page method
function printPage() {
    ipcMain.emit('printPage')
}