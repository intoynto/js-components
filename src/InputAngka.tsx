import React from "react";
import { isEqual, toDashVal, toFloat } from "./utils";


type IAnyEvent=React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>;

let style:React.CSSProperties={
    position:"relative"
};

let styleSub:React.CSSProperties={
    position:"absolute",
    backgroundColor:"#DC3545",
    color:"#FFEAC8",
    padding:"3px 5px",
    borderRadius:"4px",
    left:"auto",
    right:"0",
    bottom:"100%",
    fontSize:"18px",
    lineHeight:"18px",
};

interface IInputAngkaProps {
    id?:string
    name:string
    value?:string | number
    maxLength?:number
    onChange?:(e:IAnyEvent)=>void
    placeholder?:string
    digit?:number
    className?:string
    style?:React.CSSProperties
    
}

interface IState {
    focus:boolean    
}

export class InputAngka<P extends IInputAngkaProps,S extends IState> extends React.Component<P,IState>{
    protected ndInput:any;
    protected enableEvent:boolean=true;

    protected value:string='';

    constructor(props:P)
    {
        super(props);   
        this.hFocus=this.hFocus.bind(this);
        this.hBlur=this.hBlur.bind(this);
        this.state={
            focus:false,
        };
        this.athParProps(props);
    }

    private athParProps=(props?:P)=>
    {
        props=props||this.props;
        this.value=(props as any).value||'';
    }

    shouldComponentUpdate(nextProps:P,nextState:S)
    {
        const a=toFloat(this.props.value);
        const b=toFloat(nextProps.value);
        let sama=true;
        const cs:string[]=[
            'name',
            'id',
            'maxLength',
            'onChange',
            'placeholder',
            'digit',
            'className',
            'style'
        ];
        for(let i=0; i<cs.length; i++)
        {
            if((nextProps as any)[cs[i]] !== (this.props as any)[cs[i]])
            {
                sama=false;
                break;
            }
        }

        const harusUpdate=a!==b || !isEqual(this.state,nextState) || !sama;
        return harusUpdate;
    }

    componentDidUpdate(props:P)
    {
        const a=toFloat(this.props.value);
        const b=toFloat(props.value);
        const sama=a===b;
        if(!sama)
        {
            this.athParProps(props);
            this.forceUpdate();
            return;
        }
    }

    protected hFocus(e:React.FocusEvent<HTMLInputElement>)
    {
        this.setState({focus:true});
    }

    protected hBlur(e:React.FocusEvent<HTMLInputElement>)
    {
        this.setState({focus:false});
    }

    renderNotify()
    {
        if(!this.state.focus) return null;
        return(
            <span style={styleSub} className="input-angka-notify">{toDashVal(this.props.value,this.props.digit)}</span>
        );
    }

    render()
    {
        const {focus}=this.state;
        const props=this.props;
        const st:React.CSSProperties={
            position:'relative',
        };
        const value=((props as any).value||'').toString();
        const hasValueNol=focus && (value.length<1);
        return (
            <span className="InputAngka" style={st}>
                {this.renderNotify()}
                <input
                    ref={fn=>this.ndInput=fn}
                    name={props.name}
                    id={props.id}
                    maxLength={props.maxLength}
                    onChange={e=>{
                        this.value=e.currentTarget.value;
                        typeof props.onChange==='function'?props.onChange(e):null;
                    }}
                    onFocus={this.hFocus}
                    onBlur={this.hBlur}
                    value={hasValueNol?'':props.value}
                    className={props.className}
                    style={props.style}
                    autoComplete='off'
                />                
            </span>
        );
    }
}