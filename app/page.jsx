// Homepage
"use client";

import { Button } from "antd";

export default function Homepage() {
  console.log("Main page running...");

  return (
    <div>
      <div className="bg-slate-500 ">Hi</div>
      <div className="app">
        <Button type="primary">Ant button</Button>
      </div>
    </div>
  );
}
