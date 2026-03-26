export const generateSlug = (name: string) => {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  //   return `${base}-${nanoid(6)}`; // e.g. "my-salon-k3fX9q"
  return base;
};
