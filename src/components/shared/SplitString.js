export default function SplitString(str,delim) {
    
    const str2 = 'project 01 - this is the name';
    let pos = 0;
    let matchPos = str2.indexOf('-', pos);

    console.log(`${str2} delimiter ${delim} match pos ${matchPos} `)

    return str.slice(matchPos + 2, str.length);

   
}