// no-shadow really does not like enums, huh?
// eslint-disable-next-line no-shadow
export enum DataState {
    Loading = "loading",
    FetchingError = "fetchingError",
    ParsingError = "parsingError",
    Success = "success",
}
