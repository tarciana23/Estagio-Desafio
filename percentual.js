let sp = 67.83643;
let rj = 36.67866;
let mg = 29.22988;
let es = 27.16548;
let outros = 19.84953;
let total = (sp + rj + mg + es + outros)


let psp = ((sp / total) * 100)
let prj = ((rj / total) * 100)
let pmg = ((mg / total) * 100)
let pes = ((es / total) * 100)
let pout = ((outros / total) * 100)

console.log('Porcentagem de SP : ' + psp.toFixed(2))
console.log('Porcentagem de RJ : ' + prj.toFixed(2))
console.log('Porcentagem de MG : ' + pmg.toFixed(2))
console.log('Porcentagem de ES : ' + pes.toFixed(2))
console.log('Porcentagem de OUTROS : ' + pout.toFixed(2))