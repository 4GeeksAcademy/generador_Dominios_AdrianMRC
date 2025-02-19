let pronoun = ['my', 'our'];
let adj = ['crazy', 'dark'];
let noun = ['hacker', 'files'];
let extensions = ['.com', '.er', '.es'];




for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let ext of extensions) {
                if (n.includes(ext.slice(1))) {  
                    let newNoun = n.substring(0, n.length - ext.length + 1);  
                    console.log(`${p}${a}${newNoun}${ext}`);  
                } else {
                    console.log(`${p}${a}${n}${ext}`); 
                }
            }
        }
    }
}


