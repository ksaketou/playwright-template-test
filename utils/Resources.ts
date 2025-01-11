export function getAbsolutePath() {
    var path=require("path")
    var absolutepath = path.resolve(".")
    return absolutepath+"/"
}

export function getUploadPath() {
    return getAbsolutePath() + "/data/upload/"
}

export function getWSmessagesPath() {
    return getAbsolutePath() + "/data/WSmessages/"
}