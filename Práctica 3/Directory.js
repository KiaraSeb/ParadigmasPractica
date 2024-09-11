"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = void 0;
var Node_1 = require("./Node");
var Directory = /** @class */ (function (_super) {
    __extends(Directory, _super);
    function Directory(name, parent) {
        if (parent === void 0) { parent = null; }
        var _this = _super.call(this, name, parent) || this;
        _this.contents = new Map();
        return _this;
    }
    Directory.prototype.add = function (node) {
        if (this.contents.has(node.name)) {
            throw new Error("A file or folder with the name '".concat(node.name, "' already exists in this directory."));
        }
        this.contents.set(node.name, node);
    };
    Directory.prototype.list = function () {
        return Array.from(this.contents.keys()).sort();
    };
    Directory.prototype.getDirectory = function (name) {
        var node = this.contents.get(name);
        if (node instanceof Directory) {
            return node;
        }
        throw new Error("'".concat(name, "' is not a directory."));
    };
    return Directory;
}(Node_1.Node));
exports.Directory = Directory;
