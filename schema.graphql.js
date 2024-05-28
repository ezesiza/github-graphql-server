const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
  getCurrentUser(token: String!): User
  getRepoDetails(url: String!): RepoList
  getRepoIssues(url: String!): [Issues]
  getAllRepos(number: Int!): [RepoList]
  searchUsers(query: String!): [User]
  getUserDetails(url:String!):UserDetails
}

type Owner {
  login: String
  id: String
  node_id: String
  avatar_url: String
  gravatar_id: String
  url: String
  html_url: String
  followers_url: String
  following_url: String
  gists_url: String
  starred_url: String
  subscriptions_url: String
  organizations_url: String
  repos_url: String
  events_url: String
  received_events_url: String
  type: String
  site_admin: String
}

type RepoUser {
    login:String
    id:String 
    node_id: String
    avatar_url:String 
    gravatar_id:String 
    url: String
    html_url:String 
    followers_url: String
    following_url: String
    gists_url:String 
    starred_url:String 
    subscriptions_url: String
    organizations_url:String 
    repos_url:String 
    events_url:String 
    received_events_url:String
    type:String
    site_admin: String
    name:String 
    company: String
    blog: String
    location:String 
    email:String 
    hireable:String 
    bio: String
    twitter_username: String
    public_repos:Int 
    public_gists: Int
    followers:Int 
    following: Int
    created_at: String
    updated_at:String 
}

type UserDetails {
    user:RepoUser
    repos:[RepoList]
}

type User {
  login: String
  id: String
  node_id: String
  avatar_url: String
  gravatar_id: String
  score: String
  url: String
  html_url: String
  followers_url: String
  following_url: String
  gists_url: String
  starred_url: String
  subscriptions_url: String
  organizations_url: String
  repos_url: String
  events_url: String
  received_events_url: String
  type: String
  site_admin: String
}

type RepoList {
  id: String
  node_id: String
  name: String
  full_name: String
  private: String
  owner: Owner
  html_url: String
  description: String
  fork: String
  url: String
  forks_url: String
  keys_url: String
  collaborators_url: String
  teams_url: String
  hooks_url: String
  issue_events_url: String
  events_url: String
  assignees_url: String
  branches_url: String
  tags_url: String
  blobs_url: String
  git_tags_url: String
  git_refs_url: String
  trees_url: String
  statuses_url: String
  languages_url: String
  stargazers_url: String
  contributors_url: String
  subscribers_url: String
  subscription_url: String
  commits_url: String
  git_commits_url: String
  comments_url: String
  issue_comment_url: String
  contents_url: String
  compare_url: String
  merges_url: String
  archive_url: String
  downloads_url: String
  issues_url: String
  pulls_url: String
  milestones_url: String
  notifications_url: String
  labels_url: String
  releases_url: String
  deployments_url: String
  created_at: String
  updated_at: String
  pushed_at: String
  git_url: String
  ssh_url: String
  clone_url: String
  svn_url: String
  homepage: String
  size: String
  stargazers_count: String
  watchers_count: String
  language: String
  has_issues: String
  has_projects: String
  has_downloads: String
  has_wiki: String
  has_pages: String
  forks_count: String
  mirror_url: String
  archived: String
  disabled: String
  open_issues_count: String
  open_issues: String
  license: String
  forks: String
  topics:[String]
  visibility:String
  open_issues_url: String
  closed_issues: String
  watchers: String
  default_branch: String
}

type Issues {
  url: String
  repository_url: String
  labels_url: String
  comments_url: String
  events_url: String
  html_url: String
  id: String
  node_id: String
  number: String
  title: String
  user: User
  labels: [String]
  state: String
  locked: String
  assignee: String
  assignees: [String]
  milestone: String
  comments: String
  created_at: String
  updated_at: String
  closed_at: String
  author_association: String
  active_lock_reason: String
  draft: Boolean
  pull_request: PullRequest
  body: String
  reactions: Reactions
  timeline_url: String
  performed_via_github_app: String
  state_reason: String
}

type PullRequest {
  url: String
  html_url: String
  diff_url: String
  patch_url: String
  merged_at: String
}

type Reactions {
  url: String
  total_count: String
  laugh: String
  hooray: String
  confused: String
  heart: String
  rocket: String
  eyes: String
}

`;

module.exports = typeDefs;

