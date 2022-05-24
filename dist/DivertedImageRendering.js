"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RenderSvg_1 = __importDefault(require("./RenderSvg"));
function DivertedImageRendering(_a) {
    var url = _a.url;
    var reg = new RegExp('\.svg$', 'i');
    if (reg.test(url)) {
        return react_1.default.createElement("div", { style: { width: '100%' } },
            react_1.default.createElement(RenderSvg_1.default, { url: url }));
    }
    return react_1.default.createElement("img", { src: url, alt: "image", style: { width: '100%' } });
}
exports.default = DivertedImageRendering;
//# sourceMappingURL=DivertedImageRendering.js.map