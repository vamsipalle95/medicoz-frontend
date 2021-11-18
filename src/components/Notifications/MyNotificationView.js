import React, { Component } from 'react';
import Dummy from '../../images/dummy.png';
import BackBtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';

export default function MyNotificationView() {
     const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 my-4">
                <div className="draCard1 p-3 m-2">
                    <div className="w-100 doacTitle d-flex align-items-center pb-2">
                        <h3 className="mb-0"><img onClick={() => history.goBack()} src={BackBtn} alt="backbtn" /> My Notifications</h3></div>
                        <div className="w-100 pt-3 pb-2">
                            <div className="doaNText">Sender name will go here</div>
                            <div className="mpText mt-1">09/04/2021</div>
                            </div>
                            <div className="w-100 doaNText mt-3">Title will go here</div>
                            <div className="w-100 mt-3"><img src={Dummy} alt="dummy" /></div><div className="mpText w-100 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</div></div>

                </div>
            </div>
        );
    }
