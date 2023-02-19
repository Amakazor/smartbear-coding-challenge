import { record, z } from "zod";

const oAuthImplicit = z.object({
    type: z.literal("oauth2"),
    description: z.string().optional(),
    flow: z.literal("implicit"),
    authorizationUrl: z.string().url(),
});

const oAuthAccessCode = z.object({
    type: z.literal("oauth2"),
    description: z.string().optional(),
    flow: z.literal("accessCode"),
    authorizationUrl: z.string().url(),
    tokenUrl: z.string().url(),
});

const oAuthPassword = z.object({
    type: z.literal("oauth2"),
    description: z.string().optional(),
    flow: z.union([z.literal("password"), z.literal("application")]),
    tokenUrl: z.string().url(),
});

export const oAuth = z.union([
    oAuthImplicit,
    oAuthAccessCode,
    oAuthPassword,
]).and(z.object({ scopes: record(z.string(), z.string()) }));
