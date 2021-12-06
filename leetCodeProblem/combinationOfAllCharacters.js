function findAllCharacters(s) {
    if (s.length == 0) return [[]];

    let firstChar = s[0];
    let restChar = s.slice(1);

    let resultWithoutFirstChar = findAllCharacters(restChar);

    let resultWithFirstChar = [];

    resultWithoutFirstChar.forEach(ele => {
        let x = [...ele, firstChar]
        resultWithFirstChar.push(x)
    })

    return [...resultWithoutFirstChar, ...resultWithFirstChar];


}


console.log(findAllCharacters("abc"));

/*
[]
[a]
[b]
[c]
[a,b]
[a,c]
[b,c]
[a,b,c]
*/