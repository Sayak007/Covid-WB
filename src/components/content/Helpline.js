import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import Pvthospcomponent from './Pvthospcomponent';
import GovtHospComponent from './GovtHospComponent';
import Card from "react-bootstrap/Card";
import Statehelpline from './Statehelpline';

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
    map: {
        marginTop: 30,
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

class Helpline extends React.Component{

    render(){
        return (
            <Column>
                <Row className={css(styles.cardsContainer)} flexGrow={1} horizontal="space-between" breakpoints={{ 2048: 'column' }}>    
                    <div className={css(styles.map)}><Statehelpline /></div>
                </Row>
                <Row className={css(styles.cardsContainer)} flexGrow={1} horizontal="space-between" breakpoints={{ 1024: 'column' }}>    
                    <div className={css(styles.map)}><GovtHospComponent /></div>
                    <div className={css(styles.map)}><Pvthospcomponent /></div>
                </Row>

            </Column>
            
        );
    }

}

export default Helpline;