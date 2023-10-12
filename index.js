let domains = [];
let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let endings = ['.com', '.dev'];

function genDomain(pronoun, adj, noun, end){
    return 'www.' + pronoun + adj + noun + end;
}
pronouns.forEach((pron) => {
    adjs.forEach((adj) => {
        nouns.forEach((noun) => {
            endings.forEach((end) => {
                domains.push(genDomain(pron, adj, noun, end))
            })
        })
    })
})

window.onload = function() {
    let domainList = document.getElementsByTagName("ul")[0]
    domains.forEach((value) =>{
        let li = document.createElement("li")
            li.innerHTML = value
            domainList.appendChild(li)

    })
}

    // let domainList = document.getElementsByTagName("ul")[0]
    // domains.forEach((value) => {
    //     let li = document.createElement("li")
    //     li.innerText = value
    //     domainList.appendChild(li)
//     })
// }


console.log(domains)