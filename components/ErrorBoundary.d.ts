import { default as React } from 'react';
type Props = {
    children: React.ReactNode;
};
type State = {
    hasError: boolean;
};
export declare class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props);
    static getDerivedStateFromError(): State;
    componentDidCatch(error: unknown, info: unknown): void;
    render(): React.ReactNode;
}
export {};
//# sourceMappingURL=ErrorBoundary.d.ts.map