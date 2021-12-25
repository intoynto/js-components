export function isEqual(value:any,other:any){
    // Get the value type
    let type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) return false;

    if(value===null && other===null) return true;
    if(value===undefined && other===undefined) return true;

    if(value===true && other===true) return true;
    if(value===false && other===false) return true;

    if(typeof value==="number" && typeof other==="number" && value===other) return true;
    if(typeof value==="string" && typeof other==="string" && value===other) return true;

    // If items are not an object or array, return false
    if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    let valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
    let otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    // Compare two items
    let compare = function (item1:any, item2:any) {

        // Get the object type
        let itemType = Object.prototype.toString.call(item1);

        // If an object or array, compare recursively
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
            if (!isEqual(item1, item2)) return false;
        }

        // Otherwise, do a simple comparison
        else {

            // If the two items are not the same type, return false
            if (itemType !== Object.prototype.toString.call(item2)) return false;

            // Else if it's a function, convert to a string and compare
            // Otherwise, just compare
            if (itemType === '[object Function]') 
            {
                return item1.toString===item2.toString();
            } else {
                return item1===item2;
            }

        }
    };

    // Compare properties
    if (type === '[object Array]') {
        for (let i = 0; i < valueLen; i++) {
            if (compare(value[i], other[i]) === false) return false;
        }
    } else {
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                //console.log("compare key ",key, value[key],"=",other[key],"==",compare(value[key], other[key]));
                if (compare(value[key], other[key]) === false) return false;
            }
        }
    }
    // If nothing failed, return true
    return true;
}


export function toUtf8String(value:string){
    let val='';
    value=value?value:'';
    for(let i=0; i<value.length; i++){
        const ichar = value.charCodeAt(i);
        if(ichar<=127){
            val+=value.charAt(i);
        }
    }
    return val;
}

export function toInt(value:any,def:number|undefined=0){
    def=def===null || def===undefined || isNaN(value)?0:def;
    if(typeof value==="number") return value;

    if(typeof value==="string"){
        const test=parseInt(value);
        return !isNaN(test)?test:def;
    }    
    return def;
}

export function toFloat(value:any)
{
    if(value===null || value===undefined) return 0;
    if(typeof value==="number")
    {
        return value;
    }

    if(typeof value==="string")
    {
        let val=parseFloat(value);
        val=isNaN(val)?0:val;
        return val;
    }

    return 0;
}

function checkAndGetNumString(value:string|number):number{
    let val=typeof value==="string"?parseFloat(value):typeof value==="number"?value:0;
    if(isNaN(val)) val=0;
    return val as number;
}

function format3Digit(str:string|number){
    let val=typeof str!=="string"?str.toString():str;
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function toDashVal(value:string|number|null|undefined,digit:number=0,after:string=""){
    if(value===null || value===undefined) return '-';
    
    let val=checkAndGetNumString(value);    
    if(val===0) {        
        return '-'
    }
    let indo:any=toFloat(val);
    if(indo!==0 && digit>0)
    {
        indo=indo.toFixed(digit);
        let split=indo.split(".");
        const isDigit=split[1] && toInt(split[1])>0;
        indo=format3Digit(split[0]);
        if(isDigit){
            indo+=","+split[1];
        }
    }
    else {
        indo=format3Digit(indo);
    }
    return indo+(after?" "+after:"");
}