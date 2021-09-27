"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require('express');
var router = express.Router();
var fs = require("fs");
router.post('/add', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, name_1, emplevel, mob, email, date_of_join, emp, stringifyData;
    return __generator(this, function (_b) {
        try {
            _a = req.body, id = _a.id, name_1 = _a.name, emplevel = _a.emplevel, mob = _a.mob, email = _a.email, date_of_join = _a.date_of_join;
            emp = fs.readFileSync("employee_data.js");
            emp = JSON.parse(emp);
            emp.push(req.body);
            stringifyData = JSON.stringify(emp);
            fs.writeFileSync("employee_data.js", stringifyData);
            // console.log(data);
            res.send("successfully added");
        }
        catch (err) {
            res.send('Error ' + err);
        }
        return [2 /*return*/];
    });
}); });
router.get('/all', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var emp;
    return __generator(this, function (_a) {
        //     // console.log(employees)
        //     res.json(employees)
        // }   
        // catch(err){
        //         res.send('Error '+ err)
        // }
        try {
            emp = fs.readFileSync("employee_data.js");
            emp = JSON.parse(emp);
            // res.send("Employees Details");
            //res.json(emp)
            res.send(emp);
        }
        catch (err) {
            res.send("Error " + err);
        }
        return [2 /*return*/];
    });
}); });
router.get('/find/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Id_1, emp, employee, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (req.params.id)];
            case 1:
                Id_1 = _a.sent();
                emp = fs.readFileSync("employee_data.js");
                emp = JSON.parse(emp);
                employee = emp.filter(function (e) { return e.id == Id_1; });
                res.json({
                    response: employee
                });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.send("Error: " + err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router["delete"]('/delete/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Id_2, data, filtered, stringifyData, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (req.params.id)];
            case 1:
                Id_2 = _a.sent();
                data = fs.readFileSync("employee_data.js");
                data = JSON.parse(data);
                filtered = data.filter(function (item) {
                    return item.id != Id_2;
                });
                stringifyData = JSON.stringify(filtered);
                fs.writeFileSync("employee_data.js", stringifyData);
                res.send({
                    response: filtered
                });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.send("Error " + err_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.patch('/update/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var employee, Id_3, emp, filtered, stringifyData, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                employee = req.body;
                return [4 /*yield*/, (req.params.id)];
            case 1:
                Id_3 = _a.sent();
                emp = fs.readFileSync("employee_data.js");
                emp = JSON.parse(emp);
                filtered = emp.filter(function (item) {
                    return item.id != Id_3;
                });
                filtered.push(employee);
                stringifyData = JSON.stringify(filtered);
                fs.writeFileSync("employee_data.js", stringifyData);
                res.send({
                    message: "employee data successfully Updated",
                    response: filtered
                });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                // console.log(err)
                res.send("Error " + err_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
