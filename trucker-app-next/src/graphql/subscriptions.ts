/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateJobs = /* GraphQL */ `
  subscription OnCreateJobs(
    $filter: ModelSubscriptionJobsFilterInput
    $owner: String
  ) {
    onCreateJobs(filter: $filter, owner: $owner) {
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
export const onUpdateJobs = /* GraphQL */ `
  subscription OnUpdateJobs(
    $filter: ModelSubscriptionJobsFilterInput
    $owner: String
  ) {
    onUpdateJobs(filter: $filter, owner: $owner) {
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
export const onDeleteJobs = /* GraphQL */ `
  subscription OnDeleteJobs(
    $filter: ModelSubscriptionJobsFilterInput
    $owner: String
  ) {
    onDeleteJobs(filter: $filter, owner: $owner) {
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
