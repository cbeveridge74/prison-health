// jest.setup.ts
import fs from 'fs/promises';
import path from 'path';

global.fetch = async (url: string) => {
  if (url === '/Rules.xml') {
    const filePath = path.resolve(
      __dirname,
      'src/lib/Redux/Utils/DoseParser/Rules.xml'
    );
    const xmlText = await fs.readFile(filePath, 'utf-8');
    return {
      text: async () => xmlText
    };
  }
  throw new Error(`Unexpected fetch URL: ${url}`);
};