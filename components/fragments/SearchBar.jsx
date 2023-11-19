import {AudioOutlined} from '@ant-design/icons';
import React from 'react';
import {Input, Space} from 'antd';

const {Search} = Input;

// const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function SearchBar() {
    return (
        <Space direction="vertical">
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                // onSearch={onSearch}
            />
        </Space>
    )

};
