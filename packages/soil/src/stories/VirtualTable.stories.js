import React from 'react';
import Table from '../components/VirtualTable';

export default {
  title: 'Example/MyTable',
  component: Table,
};

const Template = (args) => {
  return (
    <div style={{ height: 500, width: 500 }}>
      <Table {...args} />
    </div>
  );
};

const columns = Array(100)
  .fill({})
  .map((i, index) => ({ name: `name${index}` }));
const dataSource = Array(100).fill(
  columns
    .map((i) => i.name)
    .reduce((pre, cur) => {
      pre[cur] = '1111';
      return pre;
    }, {}),
);

export const Virtualized = Template.bind({});
Virtualized.title = '虚拟滚动';
Virtualized.args = {
  columnWidth: (index) => index + 100,
  // columnWidth: 100,
  rowHeight: 48,
  height: 500, // TODO 容器监听
  width: 500, // TODO 容器监听
  columns,
  dataSource,
};