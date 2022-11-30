/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJobInput = {
  id?: string | null,
  name: string,
  startingLocation: string,
  endingLocation: string,
};

export type ModelJobConditionInput = {
  name?: ModelStringInput | null,
  startingLocation?: ModelStringInput | null,
  endingLocation?: ModelStringInput | null,
  and?: Array< ModelJobConditionInput | null > | null,
  or?: Array< ModelJobConditionInput | null > | null,
  not?: ModelJobConditionInput | null,
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

export type Job = {
  __typename: "Job",
  id: string,
  name: string,
  startingLocation: string,
  endingLocation: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateJobInput = {
  id: string,
  name?: string | null,
  startingLocation?: string | null,
  endingLocation?: string | null,
};

export type DeleteJobInput = {
  id: string,
};

export type ModelJobFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  startingLocation?: ModelStringInput | null,
  endingLocation?: ModelStringInput | null,
  and?: Array< ModelJobFilterInput | null > | null,
  or?: Array< ModelJobFilterInput | null > | null,
  not?: ModelJobFilterInput | null,
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

export type ModelJobConnection = {
  __typename: "ModelJobConnection",
  items:  Array<Job | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionJobFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  startingLocation?: ModelSubscriptionStringInput | null,
  endingLocation?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionJobFilterInput | null > | null,
  or?: Array< ModelSubscriptionJobFilterInput | null > | null,
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

export type CreateJobMutationVariables = {
  input: CreateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type CreateJobMutation = {
  createJob?:  {
    __typename: "Job",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateJobMutationVariables = {
  input: UpdateJobInput,
  condition?: ModelJobConditionInput | null,
};

export type UpdateJobMutation = {
  updateJob?:  {
    __typename: "Job",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteJobMutationVariables = {
  input: DeleteJobInput,
  condition?: ModelJobConditionInput | null,
};

export type DeleteJobMutation = {
  deleteJob?:  {
    __typename: "Job",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetJobQueryVariables = {
  id: string,
};

export type GetJobQuery = {
  getJob?:  {
    __typename: "Job",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListJobsQueryVariables = {
  filter?: ModelJobFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJobsQuery = {
  listJobs?:  {
    __typename: "ModelJobConnection",
    items:  Array< {
      __typename: "Job",
      id: string,
      name: string,
      startingLocation: string,
      endingLocation: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnCreateJobSubscription = {
  onCreateJob?:  {
    __typename: "Job",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnUpdateJobSubscription = {
  onUpdateJob?:  {
    __typename: "Job",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteJobSubscriptionVariables = {
  filter?: ModelSubscriptionJobFilterInput | null,
};

export type OnDeleteJobSubscription = {
  onDeleteJob?:  {
    __typename: "Job",
    id: string,
    name: string,
    startingLocation: string,
    endingLocation: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
