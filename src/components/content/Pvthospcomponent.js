import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';  
import Card from "react-bootstrap/Card";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'; 
import paginationFactory from 'react-bootstrap-table2-paginator';  
//import './node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';


const WB_PVT_HOSP = require('./PVT_Hospital.json');

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
        border: '1px solid #000',
        borderRadius: '15px;',
        textAlign: 'center',
    },
    table:{
        backgroundColor: '#A1FAA3',
        textColor: '#000',
        //fontWeight: 'bold',
        border: '1px solid #000',
        borderRadius: '15px;',
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

class Pvthospcomponent extends React.Component{

    render(){
        return (
            <div className={css(styles.outer)}>
                <font face="Muli">
                    <h2>Private Hospital List in West Bengal</h2>
                    <div className={css(styles.sc)}>
                    <table>
                        <thead  className={css(styles.tablehead)}>
                            <td>District</td>
                            <td>Name of the Private Hospital</td>
                            <td>Beds</td>
                        </thead>
                        {WB_PVT_HOSP.hospital.map(row => (
                            <tbody className={css(styles.table)}><tr>
                            <td>{row['District']}</td>
                            <td>{row['Name of the Private Hospital']}</td>
                            <td>{row['Beds']}</td>
                            </tr></tbody>
                        ))}
                    </table>
                    </div>
                </font>
            </div> 
        );
    }

}

export default Pvthospcomponent;