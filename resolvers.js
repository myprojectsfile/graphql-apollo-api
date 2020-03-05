const { gql } = require("apollo-server-express");
const { tasks, users } = require("./constants");

const resolvers = {
  Query: {
    greetings: () => {
      return ["Hello"];
    },
    tasks: () => tasks,
    users: () => users
  },
  Task: {
    user: ({ userId }) => users.find(user => user.id === userId)
  }
};

module.exports = resolvers;
