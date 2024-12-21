const handleFilterProducts = (products, colors, categories, term = "") => {
  let filtered = [...products];

  if (colors.length > 0) {
    filtered = filtered.filter((product) => colors.includes(product.color));
  }

  if (categories.length > 0) {
    filtered = filtered.filter((product) =>
      categories.includes(product.category)
    );
  }

  if (term.trim() !== "") {
    term = term.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term)
    );
  }

  return filtered;
};

export default handleFilterProducts;
