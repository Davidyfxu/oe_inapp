import { post } from "./utils";

export const get_au_case = (p: any = {}) => post("/AU/getCases", p);
export const create_au_case = (p: any = {}) => post("/AU/create", p);
