import axios from "axios";

const apiUrl = `${String(process.env.NEXT_PUBLIC_API_URL)}/recipes`;

export const recipeService = {
  async fetchRecipes(filterType?: string, filterValue?: string) {
    const response = await axios.get(apiUrl, {
      params: {
        filterType,
        filterValue,
      },
    });
    return response.data;
  },

  async fetchRecipeById(recipeId: string) {
    const response = await axios.get(`${apiUrl}/${recipeId}`);
    return response.data;
  },
};
