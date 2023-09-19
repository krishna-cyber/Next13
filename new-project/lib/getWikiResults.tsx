/** @format */

export default async function getWikiResults(searchTerm: string) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch=${searchTerm}`
  );
  return response.json();
}
