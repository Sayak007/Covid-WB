import React, { useState,useEffect } from 'react';
import { ComposableMap, Geographies, Geography,ZoomableGroup } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
import { Row,Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import axios from 'axios';

import LinearGradient from './LinearGradient.js';

//import LineChart from 'react-svg-line-chart'
const WB_TOPO_JSON = require('./WB.json');
var WB=[];

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
    ct:{
      fontFamily: 'Muli',
    }
});
const PROJECTION_CONFIG = {
    scale: 1400,
    center: [88.081101, 24.125817] // always in [East Latitude, North Longitude]
  };
  
  // Red Variants
  const COLOR_RANGE = [
    '#FEC6C6',
    '#FFABAB',
    '#FF9696',
    '#FF8585',
    '#FF7878',
    '#FF6A6A',
    '#FF4F4F',
    '#FF2B2B',
    '#FF0000'
  ];
  
  const DEFAULT_COLOR = '#6B7B91';
  
  const geographyStyle = {
    default: {
      outline: 'black',
      //stroke: '#780000',
      //strokeWidth: 0.5
    },
    hover: {
      fill: 'blue',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none'
    }
  };
  
  // will generate random heatmap data on every call
  const getHeatMapData = (data) => {
    //data=JSON.stringify(data);
    //var hi = data['West Bengal']['districtData'];
    var arr= [
      { dt_code: '330', district: 'Uttar Dinajpur', value: WB['Uttar Dinajpur'] },
      { dt_code: '329', district: 'Cooch Behar', value: WB['Cooch Behar'] },
      { dt_code: '775', district: 'Kalimpong', value: WB['Kalimpong'] },
      { dt_code: '777', district: 'Paschim Bardhaman', value: WB['Paschim Bardhaman'] },
      { dt_code: '774', district: 'Alipurduar', value: WB['Alipurduar'] },
      { dt_code: '342', district: 'Kolkata', value: WB['Kolkata'] },
      { dt_code: '341', district: 'Howrah', value: WB['Howrah'] },
      { dt_code: '338', district: 'Hooghly', value: WB['Hooghly'] },
      { dt_code: '337', district: 'North 24 Parganas', value: WB['North 24 Parganas'] },
      { dt_code: '339', district: 'Bankura', value: WB['Bankura'] },
      { dt_code: '340', district: 'Purulia', value: WB['Purulia'] },
      { dt_code: '335', district: 'Purba Bardhaman', value: WB['Purba Bardhaman'] },
      { dt_code: '336', district: 'Nadia', value: WB['Nadia'] },
      { dt_code: '334', district: 'Birbhum', value: WB['Birbhum'] },
      { dt_code: '333', district: 'Murshidabad', value: WB['Murshidabad'] },
      { dt_code: '332', district: 'Malda', value: WB['Malda'] },
      { dt_code: '331', district: 'Dakshin Dinajpur', value: WB['Dakshin Dinajpur'] },
      { dt_code: '328', district: 'Jalpaiguri', value: WB['Jalpaiguri'] },
      { dt_code: '327', district: 'Darjeeling', value: WB['Darjeeling'] },
      { dt_code: '776', district: 'Jhargram', value: WB['Jhargram'] },
      { dt_code: '345', district: 'Purba Medinipur', value: WB['Purba Medinipur'] },
      { dt_code: '344', district: 'Paschim Medinipur', value: WB['Paschim Medinipur'] },
      { dt_code: '343', district: 'South 24 Parganas', value: WB['South 24 Parganas'] }
    ];
    //console.log(arr);
    return arr;
  };
  
  function DeceasedMap() {
    const [tooltipContent, setTooltipContent] = useState('');
    const [data1, setData1] = useState({ hits: [] });
    //console.log(data1['West Bengal']);
 
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://api.covid19india.org/state_district_wise.json',
        );
        //console.log(result.data['West Bengal']['districtData']);
        var arr=[];
          for (var i in result.data['West Bengal']['districtData'])
            arr[i]=result.data['West Bengal']['districtData'][i]["deceased"];
            WB=arr;
            //console.log(WB);
          
        setData1(result.data);
      };
   
      fetchData();
    }, []);
    //WB=data1;
    //console.log(WB);
    const data = getHeatMapData(WB);
    //console.log(data);
  
    const gradientData = {
      fromColor: COLOR_RANGE[0],
      toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
      min: 0,
      max: data.reduce((max, item) => (item.value > max ? item.value : max), 0)
    };
  
    const colorScale = scaleQuantile()
      .domain(data.map(d => d.value))
      .range(COLOR_RANGE);
  
    const onMouseEnter = (geo, current = { value: 'NA' }) => {
      return () => {
        //console.log(data1['West Bengal']['districtData'][geo.properties.district]['confirmed']);
        //var d=data1;

        var dist=geo.properties.district;
        setTooltipContent(`<b style="font-size:25px; color:#7B0064;">${dist}</b> 
        <br> <b  style="font-size:10px;"> Active: ${data1['West Bengal']['districtData'][geo.properties.district]['active']}</b> </br>
        <b  style="font-size:10px;"> Confirmed: ${data1['West Bengal']['districtData'][geo.properties.district]['confirmed']}</b> 
        <br> <b  style="font-size:10px;"> Recovered: ${data1['West Bengal']['districtData'][geo.properties.district]['recovered']}</b> </br>
        <b  style="font-size:17px; color:#FF0000;"> Deceased: ${data1['West Bengal']['districtData'][geo.properties.district]['deceased']}</b> `);  
      };
    };
  
    const onMouseLeave = () => {
      setTooltipContent('');
    };
  
    /*const onChangeButtonClick = () => {
      setData(getHeatMapData());
    };*/
  
    return (
      <Row flexGrow={1} className={css(styles.container)}horizontal="center" >
        <Column wrap flexGrow={7} flexBasis="735px" className={css(styles.graphSection)}
                    breakpoints={{ 1024: { width: 'calc(100% - 48px)', flexBasis: 'auto' } }}>
        
            <font color="red" face="Muli"><h3 className="no-margin center"><center>DECEASED</center></h3></font>
            <ReactTooltip className={css(styles.ct)} border={true} borderColor="#7900FF" textColor="black" backgroundColor="#DFC8F9" multiline={true} html={true}>{tooltipContent}</ReactTooltip>
            <ComposableMap
                projectionConfig={PROJECTION_CONFIG}
                projection="geoMercator"
                width={120}
                height={260}
                data-tip=""
            >
                <ZoomableGroup>
                <Geographies geography={WB_TOPO_JSON}>
                {({ geographies }) =>
                    geographies.map(geo => {
                    //console.log(geo.properties.dt_code);
                    const current = data.find(s => s.dt_code === geo.properties.dt_code);
                    return (
                        <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                        style={geographyStyle}
                        onMouseEnter={onMouseEnter(geo, current)}
                        onMouseLeave={onMouseLeave}
                        />
                    );
                    })
                }
                </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            <LinearGradient data={gradientData} />
        
        </Column>
      </Row>
    );
  }

export default DeceasedMap;
