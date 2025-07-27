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
            created_at: { type: 'string', format: 'date-time' }
          }
        },
        ContactDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            user_id: { type: 'string' },
            full_name: { type: 'string' },
            email: { type: 'string' },
            subject: { type: 'string' },
            message: { type: 'string' },
            created_at: { type: 'string', format: 'date-time' }
          }
        },

        ProfileDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            user_id: { type: 'integer' },
            full_name: { type: 'string' },
            title: { type: 'string' },
            bio: { type: 'string', nullable: true },
            profile_picture: { type: 'string', nullable: true }
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


