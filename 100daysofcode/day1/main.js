let amount = document.getElementById('amount')
let tips = document.getElementById('tips')
let people = document.getElementById('people')
let damage = document.getElementById('damage')
let perperson = document.getElementById('perperson')
let total
let per
function calculate(){
        total = Number(amount.value) + Number(tips.value)
        per = Number(total / people.value)
        damage.innerHTML = `Damage: $${total.toFixed(2)}`
        perperson.innerHTML = `Per Person: $${per.toFixed(2)}`
}