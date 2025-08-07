/// <reference types="applepayjs" />
/// <reference types="googlepay" />
import * as preact from 'preact';
import { h, ComponentChild, Ref, FunctionComponent } from 'preact';

/**
 * Holds the result of a validation
 */
declare class ValidationRuleResult {
    private readonly shouldValidate;
    isValid: boolean;
    errorMessage: string | ErrorMessageObject;
    constructor(rule: ValidatorRule, value: string, mode: ValidatorMode, context: any);
    /**
     * Whether the validation is considered an error.
     * A field is only considered to be an error if the validation rule applies to the current mode i.e. 'blur' or 'input'.
     * Also, if a validation function returns a null value e.g. when the field is empty, then the field will not be considered to be in error
     * unless the whole form is being validated
     */
    hasError(isValidatingForm?: boolean): boolean;
}

type ValidatorMode = 'blur' | 'input';
type ErrorMessageObject = {
    translationKey: string;
    translationObject: any;
};
type ValidateFunction = (value: string, context: any) => boolean;
interface ValidatorRule {
    validate: ValidateFunction;
    errorMessage?: string | ErrorMessageObject;
    modes: ValidatorMode[];
}

type OnAddressLookupType = (value: string, actions: {
    resolve: (value: Array<AddressLookupItem>) => void;
    reject: (reason?: any) => void;
}) => Promise<void>;

type StringObject = {
    [key: string]: string;
};
interface AddressLookupItem extends AddressData {
    id: string;
    name: string;
}
type AddressFieldsGroup = [AddressField, number][];
type AddressSchema = (AddressField | AddressFieldsGroup)[];
interface AddressSpecifications {
    [key: string]: {
        hasDataset?: boolean;
        labels?: StringObject;
        optionalFields?: AddressField[];
        placeholders?: StringObject;
        schema?: AddressSchema;
    };
}

declare const ADDRESS_SCHEMA: readonly ["street", "houseNumberOrName", "postalCode", "city", "stateOrProvince", "country"];

type CustomTranslations = {
    [locale: string]: Translations;
};
type Translations = {
    [translationKey: string]: string;
};
interface LanguageOptions {
    locale: string;
    translations: Translations;
    customTranslations?: CustomTranslations;
}

declare class Language {
    readonly locale: string;
    readonly languageCode: string;
    private readonly translations;
    private readonly customTranslations;
    readonly timeFormatOptions: Intl.DateTimeFormatOptions;
    readonly timeAndDateFormatOptions: Intl.DateTimeFormatOptions;
    readonly timeAndDateFormatter: Intl.DateTimeFormat;
    constructor(props: LanguageOptions);
    /**
     * Returns a translated string from a key in the current {@link Language.locale}
     * @param key - Translation key
     * @param options - Translation options
     * @returns Translated string
     */
    get(key: string, options?: any): string;
    /**
     * Returns a localized string for an amount
     * @param amount - Amount to be converted
     * @param currencyCode - Currency code of the amount
     * @param options - Options for String.prototype.toLocaleString
     */
    amount(amount: number, currencyCode: string, options?: object): string;
    /**
     * Returns a localized string for a date
     * @param date - Date to be localized
     * @param options - Options for {@link Date.toLocaleDateString}
     */
    date(date: string, options?: object): string;
    /**
     * Returns a localized string for a date and time
     * @param date - Date to be localized
     */
    dateTime(date: string): string;
}

interface ImageOptions {
    extension?: string;
    imageFolder?: string;
    resourceContext?: string;
    name?: string;
    parentFolder?: string;
    size?: string;
    subFolder?: string;
    svgOptions?: string;
    type?: string;
}
type GetImageFnType = (name: any) => string;
declare class Resources {
    private readonly resourceContext;
    constructor(cdnContext: string);
    private returnImage;
    private getImageUrl;
    getImage(props?: ImageOptions): GetImageFnType;
}

type GiftcardFieldsProps = {
    setRootNode: (input: HTMLElement) => void;
    i18n: Language;
    pinRequired: boolean;
    sfpState: SFPState;
    getCardErrorMessage: any;
    focusedElement: any;
    setFocusOn: any;
    label?: string;
};

interface SFPState {
    status?: string;
    brand?: string;
    errors?: object;
    valid: SFPValid;
    data: object;
    cvcPolicy?: CVCPolicyType;
    isSfpValid?: boolean;
    autoCompleteName?: string;
    billingAddress?: AddressData;
    detectedUnsupportedBrands?: string[];
    hasKoreanFields?: boolean;
    showSocialSecurityNumber?: boolean;
    expiryDatePolicy?: DatePolicyType;
    socialSecurityNumber?: string;
}
interface SFPValid {
    encryptedCardNumber?: boolean;
    encryptedExpiryMonth?: boolean;
    encryptedExpiryYear?: boolean;
    encryptedSecurityCode?: boolean;
    encryptedPassword?: boolean;
    encryptedPin?: boolean;
    encryptedBankAccountNumber?: boolean;
    encryptedBankLocationId?: boolean;
}

declare const REQUIRED = "required";
declare const OPTIONAL = "optional";
declare const HIDDEN = "hidden";

declare global {
    interface Window {
        _b$dl: boolean;
        mockBinCount: number;
    }
}
interface StylesObject {
    base?: StyleDefinitions;
    error?: StyleDefinitions;
    validated?: StyleDefinitions;
    placeholder?: StyleDefinitions;
}
interface StyleDefinitions {
    background?: string;
    caretColor?: string;
    color?: string;
    display?: string;
    font?: string;
    fontFamily?: string;
    fontSize?: string;
    fontSizeAdjust?: string;
    fontSmoothing?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontVariant?: string;
    fontVariantAlternates?: string;
    fontVariantCaps?: string;
    fontVariantEastAsian?: string;
    fontVariantLigatures?: string;
    fontVariantNumeric?: string;
    fontWeight?: string;
    letterSpacing?: string;
    lineHeight?: string;
    mozOsxFontSmoothing?: string;
    mozTransition?: string;
    outline?: string;
    opacity?: string;
    padding?: string;
    textAlign?: string;
    textShadow?: string;
    transition?: string;
    webkitFontSmoothing?: string;
    webkitTransition?: string;
    wordSpacing?: string;
}
interface CardAllValidData {
    type: string;
    allValid: boolean;
    rootNode: HTMLElement;
}
interface CardAutoCompleteData {
    fieldType: string;
    name: string;
    value: string;
    action: string;
}
interface CardBinLookupData {
    type?: string;
    detectedBrands?: string[];
    supportedBrands?: string[];
    brands?: string[];
    issuingCountryCode?: string;
    supportedBrandsRaw?: BrandObject[];
    rootNode?: HTMLElement;
    isReset?: boolean;
}
interface CardBinValueData {
    type: string;
    binValue: string;
    uuid?: string;
    encryptedBin?: string;
}
interface CardBrandData {
    type: string;
    rootNode: HTMLElement;
    brand: string;
    cvcPolicy: CVCPolicyType;
    expiryDatePolicy?: DatePolicyType;
    cvcText: string;
    showSocialSecurityNumber?: boolean;
    brandImageUrl?: string;
}
interface CardConfigSuccessData {
    iframesConfigured: boolean;
    type: string;
    rootNode: HTMLElement;
}
interface CardErrorData {
    fieldType: string;
    error: string;
    type: string;
    rootNode?: HTMLElement;
    detectedBrands?: string[];
    errorI18n?: string;
    errorText?: string;
}
interface CardFieldValidData {
    fieldType: string;
    encryptedFieldName: string;
    uid: string;
    valid: boolean;
    type: string;
    rootNode: HTMLElement;
    blob?: string;
    endDigits?: string;
    expiryDate?: string;
    issuerBin?: number;
}
interface CardFocusData {
    action: string;
    focus: boolean;
    numChars: number;
    fieldType: string;
    rootNode: HTMLElement;
    type: string;
    currentFocusObject: string;
}
interface CardLoadData {
    iframesLoaded: boolean;
}
type CVCPolicyType = typeof REQUIRED | typeof OPTIONAL | typeof HIDDEN;
type DatePolicyType = typeof REQUIRED | typeof OPTIONAL | typeof HIDDEN;

interface TimeoutErrorProps {
    source: string;
    scheme: string;
    isTimeoutTriggeredBySchemeSdk: boolean;
}
declare class TimeoutError extends Error {
    scheme: string;
    source: string;
    isTimeoutTriggeredBySchemeSdk: boolean;
    /** Currently populated only by Visa SDK if available */
    correlationId?: string;
    constructor(options: TimeoutErrorProps);
    setCorrelationId(correlationId: string): void;
    toString(): string;
}

type ClickToPayProps = {
    /**
     * Shopper email used to be recognized with the Network schemes
     */
    shopperEmail?: string;
    /**
     * Shopper telephone number used to be recognized with the Network schemes
     */
    telephoneNumber?: string;
    /**
     * Used to display the merchant name in case the DCF appears (ex: first time doing transaction in the device),
     */
    merchantDisplayName?: string;
    /**
     * Used to ensure the correct language and user experience if DCF screen is displayed. As a fallback, it uses the main locale
     * defined during the creation of the Checkout.
     * Format: ISO language_country pair (e.g., en_US )
     *
     * @defaultValue en_US
     */
    locale?: string;
    /**
     * Disable autofocus on the One Time Password input field when it is either displayed or when the OTP is resent
     * @defaultValue false
     */
    disableOtpAutoFocus?: boolean;
    /**
     *  Callback triggered when the Click to Pay component is ready to be used
     */
    onReady?(): void;
    /**
     * Callback triggered when a timeout happens within Click to Pay service.
     * Ex: Network schemes took too long to initialize
     */
    onTimeout?(error: TimeoutError): void;
};
type ClickToPayScheme = 'mc' | 'visa';

interface DisclaimerMsgObject {
    message: string;
    linkText: string;
    link: string;
}

interface RiskModuleOptions {
    enabled: boolean;
    onComplete?: (data: any) => void;
    onError?: (error: any) => void;
    node?: string;
}
interface RiskModuleProps extends BaseElementProps {
    risk: RiskModuleOptions;
    loadingContext: string;
}
declare class RiskElement extends BaseElement<RiskModuleProps> {
    static type: string;
    static defaultProps: {
        risk: {
            enabled: boolean;
            onComplete: () => void;
            onError: () => void;
            node: string;
        };
    };
    private nodeRiskContainer;
    constructor(checkout: ICore, props?: any);
    formatProps(props: any): any;
    onComplete: (result: any) => void;
    onError: (error: any) => void;
    get isValid(): any;
    get data(): any;
    get enabled(): boolean;
    cleanUp: () => void;
    componentWillUnmount(): void;
    render(): h.JSX.Element;
}

/**
 * PayPal Fastlane Reference:
 * https://developer.paypal.com/docs/checkout/fastlane/reference/#link-customizeyourintegration
 */
/**
 * Fastlane object available in the window
 */
interface FastlaneWindowInstance {
    identity: {
        lookupCustomerByEmail: (email: string) => Promise<{
            customerContextId: string;
        }>;
        triggerAuthenticationFlow: (customerContextId: string, options?: AuthenticationFlowOptions) => Promise<FastlaneAuthenticatedCustomerResult>;
        getSession: () => Promise<{
            sessionId: string;
        }>;
    };
    profile: {
        showShippingAddressSelector: () => Promise<FastlaneShippingAddressSelectorResult>;
    };
    setLocale: (locale: string) => void;
    ConsentComponent: () => Promise<{
        getRenderState: () => Promise<FastlaneConsentRenderState>;
    }>;
    FastlaneWatermarkComponent: (options: {
        includeAdditionalInfo: boolean;
    }) => Promise<{
        render: (container: any) => null;
    }>;
}
interface FastlaneConsentRenderState {
    showConsent: boolean;
    defaultToggleState?: boolean;
    termsAndConditionsLink?: string;
    termsAndConditionsVersion?: string;
    privacyPolicyLink?: string;
}
interface FastlaneOptions {
    intendedExperience: 'externalProcessorCustomConsent';
    metadata?: {
        geoLocOverride?: string;
    };
}
interface AuthenticationFlowOptions {
}
interface CardPaymentSource {
    brand: string;
    expiry: string;
    lastDigits: string;
    name: string;
    billingAddress: FastlaneAddress;
}
/**
 * External types
 */
interface FastlaneShippingAddressSelectorResult {
    selectionChanged: boolean;
    selectedAddress: FastlaneShipping;
}
interface FastlaneAuthenticatedCustomerSucceeded {
    authenticationState: 'succeeded';
    profileData: FastlaneProfile;
}
interface FastlaneAuthenticatedCustomerFailed {
    authenticationState: 'failed' | 'canceled' | 'not_found';
    profileData: undefined;
}
type FastlaneAuthenticatedCustomerResult = FastlaneAuthenticatedCustomerSucceeded | FastlaneAuthenticatedCustomerFailed;
interface FastlaneAddress {
    addressLine1: string;
    addressLine2: string;
    adminArea1: string;
    adminArea2: string;
    postalCode: string;
    countryCode: string;
    phone: {
        nationalNumber: string;
        countryCode: string;
    };
}
interface FastlaneShipping {
    name: {
        firstName: string;
        lastName: string;
        fullName: string;
    };
    address: FastlaneAddress;
    phoneNumber: {
        nationalNumber: string;
        countryCode: string;
    };
}
interface FastlaneProfile {
    name: {
        firstName: string;
        lastName: string;
        fullName: string;
    };
    shippingAddress: FastlaneShipping;
    card?: {
        id: string;
        paymentSource: {
            card: CardPaymentSource;
        };
    };
}
type FastlaneComponentConfiguration = {
    paymentType: 'fastlane';
    configuration: {
        fastlaneSessionId: string;
        email: string;
        tokenId: string;
        lastFour: string;
        brand: string;
    };
};
type FastlaneCardComponentConfiguration = {
    paymentType: 'card';
    configuration: {
        fastlaneConfiguration: FastlaneSignupConfiguration;
    };
};
type FastlaneSignupConfiguration = FastlaneConsentRenderState & {
    fastlaneSessionId?: string;
    telephoneNumber?: string;
};
type FastlanePaymentMethodConfiguration = FastlaneComponentConfiguration | FastlaneCardComponentConfiguration;
interface FastlaneSDKConfiguration {
    clientKey: string;
    environment: CoreConfiguration['environment'];
    locale?: 'en-US' | 'es-US' | 'fr-RS' | 'zh-US';
    /**
     * Used to force the Fastlane SDK to return the consent details in case the shopper is not recognized.
     * Use-case: Developer is testing the flow in another country outside US, which would not get consent details.
     *
     * This configuration should not be used for 'live' environment
     */
    forceConsentDetails?: boolean;
}
interface FastlaneConfiguration extends UIElementProps {
    /**
     * Card token ID, used to process the payment
     */
    tokenId: string;
    /**
     * Fastlane session ID
     */
    fastlaneSessionId: string;
    /**
     * Initial last four digits displayed once the Component is rendered
     */
    lastFour: string;
    /**
     * Initial brand displayed once the Component is rendered
     */
    brand: string;
    /**
     * Shopper's email (it will be used in the future to re-authenticate using Fastlane SDK within the Component)
     */
    email: string;
    /**
     * Used internally by Drop-in. Displays the brand images inside the Drop-in payment method header
     * @internal
     */
    keepBrandsVisible?: boolean;
    /**
     * Property returned by the backend. Contains the list of brands supported by Fastlane component
     * @internal
     */
    brands?: string[];
}

declare abstract class AnalyticsEvent {
    timestamp: string;
    id: string;
    component: string;
    abstract getEventCategory(): string;
    constructor();
}

interface SFError {
    isValid?: boolean;
    errorMessage?: string;
    errorI18n?: string;
    error: string;
    rootNode: HTMLElement;
    detectedBrands?: string[];
}

interface ValidationRuleErrorObj {
    [key: string]: ValidationRuleResult;
}
interface AriaAttributes {
    'aria-relevant'?: 'additions' | 'all' | 'removals' | 'text' | 'additions text';
    'aria-live'?: 'off' | 'polite' | 'assertive';
    'aria-atomic'?: 'true' | 'false';
}
interface SRPanelProps extends BaseElementProps {
    enabled?: boolean;
    node?: string;
    showPanel?: boolean;
    moveFocus?: boolean;
    id?: string;
    ariaAttributes?: AriaAttributes;
}
type SRPanelConfig = Pick<SRPanelProps, 'enabled' | 'node' | 'showPanel' | 'moveFocus' | 'id' | 'ariaAttributes'>;
interface GenericError {
    isValid: boolean;
    errorMessage: string;
    error: string;
}

/**
 * A panel meant to hold messages that will be read out by ScreenReaders on an aria-live="polite" basis
 * Expects a string or string array of message to add to the panel to be read out
 * For testing purposes can be made visible
 */
declare class SRPanel extends BaseElement<SRPanelProps> {
    static type: string;
    static defaultProps: Partial<SRPanelProps>;
    private readonly srPanelContainer;
    private readonly id;
    private readonly showPanel;
    private readonly _enabled;
    private readonly _moveFocus;
    private componentRef;
    constructor(checkout: ICore, props?: SRPanelProps);
    setComponentRef: (ref: any) => void;
    get enabled(): boolean;
    get moveFocus(): boolean;
    setAriaProps(ariaAttributes: AriaAttributes): void;
    setMessages: (messages: string[] | string) => void;
    render(): h.JSX.Element;
}

interface BaseElementProps {
    order?: Order;
    modules?: {
        srPanel?: SRPanel;
        analytics?: AnalyticsModule;
        resources?: Resources;
        risk?: RiskElement;
    };
    isDropin?: boolean;
}
interface IBaseElement {
    data: object;
    state: any;
    props: any;
    _id: string;
    _component: any;
    render(): ComponentChild | Error;
    mount(domNode: HTMLElement | string): IBaseElement;
    update(props: any): IBaseElement;
    unmount(): IBaseElement;
    remove(): void;
    activate(): void;
}

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'action' | 'link';
interface ButtonProps {
    status?: string;
    /**
     * Class name modifiers will be used as: `adyen-checkout__button--${modifier}`
     */
    classNameModifiers?: string[];
    variant?: ButtonVariant;
    disabled?: boolean;
    label?: string | h.JSX.Element;
    ariaLabel?: string;
    secondaryLabel?: string;
    icon?: string;
    inline?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    onClick?: (e: any, callbacks: any) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    buttonRef?: Ref<HTMLButtonElement>;
}

interface PayButtonProps extends ButtonProps {
    /**
     * Class name modifiers will be used as: `adyen-checkout__image--${modifier}`
     */
    classNameModifiers?: string[];
    label?: string;
    amount: PaymentAmountExtended;
    secondaryAmount?: PaymentAmountExtended;
    status?: string;
    disabled?: boolean;
    icon?: string;
    onClick?(): void;
}

type PayButtonFunctionProps = Omit<PayButtonProps, 'amount'>;
type CoreCallbacks$1 = Pick<CoreConfiguration, 'beforeRedirect' | 'beforeSubmit' | 'onSubmit' | 'onAdditionalDetails' | 'onPaymentFailed' | 'onPaymentCompleted' | 'onOrderUpdated' | 'onPaymentMethodsRequest' | 'onChange' | 'onActionHandled' | 'onError' | 'onEnterKeyPressed'>;
type StatusFromAction = 'redirect' | 'loading' | 'custom';
type UIElementProps = BaseElementProps & CoreCallbacks$1 & {
    environment?: string;
    session?: Session;
    onComplete?: (state: any, element: UIElement) => void;
    isInstantPayment?: boolean;
    /**
     * Flags if the element is Stored payment method
     * @internal
     */
    isStoredPaymentMethod?: boolean;
    /**
     * Flag if the element is Stored payment method.
     * Perhaps can be deprecated and we use the one above?
     * @internal
     */
    oneClick?: boolean;
    /**
     * Stored payment method id
     * @internal
     */
    storedPaymentMethodId?: string;
    /**
     * Status set when creating the Component from action
     * @internal
     */
    statusType?: StatusFromAction;
    type?: string;
    name?: string;
    icon?: string;
    amount?: PaymentAmount;
    secondaryAmount?: PaymentAmountExtended;
    /**
     * Show/Hide pay button
     * @defaultValue true
     */
    showPayButton?: boolean;
    /** @internal */
    payButton?: (options: PayButtonFunctionProps) => h.JSX.Element;
    /** @internal */
    loadingContext?: string;
    /** @internal */
    createFromAction?: (action: PaymentAction, props: object) => UIElement;
    /** @internal */
    clientKey?: string;
    /** @internal */
    elementRef?: any;
    /** @internal */
    i18n?: Language;
    /**
     * The shopper’s issuer account label. It can be available for stored payment method
     * @internal
     */
    label?: string;
    /**
     * Returned after the payments call, when an action is returned. It represents the payment method tx variant
     * that was used for the payment
     * @internal
     */
    paymentMethodType?: string;
    /**
     * Reference to the action object found in a /payments response. This, in most cases, is passed on to the onActionHandled callback
     */
    originalAction?: PaymentAction;
};
type UIElementStatus = 'ready' | 'loading' | 'error' | 'success';
interface ComponentMethodsRef {
    showValidation?: () => void;
    setStatus?(status: UIElementStatus): void;
}

type PlaceholderKeys = 'holderName' | 'cardNumber' | 'expiryDate' | 'expiryMonth' | 'expiryYear' | 'securityCodeThreeDigits' | 'securityCodeFourDigits' | 'password';
type CardPlaceholders = Partial<Record<PlaceholderKeys, string>>;
interface CardConfiguration extends UIElementProps {
    /**
     * Automatically shift the focus from one field to another. Usually happens from a valid Expiry Date field to the Security Code field,
     * but some BINS also allow us to know that the PAN is complete, in which case we can shift focus to the date field
     * @defaultValue `true`
     *
     * - merchant set config option
     */
    autoFocus?: boolean;
    /**
     * Config t olimit the countries that will show in the country dropdown
     * - merchant set config option
     */
    billingAddressAllowedCountries?: string[];
    /**
     * If billingAddressRequired is set to true, you can set this to partial to require the shopper's postal code instead of the full address.
     * @defaultValue full
     *
     * - merchant set config option
     */
    billingAddressMode?: 'full' | 'partial' | 'none';
    /**
     * Show Address fields
     * @defaultValue `false`
     *
     * - merchant set config option
     */
    billingAddressRequired?: boolean;
    /**
     * Config to specify which address field are required
     * - merchant set config option
     */
    billingAddressRequiredFields?: string[];
    /**
     * Only set for a stored card,
     * brand is never set for a generic card component OR a single-branded card
     * @internal
     */
    brand?: string;
    /**
     * List of brands accepted by the component
     * @internal
     * - but can also be overwritten by merchant config option
     */
    brands?: string[];
    /**
     * Configuration specific to brands
     * - merchant set config option
     */
    brandsConfiguration?: CardBrandsConfiguration;
    /**
     * Defines the size of the challenge Component
     *
     * 01: [250px, 400px]
     * 02: [390px, 400px]
     * 03: [500px, 600px]
     * 04: [600px, 400px]
     * 05: [100%, 100%]
     *
     * @defaultValue '02'
     *
     * - merchant set config option
     */
    challengeWindowSize?: '01' | '02' | '03' | '04' | '05';
    /**
     * Configuration for Click to Pay
     * - merchant set config option
     */
    clickToPayConfiguration?: ClickToPayProps;
    /**
     * Configuration for displaying the Fastlane consent UI.
     */
    fastlaneConfiguration?: FastlaneSignupConfiguration;
    /**
     * An object sent in the /paymentMethods response
     * @internal
     */
    configuration?: CardBackendConfiguration;
    /**
     * Mostly used in relation to KCP cards
     * @internal
     */
    countryCode?: string;
    /**
     * Object that contains placeholder information that you can use to prefill fields.
     * - merchant set config option
     */
    data?: {
        holderName?: string;
        billingAddress?: Partial<AddressData>;
    };
    /**
     * Disable Click to Pay for testing purposes
     * @defaultValue false
     * @internal
     */
    _disableClickToPay?: boolean;
    /**
     * Turn on the procedure to force the arrow keys on an iOS soft keyboard to always be disabled
     * @defaultValue `false`
     *
     * - merchant set config option
     */
    disableIOSArrowKeys?: boolean;
    /**
     * Object to configure the message and text for a disclaimer message, added after the Card input fields
     * - merchant set config option
     */
    disclaimerMessage?: DisclaimerMsgObject;
    /**
     * Allow binLookup process to occur
     * @defaultValue `true`
     *
     * - merchant set config option
     */
    doBinLookup?: boolean;
    /**
     * Config option related to whether we set storePaymentMethod in the card data, and showing/hiding the "store details" checkbox
     * - merchant set config option
     */
    enableStoreDetails?: boolean;
    /**
     * Comes from Stored payment method object
     * @internal
     */
    expiryMonth?: string;
    /**
     * Allows SF to return an unencrypted expiryDate
     * - merchant set config option
     */
    exposeExpiryDate?: boolean;
    /**
     * Force securedFields to use the 'compat' version of JWE. (Use case: running custom http:// test environment
     * - merchant set config option
     */
    forceCompat?: boolean;
    /**
     * Funding source field populated when 'splitCardFundingSources' is used
     * @internal
     */
    fundingSource?: 'debit' | 'credit';
    /**
     *  Decides whether the CVC (Security Code) component will even be rendered.
     *  Always true except when hideCVC set to false by merchant OR in the case of a *stored* BCMC card.
     *  (For the Bancontact card comp this is set to true since dual-branding possibilities mean the BCMC card can now end up needing to show a CVC field)
     * @internal
     */
    hasCVC?: boolean;
    /**
     * Show/hide the card holder name field
     * - merchant set config option
     */
    hasHolderName?: boolean;
    /**
     * holderName coming from a stored card in /paymentMethods response
     * @internal
     */
    holderName?: string;
    /**
     * Show/hide the Security Code field
     * - merchant set config option
     */
    hideCVC?: boolean;
    /**
     * Whether the card holder name field will be required
     * - merchant set config option
     */
    holderNameRequired?: boolean;
    /**
     * Relates to storedCards
     * @internal
     */
    id?: string;
    /**
     * Configure the installment options for the card
     * - merchant set config option
     */
    installmentOptions?: InstallmentOptions;
    /**
     * Implements a workaround for iOS/Safari bug where keypad doesn't retract when SF paymentMethod is no longer active
     * @defaultValue `true`
     *
     * - merchant set config option
     */
    keypadFix?: boolean;
    /**
     * Related to storedCards - this information comes from the storedCardData once we process it
     * @internal
     */
    lastFour?: string;
    /**
     * For some scenarios make the card input fields (PAN, Expiry Date, Security Code) have type="tel" rather than type="text" inputmode="numeric"
     * @defaultValue `false`
     *
     * - merchant set config option
     */
    legacyInputMode?: boolean;
    /**
     * Adds type="password" to the Security code input field, causing its value to be masked
     * @defaultValue `false`
     *
     * - merchant set config option
     */
    maskSecurityCode?: boolean;
    /**
     * Specify the minimum expiry date that will be considered valid
     *
     * - merchant set config option
     */
    minimumExpiryDate?: string;
    /**
     * When in Dropin this is the name shown in the paymentMethods list
     * @defaultValue - derived from PaymentMethods response
     * @internal - but can also be overwritten by merchant config option
     */
    name?: string;
    /**
     * Function used to perform 3rd party Address lookup
     * - merchant set config option
     */
    onAddressLookup?: OnAddressLookupType;
    /**
     * After binLookup call - provides the brand(s) we detect the user is entering, and if we support the brand(s)
     * - merchant set config option
     */
    onBinLookup?: (event: CardBinLookupData) => void;
    /**
     * Provides the BIN Number of the card (up to 6 digits), called as the user types in the PAN.
     * - merchant set config option
     */
    onBinValue?: (event: CardBinValueData) => void;
    /**
     * Called when a field loses focus.
     * - merchant set config option
     */
    onBlur?: (event: CardFocusData | ComponentFocusObject) => void;
    /**
     * Called once we detect the card brand.
     * - merchant set config option
     */
    onBrand?: (event: CardBrandData) => void;
    /**
     * Called once the card input fields are ready to use.
     * - merchant set config option
     */
    onConfigSuccess?: (event: CardConfigSuccessData) => void;
    /**
     * Called when *all* the securedFields becomes valid
     *  Also called again if one of the fields moves out of validity.
     */
    onAllValid?: (event: CardAllValidData) => void;
    /**
     * Called when a field becomes valid and also if a valid field changes and becomes invalid.
     * For the card number field, it returns the last 4 digits of the card number.
     * - merchant set config option
     */
    onFieldValid?: (event: CardFieldValidData) => void;
    /**
     * Called when a field gains focus.
     * - merchant set config option
     */
    onFocus?: (event: CardFocusData | ComponentFocusObject) => void;
    /**
     * Called once all the card input fields have been created but are not yet ready to use.
     * - merchant set config option
     */
    onLoad?: (event: CardLoadData) => void;
    /**
     * Configure placeholder text for holderName, cardNumber, expirationDate, securityCode and password.
     * - merchant set config option
     */
    placeholders?: CardPlaceholders;
    /**
     * Position holder name above card number field (instead of having it after the security code field)
     * @defaultValue `false`
     *
     * - merchant set config option
     */
    positionHolderNameOnTop?: boolean;
    /**
     * Show/hide the brand logo when the card brand has been recognized
     * @defaultValue `true`
     *
     * - merchant set config option
     */
    showBrandIcon?: boolean;
    /**
     * Show/hide the contextual text under each form field. The contextual text is to assist shoppers filling in the payment form.
     * @defaultValue `true`
     *
     * - merchant set config option
     */
    showContextualElement?: boolean;
    /**
     * Set whether to show installments broken down into amounts or months
     * @defaultValue `true`
     *
     * - merchant set config option
     */
    showInstallmentAmounts?: boolean;
    /**
     * Related to storedCards - this information comes from the storedCardData once we process it
     * @internal
     */
    storedPaymentMethodId?: string;
    /**
     * Show/hide the "store details" checkbox
     * @internal
     */
    showStoreDetailsCheckbox?: boolean;
    /**
     * Object to configure the styling of the inputs in the iframes that are used to present the PAN, Expiry Date & Security Code fields
     * - merchant set config option
     */
    styles?: StylesObject;
    /**
     * Relates to storedCards and the type of interactions they support e.g. "Ecommerce", "ContAuth" etc
     * @internal
     */
    supportedShopperInteractions?: string[];
    /**
     * type will always be "card" (generic card, stored card)
     * except for a single branded card when it will be the same as the brand prop
     * @internal
     */
    type?: string;
}
type SocialSecurityMode = 'show' | 'hide' | 'auto';
/** If the merchant wishes to set any of these properties in their local config they should do so via a "configuration" object */
interface CardBackendConfiguration {
    visaSrciDpaId?: string;
    visaSrcInitiatorId?: string;
    mcSrcClientId?: string;
    mcDpaId?: string;
    merchantIdentifier?: string;
    merchantOrigin?: string;
    gatewayMerchantId?: string;
    publicKeyId?: string;
    region?: string;
    merchantName?: string;
    merchantId?: string;
    intent?: string;
    koreanAuthenticationRequired?: boolean;
    socialSecurityNumberMode?: SocialSecurityMode;
    icon?: string;
    brandsConfiguration?: CardBrandsConfiguration;
}
interface BrandConfiguration {
    name?: string;
    icon?: string;
}
interface CardBrandsConfiguration {
    [key: string]: BrandConfiguration;
}
interface CardPaymentMethodData {
    type: string;
    brand?: string;
    storedPaymentMethodId?: string;
    fundingSource?: 'debit' | 'credit';
    holderName?: string;
    encryptedCardNumber?: string;
    encryptedExpiryMonth?: string;
    encryptedExpiryYear?: string;
    encryptedSecurityCode?: string;
}
interface CardElementData {
    paymentMethod: CardPaymentMethodData;
    billingAddress?: AddressData;
    installments?: {
        value: number;
    };
    storePaymentMethod?: boolean;
    browserInfo: BrowserInfo;
    origin?: string;
}
interface BrandObject {
    brand: string;
    localeBrand?: string;
    cvcPolicy: CVCPolicyType;
    enableLuhnCheck: boolean;
    showExpiryDate?: boolean;
    expiryDatePolicy?: DatePolicyType;
    showSocialSecurityNumber?: boolean;
    supported: boolean;
    brandImageUrl?: string;
    panLength?: number;
    paymentMethodVariant?: string;
}
interface BinLookupResponseRaw {
    requestId: string;
    issuingCountryCode?: string;
    brands?: BrandObject[];
    showSocialSecurityNumber?: boolean;
    status: number;
    errorCode: string;
    message: string;
    errorType: string;
}
/**
 * Mapped & simplified version of BinLookupResponseRaw
 */
interface BinLookupResponse {
    issuingCountryCode: string;
    showSocialSecurityNumber?: boolean;
    supportedBrands?: BrandObject[];
    isDualBrandSelection?: boolean;
}
interface DualBrandSelectElement {
    id: string;
    brandObject: BrandObject;
}

interface InstallmentOptions {
    [key: string]: {
        values: number[];
        plans?: string[];
        preselectedValue?: number;
    };
}

type CheckoutSession = {
    id: string;
    sessionData: string;
    shopperLocale?: string;
    shopperEmail?: string;
    telephoneNumber?: string;
};
type SessionConfiguration = {
    installmentOptions?: InstallmentOptions;
    enableStoreDetails?: boolean;
};
type CheckoutSessionSetupResponse = {
    id: string;
    sessionData: string;
    countryCode?: string;
    amount: PaymentAmount;
    expiresAt: string;
    paymentMethods: any;
    returnUrl: string;
    configuration: SessionConfiguration;
    /**
     * 'shopperLocale' set during session creation.
     * @defaultValue en-US
     */
    shopperLocale: string;
};
type CheckoutSessionPaymentResponse = {
    sessionData: string;
    sessionResult: string;
    status?: string;
    resultCode: ResultCode;
    action?: PaymentAction;
};
type CheckoutSessionDetailsResponse = {
    sessionData: string;
    sessionResult: string;
    resultCode: ResultCode;
    status?: string;
    action?: PaymentAction;
};
type CheckoutSessionBalanceResponse = {
    sessionData: string;
    balance?: PaymentAmount;
    transactionLimit?: PaymentAmount;
};
type CheckoutSessionOrdersResponse = {
    sessionData: string;
    orderData: string;
    pspReference: string;
};
type SetupSessionOptions = {
    browserInfo?: BrowserInfo;
    order?: Order;
};

type NewableComponent = new (checkout: ICore, props?: any) => UIElement;
interface IRegistry {
    add(...items: NewableComponent[]): void;
    getComponent(type: string): NewableComponent | undefined;
}

interface CompanyDetailsSchema {
    name?: string;
    registrationNumber?: string;
}

type OpenInvoiceAddressSpecification = AddressSpecifications & {
    allowedCountries?: string[];
};
interface OpenInvoiceVisibility {
    companyDetails?: FieldsetVisibility;
    personalDetails?: FieldsetVisibility;
    billingAddress?: FieldsetVisibility;
    deliveryAddress?: FieldsetVisibility;
    bankAccount?: FieldsetVisibility;
}
interface BankDetailsSchema {
    countryCode?: string;
    ibanNumber?: any;
    ownerName?: string;
}
interface OpenInvoiceProps extends UIElementProps {
    allowedCountries?: string[];
    consentCheckboxLabel: any;
    countryCode?: string;
    data: {
        companyDetails?: CompanyDetailsSchema;
        personalDetails?: PersonalDetailsSchema;
        billingAddress?: AddressData;
        deliveryAddress?: AddressData;
        bankAccount?: BankDetailsSchema;
    };
    onChange: (state: any, element?: UIElement) => void;
    payButton: any;
    visibility?: OpenInvoiceVisibility;
    personalDetailsRequiredFields?: string[];
    billingAddressRequiredFields?: string[];
    billingAddressSpecification?: OpenInvoiceAddressSpecification;
    deliveryAddressRequiredFields?: string[];
    deliveryAddressSpecification?: OpenInvoiceAddressSpecification;
    setComponentRef?: (ref: any) => void;
}
interface OpenInvoiceStateData {
    companyDetails?: CompanyDetailsSchema;
    personalDetails?: PersonalDetailsSchema;
    billingAddress?: AddressData;
    deliveryAddress?: AddressData;
    bankAccount?: BankDetailsSchema;
    consentCheckbox?: boolean;
}
interface OpenInvoiceStateError {
    consentCheckbox?: boolean | GenericError;
    companyDetails?: boolean | ValidationRuleErrorObj;
    billingAddress?: boolean | ValidationRuleErrorObj;
    deliveryAddress?: boolean | ValidationRuleErrorObj;
    personalDetails?: boolean | ValidationRuleErrorObj;
    bankAccount?: boolean | object;
}
interface OpenInvoiceStateValid {
    consentCheckbox?: boolean;
    companyDetails?: boolean;
    billingAddress?: boolean;
    deliveryAddress?: boolean;
    personalDetails?: boolean;
    bankAccount?: boolean;
}
interface OpenInvoiceActiveFieldsets {
    companyDetails: boolean;
    personalDetails: boolean;
    billingAddress: boolean;
    deliveryAddress: boolean;
    bankAccount: boolean;
}
interface OpenInvoiceFieldsetsRefs {
    companyDetails?: any;
    personalDetails?: any;
    billingAddress?: any;
    deliveryAddress?: any;
    bankAccount?: any;
}

interface OpenInvoiceConfiguration extends Partial<OpenInvoiceProps> {
    consentCheckboxLabel?: h.JSX.Element;
    billingAddressRequiredFields?: string[];
    billingAddressSpecification?: AddressSpecifications;
}

declare class OpenInvoiceContainer extends UIElement<OpenInvoiceConfiguration> {
    protected static defaultProps: Partial<OpenInvoiceConfiguration>;
    /**
     * Returns whether the component state is valid or not
     */
    get isValid(): boolean;
    /**
     * Formats props on construction time
     */
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): any;
    render(): h.JSX.Element;
}

declare enum TxVariants {
    /** internal */
    address = "address",
    bankTransfer_IBAN = "bankTransfer_IBAN",
    donation = "donation",
    personal_details = "personal_details",
    dropin = "dropin",
    /** internal */
    /** Card */
    bcmc = "bcmc",
    card = "card",
    scheme = "scheme",
    storedCard = "storedCard",
    customCard = "customcard",
    /** Card */
    /** ThreeDS */
    threeDS2Challenge = "threeDS2Challenge",
    threeDS2Fingerprint = "threeDS2Fingerprint",
    threeDS2DeviceFingerprint = "threeDS2DeviceFingerprint",
    /** ThreeDS */
    /** Direct debit */
    ach = "ach",
    directdebit_GB = "directdebit_GB",
    sepadirectdebit = "sepadirectdebit",
    eft_directdebit_CA = "eft_directdebit_CA",
    /** Direct debit */
    /** Open Invoice */
    affirm = "affirm",
    afterpay = "afterpay",
    afterpay_default = "afterpay_default",
    afterpay_b2b = "afterpay_b2b",
    atome = "atome",
    facilypay_3x = "facilypay_3x",
    facilypay_4x = "facilypay_4x",
    facilypay_6x = "facilypay_6x",
    facilypay_10x = "facilypay_10x",
    facilypay_12x = "facilypay_12x",
    ratepay = "ratepay",
    ratepay_directdebit = "ratepay_directdebit",
    /** Open Invoice */
    /** Wallets */
    amazonpay = "amazonpay",
    applepay = "applepay",
    cashapp = "cashapp",
    clicktopay = "clicktopay",
    googlepay = "googlepay",
    paypal = "paypal",
    fastlane = "fastlane",
    paywithgoogle = "paywithgoogle",
    /** Wallets */
    /** Voucher */
    boletobancario = "boletobancario",
    boletobancario_itau = "boletobancario_itau",
    boletobancario_santander = "boletobancario_santander",
    primeiropay_boleto = "primeiropay_boleto",
    doku = "doku",
    doku_alfamart = "doku_alfamart",
    doku_permata_lite_atm = "doku_permata_lite_atm",
    doku_indomaret = "doku_indomaret",
    doku_atm_mandiri_va = "doku_atm_mandiri_va",
    doku_sinarmas_va = "doku_sinarmas_va",
    doku_mandiri_va = "doku_mandiri_va",
    doku_cimb_va = "doku_cimb_va",
    doku_danamon_va = "doku_danamon_va",
    doku_bri_va = "doku_bri_va",
    doku_bni_va = "doku_bni_va",
    doku_bca_va = "doku_bca_va",
    doku_wallet = "doku_wallet",
    oxxo = "oxxo",
    /** Voucher */
    /** issuerList */
    billdesk_online = "billdesk_online",
    billdesk_wallet = "billdesk_wallet",
    dotpay = "dotpay",
    eps = "eps",
    molpay_ebanking_fpx_MY = "molpay_ebanking_fpx_MY",
    molpay_ebanking_TH = "molpay_ebanking_TH",
    molpay_ebanking_VN = "molpay_ebanking_VN",
    onlineBanking_CZ = "onlineBanking_CZ",
    onlinebanking_IN = "onlinebanking_IN",
    onlineBanking_PL = "onlineBanking_PL",
    onlineBanking_SK = "onlineBanking_SK",
    paybybank = "paybybank",
    payu_IN_cashcard = "payu_IN_cashcard",
    payu_IN_nb = "payu_IN_nb",
    wallet_IN = "wallet_IN",
    /** issuerList */
    /** Dragonpay */
    dragonpay = "dragonpay",
    dragonpay_ebanking = "dragonpay_ebanking",
    dragonpay_otc_banking = "dragonpay_otc_banking",
    dragonpay_otc_non_banking = "dragonpay_otc_non_banking",
    dragonpay_otc_philippines = "dragonpay_otc_philippines",
    /** Dragonpay */
    /** Econtext */
    econtext = "econtext",
    econtext_atm = "econtext_atm",
    econtext_online = "econtext_online",
    econtext_seven_eleven = "econtext_seven_eleven",
    econtext_stores = "econtext_stores",
    /** Econtext */
    /** Redirect */
    giropay = "giropay",
    multibanco = "multibanco",
    redirect = "redirect",
    twint = "twint",
    vipps = "vipps",
    trustly = "trustly",
    paybybank_AIS_DD = "paybybank_AIS_DD",
    riverty = "riverty",
    paybybank_pix = "paybybank_pix",
    /** Redirect */
    /** Klarna */
    klarna = "klarna",
    klarna_account = "klarna_account",
    klarna_paynow = "klarna_paynow",
    klarna_b2b = "klarna_b2b",
    /** Klarna */
    /** QRLoader */
    bcmc_mobile = "bcmc_mobile",
    bcmc_mobile_QR = "bcmc_mobile_QR",
    pix = "pix",
    swish = "swish",
    wechatpay = "wechatpay",
    wechatpayQR = "wechatpayQR",
    promptpay = "promptpay",
    paynow = "paynow",
    duitnow = "duitnow",
    /** QRLoader */
    /** Await */
    blik = "blik",
    mbway = "mbway",
    ancv = "ancv",
    payto = "payto",
    upi = "upi",// also QR
    upi_qr = "upi_qr",// also QR
    upi_collect = "upi_collect",// also QR
    upi_intent = "upi_intent",// also QR
    /** Await */
    /** Giftcard */
    giftcard = "giftcard",
    mealVoucher_FR = "mealVoucher_FR",
    mealVoucher_FR_natixis = "mealVoucher_FR_natixis",
    mealVoucher_FR_sodexo = "mealVoucher_FR_sodexo",
    mealVoucher_FR_groupeup = "mealVoucher_FR_groupeup"
    /** Giftcard */
}

declare class AfterPay extends OpenInvoiceContainer {
    static type: TxVariants;
    static txVariants: TxVariants[];
    formatProps(props: any): any;
}

declare class AfterPayB2B extends OpenInvoiceContainer {
    static type: TxVariants;
    protected static defaultProps: Partial<OpenInvoiceConfiguration>;
    formatProps(props: any): any;
}

declare const SUPPORTED_LOCALES_EU: readonly ["en_GB", "de_DE", "fr_FR", "it_IT", "es_ES"];
declare const SUPPORTED_LOCALES_US: readonly ["en_US"];

declare global {
    interface Window {
        amazon: object;
    }
}
type ButtonColor = 'Gold' | 'LightGray' | 'DarkGray';
type Placement = 'Home' | 'Product' | 'Cart' | 'Checkout' | 'Other';
type ProductType = 'PayOnly' | 'PayAndShip';
type ChargePermissionType = 'OneTime' | 'Recurring';
type FrequencyUnit = 'Year' | 'Month' | 'Week' | 'Day' | 'Variable';
type Currency = 'EUR' | 'GBP' | 'USD';
type Region = 'EU' | 'UK' | 'US';
type SupportedLocale = (typeof SUPPORTED_LOCALES_EU)[number] | (typeof SUPPORTED_LOCALES_US)[number];
interface RecurringMetadata {
    frequency: {
        unit: string;
        value: FrequencyUnit;
    };
    amount: {
        amount: string;
        currencyCode: Currency;
    };
}
interface AmazonPayBackendConfiguration {
    merchantId?: string;
    publicKeyId?: string;
    region?: Region;
    storeId?: string;
}
interface AmazonPayConfiguration extends UIElementProps {
    addressDetails?: AddressDetails;
    amazonPayToken?: string;
    amazonCheckoutSessionId?: string;
    amount?: PaymentAmount;
    buttonColor?: ButtonColor;
    cancelUrl?: string;
    chargePermissionType?: ChargePermissionType;
    clientKey?: string;
    configuration?: AmazonPayBackendConfiguration;
    currency?: Currency;
    deliverySpecifications?: DeliverySpecifications;
    environment?: string;
    loadingContext?: string;
    locale?: string;
    merchantMetadata?: MerchantMetadata;
    onSubmit?(state: any, element: AmazonPayElement, actions: {
        resolve: (response: CheckoutAdvancedFlowResponse) => void;
        reject: () => void;
    }): void;
    payButton?: any;
    placement?: Placement;
    productType?: ProductType;
    recurringMetadata?: RecurringMetadata;
    returnUrl?: string;
    showChangePaymentDetailsButton?: boolean;
    showOrderButton?: boolean;
    showSignOutButton?: boolean;
    signature?: string;
    onClick?: (resolve: any, reject: any) => Promise<void>;
    onError?: (error: any, component: any) => void;
    onSignOut?: (resolve: any, reject: any) => Promise<void>;
    /**
     * Used for analytics
     */
    expressPage?: 'cart' | 'minicart' | 'pdp' | 'checkout';
    /**
     * Used for analytics
     * @defaultValue false
     */
    isExpress?: boolean;
}
interface AmazonPayComponentProps extends AmazonPayConfiguration {
    showSignOutButton?: boolean;
    amazonCheckoutSessionId?: string;
    showOrderButton?: boolean;
    showChangePaymentDetailsButton?: boolean;
    onClick: (resolve: any, reject: any) => Promise<void>;
    onError: (error: any, component: any) => void;
    onSignOut: (resolve: any, reject: any) => Promise<void>;
    ref: any;
}
interface AmazonPayButtonProps {
    amount?: PaymentAmount;
    amazonRef: any;
    buttonColor?: ButtonColor;
    cancelUrl?: string;
    chargePermissionType?: ChargePermissionType;
    clientKey?: string;
    configuration?: AmazonPayBackendConfiguration;
    currency?: Currency;
    deliverySpecifications?: DeliverySpecifications;
    design?: string;
    environment?: string;
    locale?: string;
    onClick: (resolve: any, reject: any) => Promise<void>;
    onError: (error: any, component: any) => void;
    placement?: Placement;
    productType?: ProductType;
    recurringMetadata?: RecurringMetadata;
    ref: any;
    returnUrl?: string;
    showPayButton: boolean;
}
interface SignOutButtonProps {
    amazonRef: any;
    onSignOut: (resolve: any, reject: any) => Promise<void>;
}
interface ChangePaymentDetailsButtonProps {
    amazonCheckoutSessionId: string;
    amazonRef: any;
}
interface ChangeActionOptions {
    amazonCheckoutSessionId: string;
    changeAction: 'changeAddress' | 'changePayment';
}
interface OrderButtonProps {
    amazonCheckoutSessionId: string;
    amount: PaymentAmount;
    clientKey: string;
    chargePermissionType?: ChargePermissionType;
    onError: (error: any, component: any) => void;
    recurringMetadata: RecurringMetadata;
    ref: any;
    region: Region;
    returnUrl: string;
    publicKeyId: string;
}
interface AmazonPayElementData {
    paymentMethod: {
        type: string;
        checkoutSessionId?: string;
    };
    browserInfo: BrowserInfo;
}
interface AmazonPayButtonSettings {
    buttonColor?: ButtonColor;
    design?: string;
    /**
     * Amazon Pay merchant account identifier
     */
    merchantId: string;
    /**
     * Sets button to Sandbox environment
     */
    sandbox: boolean;
    /**
     * Product type selected for checkout
     */
    productType: ProductType;
    /**
     * Placement of the Amazon Pay button on your website
     */
    placement: Placement;
    /**
     * Language used to render the button and text on Amazon Pay hosted pages. Please note that supported language(s) is dependent on the region that your Amazon Pay account was registered for
     */
    checkoutLanguage: SupportedLocale;
    /**
     * Ledger currency provided during registration for the given merchant identifier
     */
    ledgerCurrency: Currency;
}
interface MerchantMetadata {
    customInformation?: string;
    merchantReferenceId?: string;
    merchantStoreName?: string;
    noteToBuyer?: string;
}
interface AddressDetails {
    name?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    districtOrCounty?: string;
    stateOrRegion?: string;
    postalCode?: string;
    countryCode?: string;
    phoneNumber?: string;
}
interface ChargeAmount {
    amount: string;
    currencyCode: Currency;
}
type LedgerCurrencies = {
    [key in Region]: Currency;
};
interface PayloadJSON {
    addressDetails?: AddressDetails;
    chargePermissionType?: ChargePermissionType;
    deliverySpecifications?: DeliverySpecifications;
    merchantMetadata?: MerchantMetadata;
    paymentDetails?: {
        chargeAmount: ChargeAmount;
        paymentIntent: 'Confirm';
        presentmentCurrency: Currency;
        totalOrderAmount: ChargeAmount;
    };
    recurringMetadata?: RecurringMetadata;
    storeId: string;
    webCheckoutDetails: {
        checkoutCancelUrl?: string;
        checkoutMode?: 'ProcessOrder';
        checkoutResultReturnUrl?: string;
        checkoutReviewReturnUrl?: string;
    };
}
interface CheckoutDetailsRequest {
    checkoutSessionId: string;
    getDeliveryAddress?: boolean;
    getDeclineFlowUrl?: boolean;
    publicKeyId: string;
    region: Region;
}
interface UpdateAmazonCheckoutSessionRequest {
    amount: PaymentAmount;
    chargePermissionType?: ChargePermissionType;
    checkoutCancelUrl?: string;
    checkoutResultReturnUrl: string;
    checkoutSessionId: string;
    publicKeyId: string;
    recurringMetadata?: RecurringMetadata;
    region: Region;
}
interface CheckoutSessionConfig {
    payloadJSON: string;
    signature: string;
    publicKeyId: string;
}
interface DeliverySpecifications {
    specialRestrictions?: string[];
    addressRestrictions?: AddressRestrictions;
}
interface AddressRestrictions {
    type?: 'Allowed' | 'NotAllowed';
    restrictions?: Restrictions;
}
interface Restrictions {
    [key: string]: {
        zipCodes?: string[];
        statesOrRegions?: string[];
    };
}

declare class AmazonPayElement extends UIElement<AmazonPayConfiguration> {
    static type: TxVariants;
    protected static defaultProps: Partial<AmazonPayConfiguration>;
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): AmazonPayElementData;
    protected submitAnalytics(analyticsObj: AnalyticsEvent): void;
    getShopperDetails(): void | Promise<any>;
    handleDeclineFlow(): void;
    get isValid(): boolean;
    get browserInfo(): BrowserInfo;
    submit(): void;
    render(): h.JSX.Element;
}

interface ANCVConfiguration extends UIElementProps {
    paymentData?: any;
    data: ANCVDataState;
    onOrderRequest?: any;
    onOrderUpdated?: any;
}
interface ANCVDataState {
    beneficiaryId: string;
}

declare class ANCVElement extends UIElement<ANCVConfiguration> {
    static type: string;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: {
            type: string;
            beneficiaryId: any;
        };
    };
    private onOrderRequest;
    /**
     * Check if order exists, if it does Resolve.
     * Otherwise createOrder and then Resolve.
     */
    createOrder: () => Promise<void>;
    submit(): boolean;
    payButton: (props: any) => h.JSX.Element;
    get isValid(): boolean;
    get displayName(): string;
    render(): h.JSX.Element;
}

type Initiative = 'web' | 'messaging';
type ApplePayPaymentOrderDetails = {
    orderTypeIdentifier: string;
    orderIdentifier: string;
    webServiceURL: string;
    authenticationToken: string;
};
type ApplePayPaymentAuthorizationResult = ApplePayJS.ApplePayPaymentAuthorizationResult & {
    orderDetails?: ApplePayPaymentOrderDetails;
};
type ApplePayButtonType = 'add-money' | 'book' | 'buy' | 'check-out' | 'continue' | 'contribute' | 'donate' | 'order' | 'pay' | 'plain' | 'reload' | 'rent' | 'set-up' | 'subscribe' | 'support' | 'tip' | 'top-up';
type ApplePayButtonStyle = 'black' | 'white' | 'white-outline';
interface ApplePayConfiguration extends UIElementProps {
    /**
     * Enables the ApplePay Express Flow & also used for analytics
     * @defaultValue false
     */
    isExpress?: boolean;
    /**
     * Used for analytics
     */
    expressPage?: 'cart' | 'minicart' | 'pdp' | 'checkout';
    /**
     * The Apple Pay version number your website supports.
     * @default highest supported version by the shopper device
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/apple_pay_on_the_web_version_history Apple Pay on the Web Version History}
     */
    version?: number;
    /**
     * Part of the 'ApplePayLineItem' object, which sets the label of the payment request
     * @see {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaylineitem ApplePayLineItem docs}
     */
    totalPriceLabel?: string;
    /**
     * @default 'final'
     */
    totalPriceStatus?: ApplePayJS.ApplePayLineItemType;
    /**
     * ApplePay configuration sent by the /paymentMethods response
     */
    configuration?: {
        merchantName?: string;
        merchantId?: string;
    };
    clientKey?: string;
    initiative?: Initiative;
    /**
     * A set of line items that explain recurring payments and/or additional charges.
     */
    lineItems?: ApplePayJS.ApplePayLineItem[];
    /**
     * The payment capabilities supported by the merchant.
     * The value must at least contain ApplePayMerchantCapability.supports3DS.
     * @default ['supports3DS']
     */
    merchantCapabilities?: ApplePayJS.ApplePayMerchantCapability[];
    /**
     * A value that indicates whether the shipping mode prevents the user from editing the shipping address.
     * {@link https://developer.apple.com/documentation/applepayontheweb/applepaypaymentrequest/shippingcontacteditingmode}
     */
    shippingContactEditingMode?: ApplePayJS.ApplePayShippingContactEditingMode;
    /**
     * A set of shipping method objects that describe the available shipping methods.
     */
    shippingMethods?: ApplePayJS.ApplePayShippingMethod[];
    /**
     * How the items are to be shipped.
     */
    shippingType?: ApplePayJS.ApplePayShippingType;
    /**
     * A list of ISO 3166 country codes for limiting payments to cards from specific countries.
     */
    supportedCountries?: string[];
    /**
     * The payment networks supported by the merchant.
     */
    supportedNetworks?: string[];
    /**
     * ApplePayRecurringPaymentRequest - Represents a request to set up a recurring payment, typically a subscription.
     * {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepayrecurringpaymentrequest}
     */
    recurringPaymentRequest?: ApplePayJS.ApplePayRecurringPaymentRequest;
    /**
     * The billing information that you require from the user in order to process the transaction.
     */
    requiredBillingContactFields?: ApplePayJS.ApplePayContactField[];
    /**
     * The shipping information that you require from the user in order to fulfill the order.
     */
    requiredShippingContactFields?: ApplePayJS.ApplePayContactField[];
    /**
     * Billing contact information for the user.
     */
    billingContact?: ApplePayJS.ApplePayPaymentContact;
    /**
     * Shipping contact information for the user.
     */
    shippingContact?: ApplePayJS.ApplePayPaymentContact;
    /**
     * It can be used to render the Apple Pay Code in a new window rather than as an overlay modal
     * Recommended to be used in case of using Apple Pay within an iframe, where the modal may not be presented correctly over the parent website
     *
     * @defaultValue 'modal'
     */
    renderApplePayCodeAs?: ApplePayWebConfiguration['renderApplePayCodeAs'];
    /**
     * Optional user-defined data.
     */
    applicationData?: string;
    onClick?: (resolve: any, reject: any) => void;
    /**
     * A callback function the Apple Pay SDK calls when the Apple Pay code modal or window closes.
     */
    onApplePayCodeClose?: ApplePayWebConfiguration['onApplePayCodeClose'];
    /**
     * Callback called when ApplePay authorize the payment.
     * Must be resolved/rejected with the action object.
     *
     * @param data - Authorization event from ApplePay, along with formatted billingAddress and deliveryAddress
     * @param actions - Object to continue/stop with the payment flow
     *
     * @remarks
     * If actions.resolve() is called, the payment flow will be triggered.
     * If actions.reject() is called, the overlay will display an error
     */
    onAuthorized?: (data: {
        authorizedEvent: ApplePayJS.ApplePayPaymentAuthorizedEvent;
        billingAddress?: Partial<AddressData>;
        deliveryAddress?: Partial<AddressData>;
    }, actions: {
        resolve: () => void;
        reject: (error?: ApplePayJS.ApplePayError) => void;
    }) => void;
    /**
     * Collect the order tracking details if available.
     * This callback is invoked when a successfull payment is resolved
     *
     * {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaypaymentorderdetails}
     * @param resolve - Must be called with the orderDetails fields
     * @param reject - Must be called if something failed during the order creation. Calling 'reject' won't cancel the payment flow
     */
    onOrderTrackingRequest?: (resolve: (orderDetails: ApplePayPaymentOrderDetails) => void, reject: () => void) => void;
    onValidateMerchant?: (resolve: any, reject: any, validationURL: string) => void;
    /**
     * {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778013-onpaymentmethodselected}
     * @param resolve(ApplePayPaymentMethodUpdate update) Completes the selection of a payment method with an update.
     * @param reject() Completes the selection of a payment method with no update.
     * @param event The event parameter contains the paymentMethod attribute.
     */
    onPaymentMethodSelected?: (resolve: any, reject: any, event: ApplePayJS.ApplePayPaymentMethodSelectedEvent) => void;
    /**
     * {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778009-onshippingcontactselected}
     * @param resolve(ApplePayShippingContactUpdate update) Completes the selection of a shipping contact with an update.
     * @param reject() Completes the selection of a shipping contact with no update.
     * @param event The event parameter contains the shippingContact attribute.
     */
    onShippingContactSelected?: (resolve: any, reject: any, event: ApplePayJS.ApplePayShippingContactSelectedEvent) => void;
    /**
     * {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/1778028-onshippingmethodselected}
     * @param resolve(ApplePayShippingMethodUpdate update) Completes the selection of a shipping method with an update.
     * @param reject() Completes the selection of a shipping method with no update.
     * @param event The event parameter contains the shippingMethod attribute.
     */
    onShippingMethodSelected?: (resolve: any, reject: any, event: ApplePayJS.ApplePayShippingMethodSelectedEvent) => void;
    buttonColor?: ApplePayButtonStyle;
    buttonType?: ApplePayButtonType;
    /**
     * Used to tweak the text of the button types that contain text ('Continue with', 'Book with', etc)
     */
    buttonLocale?: string;
}
interface ApplePayElementData {
    paymentMethod: {
        type: string;
        applePayToken: string;
        isExpress?: boolean;
    };
    billingAddress?: AddressData;
    deliveryAddress?: AddressData;
}
interface ApplePaySessionRequest {
    displayName: string;
    domainName: string;
    initiative: Initiative;
    merchantIdentifier: string;
}
interface ApplePayWebConfiguration {
    renderApplePayCodeAs?: 'modal' | 'window';
    onApplePayCodeClose?(): void;
}

declare class ApplePayElement extends UIElement<ApplePayConfiguration> {
    static type: TxVariants;
    protected static defaultProps: ApplePayConfiguration;
    private sdkLoader;
    private applePayVersionNumber;
    constructor(checkout: ICore, props?: ApplePayConfiguration);
    /**
     * Formats the component props
     */
    protected formatProps(props: ApplePayConfiguration): ApplePayConfiguration;
    /**
     * Formats the component data output
     */
    protected formatData(): ApplePayElementData;
    protected submitAnalytics(analyticsObj: AnalyticsEvent): void;
    submit: () => void;
    get isValid(): boolean;
    /**
     * This API is only intended for upstreaming or defaulting to Apple Pay, all other scenarios should continue to
     * use canMakePayments(). For Safari browsers, this API will indicate whether there is a card available to make
     * payments. For third-party browsers a new status of paymentCredentialStatusUnknown will be returned. This does
     * not mean there are no cards available, it means the status cannot be determined and as such defaulting
     * and upstreaming should still be considered.
     *
     * {@link https://developer.apple.com/documentation/apple_pay_on_the_web/applepaysession/4440085-applepaycapabilities}
     * @param merchantIdentifier
     */
    applePayCapabilities(merchantIdentifier?: string): Promise<ApplePayJS.PaymentCredentialStatusResponse>;
    /**
     * Determines if Apple Pay component can be displayed or not
     */
    isAvailable(): Promise<void>;
    /**
     * Sets the Apple Pay version available for the shopper.
     * This code needs to be executed once the  Apple Pay SDK is fully loaded
     * @private
     */
    private defineApplePayVersionNumber;
    /**
     * Sets the configuration/callbacks that pertain to the Apple Pay code overlay/modal.
     * @private
     */
    private configureApplePayWebOptions;
    private startSession;
    /**
     * Call the 'onAuthorized' callback if available.
     * Must be resolved/reject for the payment flow to continue
     *
     * @private
     */
    private handleAuthorization;
    /**
     * Verify if the 'onOrderTrackingRequest' is provided. If so, triggers the callback expecting an
     * Apple Pay order details back
     *
     * @private
     */
    private collectOrderTrackingDetailsIfNeeded;
    private validateMerchant;
    render(): h.JSX.Element;
}

declare class Atome extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

interface IssuerItem {
    id: string;
    name: string;
    icon?: string;
}
interface TermsAndConditions {
    translationKey: string;
    urls: string[];
}

interface IssuerListConfiguration extends UIElementProps {
    showImage?: boolean;
    placeholder?: string;
    issuers?: IssuerItem[];
    highlightedIssuers?: string[];
    showPaymentMethodItemImages?: boolean;
    termsAndConditions?: TermsAndConditions;
    showContextualElement?: boolean;
}
interface IssuerListData {
    paymentMethod: {
        type: string;
        issuer: string;
    };
}

declare class IssuerListContainer extends UIElement<IssuerListConfiguration> {
    protected static defaultProps: {
        showImage: boolean;
        issuers: any[];
        highlightedIssuers: any[];
        loadingContext: string;
        showPaymentMethodItemImages: boolean;
    };
    constructor(checkout: ICore, props?: IssuerListConfiguration);
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): IssuerListData;
    /**
     * Returns whether the component state is valid or not
     */
    get isValid(): boolean;
    /**
     * Returns brands array (similar to card) depending on showPaymentMethodItemImages
     * This is used to show the brands in the PaymentMethodItem
     * Requires brands icons to be loaded in the payment method
     */
    get brands(): {
        icon: any;
        name: string;
    }[];
    render(): h.JSX.Element;
}

declare class BillDeskOnlineElement extends IssuerListContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class BillDeskWalletElement extends IssuerListContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

interface AchConfiguration extends UIElementProps {
    /**
     * Adds placeholder text to the input fields
     */
    placeholders?: AchPlaceholders;
    /**
     * Set to false to hide the "Account Holder Name" field if you want to pass the data yourself
     * @default true
     */
    hasHolderName?: boolean;
    /**
     * Enables storing the payment method using the Checkbox
     * @default false
     */
    enableStoreDetails?: boolean;
    /**
     * storedPaymentMethodId coming from a stored ACH in /paymentMethods response
     * @internal
     */
    storedPaymentMethodId?: string;
    /**
     * bankAccountNumber coming from a stored ACH in /paymentMethods response
     * @internal
     */
    bankAccountNumber?: string;
}
interface AchPlaceholders {
    accountTypeSelector?: string;
    ownerName?: string;
    routingNumber?: string;
    accountNumber?: string;
    accountNumberVerification?: string;
}

interface BankTransferConfiguration extends UIElementProps {
    reference?: string;
    /**
     * Show/hide email address field
     * @default true
     */
    showEmailAddress?: boolean;
}
interface BankTransferState extends UIElementProps {
    data: {
        shopperEmail?: string;
    };
    isValid: boolean;
}
interface BankTransferSchema {
    shopperEmail?: string;
}

interface VoucherDetail {
    label: string;
    value: string;
}
interface VoucherProps {
    /** Payment method used to generate the voucher. */
    paymentMethodType: string;
    /** Payment method image to be displayed on the voucher. */
    imageUrl?: string;
    /** If applicable, it will render an issuer image next to the payment method image. */
    issuerImageUrl?: string;
    /** Voucher instructions URL. */
    instructionsUrl?: string;
    /** Download URL for the voucher. It will display a button allowing the shopper to download it. */
    downloadUrl?: string;
    /** Text that will be displayed on the above Download button. */
    downloadButtonText?: string;
    /** Introduction text on the voucher. */
    introduction?: string;
    /** Payment reference. */
    reference?: string;
    /** URL to a barcode image representing the payment reference. */
    barcode?: string;
    /** Total amount displayed on the voucher. */
    amount?: string;
    /** Any additional surcharge to the amount. */
    surcharge?: any;
    /** List of details that will be rendered on the voucher. */
    voucherDetails?: VoucherDetail[];
    /** Additional CSS classes. */
    className?: string;
    /** Show/Hide a button to copy the payment reference. It will only show if a reference is available. */
    copyBtn?: boolean;
    onActionHandled?: (rtnObj: ActionHandledReturnObject) => void;
}
interface VoucherConfiguration extends UIElementProps {
    reference?: string;
    url?: string;
    paymentMethodType?: string;
}
type CommonVoucherProps = Pick<VoucherProps, 'paymentMethodType' | 'introduction' | 'imageUrl' | 'amount' | 'reference' | 'onActionHandled'>;

interface BoletoConfiguration extends VoucherConfiguration {
    /**
     * Set to false if you have already collected the shopper's first name, last name, and CPF/CNPJ (socialSecurityNumber).
     * @default true
     */
    personalDetailsRequired?: boolean;
    /**
     * Set this to false if you have already collected the shopper's street, house number or name, city, postal code, and state or province.
     * @default true
     */
    billingAddressRequired?: boolean;
    /**
     * Set this to false if you have already collected the shopper's email address.
     * @default true
     */
    showEmailAddress?: boolean;
    /**
     * Object to pre-fill shopper details on the form
     */
    data?: BoletoInputDataState;
}
interface BoletoElementProps {
    type: string;
    i18n: Language;
    loadingContext: string;
    reference?: string;
}
interface BoletoInputDataState {
    firstName?: string;
    lastName?: string;
    billingAddress?: AddressData;
    socialSecurityNumber?: string;
    shopperEmail?: string;
}
interface BoletoInputValidState {
    firstName?: boolean;
    lastName?: boolean;
    shopperEmail?: boolean;
    socialSecurityNumber?: boolean;
    billingAddress?: boolean;
}
interface BoletoInputErrorState {
    firstName?: boolean;
    lastName?: boolean;
    shopperEmail?: boolean;
    socialSecurityNumber?: boolean;
}

interface CashAppPayConfiguration extends UIElementProps {
    /**
     * Indicates that the payment must be stored (Ex: in case there is no checkbox but merchant wants to store it)
     */
    storePaymentMethod?: boolean;
    /**
     * Enables storing the payment method using the Checkbox
     */
    enableStoreDetails?: boolean;
    /**
     * Callback triggered before starting the CashAppPay flow. Use case: Validate customer data, check product availability
     */
    onClick?(actions: {
        resolve: () => void;
        reject: () => void;
    }): void;
    /**
     * A reference to your system (for example, a cart or checkout identifier). Maximum length 1024 characters.
     * https://developers.cash.app/docs/api/technical-documentation/sdks/pay-kit/technical-reference#parameters-3
     */
    referenceId?: string;
    /**
     * The destination for the customer after approving (or declining) in Cash App for mobile redirect flow.
     * https://developers.cash.app/docs/api/technical-documentation/sdks/pay-kit/technical-reference#customerrequest
     * @defaultValue window.location.ref
     */
    redirectURL?: string;
    /**
     * Button customization
     * https://developers.cash.app/docs/api/technical-documentation/sdks/pay-kit/use-cases#customize-the-cash-app-pay-button
     */
    button?: {
        shape?: 'semiround' | 'round';
        size?: 'medium' | 'small';
        theme?: 'dark' | 'light';
        width?: 'static' | 'full';
    };
    /**
     * CashAppPay configuration sent by the /paymentMethods response
     */
    configuration?: {
        clientId: string;
        scopeId: string;
    };
    /**
     * If payment is tokenized, then API will return its ID
     * @internal
     */
    storedPaymentMethodId?: string;
    /**
     * If payment is tokenized, then API will return this value
     * @internal
     */
    cashtag?: string;
}
type CashAppPayElementData = {
    paymentMethod: {
        type: string;
        grantId?: string;
        storedPaymentMethodId?: string;
    };
    storePaymentMethod?: boolean;
};
type CashAppPayEventData = {
    cashTag?: string;
    customerId?: string;
    grantId?: string;
    onFileGrantId?: string;
};

declare global {
    interface Window {
        SRCSDK_MASTERCARD?: object;
        vAdapters: {
            VisaSRCI?: object;
        };
    }
}

type MastercardCheckout = {
    srcDigitalCardId: string;
    srcCorrelationId: string;
    srcScheme: string;
};
type VisaCheckout = {
    srcCheckoutPayload?: string;
    srcTokenReference?: string;
    srcCorrelationId: string;
    srcScheme: string;
};
type ClickToPayCheckoutPayload = VisaCheckout | MastercardCheckout;

type ClickToPayConfiguration = UIElementProps & ClickToPayProps & {
    /**
     * ClickToPay configuration sent by the /paymentMethods response
     */
    configuration?: {
        mcDpaId?: string;
        mcSrcClientId?: string;
        visaSrcInitiatorId?: string;
        visaSrciDpaId?: string;
    };
};
type ClickToPayPaymentData = {
    paymentMethod: ClickToPayCheckoutPayload & {
        type: string;
    };
    origin: string;
    browserInfo: BrowserInfo;
};

type CoreCallbacks = Pick<CoreConfiguration, 'beforeRedirect' | 'beforeSubmit' | 'onSubmit' | 'onAdditionalDetails' | 'onPaymentFailed' | 'onPaymentCompleted' | 'onChange' | 'onActionHandled' | 'onError' | 'onEnterKeyPressed'>;
type CustomCardConfiguration = CoreCallbacks & {
    /**
     * Automatically shift the focus from one field to another. Usually happens from a valid Expiry Date field to the Security Code field,
     * but some BINS also allow us to know that the PAN is complete, in which case we can shift focus to the date field
     * @defaultValue `true`
     *
     * - merchant set config option
     */
    autoFocus?: boolean;
    /**
     * List of brands accepted by the component
     * @internal
     * - but can also be overwritten by merchant config option
     */
    brands?: string[];
    /**
     * Configuration specific to brands
     * - merchant set config option
     */
    brandsConfiguration?: CardBrandsConfiguration;
    /**
     * Defines the size of the challenge Component
     *
     * 01: [250px, 400px]
     * 02: [390px, 400px]
     * 03: [500px, 600px]
     * 04: [600px, 400px]
     * 05: [100%, 100%]
     *
     * @defaultValue '02'
     *
     * - merchant set config option
     */
    challengeWindowSize?: '01' | '02' | '03' | '04' | '05';
    /**
     * Turn on the procedure to force the arrow keys on an iOS soft keyboard to always be disabled
     * @defaultValue `false`
     *
     * - merchant set config option
     */
    disableIOSArrowKeys?: boolean;
    /**
     * Allow binLookup process to occur
     * @defaultValue `true`
     *
     * - merchant set config option
     */
    doBinLookup?: boolean;
    /** @internal */
    i18n?: Language;
    /**
     * For some scenarios make the card input fields (PAN, Expiry Date, Security Code) have type="tel" rather than type="text" inputmode="numeric"
     * @defaultValue `false`
     *
     * - merchant set config option
     */
    legacyInputMode?: boolean;
    /** @internal */
    loadingContext?: string;
    /**
     * Adds type="password" to the Security code input field, causing its value to be masked
     * @defaultValue `false`
     *
     * - merchant set config option
     */
    maskSecurityCode?: boolean;
    /**
     * Specify the minimum expiry date that will be considered valid
     *
     * - merchant set config option
     */
    minimumExpiryDate?: string;
    /**
     * Called when the holderName field is autofilled
     */
    onAutoComplete?: (event: CardAutoCompleteData) => void;
    /**
     * After binLookup call - provides the brand(s) we detect the user is entering, and if we support the brand(s)
     * - merchant set config option
     */
    onBinLookup?: (event: CardBinLookupData) => void;
    /**
     * Provides the BIN Number of the card (up to 6 digits), called as the user types in the PAN.
     * - merchant set config option
     */
    onBinValue?: (event: CardBinValueData) => void;
    /**
     * Called once we detect the card brand.
     * - merchant set config option
     */
    onBrand?: (event: CardBrandData) => void;
    /**
     * Called once the card input fields are ready to use.
     * - merchant set config option
     */
    onConfigSuccess?: (event: CardConfigSuccessData) => void;
    /**
     * Called when *all* the securedFields becomes valid
     *  Also called again if one of the fields moves out of validity.
     */
    onAllValid?: (event: CardAllValidData) => void;
    /**
     * Called when a field becomes valid and also if a valid field changes and becomes invalid.
     * For the card number field, it returns the last 4 digits of the card number.
     * - merchant set config option
     */
    onFieldValid?: (event: CardFieldValidData) => void;
    /**
     * Called when a field gains focus.
     * - merchant set config option
     */
    onFocus?: (event: CardFocusData) => void;
    /**
     * Called once all the card input fields have been created but are not yet ready to use.
     * - merchant set config option
     */
    onLoad?: (event: CardLoadData) => void;
    /**
     * Called as errors are detected within the securedFields
     * - merchant set config option
     */
    onValidationError?: (validationErrors: ValidationError[]) => void;
    /**
     * Configure placeholder text for holderName, cardNumber, expirationDate, securityCode and password.
     * - merchant set config option
     */
    placeholders?: CardPlaceholders;
    /**
     * Object to configure the styling of the inputs in the iframes that are used to present the PAN, Expiry Date & Security Code fields
     * - merchant set config option
     */
    styles?: StylesObject;
};
type ValidationError = SFError & {
    fieldType: string;
};

interface DokuVoucherResultProps {
    reference?: string;
    totalAmount?: PaymentAmount;
    expiresAt?: string;
    paymentMethodType?: string;
    maskedTelephoneNumber?: string;
    instructionsUrl?: string;
    shopperName?: string;
    merchantName?: string;
    outputDetails?: any;
    ref?: any;
    onActionHandled?: (rtnObj: ActionHandledReturnObject) => void;
}

declare class DonationElement extends UIElement<DonationConfiguration> {
    static type: TxVariants;
    constructor(checkout: ICore, props?: DonationConfiguration);
    static defaultProps: {
        onCancel: () => void;
        onDonate: () => void;
    };
    /**
     * Returns the component payment data ready to submit to the Checkout API
     */
    get data(): any;
    /**
     * Returns whether the component state is valid or not
     */
    get isValid(): any;
    setState(newState: any): void;
    donate(): void;
    handleRef: (ref: any) => void;
    render(): h.JSX.Element;
}

interface CampaignContentProps {
    logoUrl?: string;
    nonprofitDescription?: string;
    nonprofitName?: string;
    causeName?: string;
    nonprofitUrl?: string;
    bannerUrl?: string;
}

type Donation = RoundupDonation | FixedAmountsDonation;
interface RoundupDonation {
    type: 'roundup';
    currency: string;
    maxRoundupAmount: number;
}
interface FixedAmountsDonation {
    type: 'fixedAmounts';
    currency: string;
    values: Array<number>;
}
interface DonationAmount {
    currency: string;
    value: number;
}
interface DonationPayload {
    data: {
        amount: DonationAmount;
    };
    isValid?: boolean;
}
interface DonationComponentProps extends CampaignContentProps {
    donation: Donation;
    /**
     * The original transaction amount.
     */
    commercialTxAmount: number;
    termsAndConditionsUrl?: string;
    causeName?: string;
    showCancelButton?: boolean;
    onDonate: (payload: DonationPayload) => void;
    onCancel?: (payload: DonationPayload) => void;
    onChange?: (payload: DonationPayload) => void;
}

type DonationConfiguration = UIElementProps & Omit<DonationComponentProps, 'onDonate' | 'onCancel'> & {
    onDonate(data: DonationPayload, component: DonationElement): void;
    onCancel(data: DonationPayload): void;
};

interface DragonpayInputIssuerItem {
    id: string;
    name: string;
    icon?: string;
}
interface DragonpayConfiguraton extends UIElementProps {
    type?: string;
    issuers?: DragonpayInputIssuerItem[];
    /** @deprecated use issuers */
    details?: any;
    loadingContext?: string;
    reference?: string;
    i18n?: Language;
}
interface DragonpayInputData {
    issuer?: string;
    shopperEmail?: string;
}
interface DragonpayInputProps {
    data: DragonpayInputData;
    issuer?: string;
    items?: DragonpayInputIssuerItem[];
    type?: string;
    onChange: (state: any) => void;
    onSubmit?: (state: any, component: any) => void;
    showPayButton: boolean;
    payButton: any;
    ref?: any;
}
interface DragonpayVoucherResultProps {
    reference?: string;
    totalAmount?: PaymentAmount;
    expiresAt?: string;
    paymentMethodType?: string;
    instructionsUrl?: string;
    surcharge?: PaymentAmount;
    alternativeReference?: string;
    icon?: string;
    issuer?: string;
    ref?: any;
    onActionHandled?: (rtnObj: ActionHandledReturnObject) => void;
}

interface EcontextVoucherResultProps {
    reference?: string;
    totalAmount?: PaymentAmount;
    expiresAt?: string;
    paymentMethodType?: string;
    maskedTelephoneNumber?: string;
    instructionsUrl?: string;
    ref?: any;
    collectionInstitutionNumber?: string;
    onActionHandled?: (rtnObj: ActionHandledReturnObject) => void;
}
interface EcontextInputSchema {
    firstName?: string;
    lastName?: string;
    telephoneNumber?: string;
    shopperEmail?: string;
}
interface EcontextConfiguration extends UIElementProps {
    reference?: string;
    personalDetailsRequired?: boolean;
    data?: PersonalDetailsSchema;
}

interface GiftCardElementData {
    paymentMethod: {
        type: 'giftcard';
        brand: string;
        encryptedCardNumber: string;
        encryptedSecurityCode: string;
    };
}
type balanceCheckResponseType = {
    sessionData?: string;
    pspReference?: string;
    resultCode?: string;
    balance?: PaymentAmount;
    transactionLimit?: PaymentAmount;
};
type onBalanceCheckCallbackType = (resolve: (res: balanceCheckResponseType) => void, reject: (error: Error) => void, data: GiftCardElementData) => Promise<void>;
type onRequiringConfirmationCallbackType = (resolve: () => void, reject: (error: Error) => void) => Promise<void>;
type onOrderRequestCallbackType = (resolve: (order: Order) => void, reject: (error: Error) => void, data: PaymentData) => Promise<void>;
interface GiftCardConfiguration extends UIElementProps {
    pinRequired?: boolean;
    expiryDateRequired?: boolean;
    brandsConfiguration?: any;
    brand?: string;
    onOrderUpdated?: (data: any) => void;
    onBalanceCheck?: onBalanceCheckCallbackType;
    onOrderRequest?: onOrderRequestCallbackType;
    onRequiringConfirmation?: onRequiringConfirmationCallbackType;
    /**
     * @internal
     */
    fieldsLayoutComponent?: FunctionComponent<GiftcardFieldsProps>;
}

interface GooglePayConfiguration extends UIElementProps {
    type?: 'googlepay' | 'paywithgoogle';
    /**
     * Used for analytics
     */
    expressPage?: 'cart' | 'minicart' | 'pdp' | 'checkout';
    /**
     * Enables the GooglePay Express Flow & also used for analytics
     * @defaultValue false
     */
    isExpress?: boolean;
    /**
     * Defines the size of the challenge Component
     *
     * 01: [250px, 400px]
     * 02: [390px, 400px]
     * 03: [500px, 600px]
     * 04: [600px, 400px]
     * 05: [100%, 100%]
     *
     * @defaultValue '02'
     */
    challengeWindowSize?: '01' | '02' | '03' | '04' | '05';
    /**
     * @see https://developers.google.com/pay/api/web/reference/request-objects#IsReadyToPayRequest
     * @defaultValue false
     */
    existingPaymentMethodRequired?: boolean;
    /**
     * The status of the total price
     * @see https://developers.google.com/pay/api/web/reference/request-objects#TransactionInfo
     */
    totalPriceStatus?: google.payments.api.TotalPriceStatus;
    /**
     * @see https://developers.google.com/pay/api/web/reference/request-objects#TransactionInfo
     */
    countryCode?: string;
    allowedAuthMethods?: google.payments.api.CardAuthMethod[];
    allowedCardNetworks?: google.payments.api.CardNetwork[];
    /**
     * Set to true to request assuranceDetails. This object provides information
     * about the validation performed on the returned payment data.
     *
     * @defaultValue false
     */
    assuranceDetailsRequired?: boolean;
    /**
     * Set to false if you don't support credit cards.
     * @defaultValue true
     */
    allowCreditCards?: boolean;
    /**
     * Set to false if you don't support prepaid cards.
     * @defaultValue true
     */
    allowPrepaidCards?: boolean;
    /**
     * Set to true if you require a billing address
     *
     * @remarks
     * A billing address should only be requested if it's required to process the transaction.
     *
     * @defaultValue false
     */
    billingAddressRequired?: boolean;
    /**
     * The expected fields returned if billingAddressRequired is set to true.
     */
    billingAddressParameters?: google.payments.api.BillingAddressParameters;
    /**
     * Set to true to request an email address.
     * @defaultValue false
     */
    emailRequired?: boolean;
    /**
     * Set to true to request a full shipping address.
     * @defaultValue false
     */
    shippingAddressRequired?: boolean;
    /**
     * If shippingAddressRequired is set to true, specify shipping address restrictions. This object is used to set shipping restrictions.
     *
     * @see https://developers.google.com/pay/api/web/reference/request-objects#ShippingAddressParameters
     */
    shippingAddressParameters?: google.payments.api.ShippingAddressParameters;
    /**
     * Set to true when the SHIPPING_OPTION callback intent is used. This field is required if you implement support
     * for Authorize Payments or Dynamic Price Updates.
     *
     * @see https://developers.google.com/pay/api/web/reference/request-objects#ShippingOptionParameters
     */
    shippingOptionRequired?: boolean;
    /**
     * @see https://developers.google.com/pay/api/web/reference/request-objects#ShippingOptionParameters
     */
    shippingOptionParameters?: google.payments.api.ShippingOptionParameters;
    /**
     * Specifies the following callback intents for PaymentDataCallbacks
     * @see https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataCallbacks
     */
    callbackIntents?: google.payments.api.CallbackIntent[];
    /**
     * Disclaimer: 'onPaymentAuthorized' is not exposed as we are using our own method internally to
     * handle the authorization part
     *
     * @see https://developers.google.com/pay/api/web/reference/request-objects#PaymentDataCallbacks
     */
    paymentDataCallbacks?: Pick<google.payments.api.PaymentDataCallbacks, 'onPaymentDataChanged'>;
    /**
     * @see https://developers.google.com/pay/api/web/reference/request-objects#TransactionInfo
     */
    transactionInfo?: Partial<google.payments.api.TransactionInfo>;
    /**
     * Google button color
     * @default default
     */
    buttonColor?: google.payments.api.ButtonColor;
    /**
     * Changes the button UI label
     * @default buy
     */
    buttonType?: google.payments.api.ButtonType;
    /**
     * Decides if the button takes the whole space or use preset from Google
     * @default fill
     */
    buttonSizeMode?: google.payments.api.ButtonSizeMode;
    buttonRootNode?: HTMLDocument | ShadowRoot;
    buttonLocale?: string;
    buttonRadius?: number;
    /**
     * Called when the shopper clicks the Google Pay button. Call resolve() or reject() to continue or stop the payment flow.
     *
     * @param resolve - Display the Google payment sheet
     * @param reject - Don't display the Google payment sheet
     * @returns
     */
    onClick?: (resolve: () => void, reject: () => void) => void;
    /**
     * Callback called when GooglePay authorizes the payment.
     * Must be resolved/rejected with the action object.
     */
    onAuthorized?: (data: {
        authorizedEvent: google.payments.api.PaymentData;
        billingAddress?: Partial<AddressData>;
        deliveryAddress?: Partial<AddressData>;
    }, actions: {
        resolve: () => void;
        reject: (error?: google.payments.api.PaymentDataError | string) => void;
    }) => void;
    configuration?: {
        /**
         * Adyen's merchant account name
         * @see https://developers.google.com/pay/api/web/reference/request-objects#gateway
         */
        gatewayMerchantId: string;
        /**
         * A Google merchant identifier issued after registration with the {@link https://pay.google.com/business/console | Google Pay Business Console}.
         * Required when PaymentsClient is initialized with an environment property of PRODUCTION.
         * @see https://developers.google.com/pay/api/web/reference/request-objects#MerchantInfo
         */
        merchantId?: string;
        /**
         * Merchant name is rendered in the payment sheet.
         * @see https://developers.google.com/pay/api/web/reference/request-objects#MerchantInfo
         */
        merchantName?: string;
        /**
         * Merchant fully qualified domain name.
         */
        merchantOrigin?: string;
        /**
         * Google JWT solution for platforms
         * To request Google Pay credentials, you can enable platforms to send requests that are authenticated with the platform credentials. You don't need to register individual domain names to call Google Pay APIs.
         */
        authJwt?: string;
    };
}
interface GooglePaymentDataRequest extends google.payments.api.PaymentDataRequest {
    merchantInfo: ExtendedMerchantInfo;
}
interface ExtendedMerchantInfo extends google.payments.api.MerchantInfo {
    merchantOrigin?: string;
}

declare global {
    interface Window {
        Klarna: any;
        klarnaAsyncCallback: any;
    }
}
/** sdkData present in Klarna `action`objects. */
type KlarnaSdkData = {
    /**
     * Klarna client_token
     * @see https://developers.klarna.com/documentation/klarna-payments/single-call-descriptions/create-session/
     * */
    client_token: string;
    /**
     * `payment_method_category` specifies which of Klarna’s customer offerings (e.g. Pay now, Pay later or Slice it)
     * that is being shown in the widget
     * @see https://developers.klarna.com/documentation/klarna-payments/single-call-descriptions/create-session/
     * */
    payment_method_category: string;
};
interface KlarnaPaymentsShared {
    sdkData?: KlarnaSdkData;
    paymentData?: string;
    paymentMethodType?: string;
}
interface KlarnaWidgetProps extends KlarnaPaymentsShared {
    /** @internal */
    payButton: (options: any) => any;
    /** @internal */
    onLoaded: () => void;
    widgetInitializationTime: number;
    onComplete: (detailsData: KlarnaAdditionalDetailsData) => void;
    onError: (error: any) => void;
}
type KlarnaConfiguration = UIElementProps & KlarnaPaymentsShared & {
    useKlarnaWidget?: boolean;
};
interface KlarnaWidgetAuthorizeResponse {
    approved: boolean;
    show_form: boolean;
    authorization_token: string;
    error?: any;
}
interface KlarnaComponentRef extends ComponentMethodsRef {
    setAction(action: KlarnaAction): void;
    reinitializeWidget(): void;
}
interface KlarnaAction extends PaymentAction {
    sdkData: {
        client_token: string;
        payment_method_category: string;
    };
}
interface KlarnaAdditionalDetailsData extends AdditionalDetailsData {
    data: {
        paymentData: string;
        details: {
            authorization_token?: string;
        };
    };
}

interface MultibancoVoucherResultProps {
    entity?: string;
    reference?: string;
    expiresAt?: string;
    merchantReference?: string;
    totalAmount?: PaymentAmount;
    paymentMethodType?: string;
    downloadUrl?: string;
    ref?: any;
    onActionHandled?: (rtnObj: ActionHandledReturnObject) => void;
}

interface OxxoVoucherResultProps {
    alternativeReference?: string;
    reference?: string;
    expiresAt?: string;
    merchantReference?: string;
    totalAmount?: PaymentAmount;
    paymentMethodType?: string;
    downloadUrl?: string;
    ref?: any;
    onActionHandled?: (rtnObj: ActionHandledReturnObject) => void;
    clientKey?: string;
}

declare class PaypalElement extends UIElement<PayPalConfiguration> {
    static type: TxVariants;
    static subtype: string;
    paymentData: string;
    private resolve;
    private reject;
    protected static defaultProps: Partial<PayPalConfiguration>;
    constructor(checkout: ICore, props?: PayPalConfiguration);
    formatProps(props: PayPalConfiguration): PayPalConfiguration;
    protected submitAnalytics(analyticsObj: AnalyticsEvent): void;
    submit: () => void;
    /**
     * Updates the paymentData value. It must be used in the PayPal Express flow, when patching the amount
     * @param paymentData - Payment data value
     */
    updatePaymentData(paymentData: string): void;
    /**
     * Formats the component data output
     */
    protected formatData(): {
        paymentMethod: {
            type: TxVariants;
            userAction: "pay" | "continue";
            subtype: string;
        };
    };
    handleAction: (action: PaymentAction) => any;
    updateWithAction: (action: PaymentAction) => any;
    /**
     * Dropin Validation
     *
     * @remarks
     * Paypal does not require any specific Dropin validation
     */
    get isValid(): boolean;
    private handleOnApprove;
    handleResolve(token: string): void;
    handleReject(errorMessage: string): void;
    private handleSubmit;
    /**
     * If the merchant provides the 'onShippingAddressChange' callback, then this method is used as a wrapper to it, in order
     * to expose to the merchant the 'component' instance. The merchant needs the 'component' in order to manipulate the
     * paymentData
     *
     * @param data - PayPal data
     * @param actions - PayPal actions.
     */
    private handleOnShippingAddressChange;
    /**
     * If the merchant provides the 'onShippingOptionsChange' callback, then this method is used as a wrapper to it, in order
     * to expose to the merchant the 'component' instance. The merchant needs the 'component' in order to manipulate the
     * paymentData
     *
     * @param data - PayPal data
     * @param actions - PayPal actions.
     */
    private handleOnShippingOptionsChange;
    render(): h.JSX.Element;
}

interface PayPalConfiguration extends UIElementProps {
    /**
     * Configuration returned by the backend
     * @internal
     */
    configuration?: {
        /**
         * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-merchantid}
         */
        merchantId: string;
        /**
         * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-intent}
         */
        intent?: Intent;
    };
    /**
     *  Identifies if the payment is Express. Also used for analytics
     *  @defaultValue false
     */
    isExpress?: boolean;
    /**
     * Used for analytics
     */
    expressPage?: 'cart' | 'minicart' | 'pdp' | 'checkout';
    /**
     * Set to true to force the UI to not render PayPal Credit button
     * @default false
     */
    blockPayPalCreditButton?: boolean;
    /**
     * Set to true to force the UI to not render PayPal Pay Later button
     * @default false
     */
    blockPayPalPayLaterButton?: boolean;
    /**
     * Set to true to force the UI to not render PayPal Venmo button
     * @default false
     */
    blockPayPalVenmoButton?: boolean;
    /**
     * Callback called when PayPal authorizes the payment.
     * Must be resolved/rejected with the action object. If resolved, the additional details will be invoked. Otherwise it will be skipped
     *
     * @param data - Contains the raw event from PayPal, along with the billingAddress and deliveryAddress parsed by Adyen based on the raw event data
     * @param actions - Used to indicate that payment flow must continue or must stop
     */
    onAuthorized?: (data: {
        authorizedEvent: any;
        billingAddress?: Partial<AddressData>;
        deliveryAddress?: Partial<AddressData>;
    }, actions: {
        resolve: () => void;
        reject: () => void;
    }) => void;
    /**
     * While the buyer is on the PayPal site, you can update their shopping cart to reflect the shipping address they chose on PayPal
     * @see {@link https://developer.paypal.com/sdk/js/reference/#onshippingaddresschange}
     *
     * @param data - PayPal data object
     * @param actions - Used to reject the address change in case the address is invalid
     * @param component - Adyen instance of its PayPal implementation. It must be used to manipulate the 'paymentData' in order to apply the amount patch correctly
     */
    onShippingAddressChange?: (data: any, actions: {
        reject: (reason?: string) => Promise<void>;
    }, component: PaypalElement) => Promise<void>;
    /**
     * This callback is triggered any time the user selects a new shipping option.
     * @see {@link https://developer.paypal.com/sdk/js/reference/#onshippingoptionschange}
     *
     * @param data - An PayPal object containing the payer’s selected shipping option
     * @param actions - Used to indicates to PayPal that you will not support the shipping method selected by the buyer
     * @param component - Adyen instance of its PayPal implementation. It must be used to manipulate the 'paymentData' in order to apply the amount patch correctly
     */
    onShippingOptionsChange?: (data: any, actions: {
        reject: (reason?: string) => Promise<void>;
    }, component: PaypalElement) => Promise<void>;
    /**
     * If set to 'continue' , the button inside the lightbox will display the 'Continue' button
     * @default pay
     */
    userAction?: 'continue' | 'pay';
    /**
     * Customize your buttons using the style option.
     *
     * @see {@link https://developer.paypal.com/sdk/js/reference/#link-style}
     * @default style.height 48px
     */
    style?: {
        layout?: 'vertical' | 'horizontal';
        color?: 'gold' | 'blue' | 'silver' | 'white' | 'black';
        shape?: 'rect' | 'pill';
        height?: string | number;
        disableMaxWidth?: boolean;
        label?: 'paypal' | 'checkout' | 'buynow' | 'pay';
        tagline?: boolean;
    };
    /**
     * Called when the button first renders. You can use it for validations on your page if you are unable to do so prior to rendering.
     * @see {@link https://developer.paypal.com/sdk/js/reference/#link-oninitonclick}
     */
    onInit?: (data?: any, actions?: any) => void;
    /**
     * @see {@link https://developer.paypal.com/sdk/js/reference/#link-oninitonclick}
     */
    onClick?: () => void;
    /**
     * The commit status of the transaction. Determines whether to show a Pay Now or Continue button in the Checkout flow.
     *
     * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-commit}
     * @default true
     */
    commit?: boolean;
    /**
     * Whether the payment information in the transaction will be saved. Save your customers' payment information for billing agreements, subscriptions, or recurring payments.
     *
     * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-vault}
     * @default false
     */
    vault?: boolean;
    /**
     * The locale renders components. By default PayPal detects the correct locale for the buyer based on their geolocation and browser preferences.
     *
     * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-locale}
     * @default undefined
     */
    locale?: string;
    /**
     * Determines whether the funds are captured immediately on checkout or if the buyer authorizes the funds to be captured later.
     * If set, it will override the intent passed inside the 'configuration' object
     *
     * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-intent}
     * @default undefined
     */
    intent?: Intent;
    /**
     * Pass a Content Security Policy single-use token if you use them on your site
     *
     * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-datacspnonce}
     * @default undefined
     */
    cspNonce?: string;
    enableMessages?: boolean;
    /**
     * Set to true to enable debug mode. Defaults to false.
     * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-debug}
     * @default undefined
     */
    debug?: boolean;
    /**
     * A two-letter ISO 3166 country code which will be passed to the PayPal SDK as the buyer-country.
     * Note: The buyer country is only used in the sandbox. Don't pass this query parameter in production.
     *
     * @see {@link https://developer.paypal.com/sdk/js/configuration/#link-buyercountry}
     * @default undefined
     */
    countryCode?: string;
}
/**
 * The intent for the transaction. This determines whether the funds are captured immediately, or later.
 * @see {@link https://developer.paypal.com/docs/checkout/reference/customize-sdk/#intent}
 */
type Intent = 'sale' | 'capture' | 'authorize' | 'order' | 'tokenize';
type FundingSource = 'paypal' | 'credit' | 'paylater' | 'venmo';

interface QRLoaderConfiguration extends UIElementProps {
    /**
     * Number of miliseconds that the component will wait in between status calls
     */
    delay?: number;
    /**
     * Number of minutes that the component should keep on loading
     */
    countdownTime?: number;
    type?: string;
    brandLogo?: string;
    buttonLabel?: string;
    qrCodeImage?: string;
    qrCodeData?: string;
    paymentData?: string;
    redirectIntroduction?: string;
    timeToPay?: string;
    copyBtn?: boolean;
    introduction?: string | (() => h.JSX.Element);
    instructions?: string | (() => h.JSX.Element);
}

interface PixConfiguration extends QRLoaderConfiguration {
    personalDetailsRequired?: boolean;
}
interface PixElementData {
    paymentMethod: {
        type: 'pix';
    };
    shopperName?: {
        firstName: string;
        lastName: string;
    };
    socialSecurityNumber?: string;
}

interface PreAuthorizedDebitCanadaConfiguration extends UIElementProps {
    /**
     * Adds placeholder text to the input fields
     */
    placeholders?: PreAuthorizedDebitCanadaPlaceholders;
    /**
     * Display the contextual text underneath the input field. Disable it if you are using placeholders instead
     * @default true
     */
    showContextualElement?: boolean;
    /**
     * Enables storing the payment method using the Checkbox. Used for Advanced flow only
     * @default false
     */
    enableStoreDetails?: boolean;
    /**
     * 'storedPaymentMethodId' coming from a stored PreAuthorizedDebitCanada in /paymentMethods response
     * @internal
     */
    storedPaymentMethodId?: string;
    /**
     * 'lastFour' coming from a stored PreAuthorizedDebitCanada in /paymentMethods response
     * @internal
     */
    lastFour?: string;
    /**
     * 'label' coming from a stored PreAuthorizedDebitCanada in /paymentMethods response
     * @internal
     */
    label?: string;
}
interface PreAuthorizedDebitCanadaPlaceholders {
    ownerName?: string;
    bankAccountNumber?: string;
    bankCode?: string;
    bankLocationId?: string;
}

interface RedirectConfiguration extends UIElementProps {
    type?: string;
    url?: string;
    data?: {
        [key: string]: any;
    };
    method?: 'GET' | 'POST';
    beforeRedirect?: (resolve: any, reject: any, url: any) => Promise<void>;
}

interface SepaElementData {
    paymentMethod: {
        type: string;
        iban: string;
        ownerName: string;
    };
}
interface SepaConfiguration extends UIElementProps {
}

interface CheckoutErrorOptions {
    cause?: any;
    code?: string;
}
declare class AdyenCheckoutError extends Error {
    protected static errorTypes: {
        /** Network error. */
        NETWORK_ERROR: string;
        /** Shopper canceled the current transaction. */
        CANCEL: string;
        /** Implementation error. The method or parameter are incorrect or are not supported. */
        IMPLEMENTATION_ERROR: string;
        /** API error. The API has not returned the expected data  */
        API_ERROR: string;
        /** Generic error. */
        ERROR: string;
        /** Script error. The browser failed to load 3rd party script */
        SCRIPT_ERROR: string;
        /** Something has gone wrong internally */
        SDK_ERROR: string;
    };
    cause: unknown;
    options: CheckoutErrorOptions;
    constructor(type: keyof typeof AdyenCheckoutError.errorTypes, message?: string, options?: CheckoutErrorOptions);
}

declare enum Analytics3DS2Errors {
    ACTION_IS_MISSING_PAYMENT_DATA = "700",// Missing 'paymentData' property from threeDS2 action
    ACTION_IS_MISSING_TOKEN = "701",// Missing 'token' property from threeDS2 action
    TOKEN_IS_MISSING_THREEDSMETHODURL = "702",// Decoded token is missing a valid threeDSMethodURL property
    /**
     * Decoded token is missing one or more of the following properties:
     *  fingerprint: (threeDSMethodNotificationURL | postMessageDomain | threeDSServerTransID)
     *  challenge: (acsTransID | messageVersion | threeDSServerTransID)
     */
    TOKEN_IS_MISSING_OTHER_PROPS = "703",
    TOKEN_DECODE_OR_PARSING_FAILED = "704",// token decoding or parsing has failed. ('not base64', 'malformed URI sequence' or 'Could not JSON parse token')
    THREEDS2_TIMEOUT = "705",// 3DS2 process has timed out
    TOKEN_IS_MISSING_ACSURL = "800",// Decoded token is missing a valid acsURL property
    NO_TRANSSTATUS = "801",// Challenge has resulted in an error (no transStatus could be retrieved by the backend)
    NO_DETAILS_FOR_FRICTIONLESS_OR_REFUSED = "802",// callSubmit3DS2Fingerprint has received a response indicating either a "frictionless" flow, or a "refused" response, but without a details object
    NO_COMPONENT_FOR_ACTION = "803",// callSubmit3DS2Fingerprint cannot find a component to handle the action response
    NO_ACTION_FOR_CHALLENGE = "804",// callSubmit3DS2Fingerprint has received a response indicating a "challenge" but without an action object
    CHALLENGE_RESOLVED_WITHOUT_RESULT_PROP = "805"
}

interface ThreeDS2Configuration extends UIElementProps {
    dataKey?: string;
    environment?: string;
    isMDFlow?: boolean;
    loadingContext?: string;
    modules?: {
        analytics: AnalyticsModule;
    };
    notificationURL?: string;
    onActionHandled?: (rtnObj: ActionHandledReturnObject) => void;
    onError?: (error: AdyenCheckoutError, element?: UIElement) => void;
    paymentData?: string;
    token?: string;
    type?: string;
    challengeWindowSize?: '01' | '02' | '03' | '04' | '05';
}
interface ThreeDS2DeviceFingerprintConfiguration extends ThreeDS2Configuration {
    clientKey?: string;
    elementRef?: UIElement;
    showSpinner: boolean;
}
interface ThreeDS2ChallengeConfiguration extends ThreeDS2Configuration {
    i18n?: Language;
    size?: string;
}
/**
 * See
 * https://docs.adyen.com/checkout/3d-secure/api-reference#threeds2result
 * Indicates whether a transaction was authenticated, or whether additional verification is required.
 */
type ResultValue = 'Y' | 'N' | 'U' | 'A' | 'C' | 'R';
interface CReqData {
    acsTransID: string;
    messageVersion: string;
    threeDSServerTransID: string;
    messageType: string;
    challengeWindowSize: string;
}
interface ChallengeData {
    acsURL: string;
    cReqData: CReqData;
    iframeSizeArr: string[];
    postMessageDomain: string;
}
interface ResultObject {
    threeDSCompInd?: ResultValue;
    transStatus?: ResultValue;
    errorCode?: string;
    errorDescription?: string;
}
interface ThreeDS2FlowObject {
    result: ResultObject;
    type: 'ChallengeShopper' | 'IdentifyShopper' | 'challengeResult' | 'fingerPrintResult';
    errorCode?: string;
    threeDSServerTransID?: string;
}
interface PostMsgParseErrorObject {
    type?: string;
    comment?: string;
    extraInfo?: string;
    eventDataRaw?: string;
}
interface ThreeDS2Token {
    acsTransID?: string;
    acsURL?: string;
    messageVersion?: string;
    threeDSNotificationURL?: string;
    threeDSServerTransID?: string;
    threeDSMethodNotificationURL?: string;
    threeDSMethodUrl?: string;
}
interface FingerPrintData {
    threeDSServerTransID: string;
    threeDSMethodURL: string;
    threeDSMethodNotificationURL: string;
    postMessageDomain: string;
}
type ThreeDS2FingerprintResponse = {
    type: 'action' | 'completed';
    action?: CheckoutRedirectAction | CheckoutThreeDS2Action;
    details?: Record<string, string>;
};
type CheckoutRedirectAction = {
    type: 'redirect';
    data: Record<string, string>;
    method: string;
    paymentData: string;
};
type CheckoutThreeDS2Action = {
    type: 'threeDS2';
    token: string;
    subtype: string;
    authorisationToken: string;
};
interface FingerprintResolveData {
    data: {
        [key: string]: string;
        paymentData: string;
    };
}
interface ChallengeResolveData {
    data: {
        details: {
            [key: string]: string;
        };
    };
}
interface ErrorCodeObject {
    errorCode: string | Analytics3DS2Errors;
    message: string;
}

type UpiType = TxVariants.upi_qr | TxVariants.upi_intent | TxVariants.upi_collect;
type UpiMode = 'vpa' | 'qrCode' | 'intent';
type App = {
    id: string;
    name: string;
    type?: UpiType;
};
type UpiPaymentData = {
    paymentMethod: {
        type: UpiType;
        virtualPaymentAddress?: string;
        appId?: string;
    };
};
interface UPIConfiguration extends UIElementProps {
    defaultMode?: UpiMode;
    apps?: Array<App>;
    /**
     * Redirect url for upi intent apps
     * @internal
     */
    url?: string;
    paymentData?: string;
    qrCodeData?: string;
    brandLogo?: string;
}

declare enum PayToIdentifierEnum {
    phone = "phone",
    email = "email",
    abn = "abn",
    orgid = "orgid"
}

interface PayIdFormData {
    email: string;
    phone: string;
    abn: string;
    orgid: string;
    firstName: string;
    lastName: string;
    phoneNumber?: string;
    phonePrefix?: string;
    selectedIdentifier: PayToIdentifierEnum;
}

interface BSBFormData {
    bsb: string;
    bankAccountNumber: string;
    firstName: string;
    lastName: string;
}

type PayToInputOption = 'payid-option' | 'bsb-option';
type PayToComponentData = {
    selectedInput: PayToInputOption;
};

type MandateFrequencyType = 'adhoc' | 'daily' | 'weekly' | 'biWeekly' | 'monthly' | 'quarterly' | 'halfYearly' | 'yearly';
interface MandateType {
    amount: string;
    amountRule: string;
    frequency: MandateFrequencyType;
    startsAt?: string;
    endsAt: string;
    remarks: string;
    count?: string;
}
type PayToPlaceholdersType = {
    [K in keyof PayToData]: string;
};
interface PayToConfiguration extends UIElementProps {
    paymentData?: any;
    data?: PayToData;
    placeholders?: PayToPlaceholdersType;
    mandate?: MandateType;
    payee?: string;
}
interface PayToData extends PayIdFormData, BSBFormData, PayToComponentData {
    shopperAccountIdentifier: string;
}

interface StatusObjectProps {
    payload: string;
    resultCode: string;
    type: string;
}
interface StatusObject {
    type: string;
    props: StatusObjectProps;
}
interface AwaitComponentProps {
    type: string;
    delay?: number;
    countdownTime: number;
    throttleTime: number;
    showCountdownTimer: boolean;
    shouldRedirectAutomatically?: boolean;
    throttleInterval: number;
    paymentData?: string;
    url?: string;
    classNameModifiers?: string[];
    clientKey: string;
    onError: (error: any) => void;
    onComplete: (status: any, component: any) => void;
    brandLogo?: string;
    messageText?: string;
    awaitText: string;
    ref?: any;
    onActionHandled?: (rtnObj: ActionHandledReturnObject) => void;
    pollStatus?: () => Promise<RawPaymentResponse>;
    instructions?: string | (() => h.JSX.Element);
    endSlot?: () => h.JSX.Element;
    amount?: PaymentAmount;
    showAmount?: boolean;
}
interface AwaitConfiguration extends UIElementProps {
    paymentData?: string;
    paymentMethoType?: string;
    type?: string;
    url?: string;
}

declare class CashAppPay extends UIElement<CashAppPayConfiguration> {
    static type: TxVariants;
    private readonly cashAppService;
    protected static defaultProps: {
        onClick: (actions: any) => void;
        enableStoreDetails: boolean;
        storePaymentMethod: boolean;
    };
    constructor(checkout: ICore, props?: CashAppPayConfiguration);
    formatProps(props: CashAppPayConfiguration): {
        enableStoreDetails: boolean;
        storePaymentMethod?: boolean;
        onClick?(actions: {
            resolve: () => void;
            reject: () => void;
        }): void;
        referenceId?: string;
        redirectURL?: string;
        button?: {
            shape?: "semiround" | "round";
            size?: "medium" | "small";
            theme?: "dark" | "light";
            width?: "static" | "full";
        };
        configuration?: {
            clientId: string;
            scopeId: string;
        };
        storedPaymentMethodId?: string;
        cashtag?: string;
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        statusType?: StatusFromAction;
        type?: string;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => h.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
    formatData(): CashAppPayElementData;
    get displayName(): string;
    get additionalInfo(): "" | "Cash App Pay";
    submit: () => void;
    get isValid(): boolean;
    private handleOnChangeStoreDetails;
    private handleAuthorize;
    render(): h.JSX.Element;
}

declare class ClickToPayElement extends UIElement<ClickToPayConfiguration> {
    static type: TxVariants;
    private readonly clickToPayService;
    private readonly ctpConfiguration;
    constructor(checkout: ICore, props?: ClickToPayConfiguration);
    get isValid(): boolean;
    get browserInfo(): BrowserInfo;
    formatData(): ClickToPayPaymentData;
    protected formatProps(props: ClickToPayConfiguration): {
        disableOtpAutoFocus: boolean;
        shopperEmail: string;
        telephoneNumber: string;
        locale: string;
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        type?: string;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => h.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
        merchantDisplayName?: string;
        onReady?(): void;
        onTimeout?(error: TimeoutError): void;
        configuration?: {
            mcDpaId?: string;
            mcSrcClientId?: string;
            visaSrcInitiatorId?: string;
            visaSrciDpaId?: string;
        };
    };
    /**
     * Method used to let the merchant know if the shopper have a valid CtP accoubt
     *
     * Resolves Promise if the Shopper has cookies OR has valid CtP account
     * Rejects Promise if account isn't found or if Login screen is triggered
     */
    isAvailable(): Promise<void>;
    private handleClickToPaySubmit;
    render(): h.JSX.Element;
}

declare class BancontactElement extends CardElement {
    static type: TxVariants;
    constructor(checkout: ICore, props?: CardConfiguration);
    protected static defaultProps: any;
    formatData(): CardElementData;
    /**
     * Now that the Bancontact (BCMC) Card component can accept a number dual branded with Visa (which requires a CVC) it has to be handled differently
     * at creation time (no automatic removing of the CVC securedField).
     * At the same time we can't treat it as a regular 'card' component - because it needs to hide the CVC field at at startup,
     * as well as show the BCMC logo in the number field and ignore any of the internal, regEx driven, brand detection.
     */
    formatProps(props: CardConfiguration): {
        /**
         * Force type (only for the Dropin is type automatically set to 'bcmc')
         * - this will bypass the regEx brand detection that SF normally tries to carry out when the first few digits are entered in the PAN
         */
        type: TxVariants;
        brand: TxVariants;
        cvcPolicy: CVCPolicyType;
        autoFocus?: boolean;
        billingAddressAllowedCountries?: string[];
        billingAddressMode?: "full" | "partial" | "none";
        billingAddressRequired?: boolean;
        billingAddressRequiredFields?: string[];
        brands?: string[];
        brandsConfiguration?: CardBrandsConfiguration;
        challengeWindowSize?: "01" | "02" | "03" | "04" | "05";
        clickToPayConfiguration?: ClickToPayProps;
        fastlaneConfiguration?: FastlaneSignupConfiguration;
        configuration?: CardBackendConfiguration;
        countryCode?: string;
        data?: {
            holderName?: string;
            billingAddress?: Partial<AddressData>;
        };
        _disableClickToPay?: boolean;
        disableIOSArrowKeys?: boolean;
        disclaimerMessage?: DisclaimerMsgObject;
        doBinLookup?: boolean;
        enableStoreDetails?: boolean;
        expiryMonth?: string;
        exposeExpiryDate?: boolean;
        forceCompat?: boolean;
        fundingSource?: "debit" | "credit";
        hasCVC?: boolean;
        hasHolderName?: boolean;
        holderName?: string;
        hideCVC?: boolean;
        holderNameRequired?: boolean;
        id?: string;
        installmentOptions?: InstallmentOptions;
        keypadFix?: boolean;
        lastFour?: string;
        legacyInputMode?: boolean;
        maskSecurityCode?: boolean;
        minimumExpiryDate?: string;
        name?: string;
        onAddressLookup?: OnAddressLookupType;
        onBinLookup?: (event: CardBinLookupData) => void;
        onBinValue?: (event: CardBinValueData) => void;
        onBlur?: (event: CardFocusData | ComponentFocusObject) => void;
        onBrand?: (event: CardBrandData) => void;
        onConfigSuccess?: (event: CardConfigSuccessData) => void;
        onAllValid?: (event: CardAllValidData) => void;
        onFieldValid?: (event: CardFieldValidData) => void;
        onFocus?: (event: CardFocusData | ComponentFocusObject) => void;
        onLoad?: (event: CardLoadData) => void;
        placeholders?: CardPlaceholders;
        positionHolderNameOnTop?: boolean;
        showBrandIcon?: boolean;
        showContextualElement?: boolean;
        showInstallmentAmounts?: boolean;
        storedPaymentMethodId?: string;
        showStoreDetailsCheckbox?: boolean;
        styles?: StylesObject;
        supportedShopperInteractions?: string[];
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        statusType?: StatusFromAction;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => preact.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
    onBrand: (event: any) => void;
}

declare class RedirectElement extends UIElement<RedirectConfiguration> {
    static type: TxVariants;
    static defaultProps: {
        type: TxVariants;
    };
    formatData(): {
        paymentMethod: {
            type: string;
        };
        browserInfo: BrowserInfo;
    };
    private handleRedirectError;
    get isValid(): boolean;
    get browserInfo(): BrowserInfo;
    render(): h.JSX.Element;
}

declare class GiropayElement extends RedirectElement {
    static type: TxVariants;
    get displayName(): any;
    render(): h.JSX.Element;
}

declare class GooglePay extends UIElement<GooglePayConfiguration> {
    static type: TxVariants;
    static txVariants: TxVariants[];
    static defaultProps: GooglePayConfiguration;
    protected readonly googlePay: any;
    constructor(checkout: ICore, props?: GooglePayConfiguration);
    /**
     * Google Pay requires custom logic due to supporting two Tx variants that lead to the same payment method.
     * If the merchant creates a standalone Google Pay component, we need to verify if the payment method is available using both tx variants
     *
     * @param type
     * @returns
     */
    protected getPaymentMethodFromPaymentMethodsResponse(type?: string): PaymentMethod;
    protected formatProps(props: any): GooglePayConfiguration;
    /**
     * Formats the component data output
     */
    protected formatData(): {
        deliveryAddress: any;
        billingAddress: any;
        paymentMethod: {
            subtype: string;
            type: string;
            googlePayCardNetwork: any;
            googlePayToken: any;
        };
        browserInfo: BrowserInfo;
        origin: string;
    };
    protected submitAnalytics(analyticsObj: AnalyticsEvent): void;
    /**
     * Displays the Google Pay payment sheet overlay
     */
    private showGooglePayPaymentSheet;
    submit: () => void;
    /**
     * Method called when the payment is authorized in the payment sheet
     *
     * @see https://developers.google.com/pay/api/web/reference/client#onPaymentAuthorized
     **/
    private onPaymentAuthorized;
    /**
     * Call the 'onAuthorized' callback if available.
     * Must be resolved/reject for the payment flow to continue
     */
    private handleAuthorization;
    get isValid(): boolean;
    /**
     * Determine a shopper's ability to return a form of payment from the Google Pay API.
     */
    isAvailable(): Promise<void>;
    /**
     * Determine a shopper's ability to return a form of payment from the Google Pay API.
     */
    isReadyToPay: () => Promise<google.payments.api.IsReadyToPayResponse>;
    /**
     * Use this method to prefetch a PaymentDataRequest configuration to improve loadPaymentData execution time on later user interaction. No value is returned.
     */
    prefetch: () => void;
    get browserInfo(): BrowserInfo;
    get icon(): string;
    render(): h.JSX.Element;
}

declare class EcontextElement extends UIElement<EcontextConfiguration> {
    static type: TxVariants;
    static txVariants: TxVariants[];
    protected static defaultProps: {
        personalDetailsRequired: boolean;
    };
    get isValid(): boolean;
    /**
     * Formats the component data output
     */
    formatData(): any;
    render(): h.JSX.Element;
}

declare class FacilyPay3x extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class FacilyPay4x extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class FacilyPay6x extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class FacilyPay10x extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class FacilyPay12x extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class CustomCard extends UIElement<CustomCardConfiguration> {
    static type: TxVariants;
    static analyticsType: string;
    protected static defaultProps: {
        onBinLookup: () => void;
        brandsConfiguration: {};
    };
    private brand;
    formatProps(props: CustomCardConfiguration): {
        type: TxVariants;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        autoFocus?: boolean;
        brands?: string[];
        brandsConfiguration?: CardBrandsConfiguration;
        challengeWindowSize?: "01" | "02" | "03" | "04" | "05";
        disableIOSArrowKeys?: boolean;
        doBinLookup?: boolean;
        i18n?: Language;
        legacyInputMode?: boolean;
        loadingContext?: string;
        maskSecurityCode?: boolean;
        minimumExpiryDate?: string;
        onAutoComplete?: (event: CardAutoCompleteData) => void;
        onBinLookup?: (event: CardBinLookupData) => void;
        onBinValue?: (event: CardBinValueData) => void;
        onBrand?: (event: CardBrandData) => void;
        onConfigSuccess?: (event: CardConfigSuccessData) => void;
        onAllValid?: (event: CardAllValidData) => void;
        onFieldValid?: (event: CardFieldValidData) => void;
        onFocus?: (event: CardFocusData) => void;
        onLoad?: (event: CardLoadData) => void;
        onValidationError?: (validationErrors: ValidationError[]) => void;
        placeholders?: CardPlaceholders;
        styles?: StylesObject;
    };
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: any;
        browserInfo: BrowserInfo;
        origin: string;
    };
    updateStyles(stylesObj: any): this;
    setFocusOn(frame: any): this;
    processBinLookupResponse(binLookupResponse: any): this;
    dualBrandingChangeHandler(e: Event | string): this;
    handleUnsupportedCard(errObj: any): this;
    onBinLookup(obj: CardBinLookupData): void;
    onBinValue: (callbackObj: CardBinValueData) => void;
    get isValid(): boolean;
    get browserInfo(): BrowserInfo;
    private onFocus;
    protected onEnterKeyPressed: (activeElement: Element, component: UIElement) => void;
    render(): h.JSX.Element;
}

declare class SepaElement extends UIElement<SepaConfiguration> {
    static type: TxVariants;
    constructor(checkout: ICore, props?: SepaConfiguration);
    /**
     * Formats props on construction time
     */
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): SepaElementData;
    /**
     * Returns whether the component state is valid or not
     */
    get isValid(): boolean;
    render(): h.JSX.Element;
}

declare class QRLoaderContainer<T extends QRLoaderConfiguration = QRLoaderConfiguration> extends UIElement<T> {
    protected static defaultProps: {
        qrCodeImage: string;
        amount: any;
        paymentData: any;
        onError: () => void;
        onComplete: () => void;
    };
    formatData(): {
        paymentMethod: any;
    };
    get isValid(): boolean;
    renderQRCode(): h.JSX.Element;
    render(): h.JSX.Element;
}

declare class WeChatPayElement extends QRLoaderContainer {
    static type: TxVariants;
    static txVariants: TxVariants[];
    static analyticsType: string;
    formatProps(props: any): {
        delay: number;
        countdownTime: number;
        type?: string;
        brandLogo?: string;
        buttonLabel?: string;
        qrCodeImage?: string;
        qrCodeData?: string;
        paymentData?: string;
        redirectIntroduction?: string;
        timeToPay?: string;
        copyBtn?: boolean;
        introduction?: string | (() => preact.JSX.Element);
        instructions?: string | (() => preact.JSX.Element);
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => preact.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
}

declare class PayNowElement extends QRLoaderContainer {
    static type: TxVariants;
    formatProps(props: any): {
        delay: number;
        countdownTime: number;
        type?: string;
        brandLogo?: string;
        buttonLabel?: string;
        qrCodeImage?: string;
        qrCodeData?: string;
        paymentData?: string;
        redirectIntroduction?: string;
        timeToPay: string;
        copyBtn?: boolean;
        introduction: string | (() => preact.JSX.Element);
        instructions: string | (() => preact.JSX.Element);
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => preact.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
}

declare class BCMCMobileElement extends QRLoaderContainer {
    static type: TxVariants;
    static txVariants: TxVariants[];
    formatProps(props: any): {
        delay: number;
        countdownTime: number;
        type?: string;
        brandLogo?: string;
        buttonLabel?: string;
        qrCodeImage?: string;
        qrCodeData?: string;
        paymentData?: string;
        redirectIntroduction?: string;
        timeToPay: string;
        copyBtn?: boolean;
        introduction?: string | (() => preact.JSX.Element);
        instructions?: string | (() => preact.JSX.Element);
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => preact.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
}

declare class MolPayEBankingMYElement extends IssuerListContainer {
    static type: TxVariants;
}

declare class MolPayEBankingTHElement extends IssuerListContainer {
    static type: TxVariants;
}

declare class MolPayEbankingVNElement extends IssuerListContainer {
    static type: TxVariants;
}

declare class DragonpayElement extends UIElement<DragonpayConfiguraton> {
    static type: TxVariants;
    static txVariants: TxVariants[];
    get isValid(): boolean;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: {
            type: string;
            issuer: any;
        };
        shopperEmail: any;
    };
    protected formatProps(props: DragonpayConfiguraton): {
        issuers: any;
        type?: string;
        details?: any;
        loadingContext?: string;
        reference?: string;
        i18n?: Language;
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => h.JSX.Element;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
    render(): h.JSX.Element;
}

declare class DokuElement extends UIElement<VoucherConfiguration> {
    static type: TxVariants;
    static txVariants: TxVariants[];
    get isValid(): boolean;
    /**
     * Formats the component data output
     */
    formatData(): any;
    render(): h.JSX.Element;
}

declare class BoletoElement extends UIElement<BoletoConfiguration> {
    static type: TxVariants;
    static txVariants: TxVariants[];
    get isValid(): boolean;
    /**
     * Formats the component data output
     */
    formatData(): {
        socialSecurityNumber: any;
        shopperName: {
            firstName: any;
            lastName: any;
        };
        shopperEmail: any;
        billingAddress: any;
        paymentMethod: {
            type: string;
        };
    };
    private handleRef;
    render(): h.JSX.Element;
}

declare class OxxoElement extends UIElement<VoucherConfiguration> {
    static type: TxVariants;
    protected static defaultProps: {
        name: string;
    };
    get isValid(): boolean;
    formatData(): {
        paymentMethod: {
            type: string;
        };
    };
    private handleRef;
    render(): h.JSX.Element;
}

declare class MultibancoElement extends UIElement<VoucherConfiguration> {
    static type: TxVariants;
    get isValid(): boolean;
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: {
            type: string;
        };
    };
    private handleRef;
    render(): h.JSX.Element;
}

declare class DotpayElement extends IssuerListContainer {
    static type: TxVariants;
}

declare class EPSElement extends IssuerListContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class GiftcardElement extends UIElement<GiftCardConfiguration> {
    static type: TxVariants;
    protected static defaultProps: {
        brandsConfiguration: {};
    };
    formatProps(props: any): any;
    formatData(): GiftCardElementData;
    get isValid(): boolean;
    get icon(): any;
    get displayName(): any;
    private handleBalanceCheck;
    private onOrderRequest;
    balanceCheck(): void;
    private onBalanceCheck;
    /**
     * Check if it should call onRequiringConfirmation
     */
    private handleOnRequiringConfirmation;
    submit(): boolean;
    private makeSubmitCall;
    payButton: (props: any) => h.JSX.Element;
    render(): h.JSX.Element;
}

declare class VippsElement extends RedirectElement {
    static type: TxVariants;
    static defaultProps: {
        type: TxVariants;
        name: string;
    };
}

declare class PayuNetCashcardElement extends IssuerListContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class PayuNetBankingElement extends IssuerListContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class RatePay extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class SwishElement extends QRLoaderContainer {
    static type: TxVariants;
    formatProps(props: any): {
        delay: number;
        countdownTime: number;
        type?: string;
        brandLogo?: string;
        buttonLabel?: string;
        qrCodeImage?: string;
        qrCodeData?: string;
        paymentData?: string;
        redirectIntroduction?: string;
        timeToPay?: string;
        copyBtn?: boolean;
        introduction?: string | (() => preact.JSX.Element);
        instructions: string | (() => preact.JSX.Element);
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => preact.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
}

declare class AchElement extends UIElement<AchConfiguration> {
    static type: TxVariants;
    protected static defaultProps: AchConfiguration;
    formatData(): {
        paymentMethod: {
            type: TxVariants;
            storedPaymentMethodId: string;
            ownerName?: undefined;
            accountHolderType?: undefined;
            bankAccountType?: undefined;
            bankLocationId?: undefined;
            bankAccountNumber?: undefined;
        };
    } | {
        storePaymentMethod: any;
        paymentMethod: {
            type: TxVariants;
            ownerName: any;
            accountHolderType: any;
            bankAccountType: any;
            bankLocationId: any;
            bankAccountNumber: any;
            storedPaymentMethodId?: undefined;
        };
    };
    get isValid(): boolean;
    get displayName(): string;
    get additionalInfo(): string;
    render(): h.JSX.Element;
}

declare class MBWayElement extends UIElement<AwaitConfiguration> {
    static type: TxVariants;
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): object;
    get isValid(): boolean;
    get displayName(): string;
    render(): h.JSX.Element;
}

interface BlikElementData {
    paymentMethod: {
        type: string;
        blikCode: string;
    };
}
declare class BlikElement extends UIElement<AwaitConfiguration> {
    static type: TxVariants;
    formatData(): BlikElementData;
    get isValid(): boolean;
    get displayName(): string;
    get additionalInfo(): string;
    /**
     * NOTE: for future reference:
     *  this.props.onComplete (which is called from this.onComplete) equates to the merchant defined onAdditionalDetails callback
     *  (the initial /payments response defines an "await" action, actionTypes.ts translates this to "onComplete: props.onAdditionalDetails")
     */
    render(): h.JSX.Element;
}

declare class BankTransferElement extends UIElement<BankTransferConfiguration> {
    static type: TxVariants;
    static defaultProps: {
        showEmailAddress: boolean;
    };
    state: BankTransferState;
    get isValid(): boolean;
    /**
     * Formats the component data output
     */
    formatData(): {
        shopperEmail: string;
        paymentMethod: {
            type: TxVariants;
        };
    };
    private handleRef;
    render(): h.JSX.Element;
}

declare class Affirm extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

declare class PixElement extends QRLoaderContainer<PixConfiguration> {
    static type: TxVariants;
    static defaultProps: {
        qrCodeImage: string;
        amount: any;
        paymentData: any;
        onError: () => void;
        onComplete: () => void;
        personalDetailsRequired: boolean;
        countdownTime: number;
        delay: number;
    };
    get isValid(): boolean;
    formatProps(props: any): PixConfiguration;
    formatData(): PixElementData;
    render(): h.JSX.Element;
}

interface BacsElementData {
    paymentMethod: {
        type: string;
        holderName: string;
        bankAccountNumber: string;
        bankLocationId: string;
    };
    shopperEmail: string;
}

declare class BacsElement extends UIElement<VoucherConfiguration> {
    static type: TxVariants;
    formatData(): BacsElementData;
    get isValid(): boolean;
    payButton: (props: any) => h.JSX.Element;
    render(): h.JSX.Element;
}

declare class AddressElement extends UIElement {
    static type: TxVariants;
    get data(): any;
    get isValid(): boolean;
    render(): h.JSX.Element;
}

interface PersonalDetailsConfiguration extends UIElementProps {
}
declare class PersonalDetailsElement extends UIElement<PersonalDetailsConfiguration> {
    static type: TxVariants;
    get data(): any;
    get isValid(): boolean;
    render(): h.JSX.Element;
}

declare class KlarnaPayments extends UIElement<KlarnaConfiguration> {
    static type: TxVariants;
    static txVariants: TxVariants[];
    componentRef: KlarnaComponentRef;
    protected static defaultProps: {
        useKlarnaWidget: boolean;
    };
    constructor(checkout: ICore, props?: KlarnaConfiguration);
    get isValid(): boolean;
    protected formatData(): {
        paymentMethod: {
            subtype?: string;
            type: string;
        };
    };
    payButton: (props: any) => h.JSX.Element;
    handleAction(action: KlarnaAction, props?: {}): UIElement | null;
    updateWithAction(action: KlarnaAction): void;
    private onLoaded;
    activate(): void;
    protected onComplete(details: KlarnaAdditionalDetailsData): void;
    render(): h.JSX.Element;
}

declare class TwintElement extends RedirectElement {
    static type: TxVariants;
    static defaultProps: {
        type: TxVariants;
        name: string;
    };
    /**
     * Get the element displayable name
     */
    get displayName(): string;
    payButtonLabel(): string;
    /**
     * Overrides RedirectElement default payButton behaviour to use label
     * @param props - props
     */
    payButton: (props: any) => h.JSX.Element;
}

declare class MealVoucherFRElement extends GiftcardElement {
    static type: TxVariants;
    static txVariants: TxVariants[];
    constructor(checkout: ICore, props?: GiftCardConfiguration);
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: {
            type: any;
            brand: string;
            encryptedCardNumber: any;
            encryptedSecurityCode: any;
            encryptedExpiryMonth: any;
            encryptedExpiryYear: any;
        };
    };
}

declare class OnlineBankingINElement extends IssuerListContainer {
    static type: TxVariants;
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        browserInfo: BrowserInfo;
        paymentMethod: {
            type: string;
            issuer: string;
        };
    };
    get browserInfo(): BrowserInfo;
}

declare class OnlineBankingPL extends IssuerListContainer {
    static type: TxVariants;
    private static disclaimerUrlsMap;
    private static termsAndConditions;
    constructor(checkout: ICore, props?: IssuerListConfiguration);
}

declare class RatePayDirectDebit extends OpenInvoiceContainer {
    static type: TxVariants;
    formatProps(props: any): any;
}

/**
 * For mobile:
 * We should show upi_collect or upi_intent depending on if `apps` are returned in /paymentMethods response
 * The upi_qr should always be on the second tab
 *
 * For non-mobile:
 * We should never show the upi_intent (ignore `apps` in /paymentMethods response)
 * The upi_qr should be on the first tab and the upi_collect should be on second tab
 */
declare class UPI extends UIElement<UPIConfiguration> {
    static type: TxVariants;
    static txVariants: TxVariants[];
    private selectedMode;
    constructor(checkout: ICore, props: UPIConfiguration);
    formatProps(props: UPIConfiguration): {
        defaultMode: UpiMode;
        apps: App[];
        url?: string;
        paymentData?: string;
        qrCodeData?: string;
        brandLogo?: string;
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        type?: string;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => h.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
    get isValid(): boolean;
    formatData(): UpiPaymentData;
    get paymentType(): UpiType;
    private onUpdateMode;
    private renderContent;
    render(): h.JSX.Element;
}

declare class WalletINElement extends IssuerListContainer {
    static type: TxVariants;
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        browserInfo: BrowserInfo;
        paymentMethod: {
            type: string;
            issuer: string;
        };
    };
    get browserInfo(): BrowserInfo;
}

declare class OnlineBankingCZElement extends IssuerListContainer {
    static type: TxVariants;
    private static termsAndConditions;
    formatProps(props: any): any;
    get icon(): string;
}

declare class OnlineBankingSKElement extends IssuerListContainer {
    static type: TxVariants;
    private static termsAndConditions;
    formatProps(props: any): any;
    get icon(): string;
}

declare class PayByBank extends IssuerListContainer {
    static type: TxVariants;
    constructor(checkout: ICore, props?: IssuerListConfiguration);
}

declare class PromptPayElement extends QRLoaderContainer {
    static type: TxVariants;
    formatProps(props: any): {
        delay: number;
        countdownTime: number;
        type?: string;
        brandLogo?: string;
        buttonLabel?: string;
        qrCodeImage?: string;
        qrCodeData?: string;
        paymentData?: string;
        redirectIntroduction?: string;
        timeToPay?: string;
        copyBtn?: boolean;
        introduction?: string | (() => preact.JSX.Element);
        instructions?: string | (() => preact.JSX.Element);
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => preact.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
}

declare class DuitNowElement extends QRLoaderContainer {
    static type: TxVariants;
    formatProps(props: any): {
        delay: number;
        countdownTime: number;
        type?: string;
        brandLogo?: string;
        buttonLabel?: string;
        qrCodeImage?: string;
        qrCodeData?: string;
        paymentData?: string;
        redirectIntroduction?: string;
        timeToPay?: string;
        copyBtn?: boolean;
        introduction?: string | (() => preact.JSX.Element);
        instructions?: string | (() => preact.JSX.Element);
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => preact.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
}

declare class TrustlyElement extends RedirectElement {
    static type: TxVariants;
    get displayName(): any;
    render(): h.JSX.Element;
}

declare class Riverty extends RedirectElement {
    static readonly type = TxVariants.riverty;
    static readonly defaultProps: {
        type: TxVariants;
    };
    formatData(): {
        paymentMethod: {
            type: string;
            subtype: string;
        };
        browserInfo: BrowserInfo;
    };
}

declare class PayByBankUS extends RedirectElement {
    static type: TxVariants;
    protected formatProps(props: any): any;
    formatData(): {
        paymentMethod: {
            storedPaymentMethodId: string;
            type: string;
        };
        browserInfo: BrowserInfo;
    };
    get displayName(): string;
    get additionalInfo(): string;
    get brands(): {
        icon: string;
        name: string;
    }[];
    render(): h.JSX.Element;
}

declare class Fastlane extends UIElement<FastlaneConfiguration> {
    static readonly type = TxVariants.fastlane;
    protected static defaultProps: {
        keepBrandsVisible: boolean;
    };
    protected formatData(): {
        paymentMethod: {
            type: TxVariants;
            fastlaneData: string;
        };
    };
    isAvailable(): Promise<void>;
    get isValid(): boolean;
    /**
     * Used to display payment method logo within Drop-in
     */
    get icon(): string;
    /**
     * Used to display the payment method supported brands within Drop-in
     */
    get brands(): {
        icon: string;
        name: string;
    }[];
    render(): h.JSX.Element;
}

declare class PreAuthorizedDebitCanada extends UIElement<PreAuthorizedDebitCanadaConfiguration> {
    static type: TxVariants;
    formatData(): {
        paymentMethod: {
            type: TxVariants;
            storedPaymentMethodId: string;
            ownerName?: undefined;
            bankAccountNumber?: undefined;
            bankCode?: undefined;
            bankLocationId?: undefined;
        };
    } | {
        storePaymentMethod: any;
        paymentMethod: {
            type: TxVariants;
            ownerName: any;
            bankAccountNumber: any;
            bankCode: any;
            bankLocationId: any;
            storedPaymentMethodId?: undefined;
        };
    };
    formatProps(props: PreAuthorizedDebitCanadaConfiguration): PreAuthorizedDebitCanadaConfiguration;
    get isValid(): boolean;
    get displayName(): string;
    get additionalInfo(): string;
    render(): h.JSX.Element;
}

/**
 *
 */
declare class PayToElement extends UIElement<PayToConfiguration> {
    static readonly type = TxVariants.payto;
    protected static defaultProps: {
        placeholders: {};
    };
    formatProps(props: any): any;
    /**
     * Formats the component data output
     */
    formatData(): {
        paymentMethod: {
            type: TxVariants;
            storedPaymentMethodId: string;
            shopperAccountIdentifier?: undefined;
        };
        shopperName?: undefined;
    } | {
        paymentMethod: {
            type: TxVariants;
            shopperAccountIdentifier: string;
            storedPaymentMethodId?: undefined;
        };
        shopperName: {
            firstName: any;
            lastName: any;
        };
    };
    get isValid(): boolean;
    get displayName(): string;
    get additionalInfo(): string;
    render(): h.JSX.Element;
}

type Logo = {
    name: string;
    src: string;
    alt: string;
};
interface IAwaitLogoContainer {
    logos: Logo[];
}

interface IPayByBankPixAwait extends Partial<AwaitComponentProps>, Partial<IAwaitLogoContainer> {
}

interface BaseEnrollmentProps {
    type?: string;
    txVariant: string;
    registrationOptions?: string;
    payButton(props: PayButtonFunctionProps): h.JSX.Element;
    setComponentRef?: (ref: any) => void;
    /**
     * Trigger when the await times out, receives error state or the biometrics verification fails.
     */
    onError?: (error: any) => void;
    onEnroll?: (registrationOptions: string) => void;
}
interface AwaitProps extends Partial<IPayByBankPixAwait>, BaseEnrollmentProps {
    type: 'await';
    enrollmentId: string;
}
interface IssuerListProps extends BaseEnrollmentProps {
    issuers?: IssuerItem[];
    /**
     * @internal
     */
    onSubmitAnalytics?: (aObj: AnalyticsEvent) => void;
    onChange?(payload: OnChangeData): void;
}

interface PaymentProps extends IPayByBankPixAwait {
    enrollmentId?: string;
    initiationId?: string;
    receiver: string;
    amount: {
        value: number;
        currency: string;
    };
    txVariant: string;
    issuer: string;
    onPay: () => void;
    onAuthorize: (authorizationOptions: string) => void;
    setComponentRef?: (ref: any) => void;
}

type RiskSignals = {
    osVersion?: string;
    userTimeZoneOffset?: string;
    language?: string;
    screenDimensions?: {
        width: number;
        height: number;
    };
    /**
     * The following properties won't be collected by the sdk, optionally passed by merchant.
     */
    isRootedDevice?: boolean;
    screenBrightness?: number;
    elapsedTimeSinceBoot?: number;
};
type PayByBankPixConfiguration = UIElementProps & Partial<Omit<AwaitProps, 'enrollmentId'>> & Partial<IssuerListProps> & Partial<Omit<PaymentProps, 'enrollmentId' | 'initiationId'>> & {
    deviceId?: string;
    /**
     * @internal
     */
    _isAdyenHosted?: boolean;
    /**
     * @internal from backend, action object
     */
    paymentMethodData?: {
        enrollmentId: string;
        initiationId?: string;
    };
    /**
     * @internal from backend, paymentMethods storedPaymentMethod response
     */
    payByBankPixDetails?: {
        deviceId: string;
        receiver: string;
        ispb: string;
    };
};
interface PayByBankPixData {
    paymentMethod: {
        type: TxVariants.paybybank_pix;
        issuer?: string;
        riskSignals?: RiskSignals;
    };
}

declare class PayByBankPixElement extends UIElement<PayByBankPixConfiguration> {
    static readonly type = TxVariants.paybybank_pix;
    private static readonly TIMEOUT_MINUTES;
    private readonly passkeyService;
    static readonly defaultProps: PayByBankPixConfiguration;
    constructor(checkout: ICore, props?: PayByBankPixConfiguration);
    get isValid(): boolean;
    /**
     * Display in the drop-in
     */
    get additionalInfo(): string;
    /**
     * Display in the drop-in
     */
    get icon(): string;
    /**
     * Method used to let the merchant know if the shopper's device supports WebAuthn APIs: https://featuredetect.passkeys.dev/
     */
    isAvailable(): Promise<void>;
    /**
     * Make sure the await action UIElement is available before mounting
     */
    handleAction(action: PaymentAction, props?: {}): UIElement | null;
    formatData(): PayByBankPixData;
    /**
     * There are 3 endpoints (stages) we need to call for the enrollment flow.
     * The first one is the regular payments call on issuer selection - we indicate to store the payment token for the selected issuer.
     * The second one is to poll the enrollment eligibility - we poll the server to get the enrollment challenge in the `getEnrollmentStatus` function.
     * The third one is in the `authorizeEnrollment` function - we create passkeys and authorize the enrollment with shopper's passkey.
     */
    private readonly onIssuerSelected;
    private readonly authorizeEnrollment;
    /**
     * There are 3 endpoints (stages) we need to call for the payment flow.
     * The first one `payWithStoredPayment` is the regular payments call - we attempt to pay with the stored payment token.
     * The second one is to poll the authorization options - we poll the server to get the challenge in the `getAuthorizationStatus` function.
     * The third one is in the `authorizePayment` function - we authorize the payment with shopper's passkey.
     */
    private readonly payWithStoredPayment;
    private readonly authorizePayment;
    render(): h.JSX.Element;
}

/** Components */

/**
 * Maps each tx variant to a Component element.
 *
 * WARNING: This mapping must be imported carefully as it breaks the tree-shaking. It is now used in:
 * - The utility function 'createComponent' for UMD bundle (UMD bundle does not have tree-shaking, so this use-case is fine)
 * - Generating Drop-in Typescript types (Typescript types do not break tree-shaking)
 */
declare const ComponentsMap: {
    /** internal */
    address: typeof AddressElement;
    bankTransfer_IBAN: typeof BankTransferElement;
    donation: typeof DonationElement;
    personal_details: typeof PersonalDetailsElement;
    /** internal */
    /** Card */
    bcmc: typeof BancontactElement;
    card: typeof CardElement;
    scheme: typeof CardElement;
    storedCard: typeof CardElement;
    customcard: typeof CustomCard;
    /** Card */
    /** Direct debit */
    ach: typeof AchElement;
    directdebit_GB: typeof BacsElement;
    sepadirectdebit: typeof SepaElement;
    eft_directdebit_CA: typeof PreAuthorizedDebitCanada;
    /** Direct debit */
    /** Open Invoice */
    affirm: typeof Affirm;
    afterpay: typeof AfterPay;
    afterpay_default: typeof AfterPay;
    afterpay_b2b: typeof AfterPayB2B;
    atome: typeof Atome;
    facilypay_3x: typeof FacilyPay3x;
    facilypay_4x: typeof FacilyPay4x;
    facilypay_6x: typeof FacilyPay6x;
    facilypay_10x: typeof FacilyPay10x;
    facilypay_12x: typeof FacilyPay12x;
    ratepay: typeof RatePay;
    ratepay_directdebit: typeof RatePayDirectDebit;
    /** Open Invoice */
    /** Wallets */
    amazonpay: typeof AmazonPayElement;
    applepay: typeof ApplePayElement;
    cashapp: typeof CashAppPay;
    clicktopay: typeof ClickToPayElement;
    googlepay: typeof GooglePay;
    paypal: typeof PaypalElement;
    fastlane: typeof Fastlane;
    paywithgoogle: typeof GooglePay;
    /** Wallets */
    /** Voucher */
    boletobancario: typeof BoletoElement;
    boletobancario_itau: typeof BoletoElement;
    boletobancario_santander: typeof BoletoElement;
    doku: typeof DokuElement;
    doku_alfamart: typeof DokuElement;
    doku_permata_lite_atm: typeof DokuElement;
    doku_indomaret: typeof DokuElement;
    doku_atm_mandiri_va: typeof DokuElement;
    doku_sinarmas_va: typeof DokuElement;
    doku_mandiri_va: typeof DokuElement;
    doku_cimb_va: typeof DokuElement;
    doku_danamon_va: typeof DokuElement;
    doku_bri_va: typeof DokuElement;
    doku_bni_va: typeof DokuElement;
    doku_bca_va: typeof DokuElement;
    doku_wallet: typeof DokuElement;
    oxxo: typeof OxxoElement;
    primeiropay_boleto: typeof BoletoElement;
    /** Voucher */
    /** issuerList */
    billdesk_online: typeof BillDeskOnlineElement;
    billdesk_wallet: typeof BillDeskWalletElement;
    dotpay: typeof DotpayElement;
    eps: typeof EPSElement;
    molpay_ebanking_fpx_MY: typeof MolPayEBankingMYElement;
    molpay_ebanking_TH: typeof MolPayEBankingTHElement;
    molpay_ebanking_VN: typeof MolPayEbankingVNElement;
    onlineBanking_CZ: typeof OnlineBankingCZElement;
    onlinebanking_IN: typeof OnlineBankingINElement;
    onlineBanking_PL: typeof OnlineBankingPL;
    onlineBanking_SK: typeof OnlineBankingSKElement;
    paybybank: typeof PayByBank;
    payu_IN_cashcard: typeof PayuNetCashcardElement;
    payu_IN_nb: typeof PayuNetBankingElement;
    wallet_IN: typeof WalletINElement;
    /** issuerList */
    /** Dragonpay */
    dragonpay_ebanking: typeof DragonpayElement;
    dragonpay_otc_banking: typeof DragonpayElement;
    dragonpay_otc_non_banking: typeof DragonpayElement;
    dragonpay_otc_philippines: typeof DragonpayElement;
    /** Dragonpay */
    /** Econtext */
    econtext_atm: typeof EcontextElement;
    econtext_online: typeof EcontextElement;
    econtext_seven_eleven: typeof EcontextElement;
    econtext_stores: typeof EcontextElement;
    /** Econtext */
    /** Redirect */
    giropay: typeof GiropayElement;
    multibanco: typeof MultibancoElement;
    redirect: typeof RedirectElement;
    twint: typeof TwintElement;
    vipps: typeof VippsElement;
    trustly: typeof TrustlyElement;
    paybybank_AIS_DD: typeof PayByBankUS;
    riverty: typeof Riverty;
    paybybank_pix: typeof PayByBankPixElement;
    /** Redirect */
    /** Klarna */
    klarna: typeof KlarnaPayments;
    klarna_account: typeof KlarnaPayments;
    klarna_paynow: typeof KlarnaPayments;
    klarna_b2b: typeof KlarnaPayments;
    /** Klarna */
    /** QRLoader */
    bcmc_mobile: typeof BCMCMobileElement;
    bcmc_mobile_QR: typeof BCMCMobileElement;
    pix: typeof PixElement;
    swish: typeof SwishElement;
    wechatpay: typeof WeChatPayElement;
    wechatpayQR: typeof WeChatPayElement;
    promptpay: typeof PromptPayElement;
    paynow: typeof PayNowElement;
    duitnow: typeof DuitNowElement;
    /** QRLoader */
    /** Await */
    blik: typeof BlikElement;
    mbway: typeof MBWayElement;
    ancv: typeof ANCVElement;
    payto: typeof PayToElement;
    upi: typeof UPI;
    upi_qr: typeof UPI;
    upi_collect: typeof UPI;
    upi_intent: typeof UPI;
    /** Await */
    /** Giftcard */
    giftcard: typeof GiftcardElement;
    mealVoucher_FR_natixis: typeof MealVoucherFRElement;
    mealVoucher_FR_sodexo: typeof MealVoucherFRElement;
    mealVoucher_FR_groupeup: typeof MealVoucherFRElement;
};

/**
 * Available components
 */
type PaymentMethods$1 = typeof ComponentsMap;
/**
 * Options for a component
 */
type PaymentMethodOptions<P extends keyof PaymentMethods$1> = InstanceType<PaymentMethods$1[P]>['props'];
type PaymentMethodsConfigurationMap = {
    [key in keyof PaymentMethods$1]?: Partial<PaymentMethodOptions<key>>;
};
type PaymentActionTypesMap = {
    [key in PaymentActionsType]?: Partial<UIElementProps>;
};
/**
 * Type must be loose, otherwise it will take priority over the rest
 */
type NonMappedPaymentMethodsMap = {
    [key: string]: any;
};
type PaymentMethodsConfiguration = PaymentMethodsConfigurationMap & PaymentActionTypesMap & NonMappedPaymentMethodsMap;
type InstantPaymentTypes = 'paywithgoogle' | 'googlepay' | 'applepay';
interface DropinConfiguration extends UIElementProps {
    /**
     * Configure each payment method displayed on the Drop-in
     */
    paymentMethodsConfiguration?: PaymentMethodsConfiguration;
    /**
     * Pass the payment method classes that are going to be used as part of the Drop-in.
     */
    paymentMethodComponents?: NewableComponent[];
    order?: Order;
    /**
     * Show/Hide stored payment methods
     * @defaultValue true
     */
    showStoredPaymentMethods?: boolean;
    /**
     * Disable the final animation when the payment is successful or if it fails.
     * @defaultValue false
     */
    disableFinalAnimation?: boolean;
    /**
     * Show/Hide regular (non-stored) payment methods
     * @defaultValue true
     */
    showPaymentMethods?: boolean;
    /**
     * Show wallet payment methods to show on top of the regular payment
     * method list.
     *
     * @defaultValue []
     */
    instantPaymentTypes?: InstantPaymentTypes[];
    /**
     * Pre-select a specific payment method when Drop-in is rendered
     *
     * @default undefined
     */
    openPaymentMethod?: {
        type: string;
    };
    /**
     * Pre-select the first stored payment method.
     * It has priority over 'openFirstPaymentMethod' property
     *
     * @default true
     */
    openFirstStoredPaymentMethod?: boolean;
    /**
     * Pre-select the first non-stored payment method.
     * 'openFirstStoredPaymentMethod' has priority over this property
     *
     * @default true
     */
    openFirstPaymentMethod?: boolean;
    /**
     * Callback triggered once the Drop-in is ready to be used
     */
    onReady?(): void;
    /**
     * Callback triggered before Drop-in creates the stored payment method UIElements.
     * This callback lets you choose which saved payment methods appear in the Drop-in.
     */
    filterStoredPaymentMethods?(storedPaymentMethods: StoredPaymentMethod[]): StoredPaymentMethod[];
    /**
     * Callback triggered once the shopper selects a different payment method in the Drop-in
     */
    onSelect?(paymentMethod: UIElement): void;
    /**
     * Show/Hide the remove payment method button on stored payment methods
     * Requires {@link DropinConfiguration.onDisableStoredPaymentMethod}
     * @defaultValue false
     */
    showRemovePaymentMethodButton?: boolean;
    /**
     * Show/Hide the radio in the payment method list
     * @defaultValue false
     */
    showRadioButton?: boolean;
    /**
     * Called when a shopper clicks Remove on a stored payment method
     * Use this to call the {@link https://docs.adyen.com/api-explorer/#/Recurring/v49/post/disable /disable endpoint}
     * Call resolve() if the removal was successful, or call reject() if there was an error
     * @defaultValue false
     */
    onDisableStoredPaymentMethod?: (storedPaymentMethod: any, resolve: any, reject: any) => void;
}
interface onOrderCancelData {
    order: {
        orderData: string;
        pspReference: string;
    };
}
type onOrderCancelType = (data: onOrderCancelData, actions: {
    resolve: (data: {
        amount: PaymentAmount;
    }) => void;
    reject: (error: string) => void;
}) => void;
interface DropinComponentProps extends DropinConfiguration {
    core: ICore;
    onCreateElements(): any;
    onOrderCancel?: onOrderCancelType;
}
interface DropinStatus {
    type: UIElementStatus | StatusFromAction;
    props?: DropinStatusProps;
}
interface DropinStatusProps {
    component?: UIElement;
    message?: string;
}
interface DropinComponentState {
    elements: UIElement[];
    fastlanePaymentElement: UIElement[];
    instantPaymentElements: UIElement[];
    storedPaymentElements: UIElement[];
    status: DropinStatus;
    activePaymentMethod: UIElement;
    cachedPaymentMethods: Record<string, boolean>;
    showDefaultPaymentMethodList: boolean;
    isDisabling: boolean;
    orderStatus: OrderStatus;
}
interface IDropin {
    /**
     * Used to make the Dropin display the final animation
     *
     * @internal
     * @param type - animation type
     */
    displayFinalAnimation(type: 'success' | 'error'): void;
    activePaymentMethod: () => null;
    closeActivePaymentMethod: () => void;
}

declare class Session {
    private readonly session;
    private readonly storage;
    readonly clientKey: string;
    readonly loadingContext: string;
    configuration: SessionConfiguration;
    constructor(rawSession: Partial<CheckoutSession>, clientKey: string, loadingContext: string);
    get shopperLocale(): string;
    get id(): string;
    get data(): string;
    /**
     * Updates the session.data with the latest data blob
     */
    private updateSessionData;
    /**
     * Fetches data from a session
     */
    setupSession(options: SetupSessionOptions): Promise<CheckoutSessionSetupResponse>;
    /**
     * Submits a session payment
     */
    submitPayment(data: any): Promise<CheckoutSessionPaymentResponse>;
    /**
     * Submits session payment additional details
     */
    submitDetails(data: AdditionalDetailsData['data']): Promise<CheckoutSessionDetailsResponse>;
    /**
     * Checks the balance for a payment method
     */
    checkBalance(data: any): Promise<CheckoutSessionBalanceResponse>;
    /**
     * Creates an order for the current session
     */
    createOrder(): Promise<CheckoutSessionOrdersResponse>;
    /**
     * Cancels an order for the current session
     */
    cancelOrder(data: onOrderCancelData): Promise<CheckoutSessionOrdersResponse>;
    /**
     * Gets the stored session but only if the current id and the stored id match
     */
    getStoredSession(): CheckoutSession;
    /**
     * Stores the session
     */
    storeSession(): void;
    /**
     * Clears the stored session
     */
    removeStoredSession(): void;
}

declare class PaymentMethods {
    paymentMethods: PaymentMethod[];
    storedPaymentMethods: StoredPaymentMethod[];
    constructor(response: PaymentMethodsResponse, options?: {});
    private mapCreatedComponentType;
    has(paymentMethod: string): boolean;
    find(paymentMethod: string): PaymentMethod;
}

interface Experiment {
    controlGroup: boolean;
    experimentId: string;
    experimentName?: string;
}
interface AnalyticsData {
    /**
     * Relates to PMs used within Plugins
     * https://docs.adyen.com/development-resources/application-information/?tab=integrator_built_2#application-information-fields
     * @internal
     */
    applicationInfo?: {
        externalPlatform: {
            name: string;
            version: string;
            integrator: string;
        };
        merchantApplication: {
            name: string;
            version: string;
        };
        merchantDevice?: {
            os: string;
            osVersion: string;
        };
    };
    /**
     * Use a checkoutAttemptId from a previous page
     */
    checkoutAttemptId?: string;
}
interface AnalyticsOptions {
    /**
     * Enable/Disable all analytics
     */
    enabled?: boolean;
    /**
     * Data to be sent along with the event data
     */
    payload?: any;
    /**
     * List of experiments to be sent in the collectId call // TODO - still used?
     */
    experiments?: Experiment[];
    /**
     * A wrapper to pass data needed when analytics is setup
     */
    analyticsData?: AnalyticsData;
}
type AnalyticsInitialEvent = {
    containerWidth: number;
    component: string;
    flavor: string;
    paymentMethods?: any[];
    sessionId?: string;
};
interface AnalyticsObject {
    timestamp: string;
    id: string;
    component: string;
    code?: string;
    errorType?: string;
    message?: string;
    type?: string;
    subType?: string;
    target?: string;
    metadata?: Record<string, any>;
    isStoredPaymentMethod?: boolean;
    brand?: string;
    validationErrorCode?: string;
    validationErrorMessage?: string;
    issuer?: string;
    isExpress?: boolean;
    expressPage?: string;
    result?: string;
    configData?: Record<string, string | boolean>;
}

interface ICore {
    initialize(): Promise<ICore>;
    register(...items: NewableComponent[]): void;
    update(options: CoreConfiguration): Promise<ICore>;
    remove(component: any): ICore;
    submitDetails(details: AdditionalDetailsData['data']): void;
    getCorePropsForComponent(): any;
    getComponent(txVariant: string): NewableComponent | undefined;
    createFromAction(action: PaymentAction, options?: any): UIElement;
    storeElementReference(element: UIElement): void;
    options: CoreConfiguration;
    paymentMethodsResponse: PaymentMethods;
    session?: Session;
}
type PaymentCompletedData = SessionsResponse | {
    resultCode: ResultCode;
    donationToken?: string;
};
type PaymentFailedData = SessionsResponse | {
    resultCode: ResultCode;
};
type SubmitData = {
    data: PaymentData;
    isValid: boolean;
};
type SubmitActions = {
    resolve: (response: CheckoutAdvancedFlowResponse) => void;
    reject: (error?: Pick<CheckoutAdvancedFlowResponse, 'error'>) => void;
};
type AdditionalDetailsData = {
    data: {
        details: {
            redirectResult?: string;
            threeDSResult?: string;
            [key: string]: any;
        };
        paymentData?: string;
        sessionData?: string;
    };
};
type AdditionalDetailsActions = {
    resolve: (response: CheckoutAdvancedFlowResponse) => void;
    reject: () => void;
};
type BeforeSubmitActions = {
    resolve: (data: PaymentData & {
        billingAddress?: AddressData;
        deliveryAddress?: AddressData;
        shopperEmail?: string;
        shopperName?: string;
    }) => void;
    reject: () => void;
};
type OnChangeData = {
    data: PaymentData;
    isValid: boolean;
    valid?: {
        [fieldKey: string]: boolean;
    };
    errors?: {
        [fieldKey: string]: {
            isValid: boolean;
            errorMessage: string;
            errorI18n: string;
            error: string;
            rootNode: HTMLElement;
        };
    };
};
interface CoreConfiguration {
    /**
     * The payment session object from your call to /sessions.
     */
    session?: {
        id: string;
        sessionData?: string;
        shopperEmail?: string;
        telephoneNumber?: string;
    };
    /**
     * Use 'test'. When you're ready to accept live payments, change the value to one of our {@link https://docs.adyen.com/checkout/drop-in-web#testing-your-integration | live environments}.
     */
    environment?: 'test' | 'live' | 'live-us' | 'live-au' | 'live-apse' | 'live-in';
    /**
     * Show or hides a Pay Button for each payment method
     * @default true
     */
    showPayButton?: boolean;
    /**
     * A public key linked to your web service user, used for {@link https://docs.adyen.com/user-management/client-side-authentication | client-side authentication}.
     */
    clientKey?: string;
    /**
     * The shopper's locale. This is used to set the language rendered in the UI.
     * For a list of supported locales, see {@link https://docs.adyen.com/checkout/components-web/localization-components | Localization}.
     * For adding a custom locale, see {@link https://docs.adyen.com/checkout/components-web/localization-components#create-localization | Create localization}.*
     */
    locale?: string;
    /**
     * Custom translations and localizations
     * See {@link https://docs.adyen.com/checkout/components-web/localization-components | Localizing Components}
     */
    translations?: CustomTranslations;
    /**
     * The full `/paymentMethods` response
     */
    paymentMethodsResponse?: PaymentMethodsResponse;
    /**
     * Amount of the payment
     */
    amount?: PaymentAmountExtended;
    /**
     * Secondary amount of the payment - alternative currency & value converted according to rate
     */
    secondaryAmount?: PaymentAmountExtended;
    /**
     * The shopper's country code. A valid value is an ISO two-character country code (e.g. 'NL').
     */
    countryCode?: string;
    /**
     * Display only these payment methods
     */
    allowPaymentMethods?: string[];
    /**
     * Never display these payment methods
     */
    removePaymentMethods?: string[];
    /**
     * Screen Reader configuration
     */
    srConfig?: SRPanelConfig;
    analytics?: AnalyticsOptions;
    risk?: RiskModuleOptions;
    order?: Order;
    /**
     * Add @adyen/web metadata to the window object.
     * It helps to identify version number and bundle type in the merchant environment
     *
     * @default true
     */
    exposeLibraryMetadata?: boolean;
    /**
     * Called before the page redirect happens.
     * Allows you to perform any sort of action before redirecting the shopper to another page.
     *
     * @param resolve
     * @param reject
     * @param redirectData
     */
    beforeRedirect?(resolve: () => void, reject: () => void, redirectData: {
        url: string;
        method: string;
        data?: any;
    }): void;
    /**
     * Called when the shopper selects the Pay button (it only works on Sessions flow)
     *
     * Allows you to add details which will be sent in the payment request to Adyen's servers.
     * For example, you can add shopper details like 'billingAddress', 'deliveryAddress', 'shopperEmail' or 'shopperName'
     *
     * @param state
     * @param component
     * @param actions
     */
    beforeSubmit?(state: PaymentData, component: UIElement, actions: BeforeSubmitActions): void;
    /**
     * Called when the payment succeeds.
     *
     * The first parameter is the sessions response (when using sessions flow), or the result code.
     *
     * @param data
     * @param component
     */
    onPaymentCompleted?(data: PaymentCompletedData, component?: UIElement): void;
    /**
     * Called when the payment fails.
     *
     * The first parameter is populated when merchant is using sessions, or when the payment was rejected
     * with an object. (Ex: 'action.reject(obj)' ). Otherwise, it will be empty.
     *
     * @param data - session response or resultCode. It can also be undefined if payment was rejected without argument ('action.reject()')
     * @param component
     */
    onPaymentFailed?(data?: PaymentFailedData, component?: UIElement): void;
    /**
     * Callback used in the Advanced flow to perform the /payments API call
     *
     * The payment response must be passed to the 'resolve' function, even if the payment wasn't authorized (Ex: resultCode = Refused).
     * The 'reject' should be used only if a critical error occurred.
     *
     * @param state
     * @param component
     * @param actions
     */
    onSubmit?(state: SubmitData, component: UIElement, actions: SubmitActions): void;
    /**
     * Callback used in the Advanced flow to perform the /payments/details API call.
     *
     * The payment response must be passed to the 'resolve' function, even if the payment wasn't authorized (Ex: resultCode = Refused).
     * The 'reject' should be used only if a critical error occurred.
     *
     * @param state
     * @param component - Component submitting details. It is undefined when using checkout.submitDetails()
     * @param actions
     */
    onAdditionalDetails?(state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions): void;
    /**
     * Callback invoked when the user is redirected back, and an `action` is included in the response (either `/details` or `/paymentDetails`).
     *
     * The `action` from the response will be converted into a UIElement and passed to the callback.
     * For the tree-shakable integration, register the components beforehand.
     *
     * @param component - The UIElement representing the action, which must be mounted on the page for the user to interact with.
     * @internal - used by PBL
     */
    afterAdditionalDetails?(component: UIElement): void;
    /**
     * Callback called when an action (for example a QR code or 3D Secure 2 authentication screen) is shown to the shopper.
     *
     * @param actionHandled
     */
    onActionHandled?(actionHandled: ActionHandledReturnObject): void;
    onChange?(state: OnChangeData, component: UIElement): void;
    /**
     * Callback called in two different scenarios:
     * - when a critical error happened (network error; implementation error; script failed to load)
     * - when the shopper cancels the payment flow in payment methods that have an overlay (GooglePay, PayPal, ApplePay)
     *
     * @param error
     * @param component
     */
    onError?(error: AdyenCheckoutError, component?: UIElement): void;
    onBalanceCheck?: onBalanceCheckCallbackType;
    onOrderRequest?: onOrderRequestCallbackType;
    /**
     * Called when a Component detects, or is told by a SecuredField, that the Enter key has been pressed.
     * - merchant set config option
     */
    onEnterKeyPressed?(activeElement: Element, component: UIElement): void;
    /**
     * Callback called when it is required to fetch/update the payment methods list.
     * It is currently used mainly on Giftcard flow (Partial orders), since the payment method list might change depending on the amount left to be paid
     *
     * The /paymentMethods response must be passed to the 'resolve' function
     *
     * @param data
     * @param actions
     */
    onPaymentMethodsRequest?(data: PaymentMethodsRequestData, actions: {
        resolve: (response: PaymentMethodsResponse) => void;
        reject: () => void;
    }): void;
    onOrderCancel?: onOrderCancelType;
    /**
     * Called when the gift card balance is less than the transaction amount.
     * Returns an Order object that includes the remaining amount to be paid.
     * https://docs.adyen.com/payment-methods/gift-cards/web-component?tab=config-sessions_1
     */
    onOrderUpdated?(data: {
        order: Order;
    }): void;
    /**
     * @internal
     */
    loadingContext?: string;
    /**
     * Used internally in order to set different URL's instead of using the ones mapped in our codebase.
     *
     * @internal
     */
    _environmentUrls?: {
        api?: string;
        analytics?: string;
        cdn?: {
            images?: string;
            translations?: string;
        };
    };
}

declare abstract class BaseElement<P extends BaseElementProps> implements IBaseElement {
    readonly _id: string;
    readonly core: ICore;
    props: P;
    state: any;
    _component: any;
    protected _node: HTMLElement;
    protected static defaultProps: {};
    constructor(checkout: ICore, props?: P);
    protected buildElementProps(componentProps?: P): void;
    /**
     * Executed during creation of any payment element.
     * Gives a chance to any paymentMethod to format the props we're receiving.
     */
    protected formatProps(props: P): P;
    /**
     * Executed on the `data` getter.
     * Returns the component data necessary for the /payments request
     */
    protected formatData(): any;
    protected setUpAnalytics(setUpAnalyticsObj: AnalyticsInitialEvent): any;
    protected submitAnalytics(analyticsObj?: AnalyticsEvent): any;
    protected handleKeyPress(e: h.JSX.TargetedKeyboardEvent<HTMLInputElement>): any;
    protected setState(newState: object): void;
    /**
     * Returns the component payment data ready to submit to the Checkout API
     * Note: this does not ensure validity, check isValid first
     */
    get data(): PaymentData;
    /**
     * Method used to make the payment method active
     * (Useful when there are different payment methods available and activating one PM must trigger a specific task)
     */
    activate(): void;
    render(): ComponentChild | Error;
    /**
     * Mounts an element into the dom
     * @param domNode - Node (or selector) where we will mount the payment element
     * @returns this - the payment element instance we mounted
     */
    mount(domNode: HTMLElement | string): this;
    /**
     * Updates props, resets the internal state and remounts the element.
     *
     * @param props - props to update
     * @returns this - the element instance
     */
    update(props: Partial<P>): this;
    /**
     * Unmounts a payment element from the DOM
     */
    unmount(): this;
    /**
     * Unmounts an element and removes it from the parent instance
     * For "destroy" type cleanup - when you don't intend to use the component again
     */
    remove(): void;
}

declare abstract class UIElement<P extends UIElementProps = UIElementProps> extends BaseElement<P> {
    protected componentRef: any;
    protected resources: Resources;
    elementRef: UIElement;
    static type: any;
    /**
     * Defines all txVariants that the Component supports (in case it support multiple ones besides the 'type' one)
     */
    static txVariants: string[];
    constructor(checkout: ICore, props?: P);
    protected buildElementProps(componentProps?: P): void;
    /**
     *  Get the payment method from the paymentMethodsResponse
     *
     * @param type - The type of the payment method to get. (This prop is passed by Drop-in OR Standalone components containing the property 'type' as part of their configuration)
     */
    protected getPaymentMethodFromPaymentMethodsResponse(type?: string): PaymentMethod;
    protected storeElementRefOnCore(props?: P): void;
    isAvailable(): Promise<void>;
    setState(newState: object): void;
    showValidation(): this;
    /**
     * elementRef is a ref to the subclass that extends UIElement e.g. Card.tsx
     */
    setElementStatus(status: UIElementStatus, props?: any): this;
    /**
     * componentRef is a ref to the primary component inside that subclass e.g. CardInput.tsx
     */
    setStatus(status: UIElementStatus, props?: any): this;
    protected onChange(): void;
    protected setUpAnalytics(setUpAnalyticsObj: AnalyticsInitialEvent): Promise<any>;
    /**
     * A function for all UIElements, or BaseElement, to use to create an analytics action for when it's been:
     *  - mounted,
     *  - a PM has been selected
     *  - onSubmit has been called (as a result of the pay button being pressed)
     *
     *  In some other cases e.g. 3DS2 components, this function is overridden to allow more specific analytics actions to be created
     */
    protected submitAnalytics(analyticsObj: AnalyticsEvent): void;
    /** Work out what the component's "type" is:
     * - first check for a dedicated "analyticsType" (currently only applies to custom-cards)
     * - otherwise, distinguish cards from non-cards: cards will use their static type property, everything else will use props.type
     */
    private getComponent;
    submit(): void;
    protected makePaymentsCall(): Promise<CheckoutAdvancedFlowResponse | CheckoutSessionPaymentResponse>;
    private submitUsingAdvancedFlow;
    private submitUsingSessionsFlow;
    protected onComplete(state: any): void;
    protected handleError: (error: AdyenCheckoutError) => void;
    protected handleAdditionalDetails(state: AdditionalDetailsData): void;
    private makeAdditionalDetailsCall;
    private submitAdditionalDetailsUsingSessionsFlow;
    handleAction(action: PaymentAction, props?: {}): UIElement | null;
    protected onActionHandled(actionHandledObj: ActionHandledReturnObject): void;
    protected handleOrder: (response: PaymentResponseData) => void;
    /**
     * Handles when the payment fails. The payment fails when:
     * - adv flow: the merchant rejects the payment due to a critical error
     * - adv flow: the merchant resolves the payment with a failed resultCode
     * - sessions: a network error occurs when making the payment
     * - sessions: the payment fails with a failed resultCode
     *
     * @param result
     */
    protected handleFailedResult: (result?: PaymentResponseData) => void;
    protected handleSuccessResult: (result: PaymentResponseData) => void;
    /**
     * Handles a /payments or /payments/details response.
     * The component will handle automatically actions, orders, and final results.
     *
     * Expected to be called after sanitizeResponse has been run on the raw payment response
     *
     * @param response -
     */
    protected handleResponse(response: PaymentResponseData): void;
    protected handleKeyPress(e: h.JSX.TargetedKeyboardEvent<HTMLInputElement> | KeyboardEvent): void;
    /**
     * Handle Enter key pressed from a UIElement (called via handleKeyPress)
     * @param obj
     */
    protected onEnterKeyPressed(activeElement: Element, component: UIElement): void;
    /**
     * Call update on parent instance
     * This function exist to make safe access to the protected _parentInstance
     * @param options - CoreOptions
     */
    updateParent(options?: CoreConfiguration): Promise<ICore>;
    setComponentRef: (ref: ComponentMethodsRef) => void;
    /**
     * Get the current validation status of the element
     */
    get isValid(): boolean;
    /**
     * Get the element icon URL for the current environment
     */
    get icon(): string;
    /**
     * Get the element's displayable name
     */
    get displayName(): string;
    /**
     * Get the element accessible name, used in the aria-label of the button that controls selected payment method
     */
    get accessibleName(): string;
    /**
     * Used to display the second line of a payment method item
     */
    get additionalInfo(): string;
    /**
     * Return the type of an element
     */
    get type(): string;
    /**
     * Get the payButton component for the current element
     */
    protected payButton: (props: PayButtonFunctionProps) => h.JSX.Element;
    /**
     * Used in the Partial Orders flow.
     * When the Order is updated, the merchant can request new payment methods based on the new remaining amount
     *
     * @private
     */
    protected handleAdvanceFlowPaymentMethodsUpdate(order: Order | null, amount?: PaymentAmount): Promise<ICore>;
}

declare const actionTypes: {
    readonly redirect: (core: ICore, registry: any, action: PaymentAction, props: any) => UIElement<UIElementProps>;
    readonly threeDS2: (core: ICore, registry: any, action: PaymentAction, props: any) => UIElement<UIElementProps>;
    readonly voucher: (core: ICore, registry: IRegistry, action: PaymentAction, props: any) => UIElement<UIElementProps>;
    readonly qrCode: (core: ICore, registry: IRegistry, action: PaymentAction, props: any) => UIElement<UIElementProps>;
    readonly await: (core: ICore, registry: IRegistry, action: PaymentAction, props: any) => UIElement<UIElementProps>;
    readonly bankTransfer: (core: ICore, registry: IRegistry, action: PaymentAction, props: any) => UIElement<UIElementProps>;
    readonly sdk: (core: ICore, registry: IRegistry, action: PaymentAction, props: any) => UIElement<UIElementProps>;
};

interface CAActions {
    channel: 'Web';
    platform: 'Web';
    info: AnalyticsObject[];
    errors: AnalyticsObject[];
    logs: AnalyticsObject[];
}
interface EventsQueueModule {
    add: (t: string, o: AnalyticsObject) => void;
    run: (id: string) => Promise<any>;
    getQueue: () => CAActions;
}

type PaymentActionsType = keyof typeof actionTypes;
/**
 * {@link https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v51/payments__resParam_action API Explorer /payments action}
 */
interface PaymentAction {
    /**
     * General type of action that needs to be taken by the client
     */
    type: PaymentActionsType;
    /**
     * Refinement of type of action that needs to be taken by the client (currently only applies to the new 'threeDS2' type)
     */
    subtype?: string;
    /**
     * Specifies the payment method.
     */
    paymentMethodType: string;
    /**
     * When non-empty, contains a value that you must submit to the /payments/details endpoint. In some cases, required for polling.
     */
    paymentData?: string;
    authorisationToken?: string;
    /**
     * Specifies the HTTP method, for example GET or POST.
     */
    method?: string;
    /**
     * Specifies the URL to redirect to.
     */
    url?: string;
    alternativeReference?: string;
    downloadUrl?: string;
    entity?: string;
    expiresAt?: string;
    instructionsUrl?: string;
    issuer?: string;
    maskedTelephoneNumber?: string;
    merchantName?: string;
    merchantReference?: string;
    reference?: string;
    shopperEmail?: string;
    shopperName?: string;
    qrCodeData?: string;
    /**
     * A token to pass to the 3DS2 Component to get the fingerprint/challenge.
     */
    token?: string;
    /**
     * An object containing data to be used in external SDKs like PayPal Buttons SDK.
     */
    sdkData?: {
        [key: string]: any;
    };
}
type Issuer = {
    id: string;
    name: string;
    disabled?: boolean;
};
interface PaymentMethod {
    /**
     * The unique payment method code.
     */
    type: string;
    /**
     * The displayable name of this payment method.
     */
    name: string;
    /**
     * A list of issuers for this payment method.
     */
    issuers?: Issuer[];
    /**
     * Configuration props as set by the merchant in the CA and received in the PM object in the /paymentMethods response
     */
    configuration?: object;
    /**
     * Brand for the selected gift card. For example: plastix, hmclub.
     */
    brand?: string;
    /**
     * List of possible brands. For example: visa, mc.
     */
    brands?: string[];
    /**
     * The funding source of the payment method.
     */
    fundingSource?: 'debit' | 'credit';
    /**
     * The group where this payment method belongs to.
     */
    group?: PaymentMethodGroup;
}
/**
 * List of the available payment methods
 * {@link https://docs.adyen.com/api-explorer/Checkout/70/post/paymentMethods API Explorer /paymentMethods}.
 */
interface PaymentMethodsResponse {
    /**
     * Detailed list of payment methods required to generate payment forms.
     */
    paymentMethods?: PaymentMethod[];
    /**
     * List of all stored payment methods.
     */
    storedPaymentMethods?: StoredPaymentMethod[];
}
interface StoredPaymentMethod extends PaymentMethod {
    id: string;
    name: string;
    supportedShopperInteractions: string[];
    expiryMonth?: string;
    expiryYear?: string;
    holderName?: string;
    iban?: string;
    lastFour?: string;
    networkTxReference?: string;
    ownerName?: string;
    shopperEmail?: string;
    /** The shopper’s issuer account label */
    label?: string;
    /**
     * A unique identifier of this stored payment method. Mapped from 'storedPaymentMethod.id'
     * @internal
     */
    storedPaymentMethodId?: string;
    /**
     * Internal flag
     * @internal
     */
    isStoredPaymentMethod?: boolean;
}
/**
 * The group where this payment method belongs to.
 */
interface PaymentMethodGroup {
    /**
     * The name of the group.
     */
    name: string;
    /**
     * Echo data to be used if the payment method is displayed as part of this group.
     */
    paymentMethodData: string;
    /**
     * The unique code of the group.
     */
    type: string;
}
interface ProcessedResponse {
    type: string;
    props?: object;
}
/**
 * {@link https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v52/payments__reqParam_amount API Explorer /payments amount}
 */
interface PaymentAmount {
    value: number;
    currency: string;
}
interface PaymentAmountExtended extends PaymentAmount {
    /**
     * Adds currencyDisplay prop - as a way for the merchant to influence the final display of the amount on the pay button.
     * Defaults to 'symbol'.
     * see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#currencydisplay
     */
    currencyDisplay?: string;
}
type AddressField = (typeof ADDRESS_SCHEMA)[number];
type AddressData = {
    [key in AddressField]?: string;
};
interface PersonalDetailsSchema {
    firstName?: string;
    lastName?: string;
    gender?: string;
    dateOfBirth?: string;
    shopperEmail?: string;
    telephoneNumber?: string;
}
interface Order {
    /**
     * The encrypted order data.
     */
    orderData: string;
    /**
     * The pspReference that belongs to the order.
     */
    pspReference: string;
    /**
     * The remaining amount to complete the order.
     */
    remainingAmount?: PaymentAmount;
}
interface OrderStatus {
    expiresAt: string;
    paymentMethods: {
        amount?: PaymentAmount;
        lastFour?: string;
        type: string;
        name?: string;
        label?: string;
    }[];
    pspReference: string;
    reference: string;
    remainingAmount: PaymentAmount;
}
/**
 * {@link https://docs.adyen.com/api-explorer/#/PaymentSetupAndVerificationService/v52/post/payments__reqParam_browserInfo API Explorer /payments browserInfo}
 */
interface BrowserInfo {
    acceptHeader: string;
    colorDepth: number;
    language: string;
    javaEnabled: boolean;
    screenHeight: number;
    screenWidth: number;
    userAgent: string;
    timeZoneOffset: number;
}
/**
 * Visibility options for a fieldset
 */
type FieldsetVisibility = 'editable' | 'hidden' | 'readOnly';
interface PaymentMethodData {
    paymentMethod: {
        [key: string]: any;
        checkoutAttemptId?: string;
    };
    browserInfo?: BrowserInfo;
}
/**
 * Represents the payment data that will be submitted to the /payments endpoint
 */
interface PaymentData extends PaymentMethodData {
    riskData?: {
        clientData: string;
    };
    order?: {
        orderData: string;
        pspReference: string;
    };
    clientStateDataIndicator: boolean;
    sessionData?: string;
    storePaymentMethod?: boolean;
}
type ResultCode = 'AuthenticationFinished' | 'AuthenticationNotRequired' | 'Authorised' | 'Cancelled' | 'ChallengeShopper' | 'Error' | 'IdentifyShopper' | 'PartiallyAuthorised' | 'Pending' | 'PresentToShopper' | 'Received' | 'RedirectShopper' | 'Refused';
type SessionsResponse = {
    sessionData: string;
    sessionResult: string;
    resultCode: ResultCode;
};
interface PaymentMethodsRequestData {
    order?: Order;
    locale?: string;
    countryCode?: string;
}
interface CheckoutAdvancedFlowResponse {
    resultCode: ResultCode;
    action?: PaymentAction;
    order?: Order;
    donationToken?: string;
    error?: {
        googlePayError?: google.payments.api.PaymentDataError | string;
        applePayError?: ApplePayJS.ApplePayError[] | ApplePayJS.ApplePayError;
    };
}
interface PaymentResponseData {
    resultCode: ResultCode;
    type?: string;
    action?: PaymentAction;
    sessionData?: string;
    sessionResult?: string;
    order?: Order;
    donationToken?: string;
}
type RawPaymentResponse = PaymentResponseData & CheckoutAdvancedFlowResponse & {
    [key: string]: any;
};
/**
 * onActionHandled is called for all actions:
 *  - qrcode
 *  - await
 *  - threeds2
 *  - redirect
 *  - sdk
 *  - voucher
 *  - bankTransfer
 */
type ActionDescriptionType = 'qr-code-loaded' | 'polling-started' | '3DS2 fingerprint iframe loaded' | '3DS2 challenge iframe loaded' | 'performing-redirect' | 'voucher-presented' | 'sdk-loaded';
interface ActionHandledReturnObject {
    componentType: string;
    actionDescription: ActionDescriptionType;
    originalAction?: PaymentAction;
}
interface AnalyticsModule {
    setUp: (a: AnalyticsInitialEvent) => Promise<any>;
    getCheckoutAttemptId: () => string;
    getEventsQueue: () => EventsQueueModule;
    getEnabled: () => boolean;
    sendAnalytics: (analyticsObj: AnalyticsEvent) => boolean;
}
type ComponentFocusObject = {
    fieldType: string;
    event: Event | CardFocusData;
};
type DecodeObject = {
    success: boolean;
    error?: string;
    data?: string;
};

declare class CardElement extends UIElement<CardConfiguration> {
    static type: TxVariants;
    private readonly clickToPayService;
    /**
     * Reference to the 'ClickToPayComponent'
     */
    private clickToPayRef;
    constructor(checkout: ICore, props?: CardConfiguration);
    protected static defaultProps: any;
    setStatus(status: UIElementStatus, props?: any): this;
    private setClickToPayRef;
    formatProps(props: CardConfiguration): CardConfiguration;
    /**
     * Formats the component data output
     */
    formatData(): CardElementData;
    updateStyles(stylesObj: any): this;
    setFocusOn(fieldName: any): this;
    onBrand: (event: any) => void;
    processBinLookupResponse(binLookupResponse: BinLookupResponse, isReset?: boolean): this;
    handleUnsupportedCard(errObj: any): this;
    private handleClickToPaySubmit;
    onBinLookup(obj: CardBinLookupData): void;
    protected submitAnalytics(analyticsObj: AnalyticsEvent): void;
    private onConfigSuccess;
    private onFocus;
    private onBlur;
    onBinValue: (callbackObj: CardBinValueData) => void;
    get storePaymentMethodPayload(): {
        storePaymentMethod?: undefined;
    } | {
        storePaymentMethod: boolean;
    };
    get isValid(): boolean;
    get icon(): string;
    get brands(): {
        icon: any;
        name: string;
    }[];
    get displayName(): string;
    get accessibleName(): string;
    get browserInfo(): BrowserInfo;
    protected payButton: (props: PayButtonFunctionProps) => h.JSX.Element;
    private renderCardInput;
    render(): h.JSX.Element;
}

declare class ThreeDS2Challenge extends UIElement<ThreeDS2ChallengeConfiguration> {
    static type: TxVariants;
    static defaultProps: {
        dataKey: string;
        size: string;
        type: string;
    };
    protected submitAnalytics: (aObj: AnalyticsEvent) => void;
    protected onActionHandled: (rtnObj: ActionHandledReturnObject) => void;
    onComplete(state: any): void;
    render(): h.JSX.Element;
}

declare class ThreeDS2DeviceFingerprint extends UIElement<ThreeDS2DeviceFingerprintConfiguration> {
    static type: TxVariants;
    static defaultProps: {
        dataKey: string;
        type: string;
    };
    private callSubmit3DS2Fingerprint;
    protected submitAnalytics: (aObj: AnalyticsEvent) => void;
    protected onActionHandled: (rtnObj: ActionHandledReturnObject) => void;
    onComplete(state: any): void;
    render(): h.JSX.Element;
}

declare class OnlineBankingFI extends IssuerListContainer {
    static type: string;
}

declare class PayMeElement extends QRLoaderContainer {
    static type: string;
    private static defaultCountdown;
    private static defaultDelay;
    formatProps(props: any): {
        delay: number;
        countdownTime: number;
        type?: string;
        brandLogo?: string;
        buttonLabel: string;
        qrCodeImage?: string;
        qrCodeData?: string;
        paymentData?: string;
        redirectIntroduction: string;
        timeToPay: string;
        copyBtn?: boolean;
        introduction: string | (() => preact.JSX.Element);
        instructions: string | (() => preact.JSX.Element);
        order?: Order;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => preact.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
}

declare class DropinElement extends UIElement<DropinConfiguration> implements IDropin {
    static type: TxVariants;
    protected static defaultProps: DropinConfiguration;
    dropinRef: any;
    private paymentMethodsConfiguration;
    /**
     * Reference to the component created from `handleAction` (Ex.: ThreeDS2Challenge)
     */
    componentFromAction?: UIElement;
    constructor(checkout: ICore, props?: DropinConfiguration);
    protected storeElementRefOnCore(): void;
    formatProps(props: any): {
        instantPaymentTypes: InstantPaymentTypes[];
        paymentMethodsConfiguration?: PaymentMethodsConfiguration;
        paymentMethodComponents?: NewableComponent[];
        order?: Order;
        showStoredPaymentMethods?: boolean;
        disableFinalAnimation?: boolean;
        showPaymentMethods?: boolean;
        openPaymentMethod?: {
            type: string;
        };
        openFirstStoredPaymentMethod?: boolean;
        openFirstPaymentMethod?: boolean;
        onReady?(): void;
        filterStoredPaymentMethods?(storedPaymentMethods: StoredPaymentMethod[]): StoredPaymentMethod[];
        onSelect?(paymentMethod: UIElement): void;
        showRemovePaymentMethodButton?: boolean;
        showRadioButton?: boolean;
        onDisableStoredPaymentMethod?: (storedPaymentMethod: any, resolve: any, reject: any) => void;
        modules?: {
            srPanel?: SRPanel;
            analytics?: AnalyticsModule;
            resources?: Resources;
            risk?: RiskElement;
        };
        isDropin?: boolean;
        onChange?: (state: OnChangeData, component: UIElement) => void;
        onPaymentCompleted?: (data: PaymentCompletedData, component?: UIElement) => void;
        onPaymentFailed?: (data?: PaymentFailedData, component?: UIElement) => void;
        beforeRedirect?: (resolve: () => void, reject: () => void, redirectData: {
            url: string;
            method: string;
            data?: any;
        }) => void;
        beforeSubmit?: (state: PaymentData, component: UIElement, actions: BeforeSubmitActions) => void;
        onSubmit?: (state: SubmitData, component: UIElement, actions: SubmitActions) => void;
        onActionHandled?: (actionHandled: ActionHandledReturnObject) => void;
        onAdditionalDetails?: (state: AdditionalDetailsData, component: UIElement, actions: AdditionalDetailsActions) => void;
        onEnterKeyPressed?: (activeElement: Element, component: UIElement) => void;
        onError?: (error: AdyenCheckoutError, component?: UIElement) => void;
        onOrderUpdated?: (data: {
            order: Order;
        }) => void;
        onPaymentMethodsRequest?: (data: PaymentMethodsRequestData, actions: {
            resolve: (response: PaymentMethodsResponse) => void;
            reject: () => void;
        }) => void;
        environment?: string;
        session?: Session;
        onComplete?: (state: any, element: UIElement) => void;
        isInstantPayment?: boolean;
        isStoredPaymentMethod?: boolean;
        oneClick?: boolean;
        storedPaymentMethodId?: string;
        statusType?: StatusFromAction;
        type: string;
        name?: string;
        icon?: string;
        amount?: PaymentAmount;
        secondaryAmount?: PaymentAmountExtended;
        showPayButton?: boolean;
        payButton?: (options: PayButtonFunctionProps) => h.JSX.Element;
        loadingContext?: string;
        createFromAction?: (action: PaymentAction, props: object) => UIElement;
        clientKey?: string;
        elementRef?: any;
        i18n?: Language;
        label?: string;
        paymentMethodType?: string;
        originalAction?: PaymentAction;
    };
    get isValid(): boolean;
    showValidation(): this;
    setStatus(status: any, props?: {}): this;
    get activePaymentMethod(): any;
    get data(): any;
    displayFinalAnimation(type: 'success' | 'error'): void;
    /**
     * Calls the onSubmit event with the state of the activePaymentMethod
     */
    submit(): void;
    /**
     * Creates the Drop-in elements
     */
    private handleCreate;
    handleAction(action: PaymentAction, props?: {}): this | null;
    /**
     * handleOrder is implemented so we don't trigger a callback like in the components
     * @param response - PaymentResponse
     */
    protected handleOrder: ({ order }: PaymentResponseData) => void;
    closeActivePaymentMethod(): void;
    protected handleKeyPress(e: h.JSX.TargetedKeyboardEvent<HTMLInputElement> | KeyboardEvent): void;
    protected onEnterKeyPressed(activeElement: Element, component: UIElement): void;
    render(): h.JSX.Element;
}

/**
 * Exposing UI Components derived by UIElement
 */
/** Card */

type index_d_Affirm = Affirm;
declare const index_d_Affirm: typeof Affirm;
type index_d_AfterPay = AfterPay;
declare const index_d_AfterPay: typeof AfterPay;
type index_d_AfterPayB2B = AfterPayB2B;
declare const index_d_AfterPayB2B: typeof AfterPayB2B;
type index_d_Atome = Atome;
declare const index_d_Atome: typeof Atome;
type index_d_CashAppPay = CashAppPay;
declare const index_d_CashAppPay: typeof CashAppPay;
type index_d_CustomCard = CustomCard;
declare const index_d_CustomCard: typeof CustomCard;
type index_d_Fastlane = Fastlane;
declare const index_d_Fastlane: typeof Fastlane;
type index_d_GooglePay = GooglePay;
declare const index_d_GooglePay: typeof GooglePay;
type index_d_OnlineBankingFI = OnlineBankingFI;
declare const index_d_OnlineBankingFI: typeof OnlineBankingFI;
type index_d_OnlineBankingPL = OnlineBankingPL;
declare const index_d_OnlineBankingPL: typeof OnlineBankingPL;
type index_d_PayByBank = PayByBank;
declare const index_d_PayByBank: typeof PayByBank;
type index_d_PayByBankUS = PayByBankUS;
declare const index_d_PayByBankUS: typeof PayByBankUS;
type index_d_PreAuthorizedDebitCanada = PreAuthorizedDebitCanada;
declare const index_d_PreAuthorizedDebitCanada: typeof PreAuthorizedDebitCanada;
type index_d_RatePay = RatePay;
declare const index_d_RatePay: typeof RatePay;
type index_d_RatePayDirectDebit = RatePayDirectDebit;
declare const index_d_RatePayDirectDebit: typeof RatePayDirectDebit;
type index_d_Riverty = Riverty;
declare const index_d_Riverty: typeof Riverty;
type index_d_ThreeDS2Challenge = ThreeDS2Challenge;
declare const index_d_ThreeDS2Challenge: typeof ThreeDS2Challenge;
type index_d_ThreeDS2DeviceFingerprint = ThreeDS2DeviceFingerprint;
declare const index_d_ThreeDS2DeviceFingerprint: typeof ThreeDS2DeviceFingerprint;
type index_d_UPI = UPI;
declare const index_d_UPI: typeof UPI;
declare namespace index_d {
  export {
    ANCVElement as ANCV,
    AchElement as Ach,
    AddressElement as Address,
    index_d_Affirm as Affirm,
    index_d_AfterPay as AfterPay,
    index_d_AfterPayB2B as AfterPayB2B,
    AmazonPayElement as AmazonPay,
    ApplePayElement as ApplePay,
    index_d_Atome as Atome,
    BacsElement as BacsDirectDebit,
    BancontactElement as Bancontact,
    BankTransferElement as BankTransfer,
    BCMCMobileElement as BcmcMobile,
    BillDeskOnlineElement as BillDeskOnline,
    BillDeskWalletElement as BillDeskWallet,
    BlikElement as Blik,
    BoletoElement as Boleto,
    CardElement as Card,
    index_d_CashAppPay as CashAppPay,
    ClickToPayElement as ClickToPay,
    index_d_CustomCard as CustomCard,
    DokuElement as Doku,
    DonationElement as Donation,
    DotpayElement as Dotpay,
    DragonpayElement as Dragonpay,
    DropinElement as Dropin,
    DuitNowElement as DuitNow,
    EPSElement as EPS,
    EcontextElement as Econtext,
    FacilyPay10x as FacilPay10x,
    FacilyPay12x as FacilPay12x,
    FacilyPay3x as FacilPay3x,
    FacilyPay4x as FacilPay4x,
    FacilyPay6x as FacilPay6x,
    index_d_Fastlane as Fastlane,
    GiftcardElement as Giftcard,
    GiropayElement as Giropay,
    index_d_GooglePay as GooglePay,
    KlarnaPayments as Klarna,
    MBWayElement as MBWay,
    MealVoucherFRElement as MealVoucherFR,
    MolPayEBankingMYElement as MolPayEBankingMY,
    MolPayEBankingTHElement as MolPayEBankingTH,
    MolPayEbankingVNElement as MolPayEBankingVN,
    MultibancoElement as Multibanco,
    OnlineBankingCZElement as OnlineBankingCZ,
    index_d_OnlineBankingFI as OnlineBankingFI,
    OnlineBankingINElement as OnlineBankingIN,
    index_d_OnlineBankingPL as OnlineBankingPL,
    OnlineBankingSKElement as OnlineBankingSK,
    OxxoElement as Oxxo,
    index_d_PayByBank as PayByBank,
    PayByBankPixElement as PayByBankPix,
    index_d_PayByBankUS as PayByBankUS,
    PayMeElement as PayMe,
    PayNowElement as PayNow,
    PaypalElement as PayPal,
    PayToElement as PayTo,
    PayuNetCashcardElement as PayuCashcard,
    PayuNetBankingElement as PayuNetBanking,
    PersonalDetailsElement as PersonalDetails,
    PixElement as Pix,
    index_d_PreAuthorizedDebitCanada as PreAuthorizedDebitCanada,
    PromptPayElement as PromptPay,
    index_d_RatePay as RatePay,
    index_d_RatePayDirectDebit as RatePayDirectDebit,
    RedirectElement as Redirect,
    index_d_Riverty as Riverty,
    SepaElement as SepaDirectDebit,
    SwishElement as Swish,
    index_d_ThreeDS2Challenge as ThreeDS2Challenge,
    index_d_ThreeDS2DeviceFingerprint as ThreeDS2DeviceFingerprint,
    TrustlyElement as Trustly,
    TwintElement as Twint,
    index_d_UPI as UPI,
    VippsElement as Vipps,
    WalletINElement as WalletIN,
    WeChatPayElement as WeChat,
  };
}

declare class FastlaneSDK {
    private readonly clientKey;
    private readonly checkoutShopperURL;
    private readonly locale;
    private readonly forceConsentDetails;
    private fastlaneSdk?;
    private latestShopperDetails?;
    private fastlaneSessionId?;
    constructor(configuration: FastlaneSDKConfiguration);
    /**
     * Initializes the Fastlane SDK
     */
    initialize(): Promise<FastlaneSDK>;
    /**
     * Triggers the authentication for Fastlane using shopper's email.
     * If shopper is recognized, the OTP flow is initialized.
     *
     * @param email
     */
    authenticate(email: string): Promise<FastlaneAuthenticatedCustomerResult>;
    /**
     * Creates the Adyen Component configuration based on the Fastlane authentication result.
     *
     * In case the shopper authenticated successfully, it returns config to be used in the Fastlane component
     * Otherwise, it returns the configuration to be used in the Card component
     *
     * @param authResult
     */
    getComponentConfiguration(authResult: FastlaneAuthenticatedCustomerResult): Promise<FastlanePaymentMethodConfiguration>;
    /**
     * Displays the Fastlane Shipping Address selector UI
     */
    showShippingAddressSelector(): Promise<FastlaneShippingAddressSelectorResult>;
    /**
     * Render the "Fastlane by PayPal" logo in the specified HTML container
     */
    mountWatermark(container: HTMLElement | string, options?: {
        includeAdditionalInfo: boolean;
    }): Promise<void>;
    private requestClientToken;
    private fetchSdk;
    /**
     * Fetch the fastlane session ID used internally by PayPal for Network Token Usage event
     * This ID is not critical for the payment processing part
     *
     * @private
     */
    private fetchSessionIdAsync;
    /**
     * Fetch object containing that details that will be used to display the sign-up UI
     * inside the card component
     * @private
     */
    private fetchConsentDetails;
    private initializeFastlaneInstance;
}

declare function initializeFastlane(configuration: FastlaneSDKConfiguration): Promise<FastlaneSDK>;

declare class Core implements ICore {
    session?: Session;
    paymentMethodsResponse: PaymentMethods;
    modules: Readonly<{
        risk: RiskElement;
        analytics: AnalyticsModule;
        resources: Resources;
        i18n: Language;
        srPanel: SRPanel;
    }>;
    options: CoreConfiguration;
    analyticsContext: string;
    loadingContext: string;
    cdnImagesUrl: string;
    cdnTranslationsUrl: string;
    private components;
    static readonly metadata: {
        version: string;
        bundleType: string;
    };
    static registry: {
        componentsMap: Record<string, NewableComponent>;
        supportedTxVariants: Set<string>;
        add(...items: NewableComponent[]): void;
        getComponent(type: string): NewableComponent | undefined;
        createComponentsMap(components: NewableComponent[]): {};
    };
    static setBundleType(type: string): void;
    static register(...items: NewableComponent[]): void;
    /**
     * Used internally by the PaymentMethod components to auto-register themselves
     * @internal
     */
    register(...items: NewableComponent[]): void;
    getComponent(txVariant: string): NewableComponent;
    constructor(props: CoreConfiguration);
    initialize(): Promise<this>;
    private initializeCore;
    private fetchLocaleTranslations;
    private validateCoreConfiguration;
    /**
     * Method used when handling redirects. It submits details using 'onAdditionalDetails' or the Sessions flow if available.
     *
     * @public
     * @see {https://docs.adyen.com/online-payments/build-your-integration/?platform=Web&integration=Components&version=5.55.1#handle-the-redirect}
     * @param details - Details object containing the redirectResult
     */
    submitDetails(details: AdditionalDetailsData['data']): void;
    private readonly afterAdditionalDetails;
    /**
     * Instantiates a new element component ready to be mounted from an action object
     *
     * @param action - action defining the component with the component data
     * @param options - options that will be merged to the global Checkout props
     * @returns new UIElement
     */
    createFromAction(action: PaymentAction, options?: {}): UIElement;
    /**
     * Updates global configurations, resets the internal state and remounts each element.
     *
     * @param options - props to update
     * @returns this - the element instance
     */
    update: (options?: Partial<CoreConfiguration>) => Promise<this>;
    /**
     * Remove the reference of a component
     * @param component - reference to the component to be removed
     * @returns this - the element instance
     * // TODO: Do we need this?
     */
    remove: (component: any) => this;
    /**
     * @internal
     * Create or update the config object passed when AdyenCheckout is initialised (environment, clientKey, etc...)
     */
    private setOptions;
    /**
     * @internal
     * @returns props for a new UIElement
     */
    getCorePropsForComponent(): any;
    storeElementReference(element: UIElement): void;
    /**
     * @internal
     */
    private handleCreateError;
    private createPaymentMethodsList;
    private createCoreModules;
}

declare function AdyenCheckout(props: CoreConfiguration): Promise<Core>;
declare namespace AdyenCheckout {
    var register: (...items: (new (checkout: ICore, props: any) => UIElement)[]) => void;
    var setBundleType: (type: string) => void;
}

export { ANCVElement as ANCV, AchElement as Ach, AddressElement as Address, AdyenCheckout, AdyenCheckoutError, Affirm, AfterPay, AfterPayB2B, AmazonPayElement as AmazonPay, ApplePayElement as ApplePay, Atome, BacsElement as BacsDirectDebit, BancontactElement as Bancontact, BankTransferElement as BankTransfer, BCMCMobileElement as BcmcMobile, BillDeskOnlineElement as BillDeskOnline, BillDeskWalletElement as BillDeskWallet, BlikElement as Blik, BoletoElement as Boleto, CardElement as Card, CashAppPay, ClickToPayElement as ClickToPay, Core, CustomCard, DokuElement as Doku, DonationElement as Donation, DotpayElement as Dotpay, DragonpayElement as Dragonpay, DropinElement as Dropin, DuitNowElement as DuitNow, EPSElement as EPS, EcontextElement as Econtext, FacilyPay10x as FacilPay10x, FacilyPay12x as FacilPay12x, FacilyPay3x as FacilPay3x, FacilyPay4x as FacilPay4x, FacilyPay6x as FacilPay6x, Fastlane, FastlaneSDK, GiftcardElement as Giftcard, GiropayElement as Giropay, GooglePay, KlarnaPayments as Klarna, MBWayElement as MBWay, MealVoucherFRElement as MealVoucherFR, MolPayEBankingMYElement as MolPayEBankingMY, MolPayEBankingTHElement as MolPayEBankingTH, MolPayEbankingVNElement as MolPayEBankingVN, MultibancoElement as Multibanco, OnlineBankingCZElement as OnlineBankingCZ, OnlineBankingFI, OnlineBankingINElement as OnlineBankingIN, OnlineBankingPL, OnlineBankingSKElement as OnlineBankingSK, OxxoElement as Oxxo, PayByBank, PayByBankPixElement as PayByBankPix, PayByBankUS, PayMeElement as PayMe, PayNowElement as PayNow, PaypalElement as PayPal, PayToElement as PayTo, PayuNetCashcardElement as PayuCashcard, PayuNetBankingElement as PayuNetBanking, PersonalDetailsElement as PersonalDetails, PixElement as Pix, PreAuthorizedDebitCanada, PromptPayElement as PromptPay, RatePay, RatePayDirectDebit, RedirectElement as Redirect, Riverty, SepaElement as SepaDirectDebit, SwishElement as Swish, ThreeDS2Challenge, ThreeDS2DeviceFingerprint, TrustlyElement as Trustly, TwintElement as Twint, UIElement, UPI, VippsElement as Vipps, WalletINElement as WalletIN, WeChatPayElement as WeChat, index_d as components, initializeFastlane };
export type { ANCVConfiguration, ANCVDataState, AchConfiguration, AchPlaceholders, ActionDescriptionType, ActionHandledReturnObject, AdditionalDetailsActions, AdditionalDetailsData, AddressData, AddressField, AmazonPayBackendConfiguration, AmazonPayButtonProps, AmazonPayButtonSettings, AmazonPayComponentProps, AmazonPayConfiguration, AmazonPayElementData, AnalyticsModule, App, ApplePayButtonStyle, ApplePayButtonType, ApplePayConfiguration, ApplePayElementData, ApplePayPaymentAuthorizationResult, ApplePayPaymentOrderDetails, ApplePaySessionRequest, ApplePayWebConfiguration, AwaitComponentProps, AwaitConfiguration, BankDetailsSchema, BankTransferConfiguration, BankTransferSchema, BankTransferState, BeforeSubmitActions, BinLookupResponse, BinLookupResponseRaw, BoletoConfiguration, BoletoElementProps, BoletoInputDataState, BoletoInputErrorState, BoletoInputValidState, BrandConfiguration, BrandObject, BrowserInfo, CReqData, CardAllValidData, CardAutoCompleteData, CardBackendConfiguration, CardBinLookupData, CardBinValueData, CardBrandData, CardBrandsConfiguration, CardConfigSuccessData, CardConfiguration, CardElementData, CardErrorData, CardFieldValidData, CardFocusData, CardLoadData, CardPlaceholders, CashAppPayConfiguration, CashAppPayElementData, CashAppPayEventData, ChallengeData, ChallengeResolveData, ChangeActionOptions, ChangePaymentDetailsButtonProps, ChargeAmount, CheckoutAdvancedFlowResponse, CheckoutDetailsRequest, CheckoutSessionConfig, ClickToPayConfiguration, ClickToPayPaymentData, ClickToPayProps, ClickToPayScheme, CommonVoucherProps, ComponentFocusObject, ComponentMethodsRef, CoreConfiguration, Currency, CustomCardConfiguration, CustomTranslations, DecodeObject, DeliverySpecifications, DokuVoucherResultProps, DonationConfiguration, DragonpayConfiguraton, DragonpayInputData, DragonpayInputIssuerItem, DragonpayInputProps, DragonpayVoucherResultProps, DropinComponentProps, DropinComponentState, DropinConfiguration, DropinStatus, DropinStatusProps, DualBrandSelectElement, EcontextConfiguration, EcontextInputSchema, EcontextVoucherResultProps, ErrorCodeObject, ExtendedMerchantInfo, FastlaneAddress, FastlaneAuthenticatedCustomerResult, FastlaneConfiguration, FastlaneConsentRenderState, FastlaneOptions, FastlanePaymentMethodConfiguration, FastlaneProfile, FastlaneSDKConfiguration, FastlaneShipping, FastlaneShippingAddressSelectorResult, FastlaneSignupConfiguration, FastlaneWindowInstance, FieldsetVisibility, FingerPrintData, FingerprintResolveData, FundingSource, GiftCardConfiguration, GiftCardElementData, GooglePayConfiguration, GooglePaymentDataRequest, ICore, IDropin, InstantPaymentTypes, Intent, IssuerListConfiguration, IssuerListData, KlarnaAction, KlarnaAdditionalDetailsData, KlarnaComponentRef, KlarnaConfiguration, KlarnaSdkData, KlarnaWidgetAuthorizeResponse, KlarnaWidgetProps, LedgerCurrencies, MandateFrequencyType, MandateType, MultibancoVoucherResultProps, OnChangeData, OpenInvoiceActiveFieldsets, OpenInvoiceConfiguration, OpenInvoiceFieldsetsRefs, OpenInvoiceProps, OpenInvoiceStateData, OpenInvoiceStateError, OpenInvoiceStateValid, OpenInvoiceVisibility, Order, OrderButtonProps, OrderStatus, OxxoVoucherResultProps, PayButtonFunctionProps, PayPalConfiguration, PayToConfiguration, PayToData, PayToPlaceholdersType, PayloadJSON, PaymentAction, PaymentActionsType, PaymentAmount, PaymentAmountExtended, PaymentCompletedData, PaymentData, PaymentFailedData, PaymentMethod, PaymentMethodData, PaymentMethodGroup, PaymentMethodOptions, PaymentMethods$1 as PaymentMethods, PaymentMethodsConfiguration, PaymentMethodsRequestData, PaymentMethodsResponse, PaymentResponseData, PersonalDetailsSchema, PixConfiguration, PixElementData, PostMsgParseErrorObject, PreAuthorizedDebitCanadaConfiguration, PreAuthorizedDebitCanadaPlaceholders, ProcessedResponse, QRLoaderConfiguration, RawPaymentResponse, RecurringMetadata, RedirectConfiguration, Region, ResultCode, ResultObject, ResultValue, SepaConfiguration, SepaElementData, SessionsResponse, SignOutButtonProps, SocialSecurityMode, StatusFromAction, StatusObject, StoredPaymentMethod, SubmitActions, SubmitData, SupportedLocale, ThreeDS2ChallengeConfiguration, ThreeDS2DeviceFingerprintConfiguration, ThreeDS2FingerprintResponse, ThreeDS2FlowObject, ThreeDS2Token, UIElementProps, UIElementStatus, UPIConfiguration, UpdateAmazonCheckoutSessionRequest, UpiMode, UpiPaymentData, UpiType, ValidationError, VoucherConfiguration, VoucherDetail, VoucherProps, balanceCheckResponseType, onBalanceCheckCallbackType, onOrderCancelData, onOrderCancelType, onOrderRequestCallbackType, onRequiringConfirmationCallbackType };
