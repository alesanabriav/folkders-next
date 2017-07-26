import {
  GraphQLSchema,
  GraphQLObjectType
} from "graphql";
//queries
import clientsQuery from './queries/clientsQuery';
import projectsQuery from './queries/projectsQuery';
import todosQuery from './queries/todosQuery';
import todoQuery from './queries/todoQuery';
import usersQuery from './queries/usersQuery';
//mutations
import { createCompany, updateCompany } from './mutations/companyMutations';
import { createClient, updateClient } from './mutations/clientMutations';
import { createProject, updateProject } from './mutations/projectMutations';
import { loginUser, registerUser } from './mutations/userMutations';
import { createTodo, updateTodo } from './mutations/todoMutations';
import { createStep } from './mutations/stepMutations';

const Query = new GraphQLObjectType({
  name: "folkderAppQueries",
  description: "Root Schema",
  fields: () => ({
    clients: clientsQuery,
    projects: projectsQuery,
    todos: todosQuery,
    todo: todoQuery,
    users: usersQuery
  })
});

const Mutation = new GraphQLObjectType({
  name: "folkderAppMutations", 
  fields: () => ({
    createCompany,
    updateCompany,
    createClient,
    updateClient,
    createProject, 
    updateProject,
    createTodo, 
    updateTodo,
    createStep
  })
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
