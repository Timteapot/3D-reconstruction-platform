import "./index.css"
import ReactDOM from 'react-dom/client';
import App from './App';
import "./mock"
import { Provider } from 'react-redux';
import {store} from './store';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';



const root:ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
    <App />
    </ConfigProvider>
  </Provider>
);