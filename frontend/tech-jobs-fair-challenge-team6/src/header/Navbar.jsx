import {  Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './navbar.css';
import { Header } from 'antd/es/layout/layout';
import {  useState } from 'react';
import ContactForm from '../components/contact_form/contact_form';


const Navbar = ({ handleSetSearch = () => { } }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    handleSetSearch()
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return <Header
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div className="navbar-logo">TechSolutions </div>
    <div className='search-box'>
      <Input value={searchQuery}
      style={{ width: 304 }}
        allowClear
        onChange={handleSearchChange}
        placeholder="Search"
        prefix={<SearchOutlined />}
      />
    </div>
    <Button onClick={showModal} className='add-new-contact-button' type="primary">Add new contact</Button>
    <ContactForm open={isModalOpen} onConfirm={handleOk} onCancel={handleCancel}></ContactForm>
  </Header>
}
export default Navbar