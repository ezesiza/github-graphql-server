const axios = require("axios");
const dotenv = require('dotenv')

const baseUrl = 'https://api.github.com'
const { API_TOKEN } = dotenv.config().parsed;

const axiosRequest = async (url) => {

  return await axios({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
      "X-RateLimit-Limit": 5000,
    },
  }).then((response) => {
    return response.data;
  });
};

const resolvers = (context = {
  Query: {
    getCurrentUser: async (_, { }) => {
      const userUrl = `${baseUrl}/user`;
      const response = await axiosRequest(userUrl);
      return response.login ? true : false;
    },

    getAllRepos: async (_, { number }) => {
      const issuesUrl = `${baseUrl}/repositories?since=${number}`;
      const response = await axiosRequest(issuesUrl);
      const urlInfoResponse = response.map(async (item) => {
        const infoResponse = await axiosRequest(item.url);
        return infoResponse;
      });
      return urlInfoResponse;
    },

    searchUsers: async (_, { query }) => {
      const params = new URLSearchParams({ q: query });
      const usersUrl = `${baseUrl}/search/users?${params}`;
      const response = await axiosRequest(usersUrl);
      return response.items
    },

    getRepoDetails: async (_, { url }) => {
      const response = await axiosRequest(url);
      return response;
    },

    getUserDetails: async (_, { url }) => {
      const repoUrl = url + '/repos';

      const [userDetailsResponse, userReposResponse] = await Promise.all([axiosRequest(url), axiosRequest(repoUrl)]);

      return { user: userDetailsResponse, repos: userReposResponse }
    },

    getRepoIssues: async (_, { url }) => {
      const response = await axiosRequest(url);
      return response;
    },
  },
});

module.exports = resolvers;
