export type Database = {
  name: string;
  collections: {
    [name: string]: Collection;
  };
};

export type Collection = {
  fieldMapping: {
    filename: string;
    directories?: string[];
  };
};

export type GitFileEvent = {
  path: string;
  timestamp: number;
  commit: string;
  author: string;
  repo: string;
};

export type AddEvent = {
  type: "ADD";
  contents: string;
} & GitFileEvent;

export type ModifyEvent = {
  type: "MODIFY";
  append: boolean;
  contents: string;
} & GitFileEvent;

export type DeleteEvent = {
  type: "DELETE";
} & GitFileEvent;

export type ChangeEvent = AddEvent | ModifyEvent | DeleteEvent;

export async function connect(name: string): Promise<Database> {
  return { name, collections: [] };
}
