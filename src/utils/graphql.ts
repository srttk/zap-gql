import { createModule, Middleware } from "graphql-modules";
import type { MiddlewareMap } from "graphql-modules/shared/middleware";
import { loadFilesSync } from "@graphql-tools/load-files";
import { join } from "node:path";
import { Query, Mutation, Subscription } from "~/generated/graphql";
import { IContext } from "~/graphql.server";

type ModuleOptions = {
  dirname: string;
  middlewares?: IMiddlewareMap;
};

export function makeModule(
  id: string,
  { dirname, middlewares }: ModuleOptions
) {
  return createModule({
    id,
    dirname,
    typeDefs: loadFilesSync(join(dirname, "./**/*.graphql")),
    resolvers: loadFilesSync(
      join(dirname, "./**/*.{resolver,resolvers}.{js,ts}")
    ),
    middlewares: addMiddleWares(middlewares),
  });
}

interface IQueryExtendWithWildCard extends Query {
  "*"?: any;
}
interface IMutationExtendWithWildCard extends Mutation {
  "*"?: any;
}

interface ISubscriptionExtendWithWildCard extends Subscription {
  "*"?: any;
}

export interface IMiddlewareMap {
  "*"?: Middleware<IMiddlewareContext>[];
  Query?: {
    [field in keyof IQueryExtendWithWildCard]: Middleware<IMiddlewareContext>[];
  };
  Mutation?: {
    [field in keyof IMutationExtendWithWildCard]: Middleware<IMiddlewareContext>[];
  };
  Subscription?: {
    [field in keyof ISubscriptionExtendWithWildCard]: Middleware<IMiddlewareContext>[];
  };
}

export interface IMiddlewareContext<
  TRoot = any,
  TArgs = any,
  TContext = IContext,
  TInfo = any
> {
  root: TRoot;
  args: TArgs;
  context: TContext;
  info: TInfo;
}

function addMiddleWares(_middlewares: IMiddlewareMap): MiddlewareMap {
  let middleWres = _middlewares as MiddlewareMap;
  return middleWres;
}
