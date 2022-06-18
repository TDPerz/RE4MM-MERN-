import 'react-router-dom'

import { Outlet, useNavigate } from 'react-router-dom';
import {Layout, Menu } from 'antd';

function Main(props) {

    const navigate = useNavigate()

    const goTo = (route) => {
        navigate(route)
    }

    return (
        <Layout className='layout'>
            <Layout.Sider style={{ background: '#1B1B1B' }}>
                <Menu theme='dark' style={{ background: '#1B1B1B' }}>
                    <Menu.Item onClick={()=> goTo('/')}>Mods</Menu.Item>
                    <Menu.Item onClick={()=> goTo('/settings')}>Ajustes</Menu.Item>
                </Menu>
            </Layout.Sider>
            <Layout.Content style={{ background: '#121212' }}>
                <Outlet/>
            </Layout.Content>
        </Layout>
    );
}

export default Main;