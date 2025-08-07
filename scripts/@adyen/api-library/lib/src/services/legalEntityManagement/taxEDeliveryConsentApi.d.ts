import Service from "../../service";
import Client from "../../client";
import { CheckTaxElectronicDeliveryConsentResponse, SetTaxElectronicDeliveryConsentRequest } from "../../typings/legalEntityManagement/models";
import { IRequest } from "../../typings/requestOptions";
export declare class TaxEDeliveryConsentApi extends Service {
    private readonly API_BASEPATH;
    private baseUrl;
    constructor(client: Client);
    /**
    * @summary Check the status of consent for electronic delivery of tax forms
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.
    * @param requestOptions {@link IRequest.Options }
    * @return {@link CheckTaxElectronicDeliveryConsentResponse }
    */
    checkStatusOfConsentForElectronicDeliveryOfTaxForms(id: string, requestOptions?: IRequest.Options): Promise<CheckTaxElectronicDeliveryConsentResponse>;
    /**
    * @summary Set the consent status for electronic delivery of tax forms
    * @param id {@link string } The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.
    * @param setTaxElectronicDeliveryConsentRequest {@link SetTaxElectronicDeliveryConsentRequest }
    * @param requestOptions {@link IRequest.Options }
    */
    setConsentStatusForElectronicDeliveryOfTaxForms(id: string, setTaxElectronicDeliveryConsentRequest: SetTaxElectronicDeliveryConsentRequest, requestOptions?: IRequest.Options): Promise<void>;
}
