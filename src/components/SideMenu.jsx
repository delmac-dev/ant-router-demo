import {Menu} from 'antd'
import {DashboardOutlined, HomeOutlined, PoweroffOutlined, UnorderedListOutlined, UserOutlined} from '@ant-design/icons/lib/icons'
import { useNavigate } from 'react-router-dom'

const SideMenu = () => {
    const navigate = useNavigate();

  return (
    <Menu 
        onClick={({key}) => {
            navigate(key);
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
            {label: "Home",key:"/", icon: <HomeOutlined />},
            {label: "Dashboard",key:"/dashboard", icon: <DashboardOutlined />},
            {label: "User's List",icon: <UnorderedListOutlined/>, children: [{label: "Active Users", key: "/active-users"}, {label: "Disabled Users", key: "disabled-users"}]},
            {label: "Profile",key:"/profile", icon: <UserOutlined />},
            {label: "Signout",key:"/signout", icon: <PoweroffOutlined />, danger: true}
        ]}>
        
    </Menu>
  )
}

export default SideMenu