import mexp from './src/index.mjs';

const oprators = [
    "+",
    "-",
    "*",
    "/"
]

const genMath = ()=>{
    let str = '0'
    const randAmount = Math.floor(Math.random() * 100);
    for (let roundNum = 0; roundNum <= randAmount; roundNum++){
        const randNumber = Math.floor(Math.random() * 100);

        const randOprotor = oprators[Math.floor(Math.random() * oprators.length)];

        str+=`${randOprotor}${randNumber}`
    }
    return str
}

for (let roundNum = 0; roundNum <= 10090; roundNum++){
    const equation = genMath()
    console.log(equation+"\n")
    mexp.eval(equation)
}