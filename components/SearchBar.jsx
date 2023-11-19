import {AudioOutlined} from '@ant-design/icons';
import React from 'react';
import {Input, Space} from 'antd';

const {Search} = Input;

// const onSearch = (value, _e, info) => console.log(info?.source, value);

export default function SearchBar() {
    return (
            <Search
                placeholder="Find products..."
                allowClear
                enterButton="Search"
                size="medium"
                // onSearch={onSearch}
            />
    )
};
