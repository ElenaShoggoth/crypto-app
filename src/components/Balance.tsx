import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import web3 from "../web3";
import balanceStore from "../stores/balanceStore";
import { Button, Card } from "antd";

const Balance: React.FC = observer(() => {
  const getBalance = async () => {
    const accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      const balance = await web3.eth.getBalance(accounts[0]);
      balanceStore.setBalance(web3.utils.fromWei(balance, "ether"));
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <Card>
      <p>Ethereum Balance: {balanceStore.balance} ETH</p>
      <Button type="primary" onClick={getBalance}>
        Refresh Balance
      </Button>
    </Card>
  );
});

export default Balance;
