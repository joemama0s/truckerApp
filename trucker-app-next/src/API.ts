/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJobsInput = {
  id?: string | null,
  name: string,
  startingLocation: string,
  endingLocation: string,
};

export type ModelJobsConditionInput = {
  name?: ModelStringInput | null,
  startingLocation?: ModelStringInput | null,
  endingLocation?: ModelStringInput | null,
  and?: Array< ModelJobsConditionInput | null > | null,
  or?: Array< ModelJobsConditionInput | null > | null,
  not?: ModelJobsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Jobs = {
  __typename: "Jobs",
  id: string,
  name: string,
  startingLocation: string,
  endingLocation: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateJobsInput = {
  id: string,
  name?: string | null,
  startingLocation?: string | null,
  endingLocation?: string | null,
};

export type DeleteJobsInput = {
  id: string,
};

export type ModelJobsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startingLocation?: ModelStringInput | null,
  endingLocation?: ModelStringInput | null,
  and?: Array< ModelJobsFilterInput | null > | null,
  or?: Array< ModelJobsFilterInput | null > | null,
  not?: ModelJobsFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJobsConnection = {
  __typename: "ModelJobsConnection",
  items:  Array<Jobs | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionJobsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  startingLocation?: ModelSubscriptionStringInput | null,
  endingLocation?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJobsFilterInput | null > | null,
  or?: Array< ModelSubscriptionJobsFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateJobsMutationVariables = {
  input: CreateJobsInput,
  condition?: ModelJobsConditionInput | null,
};

export type CreateJobsMutation = {
  createJobs?:  {
    __typename: "Jobs",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateJobsMutationVariables = {
  input: UpdateJobsInput,
  condition?: ModelJobsConditionInput | null,
};

export type UpdateJobsMutation = {
  updateJobs?:  {
    __typename: "Jobs",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteJobsMutationVariables = {
  input: DeleteJobsInput,
  condition?: ModelJobsConditionInput | null,
};

export type DeleteJobsMutation = {
  deleteJobs?:  {
    __typename: "Jobs",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetJobsQueryVariables = {
  id: string,
};

export type GetJobsQuery = {
  getJobs?:  {
    __typename: "Jobs",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: ModelJobsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobsQuery = {
  listJobs?:  {
    __typename: "ModelJobsConnection",
    items:  Array< {
      __typename: "Jobs",
      id: string,
      name: string,
      startingLocation: string,
      endingLocation: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJobsSubscriptionVariables = {
  filter?: ModelSubscriptionJobsFilterInput | null,
  owner?: string | null,
};

export type OnCreateJobsSubscription = {
  onCreateJobs?:  {
    __typename: "Jobs",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateJobsSubscriptionVariables = {
  filter?: ModelSubscriptionJobsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateJobsSubscription = {
  onUpdateJobs?:  {
    __typename: "Jobs",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteJobsSubscriptionVariables = {
  filter?: ModelSubscriptionJobsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteJobsSubscription = {
  onDeleteJobs?:  {
    __typename: "Jobs",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
