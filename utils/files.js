module.exports = (dirPath, arrayOfFiles) => {
    return getAllFiles(dirPath, arrayOfFiles);
}

function getAllFiles(dirPath, arrayOfFiles) {
    files = FS.list(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    for (let file of files) {
        if (FS.isDir(dirPath + '/' + file)) {
            arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(dirPath + '/' + file);
        }
    }
    return arrayOfFiles;
}