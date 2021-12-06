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

export { Textarea };
