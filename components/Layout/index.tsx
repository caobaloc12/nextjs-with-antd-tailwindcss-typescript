import { Drawer, Layout } from 'antd'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import Logo from 'components/Logo'
import Head from 'next/head'

import MainMenu from './MainMenu'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const { Header, Content } = Layout
const pageTitle = `A Next.js starter with Typescript, Ant Design, TailwindCSS and
Emotion/styled.`

const AppLayout: React.FC = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const renderHead = () => {
    return (
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    )
  }

  return (
    <Layout className="min-h-screen">
      {renderHead()}
      <Header>
        <div className="flex justify-start items-center w-full max-w-7xl mx-auto px-4">
          <Logo />
          <div className="hidden md:block text-base text-white ml-10">
            <MainMenu />
          </div>
          <div className="md:hidden ml-auto text-white text-2xl">
            <MenuOutlined onClick={() => setDrawerVisible(true)} />
            <Drawer
              width="70vw"
              className="mobile-menu-drawer"
              visible={drawerVisible}
              closeIcon={<CloseOutlined style={{ color: 'white' }} />}
              onClose={() => setDrawerVisible(false)}>
              <MobileMenu onClick={() => setDrawerVisible(false)} />
            </Drawer>
          </div>
        </div>
      </Header>
      <Layout>
        <Layout className="bg-white w-full max-w-7xl mx-auto">
          <Content className="p-4 m-0" style={{ minHeight: 300 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AppLayout
