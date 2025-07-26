
# 📘 Dev Dependencies Documentation

## 🏗️ Project: `backend`
**Language:** TypeScript  
**Runtime Stack:** Node.js  
**Development Environment Setup with Type Safety, Auto-Restarts, and Type Definitions**

---

## 🛠️ Development Dependencies

| Package                             | Version     | Purpose                                                                 |
|-------------------------------------|-------------|-------------------------------------------------------------------------|
| `typescript`                        | ^5.8.3      | Adds support for writing type-safe JavaScript using TypeScript.         |
| `ts-node`                           | ^10.9.2     | Runs TypeScript code directly without compiling to JS. Ideal for dev.   |
| `nodemon`                           | ^3.1.10     | Automatically restarts the server on code changes for faster dev.       |
| `@types/node`                       | ^24.0.15    | Type definitions for Node.js APIs, required for working in TypeScript.  |
| `@types/express`                    | ^5.0.3      | Adds TypeScript type definitions for Express framework.                 |
| `@types/bcrypt`                     | ^6.0.0      | Type definitions for `bcrypt`, used for password hashing.               |
| `@types/jsonwebtoken`              | ^9.0.10     | Adds typings for `jsonwebtoken`, used for JWT-based authentication.     |
| `@types/cookie-parser`             | ^1.4.9      | Type definitions for the `cookie-parser` middleware.                    |
| `@types/pg`                         | ^8.15.4     | Type definitions for the `pg` PostgreSQL client library.                |
| `@types/swagger-jsdoc`             | ^6.0.4      | Type definitions for `swagger-jsdoc`, which generates OpenAPI specs.    |
| `@types/swagger-ui-express`        | ^4.1.8      | Type definitions for `swagger-ui-express`, used for Swagger UI.         |

---

## 🧠 Summary

| Category              | Tools Used                                                                 |
|-----------------------|----------------------------------------------------------------------------|
| **TypeScript Compiler**  | `typescript`, `ts-node`                                                 |
| **Development Tools**    | `nodemon`                                                               |
| **Node.js Types**        | `@types/node`                                                           |
| **Express Types**        | `@types/express`                                                        |
| **Auth Middleware Types**| `@types/bcrypt`, `@types/jsonwebtoken`, `@types/cookie-parser`          |
| **Database Types**       | `@types/pg`                                                             |
| **API Docs Types**       | `@types/swagger-jsdoc`, `@types/swagger-ui-express`                    |

---

## ✅ Benefits

- **Improved DX (Developer Experience)** using `nodemon` and `ts-node`
- **Type Safety & IntelliSense** in editors via `@types` packages
- **Cleaner Code and Catch Errors Early** with TypeScript integration
- **Easy Integration with Express & PostgreSQL**
