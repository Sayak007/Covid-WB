import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important'; 
import CardComponent from './CardComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faExternalLinkSquareAlt} from "@fortawesome/free-solid-svg-icons";

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
    ww:{
        width:'470px'
    },
    outer:{
        //marginLeft: -16,
        marginRight: 10,
    },
    but:{
        background: '#0275d8',
        borderRadius: '6px',
        padding: 6,
        cursor: 'pointer',
    }
  });

class PdfComponent extends React.Component{
    state={
        date:null,
        pdfdate:null,
        pvtpdfdate:null,
    };

    componentDidMount() {
        var today = new Date();
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        var date1 = yesterday.getDate(); //Current Date
        var month = yesterday.getMonth() + 1; //Current Month
        var year = yesterday.getFullYear(); //Current Year
        var date1pdf,monthpdf,yearpdf;
        if(date1<10){
            date1pdf='0'+date1;
        }else{
            date1pdf=date1;
        }
        if(month<10){
            monthpdf='0'+month;
        }else{
            monthpdf=month;
        }
        var dateObj = new Date(); 
        yearpdf= year%100;
        // subtract one day from current time                           
        dateObj.setDate(dateObj.getDate() - 1); 
        this.setState({
            //Setting the value of the date time
            date:date1 + '/' + month + '/' + year,
            pdfdate:date1pdf + '.' + monthpdf + '_.' + year,
            pvtpdfdate: date1pdf + '_.' + monthpdf + '_.' + (yearpdf)
        });
    }

    renderStat(title, value,link) {
        var str;
        if(title==='Private Hospital Vacancies'){
            str=link + this.state.pvtpdfdate + "_.pdf"
        }else{
            str=link  + this.state.pdfdate + "_.pdf";
        }
        return (<Row flexGrow={1} horizontal="space-between" vertical="center">
            <span className={css(styles.itemTitle)}>{title}</span>
            <a href={str}><button className={css(styles.itemTitle, styles.but)}><font color='#fff' weight="bold" face="Muli"><FontAwesomeIcon icon={faExternalLinkSquareAlt} /> {value}</font></button></a>
        </Row>);
    }

    render() {
        var str= "as on " + this.state.date;
        return (
            <div className={css(styles.outer)}>
            <CardComponent containerStyles={this.props.containerStyles} title="Hospital Vacancies"
                link="Updated by West Bengal Health & Family Welfare Department" subtitle={str} subtitleTwo=""
                items={[
                    this.renderStat('Government Hospital Vacancies', "Visit",'https://www.wbhealth.gov.in/uploaded_files/corona/Vacant_bed_status_as_on_'),
                    this.renderStat('Private Hospital Vacancies','Visit','https://www.wbhealth.gov.in/uploaded_files/corona/Vacancy_in_Pvt._Facilities_other_than_requisitioned_COVID_Hospital,_as_on_'),
                ]}
            />
            </div>
        );
    }
}

export default PdfComponent;