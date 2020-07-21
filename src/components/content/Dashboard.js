import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import MiniCardComponent from './MiniCardComponent';
import MapComponent from './MapComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';

const styles = StyleSheet.create({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
        }
    }
});

class Dashboard extends React.Component{
    state = {
        loading: true,
        confirmed:null,
        deceased:null,
        recovered:null,
        active:null,
    };
    
    async componentDidMount(){
        const url = "https://api.covid19india.org/v4/data.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ confirmed: data['WB']['total']['confirmed'], loading: false });
        this.setState({ deceased: data['WB']['total']['deceased'], loading: false });
        this.setState({ recovered: data['WB']['total']['recovered'], loading: false });
        this.setState({ active: this.state.confirmed-this.state.recovered-this.state.deceased, loading: false });
        //console.log(data['WB']['total']);
    }
    render(){
        return (
            <Column>
                <Row className={css(styles.cardsContainer)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 768: 'column' }}>
                    <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                        <MiniCardComponent className={css(styles.miniCardContainer)} title="Active" value={this.state.active} />
                        <MiniCardComponent className={css(styles.miniCardContainer)} title="Confirmed" value={this.state.confirmed} />
                    </Row>
                    <Row className={css(styles.cardRow)} wrap flexGrow={1} horizontal="space-between" breakpoints={{ 384: 'column' }}>
                        <MiniCardComponent className={css(styles.miniCardContainer)} title="Recovered" value={this.state.recovered} />
                        <MiniCardComponent className={css(styles.miniCardContainer)} title="Deceased" value={this.state.deceased} />
                    </Row>
                </Row>
                <div className={css(styles.todayTrends)}>
                    <MapComponent />
                </div>
                <Row horizontal="space-between" className={css(styles.lastRow)} breakpoints={{ 1024: 'column' }}>
                    <UnresolvedTicketsComponent containerStyles={styles.unresolvedTickets} />
                    <TasksComponent containerStyles={styles.tasks} />
                </Row>
            </Column>
        );
    }
}

export default Dashboard;
