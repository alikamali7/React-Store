const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const serachedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return serachedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

export { shortenText, searchProducts, filterProducts };
