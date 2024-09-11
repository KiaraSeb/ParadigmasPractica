"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(name, parent) {
        if (parent === void 0) { parent = null; }
        this.name = name;
        this.parent = parent;
    }
    Node.prototype.getPath = function () {
        if (!this.parent) {
            return this.name;
        }
        return "".concat(this.parent.getPath(), "/").concat(this.name);
    };
    return Node;
}());
exports.Node = Node;
