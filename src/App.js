import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import SidebarComponent from './components/sidebar/SidebarComponent';
import HeaderComponent from './components/header/HeaderComponent';
import Dashboard from './components/content/Dashboard';
import Helpline from './components/content/Helpline';
import './App.css';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
});

class App extends React.Component {

    state = { selectedItem: 'Dashboard' };

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();

    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem+"  COVID-19 WEST BENGAL"} />
                    <div className={css(styles.content)}>
                        {(() => {
                            if(selectedItem==="Dashboard")
                                return <Dashboard />;
                            if(selectedItem==="Helpline")
                                return <Helpline />;

                        })()}
                    </div>
                </Column>
            </Row>
        );
    }
}

export default App;
