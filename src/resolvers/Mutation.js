const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

module.exports = {
  signup: async (parent, args, context, info) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      user,
    };
  },
  login: async (parent, args, context, info) => {
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
      throw new Error('No such user found');
    }
    const valid = await bcrypt.compare(args.password, user.password);
    if (!valid) {
      throw new Error('Invalid password');
    }
    const token = jwt.sign({ userId: user.id }, APP_SECRET);
    return {
      token,
      user,
    };
  },
  postWall: async (parent, { name }, context, info) => {
    const userId = getUserId(context);
    console.log(userId);
    return context.prisma.createWall({
      name,
      createdBy: {
        connect: {
          id: userId
        }
      }
    });
  },
  postFloor: async (parent, { name }, context, info) => {
    const userId = getUserId(context);
    return context.prisma.createFloor({
      name,
      createdBy: {
        connect: {
          id: userId
        }
      }
    });
  }
};
