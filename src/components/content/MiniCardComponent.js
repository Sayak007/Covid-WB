import React from 'react';
import { Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat,faHeart,faHeartBroken, faPlusSquare } from "@fortawesome/free-solid-svg-icons";


const styles = StyleSheet.create({
    yellow: {
        backgroundColor: '#FDE09C',
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
    title: {
        color: '#000',
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
    value: {
        color: '#252733',
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
            <span className={css(styles.title)}>{title}</span>
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
            <span className={css(styles.value)}>{value}</span>
        </Column>
    );
}

export default MiniCardComponent;
