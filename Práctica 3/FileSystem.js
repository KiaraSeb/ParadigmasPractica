"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystem = void 0;
var Directory_1 = require("./Directory");
var File_1 = require("./File");
var FileSystem = /** @class */ (function () {
    function FileSystem() {
        this.root = new Directory_1.Directory("root");
        this.currentDirectory = this.root;
    }
    FileSystem.prototype.mkdir = function (dirName) {
        var newDir = new Directory_1.Directory(dirName, this.currentDirectory);
        this.currentDirectory.add(newDir);
    };
    FileSystem.prototype.touch = function (fileName) {
        var newFile = new File_1.File(fileName, this.currentDirectory);
        this.currentDirectory.add(newFile);
    };
    FileSystem.prototype.cd = function (dirName) {
        if (dirName === "..") {
            if (this.currentDirectory.parent && this.currentDirectory.parent instanceof Directory_1.Directory) {
                // Asegurarse de que parent es un Directory antes de asignarlo
                this.currentDirectory = this.currentDirectory.parent;
            }
            return;
        }
        this.currentDirectory = this.currentDirectory.getDirectory(dirName);
    };
    FileSystem.prototype.ls = function () {
        console.log(this.currentDirectory.list().join("\n"));
    };
    FileSystem.prototype.lsp = function () {
        var list = this._getAllFiles(this.root, []);
        require("fs").writeFileSync("display.txt", list.join("\n"));
    };
    FileSystem.prototype._getAllFiles = function (dir, list) {
        var _this = this;
        dir.contents.forEach(function (node) {
            if (node instanceof File_1.File) {
                list.push(node.getPath());
            }
            else if (node instanceof Directory_1.Directory) {
                _this._getAllFiles(node, list);
            }
        });
        return list;
    };
    FileSystem.prototype.pwd = function () {
        console.log(this.currentDirectory.getPath());
    };
    return FileSystem;
}());
exports.FileSystem = FileSystem;
