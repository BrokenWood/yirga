import React from 'react';
import { Select, Input, Checkbox } from 'antd';
import Table from '../components/EditableTable';

export default {
  title: 'Example/EditableTable',
  component: Table,
};

const Template = (args) => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <Table {...args} />
    </div>
  );
};
const columns = [
  {
    title: '序号',
    width: 30,
    dataIndex: 'index',
  },
  {
    title: '字段名',
    // width: 200,
    dataIndex: 'field',
    checkDuplicate: true,
    // forCheckDuplicate: fields,
    renderForm: () => <Input placeholder="请输入字段名" />,
    skipCheckEmpty: true,
  },
  {
    title: '类型',
    dataIndex: 'type',
    required: true,
    renderForm: () => (
      <Select
        getPopupContainer={() => {
          // @ts-ignore
          return document.body;
        }}
        placeholder="请选择字段类型"
      >
        {[1, 2, 3].map((d) => (
          <Select.Option value={d} key={d}>
            {d}
          </Select.Option>
        ))}
      </Select>
    ),
    skipCheckEmpty: true,
  },
  {
    title: '字段注释',
    dataIndex: 'fieldNotes',
    renderForm: () => <Input placeholder="请输入字段注释" />,
    skipCheckEmpty: true,
  },
  {
    title: '主键',
    dataIndex: 'mainKey',
    width: 100,
    valuePropName: 'checked',
    renderForm: () => <Checkbox>主键</Checkbox>,
    skipCheckEmpty: true,
  },
];

export const Editable = Template.bind({});
Editable.args = {
  columns,
  height: 500,
};

const initialValues = [
  { field: 'dfd', type: 1, fieldNotes: 'shit', mainKey: true },
  { field: 'dfuuu', type: 1, fieldNotes: 'shit', mainKey: false },
  { field: 'lalaland', type: 3, fieldNotes: 'shit', mainKey: true },
  { field: 'yuyu', type: 1, fieldNotes: 'shit', mainKey: true },
  { field: 'testsield', fieldNotes: undefined, type: 1, mainKey: false },
  { field: 'testsield2', fieldNotes: undefined, type: 1, mainKey: false },
  { field: 'testsield3', fieldNotes: undefined, type: 1, mainKey: false },
  { field: 'testsield4', fieldNotes: undefined, type: 1, mainKey: false },
  { field: 'testsield5', fieldNotes: undefined, type: 1, mainKey: false },
  { field: 'testsield6', fieldNotes: 'dfsfsdsfs', type: 1, mainKey: false },
  { field: 'testsield7', fieldNotes: undefined, type: 1, mainKey: false },
  { field: 'testsield8', fieldNotes: undefined, type: 2, mainKey: false },
  { field: 'testsield9', fieldNotes: undefined, type: 1, mainKey: false },
  { field: 'testsield10', fieldNotes: undefined, type: 1, mainKey: false },
  { field: 'testsield11', fieldNotes: 'dfss', type: 1, mainKey: false },
];
export const WithInitial = Template.bind({});
WithInitial.args = {
  columns,
  height: 500,
  initialValues,
};
