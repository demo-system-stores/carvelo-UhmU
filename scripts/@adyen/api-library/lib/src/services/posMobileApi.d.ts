import Client from "../client";
import Service from "../service";
import { CreateSessionRequest } from "../typings/posMobile/models";
import { CreateSessionResponse } from "../typings/posMobile/models";
import { IRequest } from "../typings/requestOptions";
export declare class PosMobileAPI extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Create a communication session
    * @param createSessionRequest {@link CreateSessionRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CreateSessionResponse }
    */
    createCommunicationSession(createSessionRequest: CreateSessionRequest, requestOptions?: IRequest.Options): Promise<CreateSessionResponse>;
}
export default PosMobileAPI;
