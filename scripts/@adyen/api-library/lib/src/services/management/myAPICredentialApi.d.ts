import Service from "../../service";
import Client from "../../client";
import { AllowedOrigin, AllowedOriginsResponse, CreateAllowedOriginRequest, GenerateClientKeyResponse, MeApiCredential } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
export declare class MyAPICredentialApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Add allowed origin
    * @param createAllowedOriginRequest {@link CreateAllowedOriginRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOrigin }
    */
    addAllowedOrigin(createAllowedOriginRequest: CreateAllowedOriginRequest, requestOptions?: IRequest.Options): Promise<AllowedOrigin>;
    /**
    * @summary Generate a client key
    * @param requestOptions {@link IRequest.Options }
    * @return {@link GenerateClientKeyResponse }
    */
    generateClientKey(requestOptions?: IRequest.Options): Promise<GenerateClientKeyResponse>;
    /**
    * @summary Get allowed origin details
    * @param originId {@link string } Unique identifier of the allowed origin.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOrigin }
    */
    getAllowedOriginDetails(originId: string, requestOptions?: IRequest.Options): Promise<AllowedOrigin>;
    /**
    * @summary Get allowed origins
    * @param requestOptions {@link IRequest.Options }
    * @return {@link AllowedOriginsResponse }
    */
    getAllowedOrigins(requestOptions?: IRequest.Options): Promise<AllowedOriginsResponse>;
    /**
    * @summary Get API credential details
    * @param requestOptions {@link IRequest.Options }
    * @return {@link MeApiCredential }
    */
    getApiCredentialDetails(requestOptions?: IRequest.Options): Promise<MeApiCredential>;
    /**
    * @summary Remove allowed origin
    * @param originId {@link string } Unique identifier of the allowed origin.
    * @param requestOptions {@link IRequest.Options }
    */
    removeAllowedOrigin(originId: string, requestOptions?: IRequest.Options): Promise<void>;
}
