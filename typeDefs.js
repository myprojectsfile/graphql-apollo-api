const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    greetings: [String]
    tasks: [Task!]
    users: [User!]
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
