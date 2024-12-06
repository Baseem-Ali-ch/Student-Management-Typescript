var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// services/student.service.ts
var StudentService = /** @class */ (function () {
    function StudentService() {
        this.students = [];
    }
    StudentService.prototype.getAllStudents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // Simulate API delay
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 1:
                        // Simulate API delay
                        _a.sent();
                        return [2 /*return*/, __spreadArray([], this.students, true)];
                }
            });
        });
    };
    StudentService.prototype.getStudentById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 300); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.students.find(function (student) { return student.id === id; }) || null];
                }
            });
        });
    };
    StudentService.prototype.createStudent = function (studentDto) {
        return __awaiter(this, void 0, void 0, function () {
            var newStudent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 1:
                        _a.sent();
                        newStudent = __assign(__assign({ id: crypto.randomUUID() }, studentDto), { enrollmentDate: new Date() });
                        this.students.push(newStudent);
                        return [2 /*return*/, newStudent];
                }
            });
        });
    };
    StudentService.prototype.updateStudent = function (studentDto) {
        return __awaiter(this, void 0, void 0, function () {
            var index, updatedStudent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 1:
                        _a.sent();
                        index = this.students.findIndex(function (s) { return s.id === studentDto.id; });
                        if (index === -1)
                            return [2 /*return*/, null];
                        updatedStudent = __assign(__assign({}, this.students[index]), studentDto);
                        this.students[index] = updatedStudent;
                        return [2 /*return*/, updatedStudent];
                }
            });
        });
    };
    StudentService.prototype.deleteStudent = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                    case 1:
                        _a.sent();
                        index = this.students.findIndex(function (s) { return s.id === id; });
                        if (index === -1)
                            return [2 /*return*/, false];
                        this.students.splice(index, 1);
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return StudentService;
}());
// app.ts
var StudentManagementApp = /** @class */ (function () {
    function StudentManagementApp(studentService) {
        this.currentStudentId = null;
        this.studentService = studentService;
        this.form = document.getElementById('studentForm');
        this.studentList = document.getElementById('studentList');
        this.initializeEventListeners();
        this.loadStudents();
    }
    StudentManagementApp.prototype.initializeEventListeners = function () {
        var _this = this;
        var _a;
        this.form.addEventListener('submit', function (e) { return _this.handleSubmit(e); });
        // Reset form button
        (_a = document.getElementById('resetForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.currentStudentId = null;
            _this.form.reset();
            document.getElementById('submitBtn').textContent = 'Add Student';
        });
    };
    StudentManagementApp.prototype.handleSubmit = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, studentDto, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 7, , 8]);
                        formData = new FormData(this.form);
                        studentDto = {
                            firstName: formData.get('firstName'),
                            lastName: formData.get('lastName'),
                            email: formData.get('email'),
                            grade: Number(formData.get('grade'))
                        };
                        if (!this.currentStudentId) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.studentService.updateStudent(__assign(__assign({}, studentDto), { id: this.currentStudentId }))];
                    case 2:
                        _a.sent();
                        alert('Student updated successfully!');
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.studentService.createStudent(studentDto)];
                    case 4:
                        _a.sent();
                        alert('Student added successfully!');
                        _a.label = 5;
                    case 5:
                        this.form.reset();
                        this.currentStudentId = null;
                        document.getElementById('submitBtn').textContent = 'Add Student';
                        return [4 /*yield*/, this.loadStudents()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _a.sent();
                        alert('An error occurred');
                        console.error(error_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementApp.prototype.loadStudents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var students, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.studentService.getAllStudents()];
                    case 1:
                        students = _a.sent();
                        this.renderStudentList(students);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        alert('Failed to load students');
                        console.error(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementApp.prototype.handleDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm('Are you sure you want to delete this student?'))
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.studentService.deleteStudent(id)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.loadStudents()];
                    case 3:
                        _a.sent();
                        alert('Student deleted successfully');
                        return [3 /*break*/, 5];
                    case 4:
                        error_3 = _a.sent();
                        alert('Failed to delete student');
                        console.error(error_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementApp.prototype.handleEdit = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var student, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.studentService.getStudentById(id)];
                    case 1:
                        student = _a.sent();
                        if (!student)
                            return [2 /*return*/];
                        this.currentStudentId = student.id;
                        this.form.querySelector('[name="firstName"]').value = student.firstName;
                        this.form.querySelector('[name="lastName"]').value = student.lastName;
                        this.form.querySelector('[name="email"]').value = student.email;
                        this.form.querySelector('[name="grade"]').value = student.grade.toString();
                        document.getElementById('submitBtn').textContent = 'Update Student';
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        alert('Failed to load student details');
                        console.error(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementApp.prototype.renderStudentList = function (students) {
        this.studentList.innerHTML = students.map(function (student) { return "\n            <div class=\"student-card\">\n                <h3>".concat(student.firstName, " ").concat(student.lastName, "</h3>\n                <p>Email: ").concat(student.email, "</p>\n                <p>Grade: ").concat(student.grade, "</p>\n                <p>Enrolled: ").concat(new Date(student.enrollmentDate).toLocaleDateString(), "</p>\n                <div class=\"actions\">\n                    <button onclick=\"app.handleEdit('").concat(student.id, "')\" class=\"edit-btn\">Edit</button>\n                    <button onclick=\"app.handleDelete('").concat(student.id, "')\" class=\"delete-btn\">Delete</button>\n                </div>\n            </div>\n        "); }).join('');
    };
    return StudentManagementApp;
}());
// Initialize the application
var studentService = new StudentService();
var app = new StudentManagementApp(studentService);
