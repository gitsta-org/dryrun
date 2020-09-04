export type Database = {
  name: string;
};

export async function connect(name: string): Promise<Database> {
  return { name };
}
