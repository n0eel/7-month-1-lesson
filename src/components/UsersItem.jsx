import React from 'react';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;
const UsersItem = ({item, handleLikedBtnClick,handleSavedBtnClick}) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={item.image}
      />
    }
    actions={[
      <HeartOutlined onClick={handleLikedBtnClick} className='hover:!text-red-500 scale-[1.5]'/>,
      <ShoppingCartOutlined onClick={handleSavedBtnClick} className='hover:!text-blue-500 scale-[1.5]'/>
    ]}
  >
    <Meta
      title={`${item.firstName} - ${item.lastName}`}
      description={item.email}
    />
  </Card>
);
export default UsersItem;