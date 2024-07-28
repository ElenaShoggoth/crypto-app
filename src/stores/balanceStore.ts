import { makeAutoObservable } from "mobx";

class BalanceStore {
  balance: string = "0";

  constructor() {
    makeAutoObservable(this);
  }

  setBalance(balance: string) {
    this.balance = balance;
  }
}

const balanceStore = new BalanceStore();
export default balanceStore;

