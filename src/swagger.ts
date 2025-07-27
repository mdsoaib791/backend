import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio Builder API',
      version: '1.0.0',
      description: "API documentation for Portfolio Builder application",
    },
    servers: [
      { url: 'http://localhost:5000' }
    ],
    tags: [
      { name: 'Account', description: 'Account management endpoints' },
      { name: 'Contact', description: 'Contact form submissions' },
      { name: 'Profile', description: 'Portfolio profile management' }
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
        AccountRegister: {
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
            createdAt: { type: 'string', format: 'date-time' }
          }
        },
        ContactDTO: {
          type: 'object',
          properties: {
            userId: { type: 'string' },
            phone: { type: 'string', nullable: true },
            alternatePhone: { type: 'string', nullable: true },
            address: { type: 'string', nullable: true },
            city: { type: 'string', nullable: true },
            state: { type: 'string', nullable: true },
            country: { type: 'string', nullable: true },
            zipCode: { type: 'string', nullable: true },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
        ProfileDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            userId: { type: 'string' },
            firstName: { type: 'string', nullable: true },
            lastName: { type: 'string', nullable: true },
            dateOfBirth: { type: 'string', format: 'date', nullable: true },
            gender: { type: 'string', nullable: true },
            bio: { type: 'string', nullable: true },
            avatarUrl: { type: 'string', nullable: true },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' }
          }
        },
      },
      responses: {
        UnauthorizedError: {
          description: 'Unauthorized',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string' }
                }
              }
            }
          }
        },
        NotFoundError: {
          description: 'Not Found',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string' }
                }
              }
            }
          }
        },
        ValidationError: {
          description: 'Validation Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                  errors: { type: 'array', items: { type: 'string' } }
                }
              }
            }
          }
        }
      }
    },
    security: [
      { bearerAuth: [] }
    ]
  },
  apis: ['./src/api/routes/*.ts', './src/api/controllers/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
export const swaggerUiHandler = swaggerUi.serve;
export const swaggerUiSetup = swaggerUi.setup(swaggerSpec);


