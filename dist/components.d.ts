export declare type IAnyEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
interface IInputAngkaProps {
    id?: string;
    name: string;
    value?: string | number;
    maxLength?: number;
    onChange?: (e: IAnyEvent) => void;
    placeholder?: string;
    digit?: number;
    className?: string;
    style?: React.CSSProperties;
}
interface IState {
    focus: boolean;
}
export declare class InputAngka<P extends IInputAngkaProps, S extends IState> extends React.Component<P, IState> {
    protected ndInput: any;
    protected enableEvent: boolean;
    protected value: string;
    constructor(props: P);
    shouldComponentUpdate(nextProps: P, nextState: S): boolean;
    protected hFocus(e: React.FocusEvent<HTMLInputElement>): void;
    protected hBlur(e: React.FocusEvent<HTMLInputElement>): void;
    renderNotify(): JSX.Element | null;
    render(): JSX.Element;
}

interface ITextareaProps {
    id?: string;
    name: string;
    placeholder?: string;
    value?: string;
    disabled?: string | boolean;
    minHeight?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    maxLength?: number;
}
export declare class Textarea<P extends ITextareaProps> extends React.Component<P> {
    constructor(props: P);
    textarea: HTMLTextAreaElement | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prev: P): void;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): JSX.Element;
}

export { Textarea, InputAngka };

export declare function isEqual(value: any, other: any): boolean;
export declare function toUtf8String(value: string): string;
export declare function toInt(value: any, def?: number | undefined): number;
export declare function toFloat(value: any): number;
export declare function toDashVal(value: string | number | null | undefined, digit?: number, after?: string): string;
