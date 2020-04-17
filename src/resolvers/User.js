module.exports = {
  walls: (parent, args, context) => {
    return context.prisma.user({ id: parent.id }).walls();
  },
  floors: (parent, args, context) => {
    return context.prisma.user({ id: parent.id }).floors();
  },
};
