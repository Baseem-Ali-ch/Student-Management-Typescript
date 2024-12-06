// student interface
interface Student {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    grade: number;
    enrollmentDate: Date;
}

// createstudentdto interface
interface CreateStudentDto {
    firstName: string;
    lastName: string;
    email: string;
    grade: number;
}

// extended the createstudentdto interface
interface UpdateStudentDto extends CreateStudentDto {
    id: string;
}


// student service class
class StudentService {
    private students: Student[] = [];

    // async function retrieve the students
    async getAllStudents(): Promise<Student[]> {
        await new Promise(resolve => setTimeout(resolve, 500));
        return [...this.students];
    }

    //async function retrieve student by id
    async getStudentById(id: string): Promise<Student | null> {
        await new Promise(resolve => setTimeout(resolve, 300));
        return this.students.find(student => student.id === id) || null;
    }

    // create student
    async createStudent(studentDto: CreateStudentDto): Promise<Student> {
        await new Promise(resolve => setTimeout(resolve, 500));
        const newStudent: Student = {
            id: crypto.randomUUID(),
            ...studentDto,
            enrollmentDate: new Date()
        };
        this.students.push(newStudent);
        return newStudent;
    }

    // async function for update student
    async updateStudent(studentDto: UpdateStudentDto): Promise<Student | null> {
        await new Promise(resolve => setTimeout(resolve, 500));
        const index = this.students.findIndex(s => s.id === studentDto.id);
        if (index === -1) return null;

        const updatedStudent: Student = {
            ...this.students[index],
            ...studentDto
        };
        this.students[index] = updatedStudent;
        return updatedStudent;
    }

    // async function to delete student details
    async deleteStudent(id: string): Promise<boolean> {
        await new Promise(resolve => setTimeout(resolve, 500));
        const index = this.students.findIndex(s => s.id === id);
        if (index === -1) return false;
        
        this.students.splice(index, 1);
        return true;
    }
}


// class student management 
class StudentManagementApp {
    private studentService: StudentService;
    private form: HTMLFormElement;
    private studentList: HTMLElement;
    private currentStudentId: string | null = null;

    constructor(studentService: StudentService) {
        this.studentService = studentService;
        this.form = document.getElementById('studentForm') as HTMLFormElement;
        this.studentList = document.getElementById('studentList') as HTMLElement;
        this.initializeEventListeners();
        this.loadStudents();
    }

    // event listener when submit
    private initializeEventListeners(): void {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        document.getElementById('resetForm')?.addEventListener('click', () => {
            this.currentStudentId = null;
            this.form.reset();
            (document.getElementById('submitBtn') as HTMLButtonElement).textContent = 'Add Student';
        });
    }

    // function for submit details
    private async handleSubmit(e: Event): Promise<void> {
        e.preventDefault();
        try {
            const formData = new FormData(this.form);
            const studentDto: CreateStudentDto = {
                firstName: formData.get('firstName') as string,
                lastName: formData.get('lastName') as string,
                email: formData.get('email') as string,
                grade: Number(formData.get('grade'))
            };

            if (this.currentStudentId) {
                await this.studentService.updateStudent({ ...studentDto, id: this.currentStudentId });
                alert('Student updated successfully!');
            } else {
                await this.studentService.createStudent(studentDto);
                alert('Student added successfully!');
            }

            this.form.reset();
            this.currentStudentId = null;
            (document.getElementById('submitBtn') as HTMLButtonElement).textContent = 'Add Student';
            await this.loadStudents();
        } catch (error) {
            alert('An error occurred');
            console.error(error);
        }
    }

    // display student details
    private async loadStudents(): Promise<void> {
        try {
            const students = await this.studentService.getAllStudents();
            this.renderStudentList(students);
        } catch (error) {
            alert('Failed to load students');
            console.error(error);
        }
    }

    // ensure delete and display confirm message
    private async handleDelete(id: string): Promise<void> {
        if (!confirm('Are you sure you want to delete this student?')) return;
        
        try {
            await this.studentService.deleteStudent(id);
            await this.loadStudents();
            alert('Student deleted successfully');
        } catch (error) {
            alert('Failed to delete student');
            console.error(error);
        }
    }

    
    private async handleEdit(id: string): Promise<void> {
        try {
            const student = await this.studentService.getStudentById(id);
            if (!student) return;

            this.currentStudentId = student.id;
            (this.form.querySelector('[name="firstName"]') as HTMLInputElement).value = student.firstName;
            (this.form.querySelector('[name="lastName"]') as HTMLInputElement).value = student.lastName;
            (this.form.querySelector('[name="email"]') as HTMLInputElement).value = student.email;
            (this.form.querySelector('[name="grade"]') as HTMLInputElement).value = student.grade.toString();
            (document.getElementById('submitBtn') as HTMLButtonElement).textContent = 'Update Student';
        } catch (error) {
            alert('Failed to load student details');
            console.error(error);
        }
    }

    // create element for display details
    private renderStudentList(students: Student[]): void {
        this.studentList.innerHTML = students.map(student => `
            <div class="student-card">
                <h3>${student.firstName} ${student.lastName}</h3>
                <p>Email: ${student.email}</p>
                <p>Grade: ${student.grade}</p>
                <p>Enrolled: ${new Date(student.enrollmentDate).toLocaleDateString()}</p>
                <div class="actions">
                    <button onclick="app.handleEdit('${student.id}')" class="edit-btn">Edit</button>
                    <button onclick="app.handleDelete('${student.id}')" class="delete-btn">Delete</button>
                </div>
            </div>
        `).join('');
    }
}

// creating instance of studentservice
const studentService = new StudentService();

// createing instance of studentmanagement app
const app = new StudentManagementApp(studentService);