import React from "react";
import "./Settings.css";
import { assets } from "../../assets/assets";

const Settings = () => {
  return (
    <div className="settings">
      <p>Account Details</p>
      <div className="overview">
        <div className="personal">
          <img src={assets.user_icon} alt="" />
          <div className="name">
            <p>Name: ___</p>
            <p>Student: ___</p>
            <p>Year: ___ , Term: ___</p>
            <p className="reset-password">Reset Password</p>
          </div>
        </div>
        <div className="contact">
          <p>Email: ___@gmail.com</p>
          <p>Tel: ___</p>
        </div>
      </div>
      <div className="details">
        <div className="personal-detail">
          <p className="details-title">Personal Detail</p>
          <hr />
          <div className="personal-detail-1">
            <div className="gender-blood">
              <div className="gender">
                <p>Gender:</p>
                <span>___</span>
              </div>
              <div className="blood">
                <p>Blood Group:</p>
                <span>___</span>
              </div>
            </div>
            <div className="dob-email">
              <div className="dob">
                <p>DoB:</p>
                <span>___</span>
              </div>
              <div className="reg-email">
                <p>Registered Email:</p>
                <span>___@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="academia">
          <p className="details-title">Academia</p>
          <hr />
          <div className="academia-1">
            <div className="school-uni">
              <div className="high-school">
                <p>High School:</p>
                <span>___</span>
              </div>
              <div className="uni">
                <p>University:</p>
                <span>___</span>
              </div>
            </div>
            <div className="major-year">
              <div className="major">
                <p>Major:</p>
                <span>___</span>
              </div>
              <div className="year">
                <p>Year/Term:</p>
                <span>___</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
