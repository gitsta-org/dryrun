export type Database = {
  name: string;
  collections: Collection[];
};

export type Collection = {
  name: string;
  fieldMapping: {
    filename: string;
    directories?: string[];
  };
};

export async function connect(name: string): Promise<Database> {
  return { name, collections: [] };
}
