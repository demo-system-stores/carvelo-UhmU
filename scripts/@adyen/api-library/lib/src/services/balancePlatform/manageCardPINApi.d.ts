import Service from "../../service";
import Client from "../../client";
import { PinChangeRequest, PinChangeResponse, PublicKeyResponse, RevealPinRequest, RevealPinResponse } from "../../typings/balancePlatform/models";
import { IRequest } from "../../typings/requestOptions";
export declare class ManageCardPINApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Change a card PIN
    * @param pinChangeRequest {@link PinChangeRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link PinChangeResponse }
    */
    changeCardPin(pinChangeRequest: PinChangeRequest, requestOptions?: IRequest.Options): Promise<PinChangeResponse>;
    /**
    * @summary Get an RSA public key
    * @param requestOptions {@link IRequest.Options }
    * @param purpose {@link string } The purpose of the public key.  Possible values: **pinChange**, **pinReveal**, **panReveal**.  Default value: **pinReveal**.
    * @param format {@link string } The encoding format of public key.  Possible values: **jwk**, **pem**.  Default value: **pem**.
    * @return {@link PublicKeyResponse }
    */
    publicKey(purpose?: string, format?: string, requestOptions?: IRequest.Options): Promise<PublicKeyResponse>;
    /**
    * @summary Reveal a card PIN
    * @param revealPinRequest {@link RevealPinRequest }
    * @param requestOptions {@link IRequest.Options }
    * @return {@link RevealPinResponse }
    */
    revealCardPin(revealPinRequest: RevealPinRequest, requestOptions?: IRequest.Options): Promise<RevealPinResponse>;
}
