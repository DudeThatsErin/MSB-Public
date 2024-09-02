# HTTP Status Codes
**## Categories**
* 1XX status codes: Informational Requests
* 2XX status codes: Successful Requests
* 3XX status codes: Redirects
* 4XX status codes: Client Errors
* 5XX status codes: Server Errors

 
|  **Code**<br/> | **Name**<br/> | **Description**<br/> |
|-----|-----|-----|
|  100<br/> | Continue<br/> | Everything so far is OK and that the client should continue with the request or ignore it if it is already finished.<br/> |
|  101<br/> | Switching Protocols<br/> | The client has asked the server to change protocols and the server has agreed to do so.<br/> |
|  102<br/> | Processing<br/> | The server has received and is processing the request, but that it does not have a final response yet.<br/> |
|  103<br/> | Early Hints<br/> | Used to return some response headers before final HTTP message.<br/> |
|  200<br/> | OK<br/> | Successful request.<br/> |
|  201<br/> | Created<br/> | The server acknowledged the created resource.<br/> |
|  202<br/> | Accepted<br/> | The client's request has been received but the server is still processing it.<br/> |
|  203<br/> | Non-Authoritative Information<br/> | The response that the server sent to the client is not the same as it was when the server sent it.<br/> |
|  204<br/> | No Content<br/> | There is no content to send for this request<br/> |
|  205<br/> | Reset Content<br/> | Tells the user agent to reset the document which sent this request.<br/> |
|  206<br/> | Partial Content<br/> | This response code is used when the range-header is sent from the client to request only part of a resource.<br/> |
|  207<br/> | Multi-Status<br/> | Conveys information about multiple resources, for situations where multiple status codes might be appropriate.<br/> |
|  208<br/> | Already Reported<br/> | The members of a DAV binding have already been enumerated in a preceding part of the multi-status response.<br/> |
|  226<br/> | IM Used<br/> | IM is a specific extension of the HTTP protocol. The extension allows a HTTP server to send diffs (changes) of resources to clients.<br/> |
|  300<br/> | Multiple Choices<br/> | The request has more than one possible response. The user agent should choose one.<br/> |
|  301<br/> | Moved Permanently<br/> | The URL of the requested resource has been changed permanently. The new URL is given in the response.<br/> |
|  302<br/> | Found<br/> | This response code means that the URI of requested resource has been changed temporarily<br/> |
|  303<br/> | See Other<br/> | The server sent this response to direct the client to get the requested resource at another URI with a GET request.<br/> |
|  304<br/> | Not Modified<br/> | It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.<br/> |
|  305<br/> | Use Proxy<br/> | Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. (discontinued)<br/> |
|  307<br/> | Temporary Redirect<br/> | The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request.<br/> |
|  308<br/> | Permanent Redirect<br/> | This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header.<br/> |
|  400<br/> | Bad Request<br/> | The server could not understand the request<br/> |
|  401<br/> | Unauthorized<br/> | The client didn't authenticate himself.<br/> |
|  402<br/> | Payment Required<br/> | This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.<br/> |
|  403<br/> | Forbidden<br/> | The client does not have access rights to the content<br/> |
|  404<br/> | Not Found<br/> | The server can not find the requested resource<br/> |
|  405<br/> | Method Not Allowed<br/> | The request method is known by the server but is not supported by the target resource<br/> |
|  406<br/> | Not Acceptable<br/> | The reponse doens't conforms to the creteria given by the client<br/> |
|  407<br/> | Proxy Authentication Required<br/> | This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.<br/> |
|  408<br/> | Request Timeout<br/> | This response is sent on an idle connection by some servers, even without any previous request by the client.<br/> |
|  409<br/> | Conflict<br/> | This response is sent when a request conflicts with the current state of the server.<br/> |
|  410<br/> | Gone<br/> | This response is sent when the requested content has been permanently deleted from server, with no forwarding address.<br/> |
|  411<br/> | Length Required<br/> | Server rejected the request because the Content-Length header field is not defined and the server requires it.<br/> |
|  412<br/> | Precondition Failed<br/> | Access to the target resource has been denied.<br/> |
|  413<br/> | Payload Too Large<br/> | Request entity is larger than limits defined by server.<br/> |
|  414<br/> | Request-URI Too Long<br/> | The URI requested by the client is longer than the server is willing to interpret.<br/> |
|  415<br/> | Unsupported Media Type<br/> | The media format is not supported by the server.<br/> |
|  416<br/> | Requested Range Not Satisfiable<br/> | The range specified by the Range header field in the request cannot be fulfilled.<br/> |
|  417<br/> | Expectation Failed<br/> | the expectation indicated by the Expect request header field cannot be met by the server.<br/> |
|  418<br/> | I'm a teapot<br/> | The server refuses the attempt to brew coffee with a teapot.<br/> |
|  421<br/> | Misdirected Request<br/> | The request was directed at a server that is not able to produce a response.<br/> |
|  422<br/> | Unprocessable Entity<br/> | The request was well-formed but was unable to be followed due to semantic errors.<br/> |
|  423<br/> | Locked<br/> | The resource that is being accessed is locked.<br/> |
|  424<br/> | Failed Dependency<br/> | The request failed due to failure of a previous request.<br/> |
|  426<br/> | Upgrade Required<br/> | The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.<br/> |
|  428<br/> | Precondition Required<br/> | his response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.<br/> |
|  429<br/> | Too Many Requests<br/> | The user has sent too many requests in a given amount of time<br/> |
|  431<br/> | Request Header Fields Too Large<br/> | The server is can't process the request because its header fields are too large.<br/> |
|  444<br/> | Connection Closed Without Response<br/> | The connection opened, but no data was written.<br/> |
|  451<br/> | Unavailable For Legal Reasons<br/> | The user agent requested a resource that cannot legally be provided (such as a web page censored by a government)<br/> |
|  499<br/> | Client Closed Request<br/> | The client closed the connection, despite the server was processing the request already.<br/> |
|  500<br/> | Internal Server Error<br/> | The server has encountered a situation it does not know how to handle.<br/> |
|  501<br/> | Not Implemented<br/> | The request method is not supported by the server and cannot be handled.<br/> |
|  502<br/> | Bad Gateway<br/> | This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.<br/> |
|  503<br/> | Service Unavailable<br/> | The server is not ready to handle the request.<br/> |
|  504<br/> | Gateway Timeout<br/> | This error response is given when the server is acting as a gateway and cannot get a response in time.<br/> |
|  505<br/> | HTTP Version Not Supported<br/> | The HTTP version used in the request is not supported by the server.<br/> |
|  506<br/> | Variant Also Negotiates<br/> | the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.<br/> |
|  507<br/> | Insufficient Storage<br/> | The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.<br/> |
|  508<br/> | Loop Detected<br/> | The server detected an infinite loop while processing the request.<br/> |
|  510<br/> | Not Extended<br/> | Further extensions to the request are required for the server to fulfill it.<br/> |
|  511<br/> | Network Authentication Required<br/> | Indicates that the client needs to authenticate to gain network access.<br/> |
|  599<br/> | Network Connect Timeout Error<br/> | The connection timed out due to a overloaded server, a hardware error or a infrastructure error.<br/> |

 

