import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="" />
        <SidebarItem Icon={FaChartBar} Text="" />
        <SidebarItem Icon={FaUserAlt} Text="" />
        <SidebarItem Icon={FaEnvelope} Text="" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="" />
        <SidebarItem Icon={FaIdCardAlt} Text="" />
        <SidebarItem Icon={FaRegFileAlt} Text="" />
        <SidebarItem Icon={FaRegSun} Text="" />
      </Content>
    </Container>
  )
}

export default Sidebar