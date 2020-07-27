import React from 'react';
import { Row } from 'simple-flexbox';
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
        color: '#9FA2B4',
        textAlign: 'right',
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
    }
});

class Statehelpline extends React.Component {
    renderStat(title, value,value1) {
        return (<Row flexGrow={1} horizontal="space-between" vertical="center">
            <span className={css(styles.itemTitle)}>{title}</span>
            <span className={css(styles.itemTitle, styles.itemValue)}>{value}<br />{value1}</span>
        </Row>);
    }

    render() {
        return (
            <div className={css(styles.outer)}>
            <CardComponent containerStyles={this.props.containerStyles} title="WEST BENGAL State Helpline"
                link="For any queries regarding COVID-19" subtitle="" subtitleTwo=""
                items={[
                    this.renderStat('STATE CONTROL ROOM for Lockdown queries', 1070,1075),
                    this.renderStat('24x7 Helpline Number', '1800-313-444-222','033-2341-2600'),
                    this.renderStat('Control Rooms-Covid queries','033-2357-1075','1083,3636'),
                    this.renderStat('Websites','https://wb.gov.in/COVID-19.aspx','https://www.wbhealth.gov.in/'),
                    this.renderStat('Direct Telehelpline Number','033-2357-6001'),
                    this.renderStat('Kolkata Ambulance Number','033-4090-2929'),
                ]}
            />
            </div>
        );
    }
}

export default Statehelpline;