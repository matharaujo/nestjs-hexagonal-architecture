<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Movie Management System

This project implements a movie management system using Hexagonal Architecture. The system is responsible for storing, retrieving, and manipulating information about movies, such as name, genre, studio, director, and rate.

## Architecture

Hexagonal Architecture is employed to ensure a clean, decoupled, and scalable structure. This means that the core business logic of the application is isolated from external concerns such as databases, user interfaces, and third-party services. This isolation allows for easier testing, maintenance, and evolution of the system over time.

<b>The key concepts in Hexagonal Architecture are:</b>

- <b>Ports</b>: These are interfaces that define how the application interacts with external actors. For example, a port could define the methods for retrieving movie data from a database.

- <b>Adapters</b>: These are concrete implementations of ports. For example, an adapter could be a class that implements the database port using a specific database technology like PostgreSQL.

By using ports and adapters, the application can be easily adapted to work with different technologies without affecting the core business logic.

This project demonstrates how to apply Hexagonal Architecture to a real-world problem and provides a solid foundation for building more complex applications.

## Benefits of Hexagonal Architecture

- <b>Decoupling</b>: Business logic is completely decoupled from external interfaces such as databases, APIs, and user interfaces. This makes it easy to make changes in any layer without impacting the rest of the system.

- <b>Ease of Testing</b>: Since external dependencies are abstracted away, the domain layer can be tested in isolation, without the need for a real database or external services.

- <b>Scalability</b>: The architecture allows for adding new input and output interfaces without changing the core business logic. For example, it's easy to add a new user interface or integrate with a new database.

- <b>Flexibility</b>: The system can be easily modified to use different technologies or protocols. For example, the persistence layer can be changed from a relational database to a NoSQL database without affecting the domain layer.

Essentially, Hexagonal Architecture promotes a more modular and adaptable system by clearly separating concerns and using abstraction to minimize dependencies between different parts of the application. This leads to a more maintainable, testable, and evolvable software solution.

## Possible Drawbacks

- <b>Initial Complexity</b>: The initial implementation can be more complex than other architectures, especially for small or simple projects where the added complexity may not be necessary.

- <b>Learning Curve</b>: For teams or developers unfamiliar with the hexagonal pattern, the learning curve can be a bit steeper. Understanding how to properly separate layers and define interfaces can be challenging at first.

- <b>Code Overhead</b>: Separation into multiple layers can lead to a larger number of files and classes, which can result in more code to maintain. This may be unnecessary for simpler systems.

It's important to weigh these potential drawbacks against the benefits before deciding if Hexagonal Architecture is the right choice for your project. If you have a small project with simple requirements, the added complexity might not be worth it. However, for larger, more complex projects with evolving needs, the benefits of Hexagonal Architecture can outweigh the drawbacks.

## When to Use Hexagonal Architecture

- <b>Complex Systems</b>: When the system requires robust business logic that needs to be kept separate from external interfaces. This is often the case in enterprise applications or systems with a large number of integrations.

- <b>Scalability</b>: When the project needs to be scalable and you anticipate that new interfaces or technologies will be integrated into the system in the future. Hexagonal Architecture makes it easier to add new features and adapt to changing requirements without major code refactoring.

- <b>Testability</b>: When you need good test coverage and want to easily isolate business logic from external interactions. This allows for more focused and effective unit testing.

- <b>Changing Technologies</b>: When you want to make it easy to change external technologies (such as databases or APIs) without impacting the core business logic. This can be useful for migrating to new technologies or adapting to different environments.

Essentially, if you are building a system that is expected to be long-lived, have a significant amount of business logic, and potentially undergo changes and integrations over time, then Hexagonal Architecture can be a valuable approach. It prioritizes maintainability, testability, and adaptability, making it suitable for complex and evolving software projects.

## Project Setup

```bash
$ npm install
```

## Compile And Run The Project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
