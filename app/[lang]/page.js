import { getDictionary } from "./dictionaries/dictionaries";

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1>{dict.hello}</h1>
    </div>
  );
}
