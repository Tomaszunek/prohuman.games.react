global.requestAnimateFrame = callback => {
    setTimeout(callback, 0);
}