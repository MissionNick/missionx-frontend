export default function SplitString(str, delim) {
    
    const pos = str.indexOf(delim);
   
    return str.slice(pos + 2,str.length);

   
}