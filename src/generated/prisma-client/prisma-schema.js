module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateFloor {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWall {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Floor {
  id: ID!
  name: String!
  createdBy: User
}

type FloorConnection {
  pageInfo: PageInfo!
  edges: [FloorEdge]!
  aggregate: AggregateFloor!
}

input FloorCreateInput {
  id: ID
  name: String!
  createdBy: UserCreateOneWithoutFloorsInput
}

input FloorCreateManyWithoutCreatedByInput {
  create: [FloorCreateWithoutCreatedByInput!]
  connect: [FloorWhereUniqueInput!]
}

input FloorCreateWithoutCreatedByInput {
  id: ID
  name: String!
}

type FloorEdge {
  node: Floor!
  cursor: String!
}

enum FloorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type FloorPreviousValues {
  id: ID!
  name: String!
}

input FloorScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [FloorScalarWhereInput!]
  OR: [FloorScalarWhereInput!]
  NOT: [FloorScalarWhereInput!]
}

type FloorSubscriptionPayload {
  mutation: MutationType!
  node: Floor
  updatedFields: [String!]
  previousValues: FloorPreviousValues
}

input FloorSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FloorWhereInput
  AND: [FloorSubscriptionWhereInput!]
  OR: [FloorSubscriptionWhereInput!]
  NOT: [FloorSubscriptionWhereInput!]
}

input FloorUpdateInput {
  name: String
  createdBy: UserUpdateOneWithoutFloorsInput
}

input FloorUpdateManyDataInput {
  name: String
}

input FloorUpdateManyMutationInput {
  name: String
}

input FloorUpdateManyWithoutCreatedByInput {
  create: [FloorCreateWithoutCreatedByInput!]
  delete: [FloorWhereUniqueInput!]
  connect: [FloorWhereUniqueInput!]
  set: [FloorWhereUniqueInput!]
  disconnect: [FloorWhereUniqueInput!]
  update: [FloorUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [FloorUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [FloorScalarWhereInput!]
  updateMany: [FloorUpdateManyWithWhereNestedInput!]
}

input FloorUpdateManyWithWhereNestedInput {
  where: FloorScalarWhereInput!
  data: FloorUpdateManyDataInput!
}

input FloorUpdateWithoutCreatedByDataInput {
  name: String
}

input FloorUpdateWithWhereUniqueWithoutCreatedByInput {
  where: FloorWhereUniqueInput!
  data: FloorUpdateWithoutCreatedByDataInput!
}

input FloorUpsertWithWhereUniqueWithoutCreatedByInput {
  where: FloorWhereUniqueInput!
  update: FloorUpdateWithoutCreatedByDataInput!
  create: FloorCreateWithoutCreatedByInput!
}

input FloorWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdBy: UserWhereInput
  AND: [FloorWhereInput!]
  OR: [FloorWhereInput!]
  NOT: [FloorWhereInput!]
}

input FloorWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFloor(data: FloorCreateInput!): Floor!
  updateFloor(data: FloorUpdateInput!, where: FloorWhereUniqueInput!): Floor
  updateManyFloors(data: FloorUpdateManyMutationInput!, where: FloorWhereInput): BatchPayload!
  upsertFloor(where: FloorWhereUniqueInput!, create: FloorCreateInput!, update: FloorUpdateInput!): Floor!
  deleteFloor(where: FloorWhereUniqueInput!): Floor
  deleteManyFloors(where: FloorWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createWall(data: WallCreateInput!): Wall!
  updateWall(data: WallUpdateInput!, where: WallWhereUniqueInput!): Wall
  updateManyWalls(data: WallUpdateManyMutationInput!, where: WallWhereInput): BatchPayload!
  upsertWall(where: WallWhereUniqueInput!, create: WallCreateInput!, update: WallUpdateInput!): Wall!
  deleteWall(where: WallWhereUniqueInput!): Wall
  deleteManyWalls(where: WallWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  floor(where: FloorWhereUniqueInput!): Floor
  floors(where: FloorWhereInput, orderBy: FloorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Floor]!
  floorsConnection(where: FloorWhereInput, orderBy: FloorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FloorConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  wall(where: WallWhereUniqueInput!): Wall
  walls(where: WallWhereInput, orderBy: WallOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wall]!
  wallsConnection(where: WallWhereInput, orderBy: WallOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WallConnection!
  node(id: ID!): Node
}

type Subscription {
  floor(where: FloorSubscriptionWhereInput): FloorSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  wall(where: WallSubscriptionWhereInput): WallSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  walls(where: WallWhereInput, orderBy: WallOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wall!]
  floors(where: FloorWhereInput, orderBy: FloorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Floor!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  walls: WallCreateManyWithoutCreatedByInput
  floors: FloorCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutFloorsInput {
  create: UserCreateWithoutFloorsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutWallsInput {
  create: UserCreateWithoutWallsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutFloorsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  walls: WallCreateManyWithoutCreatedByInput
}

input UserCreateWithoutWallsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  floors: FloorCreateManyWithoutCreatedByInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  walls: WallUpdateManyWithoutCreatedByInput
  floors: FloorUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneWithoutFloorsInput {
  create: UserCreateWithoutFloorsInput
  update: UserUpdateWithoutFloorsDataInput
  upsert: UserUpsertWithoutFloorsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutWallsInput {
  create: UserCreateWithoutWallsInput
  update: UserUpdateWithoutWallsDataInput
  upsert: UserUpsertWithoutWallsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutFloorsDataInput {
  name: String
  email: String
  password: String
  walls: WallUpdateManyWithoutCreatedByInput
}

input UserUpdateWithoutWallsDataInput {
  name: String
  email: String
  password: String
  floors: FloorUpdateManyWithoutCreatedByInput
}

input UserUpsertWithoutFloorsInput {
  update: UserUpdateWithoutFloorsDataInput!
  create: UserCreateWithoutFloorsInput!
}

input UserUpsertWithoutWallsInput {
  update: UserUpdateWithoutWallsDataInput!
  create: UserCreateWithoutWallsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  walls_every: WallWhereInput
  walls_some: WallWhereInput
  walls_none: WallWhereInput
  floors_every: FloorWhereInput
  floors_some: FloorWhereInput
  floors_none: FloorWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Wall {
  id: ID!
  name: String!
  createdBy: User
}

type WallConnection {
  pageInfo: PageInfo!
  edges: [WallEdge]!
  aggregate: AggregateWall!
}

input WallCreateInput {
  id: ID
  name: String!
  createdBy: UserCreateOneWithoutWallsInput
}

input WallCreateManyWithoutCreatedByInput {
  create: [WallCreateWithoutCreatedByInput!]
  connect: [WallWhereUniqueInput!]
}

input WallCreateWithoutCreatedByInput {
  id: ID
  name: String!
}

type WallEdge {
  node: Wall!
  cursor: String!
}

enum WallOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type WallPreviousValues {
  id: ID!
  name: String!
}

input WallScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [WallScalarWhereInput!]
  OR: [WallScalarWhereInput!]
  NOT: [WallScalarWhereInput!]
}

type WallSubscriptionPayload {
  mutation: MutationType!
  node: Wall
  updatedFields: [String!]
  previousValues: WallPreviousValues
}

input WallSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WallWhereInput
  AND: [WallSubscriptionWhereInput!]
  OR: [WallSubscriptionWhereInput!]
  NOT: [WallSubscriptionWhereInput!]
}

input WallUpdateInput {
  name: String
  createdBy: UserUpdateOneWithoutWallsInput
}

input WallUpdateManyDataInput {
  name: String
}

input WallUpdateManyMutationInput {
  name: String
}

input WallUpdateManyWithoutCreatedByInput {
  create: [WallCreateWithoutCreatedByInput!]
  delete: [WallWhereUniqueInput!]
  connect: [WallWhereUniqueInput!]
  set: [WallWhereUniqueInput!]
  disconnect: [WallWhereUniqueInput!]
  update: [WallUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [WallUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [WallScalarWhereInput!]
  updateMany: [WallUpdateManyWithWhereNestedInput!]
}

input WallUpdateManyWithWhereNestedInput {
  where: WallScalarWhereInput!
  data: WallUpdateManyDataInput!
}

input WallUpdateWithoutCreatedByDataInput {
  name: String
}

input WallUpdateWithWhereUniqueWithoutCreatedByInput {
  where: WallWhereUniqueInput!
  data: WallUpdateWithoutCreatedByDataInput!
}

input WallUpsertWithWhereUniqueWithoutCreatedByInput {
  where: WallWhereUniqueInput!
  update: WallUpdateWithoutCreatedByDataInput!
  create: WallCreateWithoutCreatedByInput!
}

input WallWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdBy: UserWhereInput
  AND: [WallWhereInput!]
  OR: [WallWhereInput!]
  NOT: [WallWhereInput!]
}

input WallWhereUniqueInput {
  id: ID
}
`
      }
    