import React, { useEffect, useState } from 'react'
import axios from "axios"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment"
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
  

const Dashboard = () => {
    const [basicActive, setBasicActive] = useState('tab1');
    const handleBasicClick = (value) => {
        if (value === basicActive) {
          return;
        }
    
        setBasicActive(value);
      };
    const [name, setName] = useState([])
    const [allData, setAllData] = useState([])
    const [copyData, setCopyData] = useState([])
    const getName = async () => {
        await axios.get('http://localhost:4000/headername').then(res => {
            console.log(res.data, 'name data')
            setName(res.data)
        }).catch(err => {
            console.log(err)
            console.log("err")
        })
    }

    const fetchAllData = async () => {
        await axios.get('http://localhost:4000/alldataofemail').then(res => {
            setAllData(res.data)
            setCopyData(res.data)
        }).catch(err => {
            console.log(err)
            console.log("err")
        })
    }

    useEffect(() => {
        getName()
        fetchAllData()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        spaceBetween: 30,
        centerMode: true,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    const nameClick = (name) => {
        const filterData = copyData.filter(element => element.username === name)
        setAllData(filterData);
    }

    return (
        <>
            <div className='dashboard'>
                <div className='container   '>

                    <div className='dashboard-wrapper'>
                        <div className='box-wrapper'>
                            <div className='allbtn'>
                            <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
          <a href="#!" className='btn1' onClick={() => { fetchAllData() }}>All</a>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          <a href="#!" className='btn1'> PEOPLE</a>

          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
          <a href="#!" className='btn1' onClick={() => { fetchAllData() }}>COMPANY</a>
            
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={basicActive === 'tab2'} className='tab-data'><h5>Friend </h5>  <span className='sidespantag'>4</span> <span className='sidespantag'>5</span></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'} className='tab-data'><h5>Family</h5> <span className='sidespantag'>5</span></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'} className='tab-data'><h5>Other </h5> <span className='sidespantag'>5</span></MDBTabsPane>



        <MDBTabsPane show={basicActive === 'tab3' } className='tab-data'><h5>Finacinial </h5> <span className='sidespantag'>5</span></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'} className='tab-data'><h5>Health </h5> <span className='sidespantag'>5</span></MDBTabsPane>

        <MDBTabsPane show={basicActive === 'tab3'} className='tab-data'><h5>Travel</h5> <span className='sidespantag'>5</span></MDBTabsPane>

        <MDBTabsPane show={basicActive === 'tab3'} className='tab-data'><h5>Subscription </h5> <span className='sidespantag'>5</span></MDBTabsPane>

      </MDBTabsContent>
                                {/* <a href="#!" className='btn1' onClick={() => { fetchAllData() }}>All</a> */}
                                {/* <a href="#!" className='btn1'> PEOPLE</a> */}
                                {/* <a href="#!" className='btn1' onClick={() => { fetchAllData() }}>COMPANY</a> */}
                            </div>
                            <div className='box'>

                                <div className='crousel-wrapper'>
                                    <Slider {...settings}>
                                        {
                                            name.map((item, index) => (
                                                <div key={index} className="item" id='content' onClick={() => { nameClick(item.username) }} > {item.username}<span
                                                    className="totlegmail">{item.occurrence}</span></div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                        </div>
                        <div className='table-data'>
                            <div className="subjecttable">
                                <table className="table table-bordered">
                                    <thead className="headerBgcolor">
                                        <tr>
                                            <th>Subject</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    {allData ?
                                        <tbody>
                                            {allData.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item.subject}</td>
                                                        <td>{moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                        : <tbody>
                                            <tr>
                                                No Data Found..?
                                            </tr>
                                        </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard