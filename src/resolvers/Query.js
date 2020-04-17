const { version } = require('../../package.json');

module.exports = {
  info: () => `ACNH walls and floors collection manager v${version}`,
  version: () => version,
  walls: async (parent, args, context) => {
    const walls = await context.prisma.walls();
    return walls;
  },
  floors: async (parent, args, context) => {
    const floors = await context.prisma.floors();
    return floors;
  }
};
