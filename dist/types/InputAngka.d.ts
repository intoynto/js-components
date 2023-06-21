import React from "react";
declare type IAnyEvent = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;
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
    private athParProps;
    protected hFocus(e: React.FocusEvent<HTMLInputElement>): void;
    protected hBlur(e: React.FocusEvent<HTMLInputElement>): void;
    private onChange;
    private onKeyP;
    renderNotify(): JSX.Element | null;
    shouldComponentUpdate(nextProps: P, nextState: S): boolean;
    componentDidUpdate(prevProps: P): void;
    render(): JSX.Element;
}
export {};
