import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../../assets/icon-logo';

const styles = StyleSheet.create({
    container: {
        marginTop:-100,
        marginBottom:-100,
        marginLeft: 5,
        marginRight: 10,
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#A4A6B3',
        opacity: 0.7,
        marginLeft: -20
    }
});

function LogoComponent() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            <Logo />
            <span className={css(styles.title)}>Covid-19 West Bengal</span>
        </Row>
    );
}

export default LogoComponent;
