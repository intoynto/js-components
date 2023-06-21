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

type ChangeEvent=React.ChangeEvent<HTMLInputElement>;
type KeyboardHandle=React.KeyboardEvent<HTMLInputElement >;

export class InputAngka<P extends IInputAngkaProps,S extends IState> extends React.Component<P,IState>{
    protected ndInput:any;
    protected enableEvent:boolean=true;

    protected value:string='';

    constructor(props:P)
    {
        super(props);   
        this.hFocus=this.hFocus.bind(this);
        this.hBlur=this.hBlur.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onKeyP=this.onKeyP.bind(this);
        this.state={
            focus:false,
        };
        this.athParProps(props);
    }

    private athParProps=(props?:P)=>
    {
        props=props||this.props;
        this.value=(props?.value||'').toString();
    }

    protected hFocus(e:React.FocusEvent<HTMLInputElement>)
    {
        this.setState({focus:true});
    }

    protected hBlur(e:React.FocusEvent<HTMLInputElement>)
    {
        this.setState({focus:false});
    }

    private onChange(e:ChangeEvent)
    {
        this.value=e.target.value;
        if(typeof this.props.onChange==='function')
        {
            this.props.onChange(e);
        }
    }

    private onKeyP(evt:KeyboardHandle)
    {
        const {key}=evt;
        if(evt.getModifierState('Meta') 
        || evt.getModifierState('Control')
        || evt.getModifierState('Alt')
        )
        {
            return;
        }

        if(key.length!==1 || key==='\x00')
        {
            return;
        }

        const int:any=parseInt(key);
        const is_true=(!isNaN(int)) || (key==='.' || key==='-');
        if(!is_true)        
        {
            evt.preventDefault();
        }
    }

    renderNotify()
    {
        if(!this.state.focus) return null;
        return(
            <span style={styleSub} className="input-angka-notify">{toDashVal(this.value,this.props.digit)}</span>
        );
    }

    shouldComponentUpdate(nextProps:P,nextState:S)
    {
        const a=(this.props.value)?.toString(); toFloat(this.props.value);
        const b=(nextProps.value)?.toString();
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

    componentDidUpdate(prevProps:P)
    {
        const a=(this.props.value)?.toString();
        const b=(prevProps.value)?.toString();
        const sama=a===b;
        
        if(!sama)
        {
            this.athParProps();
            this.forceUpdate();
            return;
        }
    }

    render()
    {
        const {focus}=this.state;
        const props=this.props;
        const st:React.CSSProperties={
            position:'relative',
        };
        const value=((this as any).value||'').toString();
        const hasValueNol=focus && (value.length<1 || [' '].indexOf(value)>=0);
        return (
            <span className="InputAngka" style={st}>
                {this.renderNotify()}
                <input
                    ref={fn=>this.ndInput=fn}
                    name={props.name}
                    id={props.id}
                    maxLength={props.maxLength}
                    onChange={this.onChange}
                    onFocus={this.hFocus}
                    onBlur={this.hBlur}
                    onKeyDown={this.onKeyP}
                    value={hasValueNol?'':this.value}
                    className={props.className}
                    style={props.style}
                    autoComplete='off'
                />                
            </span>
        );
    }
}