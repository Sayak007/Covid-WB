import React, { useState,useEffect } from 'react';
import { ComposableMap, Geographies, Geography,ZoomableGroup } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
import { Row,Column } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite/no-important';
import axios from 'axios';

import LinearGradient from './LinearGradient.js';

//import LineChart from 'react-svg-line-chart'
const INDIA_TOPO_JSON = require('./WB.json');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #DFE0EB',
        borderRadius: 4,
        cursor: 'pointer',
    },
    graphContainer: {
        marginTop: 24,
        marginLeft: 0,
        marginRight: 0,
        width: '100%'
    },
    graphSection: {
        padding: 24
    },
    graphSubtitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: '0.1px',
        color: '#9FA2B4',
        marginTop: 4,
        marginRight: 8
    },
    graphTitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#252733'
    },
    legendTitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: '15px',
        letterSpacing: '0.1px',
        color: '#9FA2B4',
        marginLeft: 8
    },
    separator: {
        backgroundColor: '#DFE0EB',
        width: 1,
        minWidth: 1,
    },
    statContainer: {
        borderBottom: '1px solid #DFE0EB',
        padding: '24px 32px 24px 32px',
        height: 'calc(114px - 48px)',
        ':last-child': {
            border: 'none'
        }
    },
    stats: {
        borderTop: '1px solid #DFE0EB',
        width: '100%'
    },
    statTitle: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: '22px',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: '#9FA2B4',
        whiteSpace: 'nowrap',
        marginBottom: 6
    },
    statValue: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: '#252733'
    }
});
const PROJECTION_CONFIG = {
    scale: 1400,
    center: [88.081101, 24.125817] // always in [East Latitude, North Longitude]
  };
  
  // Red Variants
  const COLOR_RANGE = [
    '#d9e0ff',
    '#c9d3ff',
    '#a8b8ff',
    '#8fa3ff',
    '#708aff',
    '#4f6fff',
    '#3358ff',
    '#1943ff',
    '#002fff'
  ];
  
  const DEFAULT_COLOR = '#6B7B91';
  
  const getRandomInt = () => {
    return parseInt(Math.random() * 100);
  };
  
  const geographyStyle = {
    default: {
      outline: 'blue'
    },
    hover: {
      fill: '#ff0800',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none'
    }
  };
  
  // will generate random heatmap data on every call
  const getHeatMapData = () => {
    return [
      { dt_code: '330', district: 'Uttar Dinajpur', value: getRandomInt() },
      { dt_code: '329', district: 'Cooch Behar', value: getRandomInt() },
      { dt_code: '775', district: 'Kalimpong', value: getRandomInt() },
      { dt_code: '777', district: 'Paschim Bardhaman', value: getRandomInt() },
      { dt_code: '774', district: 'Alipurduar', value: getRandomInt() },
      { dt_code: '342', district: 'Kolkata', value: getRandomInt() },
      { dt_code: '341', district: 'Howrah', value: getRandomInt() },
      { dt_code: '338', district: 'Hooghly', value: getRandomInt() },
      { dt_code: '337', district: 'North 24 Parganas', value: getRandomInt() },
      { dt_code: '339', district: 'Bankura', value: getRandomInt() },
      { dt_code: '340', district: 'Purulia', value: getRandomInt() },
      { dt_code: '335', district: 'Purba Bardhaman', value: getRandomInt() },
      { dt_code: '336', district: 'Nadia', value: getRandomInt() },
      { dt_code: '334', district: 'Birbhum', value: getRandomInt() },
      { dt_code: '333', district: 'Murshidabad', value: getRandomInt() },
      { dt_code: '332', district: 'Malda', value: getRandomInt() },
      { dt_code: '331', district: 'Dakshin Dinajpur', value: getRandomInt() },
      { dt_code: '328', district: 'Jalpaiguri', value: getRandomInt() },
      { dt_code: '327', district: 'Darjeeling', value: getRandomInt() },
      { dt_code: '776', district: 'Jhargram', value: getRandomInt() },
      { dt_code: '345', district: 'Purba Medinipur', value: getRandomInt() },
      { dt_code: '344', district: 'Paschim Medinipur', value: getRandomInt() },
      { dt_code: '343', district: 'South 24 Parganas', value: getRandomInt() }
    ];
  };
  
  function MapComponent() {
    const [tooltipContent, setTooltipContent] = useState('');
    const [data1, setData1] = useState({ hits: [] });
    //console.log(data1['West Bengal']);
 
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://api.covid19india.org/state_district_wise.json',
        );
   
        setData1(result.data);
      };
   
      fetchData();
    }, []);
    const [data, setData] = useState(getHeatMapData());
  
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
        setTooltipContent(`District: ${geo.properties.district} \t Confirmed:${data1['West Bengal']['districtData'][geo.properties.district]['confirmed']}`);
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
        <div className="full-width-height container">
            <h1 className="no-margin center">West Bengal</h1>
            <ReactTooltip>{tooltipContent}</ReactTooltip>
            <ComposableMap
                projectionConfig={PROJECTION_CONFIG}
                projection="geoMercator"
                width={120}
                height={260}
                data-tip=""
            >
                <ZoomableGroup>
                <Geographies geography={INDIA_TOPO_JSON}>
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
        </div>
      </Row>
    );
  }

export default MapComponent;
