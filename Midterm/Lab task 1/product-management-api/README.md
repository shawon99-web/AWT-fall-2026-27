# Product & Employee Management API (NestJS + PostgreSQL + TypeORM)

## Student details
| SL | Name | Student ID | Section |
|----|------|------------|---------|
| 13 | AHSAN HABIB SHAWON | 23-51870-2 | D |

## Tech stack
NestJS, TypeORM, PostgreSQL, class-validator

## Database setup
1. Install PostgreSQL and make sure it is running on port 5432.
2. Create a database (DBeaver or psql):
   ```sql
   CREATE DATABASE product_management;
   ```
3. Copy `.env.example` to `.env` and put in your own PostgreSQL password.

Tables (`products`, `employees`) are created automatically by TypeORM on first start.

## Installation & run
```bash
npm install
npm run start:dev
```
The API runs at `http://localhost:3000`.

## Endpoints
### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get a product by ID |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

Body: `{ "name": "Pen", "category": "Stationery", "price": 1.5, "quantity": 100 }`

### Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get an employee by ID |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

Body: `{ "name": "Jane Doe", "email": "jane@example.com", "phone": "01700000000", "password": "dummy123", "age": 30, "yearsOfWorking": 5 }`

## Screenshots
See the `screenshots/` folder (Postman evidence for all operations).
