"use client";

import {Card, Space, Typography} from "antd";
import {ApiOutlined, AuditOutlined, CarryOutOutlined, GlobalOutlined,} from "@ant-design/icons";

const {Paragraph} = Typography;

export default function PerksCard() {
    return (
        <Card>
            <div>
                <Space size="middle">
                    <GlobalOutlined/>
                    <p>Worldwide Shipping</p>
                </Space>
            </div>
            <div>
                <Space size="middle">
                    <CarryOutOutlined/>
                    <p>Two Year Warranty</p>
                </Space>
            </div>
            <div>
                <Space size="middle">
                    <ApiOutlined/>
                    <p>Commissioning & Servicing Included </p>
                </Space>
            </div>
            <div>
                <Space size="middle">
                    <AuditOutlined/>
                    <p>CE & ISO Certified</p>
                </Space>
            </div>
        </Card>
    );
}
