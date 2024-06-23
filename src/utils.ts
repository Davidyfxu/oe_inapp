export const BASE_URL = "https://oevtp9dizy.gzg.sealos.run";

export const fetcher = async (url: string) => {
  const res = await fetch(BASE_URL + url);
  return res.json();
};
