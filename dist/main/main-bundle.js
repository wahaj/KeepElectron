/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var _require = __webpack_require__(/*! electron */ \"electron\"),\n    app = _require.app,\n    ipcMain = _require.ipcMain;\n\nvar Window = __webpack_require__(/*! ./src/js/Window */ \"./src/js/Window.js\");\n\nvar _require2 = __webpack_require__(/*! python-shell */ \"./node_modules/python-shell/index.js\"),\n    PythonShell = _require2.PythonShell;\n\nvar Keep = __webpack_require__(/*! ./src/js/Keep */ \"./src/js/Keep.js\");\n\nvar mainWindow = null;\nvar keep = new Keep();\n\nfunction main() {\n  // Creates an object of a browser window class which shall\n  // be used throughout as the main interface to the window\n  mainWindow = new Window({\n    file: 'file://' + __dirname + '/src/index.html'\n  }); // Loads the index.html page in the electron browser\n\n  mainWindow.on('closed', function () {\n    // Dereference the window object so as to delete it\n    mainWindow = null;\n  });\n} //  Start point for the application for most use cases\n\n\napp.on('ready', main);\nipcMain.on('openGoogleLogin', function () {\n  mainWindow.loadURL('file://' + __dirname + '/src/login.html');\n});\nipcMain.on('loginSubmit', function (event, username, password) {\n  var pythonOptions = {\n    pythonPath: 'venv/bin/python',\n    pythonOptions: ['-u'],\n    // get print results in real-time\n    args: [username, password]\n  };\n  PythonShell.run('src/external-python/login.py', pythonOptions, function (err, results) {\n    if (err) throw err;\n    console.log(results);\n  });\n  keep.getNotes(username);\n  mainWindow.loadURL('file://' + __dirname + '/src/index.html');\n});\napp.on('window-all-closed', function () {\n  app.quit();\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/python-shell/index.js":
/*!********************************************!*\
  !*** ./node_modules/python-shell/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst events_1 = __webpack_require__(/*! events */ \"events\");\r\nconst child_process_1 = __webpack_require__(/*! child_process */ \"child_process\");\r\nconst os_1 = __webpack_require__(/*! os */ \"os\");\r\nconst path_1 = __webpack_require__(/*! path */ \"path\");\r\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\r\nconst util_1 = __webpack_require__(/*! util */ \"util\");\r\nfunction toArray(source) {\r\n    if (typeof source === 'undefined' || source === null) {\r\n        return [];\r\n    }\r\n    else if (!Array.isArray(source)) {\r\n        return [source];\r\n    }\r\n    return source;\r\n}\r\n/**\r\n * adds arguments as properties to obj\r\n */\r\nfunction extend(obj, ...args) {\r\n    Array.prototype.slice.call(arguments, 1).forEach(function (source) {\r\n        if (source) {\r\n            for (let key in source) {\r\n                obj[key] = source[key];\r\n            }\r\n        }\r\n    });\r\n    return obj;\r\n}\r\n/**\r\n * gets a random int from 0-10000000000\r\n */\r\nfunction getRandomInt() {\r\n    return Math.floor(Math.random() * 10000000000);\r\n}\r\nclass PythonShellError extends Error {\r\n}\r\nexports.PythonShellError = PythonShellError;\r\n/**\r\n * An interactive Python shell exchanging data through stdio\r\n * @param {string} script    The python script to execute\r\n * @param {object} [options] The launch options (also passed to child_process.spawn)\r\n * @constructor\r\n */\r\nclass PythonShell extends events_1.EventEmitter {\r\n    /**\r\n     * spawns a python process\r\n     * @param scriptPath path to script. Relative to current directory or options.scriptFolder if specified\r\n     * @param options\r\n     */\r\n    constructor(scriptPath, options) {\r\n        super();\r\n        /**\r\n         * returns either pythonshell func (if val string) or custom func (if val Function)\r\n         */\r\n        function resolve(type, val) {\r\n            if (typeof val === 'string') {\r\n                // use a built-in function using its name\r\n                return PythonShell[type][val];\r\n            }\r\n            else if (typeof val === 'function') {\r\n                // use a custom function\r\n                return val;\r\n            }\r\n        }\r\n        if (scriptPath.trim().length == 0)\r\n            throw Error(\"scriptPath cannot be empty! You must give a script for python to run\");\r\n        let self = this;\r\n        let errorData = '';\r\n        events_1.EventEmitter.call(this);\r\n        options = extend({}, PythonShell.defaultOptions, options);\r\n        let pythonPath;\r\n        if (!options.pythonPath) {\r\n            pythonPath = PythonShell.defaultPythonPath;\r\n        }\r\n        else\r\n            pythonPath = options.pythonPath;\r\n        let pythonOptions = toArray(options.pythonOptions);\r\n        let scriptArgs = toArray(options.args);\r\n        this.scriptPath = path_1.join(options.scriptPath || '', scriptPath);\r\n        this.command = pythonOptions.concat(this.scriptPath, scriptArgs);\r\n        this.mode = options.mode || 'text';\r\n        this.formatter = resolve('format', options.formatter || this.mode);\r\n        this.parser = resolve('parse', options.parser || this.mode);\r\n        this.stderrParser = resolve('parse', options.stderrParser || this.mode);\r\n        this.terminated = false;\r\n        this.childProcess = child_process_1.spawn(pythonPath, this.command, options);\r\n        ['stdout', 'stdin', 'stderr'].forEach(function (name) {\r\n            self[name] = self.childProcess[name];\r\n            self.parser && self[name].setEncoding(options.encoding || 'utf8');\r\n        });\r\n        // parse incoming data on stdout\r\n        if (this.parser) {\r\n            this.stdout.on('data', this.receive.bind(this));\r\n        }\r\n        // listen to stderr and emit errors for incoming data\r\n        this.stderr.on('data', function (data) {\r\n            errorData += '' + data;\r\n            self.receiveStderr(data);\r\n        });\r\n        this.stderr.on('end', function () {\r\n            self.stderrHasEnded = true;\r\n            terminateIfNeeded();\r\n        });\r\n        this.stdout.on('end', function () {\r\n            self.stdoutHasEnded = true;\r\n            terminateIfNeeded();\r\n        });\r\n        this.childProcess.on('exit', function (code, signal) {\r\n            self.exitCode = code;\r\n            self.exitSignal = signal;\r\n            terminateIfNeeded();\r\n        });\r\n        function terminateIfNeeded() {\r\n            if (!self.stderrHasEnded || !self.stdoutHasEnded || (self.exitCode == null && self.exitSignal == null))\r\n                return;\r\n            let err;\r\n            if (self.exitCode && self.exitCode !== 0) {\r\n                if (errorData) {\r\n                    err = self.parseError(errorData);\r\n                }\r\n                else {\r\n                    err = new PythonShellError('process exited with code ' + self.exitCode);\r\n                }\r\n                err = extend(err, {\r\n                    executable: pythonPath,\r\n                    options: pythonOptions.length ? pythonOptions : null,\r\n                    script: self.scriptPath,\r\n                    args: scriptArgs.length ? scriptArgs : null,\r\n                    exitCode: self.exitCode\r\n                });\r\n                // do not emit error if only a callback is used\r\n                if (self.listeners('error').length || !self._endCallback) {\r\n                    self.emit('error', err);\r\n                }\r\n            }\r\n            self.terminated = true;\r\n            self.emit('close');\r\n            self._endCallback && self._endCallback(err, self.exitCode, self.exitSignal);\r\n        }\r\n        ;\r\n    }\r\n    /**\r\n     * checks syntax without executing code\r\n     * @param {string} code\r\n     * @returns {Promise} rejects w/ stderr if syntax failure\r\n     */\r\n    static checkSyntax(code) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const randomInt = getRandomInt();\r\n            const filePath = os_1.tmpdir() + path_1.sep + `pythonShellSyntaxCheck${randomInt}.py`;\r\n            // todo: replace this with util.promisify (once we no longer support node v7)\r\n            return new Promise((resolve, reject) => {\r\n                fs_1.writeFile(filePath, code, (err) => {\r\n                    if (err)\r\n                        reject(err);\r\n                    resolve(this.checkSyntaxFile(filePath));\r\n                });\r\n            });\r\n        });\r\n    }\r\n    /**\r\n     * checks syntax without executing code\r\n     * @param {string} filePath\r\n     * @returns {Promise} rejects w/ stderr if syntax failure\r\n     */\r\n    static checkSyntaxFile(filePath) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            let compileCommand = `${this.defaultPythonPath} -m py_compile ${filePath}`;\r\n            return new Promise((resolve, reject) => {\r\n                child_process_1.exec(compileCommand, (error, stdout, stderr) => {\r\n                    if (error == null)\r\n                        resolve();\r\n                    else\r\n                        reject(stderr);\r\n                });\r\n            });\r\n        });\r\n    }\r\n    /**\r\n     * Runs a Python script and returns collected messages\r\n     * @param  {string}   scriptPath   The path to the script to execute\r\n     * @param  {Options}   options  The execution options\r\n     * @param  {Function} callback The callback function to invoke with the script results\r\n     * @return {PythonShell}       The PythonShell instance\r\n     */\r\n    static run(scriptPath, options, callback) {\r\n        let pyshell = new PythonShell(scriptPath, options);\r\n        let output = [];\r\n        return pyshell.on('message', function (message) {\r\n            output.push(message);\r\n        }).end(function (err) {\r\n            if (err)\r\n                return callback(err);\r\n            return callback(null, output.length ? output : null);\r\n        });\r\n    }\r\n    ;\r\n    /**\r\n     * Runs the inputted string of python code and returns collected messages. DO NOT ALLOW UNTRUSTED USER INPUT HERE!\r\n     * @param  {string}   code   The python code to execute\r\n     * @param  {Options}   options  The execution options\r\n     * @param  {Function} callback The callback function to invoke with the script results\r\n     * @return {PythonShell}       The PythonShell instance\r\n     */\r\n    static runString(code, options, callback) {\r\n        // put code in temp file\r\n        const randomInt = getRandomInt();\r\n        const filePath = os_1.tmpdir + path_1.sep + `pythonShellFile${randomInt}.py`;\r\n        fs_1.writeFileSync(filePath, code);\r\n        return PythonShell.run(filePath, options, callback);\r\n    }\r\n    ;\r\n    static getVersion(pythonPath) {\r\n        if (!pythonPath)\r\n            pythonPath = this.defaultPythonPath;\r\n        const execPromise = util_1.promisify(child_process_1.exec);\r\n        return execPromise(pythonPath + \" --version\");\r\n    }\r\n    static getVersionSync(pythonPath) {\r\n        if (!pythonPath)\r\n            pythonPath = this.defaultPythonPath;\r\n        return child_process_1.execSync(pythonPath + \" --version\").toString();\r\n    }\r\n    /**\r\n     * Parses an error thrown from the Python process through stderr\r\n     * @param  {string|Buffer} data The stderr contents to parse\r\n     * @return {Error} The parsed error with extended stack trace when traceback is available\r\n     */\r\n    parseError(data) {\r\n        let text = '' + data;\r\n        let error;\r\n        if (/^Traceback/.test(text)) {\r\n            // traceback data is available\r\n            let lines = ('' + data).trim().split(new RegExp(os_1.EOL, 'g'));\r\n            let exception = lines.pop();\r\n            error = new PythonShellError(exception);\r\n            error.traceback = data;\r\n            // extend stack trace\r\n            error.stack += os_1.EOL + '    ----- Python Traceback -----' + os_1.EOL + '  ';\r\n            error.stack += lines.slice(1).join(os_1.EOL + '  ');\r\n        }\r\n        else {\r\n            // otherwise, create a simpler error with stderr contents\r\n            error = new PythonShellError(text);\r\n        }\r\n        return error;\r\n    }\r\n    ;\r\n    /**\r\n     * Sends a message to the Python shell through stdin\r\n     * Override this method to format data to be sent to the Python process\r\n     * @param {string|Object} data The message to send\r\n     * @returns {PythonShell} The same instance for chaining calls\r\n     */\r\n    send(message) {\r\n        let data = this.formatter ? this.formatter(message) : message;\r\n        if (this.mode !== 'binary')\r\n            data += os_1.EOL;\r\n        this.stdin.write(data);\r\n        return this;\r\n    }\r\n    ;\r\n    /**\r\n     * Parses data received from the Python shell stdout stream and emits \"message\" events\r\n     * This method is not used in binary mode\r\n     * Override this method to parse incoming data from the Python process into messages\r\n     * @param {string|Buffer} data The data to parse into messages\r\n     */\r\n    receive(data) {\r\n        return this.recieveInternal(data, 'message');\r\n    }\r\n    ;\r\n    /**\r\n     * Parses data received from the Python shell stderr stream and emits \"stderr\" events\r\n     * This method is not used in binary mode\r\n     * Override this method to parse incoming logs from the Python process into messages\r\n     * @param {string|Buffer} data The data to parse into messages\r\n     */\r\n    receiveStderr(data) {\r\n        return this.recieveInternal(data, 'stderr');\r\n    }\r\n    ;\r\n    recieveInternal(data, emitType) {\r\n        let self = this;\r\n        let parts = ('' + data).split(new RegExp(os_1.EOL, 'g'));\r\n        if (parts.length === 1) {\r\n            // an incomplete record, keep buffering\r\n            this._remaining = (this._remaining || '') + parts[0];\r\n            return this;\r\n        }\r\n        let lastLine = parts.pop();\r\n        // fix the first line with the remaining from the previous iteration of 'receive'\r\n        parts[0] = (this._remaining || '') + parts[0];\r\n        // keep the remaining for the next iteration of 'receive'\r\n        this._remaining = lastLine;\r\n        parts.forEach(function (part) {\r\n            if (emitType == 'message')\r\n                self.emit(emitType, self.parser(part));\r\n            else if (emitType == 'stderr')\r\n                self.emit(emitType, self.stderrParser(part));\r\n        });\r\n        return this;\r\n    }\r\n    /**\r\n     * Closes the stdin stream, which should cause the process to finish its work and close\r\n     * @returns {PythonShell} The same instance for chaining calls\r\n     */\r\n    end(callback) {\r\n        this.childProcess.stdin.end();\r\n        this._endCallback = callback;\r\n        return this;\r\n    }\r\n    ;\r\n    /**\r\n     * Closes the stdin stream, which should cause the process to finish its work and close\r\n     * @returns {PythonShell} The same instance for chaining calls\r\n     */\r\n    terminate(signal) {\r\n        this.childProcess.kill(signal);\r\n        this.terminated = true;\r\n        return this;\r\n    }\r\n    ;\r\n}\r\n// starting 2020 python2 is deprecated so we choose 3 as default\r\n// except for windows which just has \"python\" command\r\nPythonShell.defaultPythonPath = process.platform != \"win32\" ? \"python3\" : \"py\";\r\nPythonShell.defaultOptions = {}; //allow global overrides for options\r\n// built-in formatters\r\nPythonShell.format = {\r\n    text: function toText(data) {\r\n        if (!data)\r\n            return '';\r\n        else if (typeof data !== 'string')\r\n            return data.toString();\r\n        return data;\r\n    },\r\n    json: function toJson(data) {\r\n        return JSON.stringify(data);\r\n    }\r\n};\r\n//built-in parsers\r\nPythonShell.parse = {\r\n    text: function asText(data) {\r\n        return data;\r\n    },\r\n    json: function asJson(data) {\r\n        return JSON.parse(data);\r\n    }\r\n};\r\nexports.PythonShell = PythonShell;\r\n;\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/python-shell/index.js?");

/***/ }),

/***/ "./src/js/Keep.js":
/*!************************!*\
  !*** ./src/js/Keep.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _require = __webpack_require__(/*! python-shell */ \"./node_modules/python-shell/index.js\"),\n    PythonShell = _require.PythonShell;\n\nvar Note = __webpack_require__(/*! ./KeepNote */ \"./src/js/KeepNote.js\");\n\nvar Keep =\n/*#__PURE__*/\nfunction () {\n  function Keep() {\n    _classCallCheck(this, Keep);\n\n    this.noteList = [];\n  }\n\n  _createClass(Keep, [{\n    key: \"addNoteFromJSON\",\n    value: function addNoteFromJSON(noteJSON) {\n      var note = new Note(noteJSON);\n      this.noteList.push(note);\n    }\n  }, {\n    key: \"getNoteList\",\n    value: function getNoteList() {\n      return this.noteList;\n    }\n  }, {\n    key: \"getNotes\",\n    value: function () {\n      var _getNotes = _asyncToGenerator(\n      /*#__PURE__*/\n      regeneratorRuntime.mark(function _callee(username) {\n        var self, options, shell;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                self = this; // Creating a Python shell for interacting with the gkeepapi\n\n                options = {\n                  mode: 'json',\n                  pythonPath: 'venv/bin/python',\n                  pythonOptions: ['-u'],\n                  // get print results in real-time\n                  args: [username]\n                };\n                shell = new PythonShell('src/external-python/get_notes.py', options); // On message received from the shell, that is JSON which is passed to create a new Note\n\n                shell.on('message', function (message) {\n                  self.addNoteFromJSON(message);\n                });\n                return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n                  // On the python shell script termination, resolve and return the promise\n                  shell.on('close', function () {\n                    resolve(self.noteList);\n                  });\n                  shell.on('error', function (error) {\n                    reject(error);\n                  });\n                }));\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getNotes(_x) {\n        return _getNotes.apply(this, arguments);\n      }\n\n      return getNotes;\n    }()\n  }]);\n\n  return Keep;\n}();\n\nmodule.exports = Keep;\n\n//# sourceURL=webpack:///./src/js/Keep.js?");

/***/ }),

/***/ "./src/js/KeepNote.js":
/*!****************************!*\
  !*** ./src/js/KeepNote.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar KeepNote =\n/*#__PURE__*/\nfunction () {\n  function KeepNote(json) {\n    _classCallCheck(this, KeepNote);\n\n    if (json === undefined) {\n      this.color = \"White\";\n      this.archived = false;\n      this.pinned = false;\n      this.title = \"\";\n      this.text = \"\";\n    } else {\n      this.setJSON(json);\n    }\n  }\n\n  _createClass(KeepNote, [{\n    key: \"setJSON\",\n    value: function setJSON(json) {\n      if (json[\"list\"]) {\n        this.id = json.id;\n        this.color = json.color;\n        this.archived = json.archived;\n        this.pinned = json.pinned;\n        this.title = json.title;\n        this.list = json.list;\n      } else {\n        this.id = json.id;\n        this.color = json.color;\n        this.archived = json.archived;\n        this.pinned = json.pinned;\n        this.title = json.title;\n        this.text = json.text;\n      }\n    }\n  }, {\n    key: \"getJSON\",\n    value: function getJSON() {\n      return {\n        'id': this.id,\n        'color': this.color,\n        'archived': this.archived,\n        'pinned': this.pinned,\n        'title': this.title,\n        'text': this.text\n      };\n    }\n  }]);\n\n  return KeepNote;\n}();\n\nmodule.exports = KeepNote;\n\n//# sourceURL=webpack:///./src/js/KeepNote.js?");

/***/ }),

/***/ "./src/js/Window.js":
/*!**************************!*\
  !*** ./src/js/Window.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar _require = __webpack_require__(/*! electron */ \"electron\"),\n    BrowserWindow = _require.BrowserWindow;\n\nvar defaultProps = {\n  frame: false,\n  width: 800,\n  height: 400,\n  icon: __dirname + '/app/assets/keep-icon.png',\n  webPreferences: {\n    nodeIntegration: true\n  }\n};\n\nvar Window =\n/*#__PURE__*/\nfunction (_BrowserWindow) {\n  _inherits(Window, _BrowserWindow);\n\n  function Window(_ref) {\n    var _this;\n\n    var file = _ref.file,\n        windowSettings = _objectWithoutProperties(_ref, [\"file\"]);\n\n    _classCallCheck(this, Window);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Window).call(this, _objectSpread({}, defaultProps, windowSettings)));\n\n    _this.loadURL(file);\n\n    _this.webContents.openDevTools();\n\n    _this.once('ready-to-show', function () {\n      _this.show();\n    });\n\n    return _this;\n  }\n\n  return Window;\n}(BrowserWindow);\n\nmodule.exports = Window;\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/js/Window.js?");

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./main.js */\"./main.js\");\n\n\n//# sourceURL=webpack:///multi_./main.js?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"electron\");\n\n//# sourceURL=webpack:///external_%22electron%22?");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"events\");\n\n//# sourceURL=webpack:///external_%22events%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"os\");\n\n//# sourceURL=webpack:///external_%22os%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });