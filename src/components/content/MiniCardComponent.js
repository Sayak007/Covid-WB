import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat,faHeart,faHeartBroken, faPlusSquare } from "@fortawesome/free-solid-svg-icons";


const styles = StyleSheet.create({
    yellow: {
        backgroundColor: '#FDE09C',
        color: '#7D6006',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
        height: 70,
        maxWidth: 350,
        padding: '24px 32px 24px 32px',
        ':hover': {
            borderColor: '#3751FF',
            ':nth-child(n) > span': {
                color: '#3751FF'
            }
        }
    },
    blue: {
        backgroundColor: '#9CDBFD',
        color: '#06247D',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
        height: 70,
        maxWidth: 350,
        padding: '24px 32px 24px 32px',
        ':hover': {
            borderColor: '#3751FF',
            ':nth-child(n) > span': {
                color: '#3751FF'
            }
        }
    },
    green: {
        backgroundColor: '#9CFD9C',
        color: '#067D07',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
        height: 70,
        maxWidth: 350,
        padding: '24px 32px 24px 32px',
        ':hover': {
            borderColor: '#3751FF',
            ':nth-child(n) > span': {
                color: '#3751FF'
            }
        }
    },
    red: {
        backgroundColor: '#FD9F9C',
        color: '#CA0707',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
        height: 70,
        maxWidth: 350,
        padding: '24px 32px 24px 32px',
        ':hover': {
            borderColor: '#3751FF',
            ':nth-child(n) > span': {
                color: '#3751FF'
            }
        }
    },
    titleactive: {
        color: '#7D6006',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        marginBottom: 12,
        minWidth: 102,
        textAlign: 'center'
    },
    titlerecovered: {
        color: '#067D07',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        marginBottom: 12,
        minWidth: 102,
        textAlign: 'center'
    },
    titleconfirmed: {
        color: '#06247D',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        marginBottom: 12,
        minWidth: 102,
        textAlign: 'center'
    },
    titledeceased: {
        color: '#CA0707',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        marginBottom: 12,
        minWidth: 102,
        textAlign: 'center'
    },
    valueactive: {
        color: '#7D6006',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        letterSpacing: '1px',
        lineHeight: '50px',
        textAlign: 'center'
    },
    valueconfirmed: {
        color: '#06247D',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        letterSpacing: '1px',
        lineHeight: '50px',
        textAlign: 'center'
    },
    valuerecovered: {
        color: '#067D07',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        letterSpacing: '1px',
        lineHeight: '50px',
        textAlign: 'center'
    },
    valuedeceased: {
        color: '#CA0707',
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 40,
        letterSpacing: '1px',
        lineHeight: '50px',
        textAlign: 'center'
    }
});

function MiniCardComponent({ className = '', title, value ,color,icons}) {
    var composedClassName;
    {(() => {
        if(color==="yellow"){
            composedClassName = `${css(styles.yellow)} ${className}`;
        }else if(color=="blue"){
            composedClassName = `${css(styles.blue)} ${className}`;
        }else if(color=="green"){
            composedClassName = `${css(styles.green)} ${className}`;
        }else if(color=="red"){
            composedClassName = `${css(styles.red)} ${className}`;
        }
        //if(selectedItem=="Dashboard")

    })()}
    //const composedClassName = `${css(styles.{color})} ${className}`;
    return (
        <Column flexGrow={1} className={composedClassName} horizontal="center" vertical="center">
            
            {(() => {
                if(icons=="active"){
                    return <span className={css(styles.titleactive)}>{title}</span>;
                }else if(icons=="confirmed"){
                    return <span className={css(styles.titleconfirmed)}>{title}</span>;
                }else if(icons=="recovered"){
                    return <span className={css(styles.titlerecovered)}>{title}</span>;
                }else if(icons=="deceased"){
                    return <span className={css(styles.titledeceased)}>{title}</span>;
                }
            })()}
            
            {(() => {
            if(icons=="active"){
                return <FontAwesomeIcon icon={faHeartbeat} />;
            }else if(icons=="confirmed"){
                return <FontAwesomeIcon icon={faPlusSquare} />;
            }else if(icons=="recovered"){
                return <FontAwesomeIcon icon={faHeart} />;
            }else if(icons=="deceased"){
                return <FontAwesomeIcon icon={faHeartBroken} />;
            }
            })()}
            
            {(() => {
                if(icons=="active"){
                    return <span className={css(styles.valueactive)}>{value}</span>;
                }else if(icons=="confirmed"){
                    return <span className={css(styles.valueconfirmed)}>{value}</span>;
                }else if(icons=="recovered"){
                    return <span className={css(styles.valuerecovered)}>{value}</span>;
                }else if(icons=="deceased"){
                    return <span className={css(styles.valuedeceased)}>{value}</span>;
                }
            })()}
            
        </Column>
    );
}

export default MiniCardComponent;
