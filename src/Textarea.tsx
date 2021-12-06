import React from 'react';
import autosize from 'autosize';

interface ITextareaProps {
    id?:string
    name:string
    placeholder?:string
    value?:string
    disabled?:string | boolean
    minHeight?:string
    onChange?:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void
    rows?:number
    maxLength?:number
}

export class Textarea<P extends ITextareaProps> extends React.Component<P> 
{
    constructor(props:P){
        super(props);       
    }

    textarea:HTMLTextAreaElement|null=null;

    componentDidMount(){
        if(this.textarea) autosize(this.textarea);        
    }

    componentWillUnmount(){
        if(this.textarea) autosize.destroy(this.textarea);
    }

    componentDidUpdate(prev:P){        
        const satu=this.props.id===prev.id;
        const dua=this.props.name===prev.name;
        const tiga=this.props.placeholder===prev.placeholder;
        const empat=this.props.value===prev.value;
        const lima=this.props.disabled===prev.disabled;
        const yes=satu || dua || tiga || empat || lima;

        if(!yes)
        {        
            this.forceUpdate();
            return;
        }

        if(this.textarea){
            autosize.update(this.textarea);
        }
    }


    onChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        const {onChange}=this.props;
        if(typeof onChange==="function") onChange(e);
    }

    render(){       
        let props=this.props;
        const forWardProps:any={
            spellCheck:"false",
            id:this.props.id || this.props.name || "textarea",
            name:this.props.name || "textarea",
            placeholder:this.props.placeholder,
            rows:this.props.rows!==undefined && this.props.rows!==null?this.props.rows:1,
            value:props.value===null || props.value===undefined?"":props.value,
        }

        if(props.maxLength)
        {
            forWardProps.maxLength=props.maxLength;
        }

        let disabled=props.disabled===true || props.disabled==="disabled";

        if(disabled){
            forWardProps.disabled="disabled";
        }

        return (
            <textarea                
                style={{
                    minHeight:this.props.minHeight?this.props.minHeight:"36px",
                }}
                ref={c => this.textarea = c}
                onChange={this.onChange}

                {...forWardProps}
            />
        );
    }
}