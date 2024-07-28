import React from "react";
import styled from "styled-components";
import { Layout } from "antd";

const { Header: AntHeader } = Layout;

const HeaderWrapper = styled(AntHeader)`
  background: #fff;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <div className="logo" />
    <div style={{ marginTop: "100px" }}>
      <h1>Crypto Balance</h1>
      <h2>Check your Ethereum balance</h2>
    </div>
  </HeaderWrapper>
);

export default Header;
