import "reflect-metadata";
import { RequestHandler } from "express";
import { RouteHandler } from "../types";

export const Route = (
  method: "get" | "post" | "put" | "delete" | "patch" | "head" | "options",
  path: string = "",
  ...middleware: RequestHandler[]
) => {
  return (target: any, _key: string, descriptor: PropertyDescriptor) => {
    if (typeof descriptor.value !== "function") {
      throw new Error(`@Route decorator can only be applied to methods.`);
    }

    // Retrieve existing route handlers metadata or initialize a new Map
    const routeHandlers: Map<
      string,
      Map<string, RouteHandler[]>
    > = Reflect.getMetadata("routeHandlers", target) ?? new Map();

    // Ensure the method has its own sub-map
    if (!routeHandlers.has(method)) {
      routeHandlers.set(method, new Map());
    }

    const methodMap = routeHandlers.get(method)!;
    const routePath = path || "/";

    // Retrieve existing handlers for the route or initialize an empty array
    const existingHandlers = methodMap.get(routePath) ?? [];

    // Add middleware and the handler to the route
    methodMap.set(routePath, [
      ...existingHandlers,
      ...middleware,
      descriptor.value,
    ]);

    // Update metadata with the modified routeHandlers map
    Reflect.defineMetadata("routeHandlers", routeHandlers, target);
  };
};
