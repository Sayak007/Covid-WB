import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
//import './node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


const WB_PVT_HOSP = require('./Govt_Hospital.json');

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      border: '1px solid #DFE0EB',
      borderRadius: 4,
      cursor: 'pointer',
    },
    graphSection: {
        padding: 24
    },
    separator: {
        backgroundColor: '#DFE0EB',
        width: 1,
        minWidth: 1,
    },
    tablehead:{
        backgroundColor: '#30C5C0',
        textColor: '#fff',
        fontWeight: 'bold',
        border: '#000',
        borderRadius: '5px;',
        textAlign: 'center',
    },
    table:{
        backgroundColor: '#fff',
        textColor: '#000',
        //fontWeight: 'bold',
        border: '1px solid #A1D0FA',
        borderRadius: '5px;',
        textAlign: 'center',
    },
    sc:{
        maxHeight: '500px', 
        overflowY: 'scroll',
        overflowX: 'scroll',
    },
    outer:{
        //marginLeft: -16,
        marginRight: 20,
    }
  });

class GovtHospComponent extends React.Component{

    render(){
        return (
            <div className={css(styles.outer)}>
                <font face="Muli">
                    <h2>Government Hospital List in West Bengal</h2>
                    <div className={css(styles.sc)}>
                    <table>
                        <thead  className={css(styles.tablehead)}>
                            <tr className={css(styles.tablehead)}><td className={css(styles.tablehead)}>District</td>
                            <td className={css(styles.tablehead)}>Name of the Government Hospital</td>
                            <td className={css(styles.tablehead)}>Beds</td></tr>
                        </thead>
                        <tbody className={css(styles.table)}>
                        {WB_PVT_HOSP.hospital.map((row,index) => (
                            <tr className={css(styles.table)} key={index}>
                            <td className={css(styles.table)}>{row['District']}</td>
                            <td className={css(styles.table)}>{row['Name of Govt. Hospital']}</td>
                            <td className={css(styles.table)}>{row['Total Beds']}</td>
                            </tr>
                        ))}</tbody>
                    </table>
                    </div>
                </font>
            </div> 
        );
    }

}

export default GovtHospComponent;