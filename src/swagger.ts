import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'School Management API',
      version: '1.0.0',
      description: "API documentation for School Management System",
    },
    servers: [
      { url: 'http://localhost:5000' }
    ],
    tags: [
      { name: 'Account', description: 'Account management endpoints' },
      { name: 'User', description: 'User management endpoints' },
      { name: 'Student', description: 'Student management endpoints' },
      { name: 'Teacher', description: 'Teacher management endpoints' },
      { name: 'Class', description: 'Class management endpoints' },
      { name: 'Subject', description: 'Subject management endpoints' },
      { name: 'Attendance', description: 'Attendance management endpoints' }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      },
      schemas: {
        AccountRegister:
        {
          type: 'object',
          required: ['email', 'password', 'role'],
          properties: {
            email: { type: 'string' },
            password: { type: 'string' },
            role: { type: 'string' }
          }
        },
        AccountDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            email: { type: 'string' },
            role: { type: 'string' },
            created_at: { type: 'string', format: 'date-time' }
          }
        },
        UserDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            account_id: { type: 'integer' },
            name: { type: 'string' },
            phone: { type: 'string' },
            address: { type: 'string' },
            dob: { type: 'string', format: 'date' },
            created_at: { type: 'string', format: 'date-time' }
          }
        },
        StudentDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            user_id: { type: 'integer' },
            class_id: { type: 'integer' },
            roll_number: { type: 'string' },
            admission_date: { type: 'string', format: 'date' }
          }
        },
        TeacherDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            user_id: { type: 'integer' },
            subject_id: { type: 'integer' },
            hire_date: { type: 'string', format: 'date' }
          }
        },
        ClassDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            section: { type: 'string' },
            created_at: { type: 'string', format: 'date-time' }
          }
        },
        SubjectDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            code: { type: 'string' },
            created_at: { type: 'string', format: 'date-time' }
          }
        },
        AttendanceDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            student_id: { type: 'integer' },
            date: { type: 'string', format: 'date' },
            status: { type: 'string' }
          }
        }
      }
    },
    security: [
      { bearerAuth: [] }
    ]
  },
  apis: ['./src/api/routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiHandler = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup(swaggerSpec);


