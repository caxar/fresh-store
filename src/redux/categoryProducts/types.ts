export type CategoryItem = {
  attributes: {
    title: string;
  };
};

export enum Status {
  Pending = "pending",
  Succeeded = "succeeded",
  Failed = "failed",
}

export interface PopularSliceState {
  entities: any[];
  status: Status;
}
