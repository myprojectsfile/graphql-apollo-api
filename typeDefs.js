const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    greetings: [String]
    tasks: [Task!]
    task(id: ID!): Task
    users: [User!]
    user(id: ID!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
    tasks: [Task!]
  }

  type Task {
    id: ID!
    name: String!
    completed: Boolean!
    user: User!
  }
`;

module.exports = typeDefs;
