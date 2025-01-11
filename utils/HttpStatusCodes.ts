/**
 * This is an enum with the different Http status codes to be used for API testing.
 */
export enum HttpStatusCodes {

    //1XX: Informational response
    CONTINUE = 100,
    SWITCHING_PROTOCOLS = 101,
    PROCESSING = 102,

    //2XX: Success
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NON_AUTHORITATIVE_INFORMATION = 203,
    NO_CONTENT = 204,

    //3XX: Redirection
    MULTIPLE_CHOICES = 300,
    MOVED_PERMANENTLY =301,
    NOT_MODIFIED = 304,

    //4XX: Client error
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,

    //5XX: Server error
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    SERVICE_UNAVAILABLE = 503
}
