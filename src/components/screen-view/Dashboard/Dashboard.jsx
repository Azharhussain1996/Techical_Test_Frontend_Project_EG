import React, { useState } from "react";
import bgImage from "assets/images/bg1.png";
import Cookies from "js-cookie";
import GLOBAL from "global/Global-Variables";
import { AESDecrypt } from "global/Crypto-Helper";
import { jwtDecode } from "jwt-decode";

const Dashboard = () => {
  const token = JSON.parse(
    AESDecrypt(
      decodeURIComponent(Cookies.get(GLOBAL.APP_Access_Keys.ADMIN_ACCESS_TOKEN))
    )
  );
  const decodedToken = jwtDecode(token);
  console.log("decoded token Dashborad", decodedToken?.Role);

  return (
    <>
      <div className="row d-flex align-items-center justify-content-center card h-86">
        <div className="col-xl-11">
          <div className="section_our_solution">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12 mb-2">
                <div className="our_solution_category">
                  <div className="solution_cards_box">
                    <div className="solution_card m-0 bg-transparent d-flex justify-content-center align-items-center">
                      <div className="hover_color_bubble"></div>
                      <div className="solu_title text-center">
                        <h3> {decodedToken?.Role} Dashboard</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
