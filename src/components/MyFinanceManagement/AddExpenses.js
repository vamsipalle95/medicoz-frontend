import React, { Component } from 'react';
import Backbtn from '../../images/back-button-new.png';
import { useHistory } from 'react-router-dom';

export default function AddExpenses() {
    const history = useHistory();
        return (
            <div>
                <div className="overflow-auto p-md-3 mb-4">
                        <div className="draCard2 p-3">
                            <div className="w-100 doacTitle d-flex align-items-center pb-2">
                            <h3 className="mb-0"><img src={Backbtn} alt="back" onClick={() => history.goBack()} /> Add Expenses</h3>
                            </div>
                            {/*doacTitle-ends-here*/}
                            <form className="w-100 mt-4">
                            <div className="mpText w-100 mb-2">
                                * Date
                            </div>
                            <input className="form-control w-100" type="date" required />
                            <div className="w-100 d-flex flex-wrap align-items-center justify-content-between mt-3 mb-2">
                                <p className="mpText mb-0">* Select Expense Head</p>
                                {/* <a href className="f10mBlue text-decoration-none">+ Add Expense Head</a> */}
                            </div>
                            <select className="form-select">
                                <option selected>Select</option>
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                            </select>
                            <div className="mpText w-100 mt-3 mb-2">
                                * Amount
                            </div>
                            <input className="form-control w-100" type="text" required />
                            <div className="mpText w-100 mt-3 mb-2">
                                * Mode of Payment
                            </div>
                            <select className="form-select">
                                    <option selected>Select</option>
                                    <option value={1}>Cash</option>
                                    <option value={2}>UPI</option>
                                    <option value={3}>Credit Card</option>
                                    <option value={3}>Debit Card</option>
                                    <option value={3}>NetBanking</option>
                                </select>
                            <div className="mpText w-100 mt-3 mb-2">
                                * Narration
                            </div>
                            <input className="form-control w-100" type="text" required />
                            <button type="button" className="btn doaOrangeBtn d-block mx-auto mt-3 px-4">Add Expense</button>
                            </form>
                            {/*form-ends-here*/}
                        </div>
                        {/*draCard1-ends-here*/}
                        </div>
                        {/*myPhoneCardCnt-ends-here*/}

                                    </div>
                                );
                            }
                       