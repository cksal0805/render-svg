"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var RenderSvg = function (_a) {
    var url = _a.url;
    var _b = (0, react_1.useState)(''), svg = _b[0], setSvg = _b[1];
    var _c = (0, react_1.useState)(false), isLoaded = _c[0], setIsLoaded = _c[1];
    var _d = (0, react_1.useState)(false), isErrored = _d[0], setIsErrored = _d[1];
    (0, react_1.useEffect)(function () {
        fetch(url)
            .then(function (res) { return res.text(); })
            .then(setSvg)
            .catch(setIsErrored)
            .then(function () { return setIsLoaded(true); });
    }, [url]);
    return (react_1.default.createElement("div", { className: "svgInline svgInline--".concat(isLoaded ? 'loaded' : 'loading', " ").concat(isErrored ? 'svgInline--errored' : ''), dangerouslySetInnerHTML: { __html: svg } }));
};
exports.default = RenderSvg;
//# sourceMappingURL=RenderSvg.js.map