import React, {Component} from 'react';
import {Tabs, Button} from 'antd';
import '../home/style.less';

const {TabPane} = Tabs;

class Home extends Component {
    render() {
        return (
            <div className={'home'}>
                <div className={'home-header'}>
                    <Button>搜索</Button>
                </div>
                <div className={'home-footer'}>
                    <Tabs tabPosition={'bottom'}>
                        <TabPane tab={'home'} key={1}>
                            home1
                        </TabPane>
                        <TabPane tab={'海淘'} key={2}>
                            海淘1
                        </TabPane>
                        <TabPane tab={'消息'} key={3}>
                            消息1
                        </TabPane>
                        <TabPane tab={'购物车'} key={4}>
                            购物车1
                        </TabPane>
                        <TabPane tab={'我的淘宝'} key={5}>
                            我的淘宝1
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Home;
