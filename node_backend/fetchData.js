async function fetchData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(
      "fetchData got data of type:",
      Array.isArray(data) ? "array" : typeof data,
    );
    return data;
  } catch (err) {
    console.error("Error inside fetchData:", err);
    return [];
  }
}

module.exports = fetchData;
