/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onCreateProfile(filter: $filter, owner: $owner) {
      id
      subID
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onUpdateProfile(filter: $filter, owner: $owner) {
      id
      subID
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onDeleteProfile(filter: $filter, owner: $owner) {
      id
      subID
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob(
    $filter: ModelSubscriptionJobFilterInput
    $owner: String
  ) {
    onCreateJob(filter: $filter, owner: $owner) {
      id
      subId
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob(
    $filter: ModelSubscriptionJobFilterInput
    $owner: String
  ) {
    onUpdateJob(filter: $filter, owner: $owner) {
      id
      subId
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob(
    $filter: ModelSubscriptionJobFilterInput
    $owner: String
  ) {
    onDeleteJob(filter: $filter, owner: $owner) {
      id
      subId
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
