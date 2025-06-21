
class SearchSuggestionSystem {
  constructor(products) {
    // Sort products for lexicographic order
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;

      // Filter products with current prefix
      const suggestions = this.products.filter(p => p.startsWith(prefix)).slice(0, 3);
      result.push(suggestions);
    }

    return result;
  }
}
const system = new SearchSuggestionSystem(["mobile","mouse","moneypot","monitor","mousepad"]);
const output = system.getSuggestions("mouse");
console.log(output);
