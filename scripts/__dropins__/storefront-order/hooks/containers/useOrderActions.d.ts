import { useOrderActionsProps } from '../../types';

export declare const useOrderActions: ({ enableOrderCancellation, }: useOrderActionsProps) => {
    orderActionStatus: {
        heading: string;
        text: string;
        status: 'success' | 'error' | 'warning' | undefined;
    };
    isDismissed: boolean;
    onDismiss: () => void;
};
//# sourceMappingURL=useOrderActions.d.ts.map