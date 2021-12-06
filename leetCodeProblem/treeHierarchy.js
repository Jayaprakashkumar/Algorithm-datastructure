const result = [];

function breakStructure(data) {

    if (!data) return result;

    for (let item of data) {

        const obj = {
            name: item.name,
            active: item.active,
            children: []
        }
        result.push(obj)
        breakStructure(item.children)

    }

    return result;
}

function omitStructure(data) {
let res ;
    if (!data) return res;

    res = data.filter(ele => ele.active)

    omitStructure(res.children);


    return res;
}

function isEnabledRecursive(data){
    return data.filter(
      item=>item.active
    )
    .map(
      item=>item.children?Object.assign(item,{children:isEnabledRecursive(item.children)})
      :item
    );
  }
// const dataWithFilteredSchema = Object.assign(data, {schema:isEnabledRecursive(data.schema)})




const json = [
    {
        "name": "jayaprakash",
        "active": true,
        "children": [
            {
                "name": "Karthik",
                "active": true,
                "children": [
                    {
                        "name": "Arun",
                        "active": true,
                        "children": []
                    },
                    {
                        "name": "Varun",
                        "active": false,
                        "children": []
                    }
                ]
            },
            {
                "name": "Nandy",
                "active": true,
                "children": []
            }
        ]
    },
    {
        "name": "Charles",
        "active": true,
        "children": []
    }
]
// console.log(breakStructure(json))
// const val= omitStructure(json);

// for(let i of val){
//     console.log(i)
// }
// console.log(omitStructure(json))
// console.log(isEnabledRecursive(json))
const val= isEnabledRecursive(json);

for(let i of val){
    console.log(i)
}
