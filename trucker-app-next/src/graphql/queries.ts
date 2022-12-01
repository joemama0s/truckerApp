/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      subID
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subID
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchProfiles = /* GraphQL */ `
  query SearchProfiles(
    $filter: SearchableProfileFilterInput
    $sort: [SearchableProfileSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableProfileAggregationInput]
  ) {
    searchProfiles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        subID
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
      id
      subId
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subId
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const searchJobs = /* GraphQL */ `
  query SearchJobs(
    $filter: SearchableJobFilterInput
    $sort: [SearchableJobSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableJobAggregationInput]
  ) {
    searchJobs(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        subId
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
