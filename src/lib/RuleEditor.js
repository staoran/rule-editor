import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import Provider from './store';
import { Layout,/*  Sider, */ Content } from './components/Layout';
// import ExplorerView from './features/ExplorerView';
import { DecisionSetEditor } from './features/EditorView';

import { setInitialValue } from './store/models/decisionSet'
const RuleEditor = props => {
  const { initialValue, constants, variables, funcs, onChange, onSubmit } = props;

  return (
    <ConfigProvider locale={zhCN}>
      <Provider initialValue={setInitialValue(initialValue)} constants={constants} variables={variables} funcs={funcs}>
        <Layout>
          {/* <Sider>
            <ExplorerView />
          </Sider> */}
          <Content>
            <DecisionSetEditor onChange={onChange} onSubmit={onSubmit} />
          </Content>
        </Layout>
      </Provider>
    </ConfigProvider>
  );
};

export default RuleEditor;
