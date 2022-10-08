import client from "~/plugins/contentful";
// import postlist from "../plugins/postlists";

export const state = () => ({
  posts: null,
  portfolios: null
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updatePortfolios: (state, portfolios) => {
    state.portfolios = portfolios;
  }
};

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost",
        order: '-sys.createdAt'
      });
      if (response.items.length > 0) commit("updatePosts", response.items);
    } catch (err) {
      console.error(err);
    }
  },
  async getPortfolios({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "portfolioPost",
        order: '-sys.createdAt'
      });
      if (response.items.length > 0) commit("updatePortfolios", response.items);
    } catch (err) {
      console.error(err);
    }
  }
};


