import { IMiddlewareContext } from "~/utils/graphql";

export function isAuthenticated(
  { root, args, context, info }: IMiddlewareContext,
  next
) {
  // This is a dummy auth check
  const userId = context.req?.headers["x-user-id"] || null;

  if (!userId) {
    throw new Error("Unauthorized request");
  }
  return next();
}
