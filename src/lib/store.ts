import { atom, map } from "nanostores";

export const isModalOpen = atom(false);

export type Project = {
  id: string;
  name: string;
  description: string;
  cover: string;
};

export const currentProject = map<Record<string, Project>>({});
