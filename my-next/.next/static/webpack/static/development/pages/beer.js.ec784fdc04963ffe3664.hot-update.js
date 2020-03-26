webpackHotUpdate("static/development/pages/beer.js",{

/***/ "./components/beer/types.js":
/*!**********************************!*\
  !*** ./components/beer/types.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");


var _jsxFileName = "/Users/michaeldipaolo/Desktop/michaeldipaolo.com/my-next/components/beer/types.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 //gets the unique countries in the object

var getUnqiue = function getUnqiue(object, key) {
  var allElements = object.map(function (x) {
    return x[key];
  });

  var unqiueElements = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(allElements));

  return unqiueElements;
}; //gets how many times those unique elements show up in the object 


var getValues = function getValues(beer, key, labels) {
  var allBeer = beer.map(function (x) {
    return x[key];
  });
  var values = [];
  labels.forEach(function (element) {
    return values.push(allBeer.filter(function (v) {
      return v === element;
    }).length);
  });
  return values;
};

var Types = function Types(props) {
  var labels = getUnqiue(props.beer, 'type');
  var data = getValues(props.beer, 'type', labels);
  var colors = ["red", "blue", "yellow", "green", "orange", "purple", "navy", "brown", "skyblue", "salmon", "orangered", "olive", "mediumorchid", "maroon", "lime", "pink", "goldenrod", "firebrick", "darkcyan", "cornflowerblue", "chocolate", "firebrick", "darkcyan", "cornflowerblue", "chocolate"];
  var asdf = {
    dataPie: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
    }
  };
  return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Types of Beer"), __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__["Pie"], {
    data: asdf.dataPie,
    options: {
      responsive: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Types);

/***/ })

})
//# sourceMappingURL=beer.js.ec784fdc04963ffe3664.hot-update.js.map