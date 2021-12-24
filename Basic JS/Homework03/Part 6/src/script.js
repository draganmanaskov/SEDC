//account money
let accountBalance = 1000; 

function atm(amount = 0, action = '2') {
    //invalid amount input error handling
    if(Number.isNaN(amount)){
        console.log('Invalid amount input')
        amount = 0
    }

    // no action entered error handling
    if(action == '') {
        console.log('You forgot to enter an action')
        action = '2'
    }

    console.log(`Account Balance: $${accountBalance}`)
    // There are 3 actions you can choose from
    switch (action) {
        case '0':
            accountBalance += amount
            console.log(`You deposited $${amount}`)
            return `New Account Balance: $${accountBalance}`
            break;
        case '1':
            if (accountBalance > amount) {
                accountBalance -= amount
                console.log(`You withdrew $${amount}`)
                console.log(`New Account Balance: $${accountBalance}`)
                return amount
            } else {
                console.log(`You want to withraw $${amount}`)
                return 'Not enough money'
            }
            break;
        case '2':
            // checkBalance case so we can get out with just console logging our balance
            return `Account Balance: $${accountBalance}`
            break;
        default:
            return 'There was an ERROR pleae try again'
            break;    
    }
}

console.log('--Deposit--')
console.log(atm(133, 'deposit'))

console.log('--Withdraw--')
console.log(atm(233, 'withdraw'))

console.log('--checkBalance--')
console.log(atm(233, 'checkBalance'))


//Bonus
console.log('Bonus')

let amountInput = parseFloat(prompt("Enter amount of money")); 
let actionInput = prompt("Enter action ('0 - deposit',  '1 - withdraw', '2 - checkBalance')")

let result =  atm(amountInput, actionInput);

console.log(result)

