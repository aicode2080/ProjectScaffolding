import React from 'react';
import { Card } from 'antd';
import './pageHeaderWrapper.less';

interface PageHeaderWrapperProps {
    title: string;
    subtitle: string;
}

const PageHeaderWrapper: React.FC<PageHeaderWrapperProps> = ({ title, subtitle }) => {
    return (
        <Card className="pageHeaderWrapper" bordered={false}>
            <span className="page-header-title">{title}</span>
            <span className="page-header-subtitle">{subtitle}</span>
        </Card>
    );
};

export default PageHeaderWrapper;
