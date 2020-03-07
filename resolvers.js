const { gql } = require("apollo-server-express");
const { tasks, users } = require("./constants");

const resolvers = {
  Query: {
    greetings: () => {
      return ["Hello"];
    },
    tasks: () => tasks,
    task: (_, { id }) => tasks.find(task => task.id === id),
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id)
  },
  Task: {
    user: ({ userId }) => users.find(user => user.id === userId)
  },
  User: {
    tasks: ({ id }) => tasks.filter(task => task.userId === id)
  }
};

module.exports = resolvers;
