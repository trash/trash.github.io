webpackJsonp([0],[function(module,exports,__webpack_require__){eval('"use strict";\nconst bootstrap_citations_1 = __webpack_require__(1);\nwindow.onload = () => {\n    bootstrap_citations_1.bootstrapCitation();\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/app.ts\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./src/app.ts?')},function(module,exports,__webpack_require__){eval("\"use strict\";\nconst offset_1 = __webpack_require__(2);\nconst highlight_1 = __webpack_require__(3);\nfunction bootstrapCitation() {\n    const citations = document.querySelectorAll('.citation');\n    const citationsBlock = document.querySelector('.citations-block');\n    if (citations.length) {\n        Array.prototype.forEach.call(citations, (citation) => {\n            const number = parseInt(citation.textContent.match(/\\d/)[0]);\n            const citationEntry = citationsBlock.children[number - 1];\n            const citationPosition = Math.abs(offset_1.offset(citation.parentNode).top);\n            const citationEntryPosition = Math.abs(offset_1.offset(citationEntry.parentNode).top);\n            const citationEntryClickListener = function () {\n                highlight_1.unhighlightElement(citation);\n                document.body.removeEventListener('click', citationEntryClickListener);\n            };\n            const citationClickListener = function () {\n                highlight_1.unhighlightElement(citationEntry);\n                document.body.removeEventListener('click', citationClickListener);\n            };\n            citationEntry\n                .addEventListener('click', () => {\n                document.body.scrollTop = citationPosition - 16;\n                highlight_1.highlightElement(citation);\n                setTimeout(() => document.body.addEventListener('click', citationEntryClickListener), 1);\n            });\n            citation\n                .addEventListener('click', () => {\n                document.body.scrollTop = citationEntryPosition - 16;\n                highlight_1.highlightElement(citationEntry);\n                setTimeout(() => document.body.addEventListener('click', citationClickListener), 1);\n            });\n        });\n    }\n}\nexports.bootstrapCitation = bootstrapCitation;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/bootstrap-citations.ts\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./src/bootstrap-citations.ts?")},function(module,exports){eval('"use strict";\nfunction offset(element) {\n    if (!element) {\n        return;\n    }\n    const rect = element.getBoundingClientRect();\n    // Make sure element is not hidden (display: none) or disconnected\n    if (rect.width || rect.height || element.getClientRects().length) {\n        const doc = element.ownerDocument;\n        const docElem = doc.documentElement;\n        return {\n            top: rect.top + window.pageYOffset - docElem.clientTop,\n            left: rect.left + window.pageXOffset - docElem.clientLeft\n        };\n    }\n}\nexports.offset = offset;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/offset.ts\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./src/offset.ts?')},function(module,exports){eval("\"use strict\";\nfunction highlightElement(element) {\n    element.style.background = 'yellow';\n}\nexports.highlightElement = highlightElement;\nfunction unhighlightElement(element) {\n    element.style.background = '';\n}\nexports.unhighlightElement = unhighlightElement;\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/highlight.ts\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./src/highlight.ts?")}]);
//# sourceMappingURL=app-bundle.js.map