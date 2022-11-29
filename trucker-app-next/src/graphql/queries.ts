/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJobs = /* GraphQL */ `
  query GetJobs($id: ID!) {
    getJobs(id: $id) {
      id
      name
      startingLocation
      endingLocation
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        startingLocation
        endingLocation
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
