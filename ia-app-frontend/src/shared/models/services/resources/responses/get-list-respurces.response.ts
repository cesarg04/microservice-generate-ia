export interface IGetListResponse {
    id:     string;
    title:  string;
    url:    string;
    status: Status;
}

export enum Status {
    Success = "success",
    Pending = "pending",
    Error = "fail"
}
