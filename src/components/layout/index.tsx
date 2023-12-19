import styles from "./index.module.less"
import { Menu, MenuProps } from "antd"
import { MenuInfo } from "rc-menu/lib/interface"
import React, { useState } from "react";
import { Layout } from 'antd';
import { useLocation, useNavigate } from "react-router";
import { InfoCircleOutlined } from "@ant-design/icons";

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

  const goNotice = () => {
    window.open("https://www.landcover100.com/UserWebPage", "_blank")
  }

  const HeaderRender = () => {
    return (
      <div className={styles.headerRender}>
        <div className={styles.logo} >
          <img src="https://www.landcover100.com/img/logo.png" alt="" />
          <span>遥感产品数据云</span>
        </div>
        <Menu
          className={styles.menu}
          onClick={onClick}
          selectedKeys={[selectMenu]}
          mode="horizontal"
          items={items}
        />
        <div className={styles.notice} onClick={goNotice}>
          <InfoCircleOutlined />
          使用须知
        </div>
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