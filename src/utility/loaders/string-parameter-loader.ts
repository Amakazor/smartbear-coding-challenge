import { Params } from "react-router-dom";

export const stringParameterLoader = (params: Params, field: string) => {
    const value = params[field];
    if (typeof value === "string") return value;
    throw new Error(`Invalid value for ${field} parameter: ${value}`);
};
