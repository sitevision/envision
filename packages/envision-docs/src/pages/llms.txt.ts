import { getDocsItems, llmsTxt } from '../templates/utils/llms';

export async function GET() {
   const site = import.meta.env.SITE ?? 'https://envisionui.io';
   const items = await getDocsItems();

   return llmsTxt({
      name: 'Envision Docs',
      description: 'Documentation for the Envision UI framework.',
      site,
      items,
   });
}
