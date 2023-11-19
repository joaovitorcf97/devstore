import data from './data.json';

export async function GET() {
  const featuresProducts = data.products.filter((prodcut) => prodcut.featured);

  return Response.json(featuresProducts);
}
