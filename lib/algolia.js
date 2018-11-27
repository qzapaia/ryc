import algoliasearch from "algoliasearch";

const { ALGOLIA_INDEX_ID } = process.env;
const { ALGOLIA_SEARCH_API_KEY } = process.env;

export const client = algoliasearch(ALGOLIA_INDEX_ID, ALGOLIA_SEARCH_API_KEY);
