import React from 'react';
import { Row,Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import CardComponent from './CardComponent';

const styles = StyleSheet.create({
    itemTitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        marginRight: 10,
        color: '#252733'
    },
    itemValue: {
        color: 'blue',
        textAlign: 'right',
        textDecoration: 'none',
        display: 'inline', 
        ':hover': {
            textDecoration: 'underline',
        },
        ':after':{
            whiteSpace: 'pre-line',
        }
    },
    itemicon: {
        maxWidth: '20px',
        maxHeight: '20px',
    },
    outer:{
        //marginLeft: -16,
        marginRight: 10,
    },
    ww:{
        width:'470px'
    },
    sp:{
        textAlign: 'right',
    },
    rw:{
        marginBottom: 30,
    }
});

class Statehelpline extends React.Component {
    renderStat(title, value,value1) {
        var str,str1;
        if(title==="Websites"){
            str = value;
            str1 = value1;
        }else{
            str = "tel:"+value;
            str1 = "tel:"+value1;
        }
        return (<Row flexGrow={1} className={css(styles.rw)} horizontal="space-between" vertical="center">
            <Column><span className={css(styles.itemTitle)}>{title}</span></Column>
            <Column><span className={css(styles.sp)}><a className={css(styles.itemTitle, styles.itemValue)} href={str}>{value}<br /></a>
            <a className={css(styles.itemTitle, styles.itemValue)} href={str1}>{value1}</a></span></Column>
        </Row>);
    }

    render() {
        return (
            <div className={css(styles.outer)}>
            <CardComponent containerStyles={this.props.containerStyles} title="WEST BENGAL State Helpline"
                link="Regarding COVID-19" subtitle="" subtitleTwo=""
                items={[
                    this.renderStat('STATE CONTROL ROOM for Lockdown queries', 1070,1075),
                    this.renderStat('24x7 Helpline Number', '1800-313-444-222','033-2341-2600'),
                    this.renderStat('Control Rooms-Covid queries','033-2357-1075','033-2357-1083'),
                    this.renderStat('Control Rooms-Covid queries','033-2357-3636','033-2357-6001'),
                    this.renderStat('Kolkata Ambulance Number','033-4090-2929'),
                    this.renderStat('Websites','https://wb.gov.in/COVID-19.aspx','https://www.wbhealth.gov.in/'),
                ]}
            />
            </div>
        );
    }
}

export default Statehelpline;