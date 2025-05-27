function maximumWealth(accounts: number[][]): number {
  let wealth = 0;
  for (let i = 0; i < accounts.length; i++){
    const sum = accounts[i].reduce((acc,balance)=> acc + balance, 0)
    if (sum > wealth){
      wealth = sum
    }
  }
  return wealth;
};