class Wallet{
  constructor(name, fiveBills, tenBills, twentyBills){
    this.name = name
    this.fiveBills = fiveBills
    this.tenBills = tenBills
    this.twentyBills = twentyBills
  }
  getFiveBills(){
    return this.fiveBills
  }
   getTenBills(){
     return this.tenBills
  }
  getTwentyBills(){
    return this.twentyBills
  }
  setFiveBills(numberOfBills){
    this.fiveBills = numberOfBills
  }
  setTenBills(numberOfBills){
    this.tenBills = numberOfBills
  }
  setTwentyBills(numberOfBills){
    this.twentyBills = numberOfBills
  }
  calcMoney(){
    const walletMoney = this.fiveBills * 5 + this.tenBills * 10 + this.twentyBills * 20
    document.write(`${this.name}'s wallet has ${walletMoney}€`)
    return walletMoney
  }
}

const walletWithMostMoney = (wallets) => {
  let mostMoney = -1
  let mostMoneyWalletOwner
  let allSameMoney = true
  wallets.forEach(wallet => {
    const walletMoney = wallet.calcMoney()
    if (walletMoney > mostMoney){
      mostMoney = walletMoney
      mostMoneyWalletOwner = wallet.name
    }else if (walletMoney !== mostMoney){
      allSameMoney = false
    }
  })
  if (allSameMoney){
    return "any"
  }else {
    return `${mostMoneyWalletOwner}'s`
  }
}

const wallet1 = new Wallet("Erik", 1, 1, 3)
const wallet2 = new Wallet("Sara", 5, 0, 3)
const wallet3 = new Wallet("Pablo", 5, 0, 3)

document.write(wallet1.name + "<br>")
document.write(wallet1.getFiveBills() + "<br>")
document.write(wallet1.getTenBills() + "<br>")
document.write(wallet1.getTwentyBills() + "<br>")

wallet1.setFiveBills(5)
wallet1.setTenBills(1)
wallet1.setTwentyBills(3)

const wallets = [wallet1, wallet2, wallet3]
const mostMoneyWallet = walletWithMostMoney(wallets)
document.write(`The wallet used would be ${mostMoneyWallet} wallet.`)