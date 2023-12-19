import styles from "./index.module.less"
import { Menu, MenuProps } from "antd"
import { MenuInfo } from "rc-menu/lib/interface"
import React, { useState } from "react";
import { Layout } from 'antd';
import { useLocation, useNavigate } from "react-router";

type HeaderRenderProps = {
  container: React.ReactNode
}
const { Header, Content } = Layout;

export const LandCoverLayout = (props: HeaderRenderProps) => {
  const navigate = useNavigate();
  const location = useLocation()
  const [selectMenu, setSelectMenu] = useState(location.pathname)

  const items: MenuProps['items'] = [
    { label: "数据检索", key: '/retrieval' },
    { label: "数据资源", key: '/assets' }
  ]

  const onClick = (e: MenuInfo) => {
    setSelectMenu(e.key)
    navigate(e.key)
  }

  const HeaderRender = () => {
    return (
      <div className={styles.headerRender}>
        <img className={styles.logo} src="https://www.landcover100.com/img/logo.png" alt="" />
        <Menu
          className={styles.menu}
          onClick={onClick}
          selectedKeys={[selectMenu]}
          mode="horizontal"
          items={items}
        />
        <div style={{ width: 40 }} />
      </div>
    )
  }

  return (
    <Layout>
      <Header className={styles.header}>
        <HeaderRender />
      </Header>
      <Content>
        {props.container}
      </Content>
    </Layout>


  )
}