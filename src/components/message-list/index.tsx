import React, { useCallback, useMemo, useState } from 'react';
import { List, Row, Checkbox, Col, Tag, Input } from 'antd';
import type { CheckboxProps } from 'antd';
import type { GetProp, MenuProps } from 'antd';
import StarMarking from '@/static/功能区/Star marking.png';
import attachment from '@/static/功能区/attachment.png';
import Nike from '@/static/头像/Nike.png';
import star from '@/static/右键图标/star.png';
import Addtabs1 from '@/static/右键图标/Add tabs-1.png';
import Search from '@/static/右键图标/Search.png';
import deleteIcon from '@/static/右键图标/delete.png';
import reply from '@/static/右键图标/reply.png';

import './index.less';

import { Menu } from 'antd';

const getImag = (src) => {
  return (
    <img src={src} alt="Inbox" style={{ width: '14px', height: '14px' }} />
  );
};
type MenuItem = Required<MenuProps>['items'][number];

const renderItem = (name, num?) => {
  return (
    <Row>
      <Col span={12}>{name}</Col>
      {num && (
        <Col
          span={12}
          style={{
            textAlign: 'right',
          }}
        >
          {num}
        </Col>
      )}
    </Row>
  );
};

const RenderLabel = (name) => {
  return (
    <span
      style={{
        color: '#fff',
      }}
    >
      {name}
    </span>
  );
};

const data = [
  {
    title: 'Nike',
    dec: 'Exploring Goo...',
    status: 1,
    icon: (
      <img src={Nike} alt="Inbox" style={{ width: '32px', height: '32px' }} />
    ),
  },
  {
    title: 'Puma',
    status: 0,
    dec: 'Exploring Google Collaboratio...',
    icon: (
      <img src={Nike} alt="Inbox" style={{ width: '32px', height: '32px' }} />
    ),
  },
  {
    title: 'Nike',
    status: 0,
    dec: 'Exploring Google Collaboratio...',
    icon: (
      <img src={Nike} alt="Inbox" style={{ width: '32px', height: '32px' }} />
    ),
  },
  {
    title: 'Puma',
    status: 0,
    dec: 'Exploring Google Collaboratio...',
    icon: (
      <img src={Nike} alt="Inbox" style={{ width: '32px', height: '32px' }} />
    ),
  },
];

const MessageList: React.FC = () => {
  const CheckboxGroup = Checkbox.Group;

  const [visible, setVisible] = useState(false);
  const [selectKey, setSelectKey] = useState('');

  const plainOptions = ['Nike', 'Puma'];
  const defaultCheckedList = [];
  const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  const onChange = (list) => {
    setCheckedList(list);
  };

  const items: MenuItem[] = useMemo(() => {
    return [
      {
        key: 'sub1',
        label: RenderLabel('Important'),
        icon: getImag(star),
        children: [
          {
            key: '1-1',
            label: 'Item 1',
            type: 'group',
            children: [
              { key: '1', label: 'Option 1' },
              { key: '2', label: 'Option 2' },
            ],
          },
        ],
      },
      {
        key: 'sub2',
        label: RenderLabel('Mark as unread'),
        icon: getImag(star),
      },
      {
        key: 'sub4',
        label: RenderLabel('Replv'),
        icon: getImag(star),
        popupClassName: 'aaafadfada',
        children: [
          {
            key: '9',
            label: (
              <div className="input-container">
                <Input
                  style={{
                    background: 'transparent',
                    color: '#fff',
                    border: '0 none',
                  }}
                  className="search-input"
                  size="middle"
                  placeholder="Search Tags"
                  prefix={
                    <img
                      src={Search}
                      alt="Inbox"
                      style={{ width: '14px', height: '14px' }}
                    />
                  }
                />
              </div>
            ),
            type: 'group',
            children: [
              { key: '1', label: 'Option 1', icon: getImag(Addtabs1) },
              { key: '2', label: 'Option 2', icon: getImag(Addtabs1) },
              { key: '3', label: 'Option 2', icon: getImag(Addtabs1) },
              {
                key: '4',
                label: 'Option 2',
                icon: selectKey === '4' ? getImag(reply) : getImag(Addtabs1),
              },
              { key: '5', label: 'Option 2', icon: getImag(Addtabs1) },
              { key: '6', label: 'Option 2', icon: getImag(Addtabs1) },
            ],
          },
          // { key: '10', label: 'Option 10', icon: getImag(Addtabs1) },
          // { key: '11', label: 'Option 11', icon: getImag(Addtabs1) },
          // { key: '12', label: 'Option 12', icon: getImag(Addtabs1) },
        ],
      },
      {
        type: 'divider',
      },
      {
        key: 'sub510',
        label: RenderLabel('Delete'),
        icon: getImag(deleteIcon),
        popupClassName: 'aaafadfada',
      },
    ];
  }, [selectKey]);
  return (
    <div className="menu-container menu-container2">
      <div className="menu-compent-header">
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Today (7 Emails)
        </Checkbox>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              setVisible(true);
            }}
          >
            <div
              style={{
                marginRight: 13,
              }}
            >
              <Checkbox
                onChange={() => {
                  onChange(item.title);
                }}
              ></Checkbox>
            </div>
            <div
              style={{
                marginRight: 8,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {item.icon}
            </div>
            <List.Item.Meta
              // avatar={
              //   <Avatar
              //     src={item.icon}
              //   />
              // }
              title={
                <a
                  style={{
                    width: '100%',
                    display: 'flex',
                  }}
                >
                  {item.title}{' '}
                  <span
                    style={{
                      marginLeft: 'auto',
                      color: '#333',
                      fontSize: '12px',
                    }}
                  >
                    07:44 AM
                  </span>
                </a>
              }
              description={
                <div className="messageDec">
                  {item.status === 1 && (
                    <Tag
                      style={{ color: '#ccc', fontSize: '9px' }}
                      color="#f5f5f5"
                    >
                      Urgent Urgent...
                    </Tag>
                  )}
                  {item.dec}
                  <img
                    src={StarMarking}
                    alt="Dollar Icon"
                    width={18}
                    height={18}
                    style={{
                      marginLeft: 'auto',
                    }}
                  />
                  <img
                    src={attachment}
                    alt="Dollar Icon"
                    width={18}
                    height={18}
                    style={{}}
                  />
                </div>
              }
            />
          </List.Item>
        )}
      />
      <div className="menu-compent-header">
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
          style={{
            visibility: 'hidden',
          }}
        ></Checkbox>
        Yesterday
      </div>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              setVisible(true);
            }}
          >
            <div
              style={{
                marginRight: 13,
              }}
            >
              <Checkbox
                onChange={() => {
                  onChange(item.title);
                }}
              ></Checkbox>
            </div>
            <div
              style={{
                marginRight: 8,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {item.icon}
            </div>
            <List.Item.Meta
              // avatar={
              //   <Avatar
              //     src={item.icon}
              //   />
              // }
              title={
                <a
                  style={{
                    width: '100%',
                    display: 'flex',
                  }}
                >
                  {item.title}{' '}
                  <span
                    style={{
                      marginLeft: 'auto',
                      color: '#333',
                      fontSize: '12px',
                    }}
                  >
                    07:44 AM
                  </span>
                </a>
              }
              description={
                <div className="messageDec">
                  {item.status === 1 && (
                    <Tag
                      style={{ color: '#ccc', fontSize: '9px' }}
                      color="#f5f5f5"
                    >
                      Urgent Urgent...
                    </Tag>
                  )}
                  {item.dec}
                  <img
                    src={StarMarking}
                    alt="Dollar Icon"
                    width={18}
                    height={18}
                    style={{
                      marginLeft: 'auto',
                    }}
                  />
                  <img
                    src={attachment}
                    alt="Dollar Icon"
                    width={18}
                    height={18}
                    style={{}}
                  />
                </div>
              }
            />
          </List.Item>
        )}
      />
      {visible && (
        <Menu
          style={{ width: 200 }}
          className="poupContainer"
          mode="vertical"
          items={items}
          onClick={(aaa) => {
            setSelectKey(aaa.key);
          }}
        />
      )}
    </div>
  );
};

export default MessageList;
