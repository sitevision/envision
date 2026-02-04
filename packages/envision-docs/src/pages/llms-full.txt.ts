import { getDocsFullItems, llmsFullTxt } from '../templates/utils/llms';

export async function GET() {
   const site = import.meta.env.SITE ?? 'https://envisionui.io';
   const items = await getDocsFullItems();

   return llmsFullTxt({
      name: 'Envision Docs',
      description: 'Documentation for the Envision UI framework.',
      site,
      items,
   });
}
