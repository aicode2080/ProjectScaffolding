import React, { useCallback, useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu, Row, Col } from 'antd';
import type { GetProp, MenuProps } from 'antd';

import InboxImage from '@/static/功能区/Inbox.png';
import Drafts from '@/static/功能区/Drafts.png';
import Sent from '@/static/功能区/Sent.png';
import Spam from '@/static/功能区/Spam.png';
import Trash from '@/static/功能区/Trash.png';
import Important from '@/static/功能区/Important.png';
import fold from '@/static/功能区/fold.png';
import AIcompose from '@/static/功能区/AI compose.png';
import edit2 from '@/static/功能区/edit-2.png';
import CollaborationHub from '@/static/功能区/Collaboration Hub.png';
import dropDown from '@/static/功能区/drop-down.png';
import Tags from '@/static/功能区/Tags.png';
import add from '@/static/功能区/add.png';
import more from '@/static/功能区/more.png';

import './index.less';

type MenuTheme = GetProp<MenuProps, 'theme'>;

type MenuItem = GetProp<MenuProps, 'items'>[number];

const getImag = (src) => {
  return (
    <img src={src} alt="Inbox" style={{ width: '24px', height: '24px' }} />
  );
};

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

const items: MenuItem[] = [
  {
    key: '1',
    icon: getImag(InboxImage),
    label: renderItem('Inbox', 1086),
  },
  {
    key: '2',
    icon: getImag(Drafts),
    label: renderItem('Drafts', 2),
  },
  {
    key: '3',
    label: renderItem('Sent', 12),
    icon: getImag(Sent),
  },
  {
    key: '4',
    label: renderItem('Spam', 5),
    icon: getImag(Spam),
  },
  {
    key: '5',
    label: renderItem('Trash'),
    icon: getImag(Trash),
  },
  {
    key: '6',
    label: renderItem('Important', 5),
    icon: getImag(Important),
  },
];

const items2: MenuItem[] = [
  {
    key: 'sub1',
    label: (
      <div className="menu2downCon">
        Tags (2)
        <img
          src={dropDown}
          alt="Inbox"
          style={{ width: '18px', height: '18px', marginTop: 3, marginLeft: 3 }}
        />
        <img
          src={add}
          alt="Inbox"
          style={{
            width: '14px',
            height: '14px',
            marginTop: 3,
            marginLeft: 'auto',
          }}
        />
      </div>
    ),
  },
  {
    key: '5',
    label: (
      <span className="menu2downCon2">
        Urgent &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img
          src={more}
          alt="Inbox"
          style={{
            width: '14px',
            height: '14px',
            marginTop: 3,
            marginLeft: 'auto',
          }}
        />
      </span>
    ),
    icon: getImag(Tags),
  },
  {
    key: '6',
    label: (
      <span className="menu2downCon2">
        Urgent &nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img
          src={more}
          alt="Inbox"
          style={{
            width: '14px',
            height: '14px',
            marginTop: 3,
            marginLeft: 'auto',
          }}
        />
      </span>
    ),
    icon: getImag(Tags),
  },
];

const MenuCompent: React.FC = () => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const [theme, setTheme] = useState<MenuTheme>('light');

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div className="menu-container">
      <div className="menu-compent-header">
        <Row>
          <Col span={12}>Email</Col>
          {
            <Col
              span={12}
              style={{
                textAlign: 'right',
                display: 'flex',
                alignItems: 'center',
                marginLeft: 'auto',
                justifyContent: 'flex-end',
              }}
            >
              <img width={24} height={24} src={fold} alt="Email" />
            </Col>
          }
        </Row>
      </div>
      <div className="aiBar">
        <img
          width={24}
          height={24}
          src={AIcompose}
          alt="Email"
          style={{
            marginRight: 2,
          }}
        />
        <div>Ai Compose</div>
        <img
          width={24}
          height={24}
          src={edit2}
          alt="Email"
          style={{
            marginLeft: 3,
          }}
        />
      </div>
      <div className="collaboration-hub">
        <div className="hub-item">
          <div className="icon-container">
            <img src={CollaborationHub} alt="Dollar Icon" style={{}} />
          </div>
          <div className="text-container">
            <h2>Collaboration Hub</h2>
            <p>1086</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <Menu
        className="menu-compent"
        style={{ width: 256 }}
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
      <div className="line"></div>
      <Menu
        style={{ width: 256 }}
        mode="vertical"
        items={items2}
        getPopupContainer={(node) => node.parentNode as HTMLElement}
      />
    </div>
  );
};

export default MenuCompent;
