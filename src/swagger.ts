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
      { name: 'User', description: 'User management endpoints' },
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
            user_id: { type: 'integer' },
            name: { type: 'string' },
            email: { type: 'string' },
            subject: { type: 'string' },
            message: { type: 'string' },
            created_at: { type: 'string', format: 'date-time' }
          }
        },
        ExperienceDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            company: { type: 'string' },
            position: { type: 'string' },
            description: { type: 'string' },
            start_date: { type: 'string', format: 'date' },
            end_date: { type: 'string', format: 'date', nullable: true }
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
        ProjectDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            title: { type: 'string' },
            description: { type: 'string' },
            tech_stack: {
              type: 'array',
              items: { type: 'string' }
            },
            github_url: { type: 'string', nullable: true },
            live_url: { type: 'string', nullable: true },
            thumbnail: { type: 'string', nullable: true }
          }
        },
        SkillDTO: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            name: { type: 'string' },
            category: { type: 'string' },
            icon_url: { type: 'string' }
          }
        }
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


