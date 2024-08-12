export type State = {
    url: string;
    method: "GET"|"POST"|"PUT"|"DELETE";
    body: string;
}