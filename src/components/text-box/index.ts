import { Error } from "./error";
import { Delete } from "./http-requests/delete";
import { Get } from "./http-requests/get";
import { Patch } from "./http-requests/patch";
import { Post } from "./http-requests/post";
import { Put } from "./http-requests/put";
import { Info } from "./info";
import { Success } from "./success";
import { Tag } from "./tag";
import { Warning } from "./warning";

export const TextBox = {
    Error,
    Warning,
    Success,
    Info,
    Tag,
    HTTP: {
        Get,
        Post,
        Put,
        Delete,
        Patch,
    },
};
