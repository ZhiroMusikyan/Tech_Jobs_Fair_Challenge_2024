import {  Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './navbar.css';
import { Header } from 'antd/es/layout/layout';
import {  useState } from 'react';


const Navbar = ({ handleSetSearch = () => { } }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    handleSetSearch()
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
    <Button className='add-new-contact-button' type="primary">Add new contact</Button>
  </Header>
}
export default Navbar