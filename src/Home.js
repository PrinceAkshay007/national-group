import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import Vision from "./Vision";
// import Clients from "./Clients";
import engii from "./Engii.jpeg";
import supr from "./Supr.jpg";
import market from "./market.jpg";
import secure from "./security.jpg";

import cop from "./co.jpg";
import pet from "./pet.jpg";
import team from "./team-leader.jpg";
import nurse from "./nurse.jpg";
import hotel from "./hotel.png";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Banner />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <h2 className="nav__heading__light">OFFERED MANPOWER SERVICES</h2>
      <div className="home__services">
        <div className="home__section">
          <Card
            src={market}
            title="Sales Manager"
            description="Qualification - 12th Pass"
            place="Job City- Mangalore"
            price="Expected Salary: ₹25000"
          />
          <Card
            src={market}
            title="Digital marketting Supervisor"
            description="Qualification - 12th Pass"
            place="Job City- Mangalore"
            price="Expected Salary: ₹25000"
          />
          <Card
            src={market}
            title="Sales Executive"
            description="Qualification - 12th Pass"
            place="Job City- Mangalore"
            price="Expected Salary: ₹15000"
          />
          <Card
            src={market}
            title="Sales Advisor"
            description="Qualification - 12th Pass"
            place="Job City- Mangalore"
            price="Expected Salary: ₹18000"
          />
          <Card
            src={market}
            title="Sales Boy"
            description="Qualification - 12th Pass"
            place="Job City- Udupi"
            price="Expected Salary: ₹10000"
          />
        </div>
        <div className="home__section">
          <Card
            src={engii}
            title="Mechanical Enigneer"
            description="Freshers "
            packages="Qualification- BE/ diploma "
            place="Job City- Mangalore"
            price="Expected Salary: ₹20,000-₹50,000"
          />
          <Card
            src={engii}
            title="Ground support Technician "
            description="Qualification- 10th Pass"
            place="Job City- West Bengal"
            price="Expected Salary: ₹25000"
          />
          <Card
            src={engii}
            title="Fire Watcher"
            description="Qualification- 12th Pass"
            packages="Free food and accomodation "
            place="Job City- Bahrain"
            price="Expected Salary: ₹20000"
          />
          <Card
            src={engii}
            title="Rigger"
            description="Qualification- 10th Pass"
            place="Job City- Mangalore"
            price="Expected Salary: ₹40000"
          />
          <Card
            src={engii}
            title="Electrician"
            description="Qualification- ITI"
            place="Job City- Mangalore"
            price="Expected Salary: ₹16000"
          />
        </div>
        <div className="home__section">
          <Card
            src={cop}
            title="Receptionist"
            description="Qualification- 10th Pass"
            place="Job City- Bangalore"
            price="Expected Salary: ₹10000"
          />
          <Card
            src={cop}
            title="Accountant"
            description="Qualification- 12th Pass"
            place="Job City- Udupi"
            price="Expected Salary: ₹9000"
          />
          <Card
            src={cop}
            title="Computer Operator"
            description="Qualification- 12th Pass"
            place="Job City- Hassan"
            price="Expected Salary: ₹10000"
          />
        </div>

        <div className="home__section">
          <Card
            src={secure}
            title="Security guards"
            description="Qualification- 12th Pass"
            place="Job City- Mangalore"
            price="Expected Salary: ₹15000"
          />
          <Card
            src={supr}
            title="Site Supervisor"
            description="Qualification- 12th Pass"
            place="Job City- Hassan"
            price="Expected Salary: ₹15000"
          />
          <Card
            src={supr}
            title="Site Incharge"
            description="Qualification- 12th Pass"
            place="Job City- Hassan"
            price="Expected Salary: ₹20000"
          />
          <Card
            src={engii}
            title="Electrician"
            description="Qualification- 12Th Pass"
            place="Job City- Dubai"
            price="Expected Salary: ₹25000"
          />

          {/* <Card
            src="https://5.imimg.com/data5/UH/VJ/MY-59374564/housekeeping-service-500x500.jpg"
            title="Housekeeping and gardening"
            description="Some description about the job"
            packhead="Some description about the job"
            price="Expected Salary"
          /> */}
        </div>

        <div className="home__section">
          <Card
            src={pet}
            title="Pet Grooming Helper"
            description="Qualification- 10th Pass"
            place="Job City- Mangalore"
            price="Expected Salary: ₹8000"
          />
          <Card
            src={team}
            title="Team Leader"
            description="Qualification- 12th Pass"
            place="Job City- Bangalore"
            price="Expected Salary: ₹20000"
          />
          <Card
            src={nurse}
            title="Home Nurse"
            description="Qualification- 12th Pass"
            place="Job City- Mangalore"
            price="Expected Salary: ₹18000"
          />
          <Card
            src={hotel}
            title="Hotel Manager"
            place="Job City- Mangalore"
            price="Expected Salary: ₹14000"
          />
          <Card
            src={hotel}
            title="Bartender"
            place="Job City- Mangalore"
            price="Expected Salary: ₹14000"
          />
          {/* <Card
            src="https://5.imimg.com/data5/UH/VJ/MY-59374564/housekeeping-service-500x500.jpg"
            title="Housekeeping and gardening"
            description="Some description about the job"
            packhead="Some description about the job"
            price="Expected Salary"
          /> */}
        </div>
      </div>
      <Vision />

      {/* <div className="home__clients">
        <h2 className="home__clients__head">Our Clients</h2>
        <div className="client__section">
          <Clients
            src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png"
            description="Apple Inc."
          />
          <Clients
            src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
            description="Google"
          />
          <Clients
            src="https://www.adweek.com/wp-content/uploads/2019/11/facebook-wordmark-cycling-CONTENT-2019.gif"
            description="Facebook"
          />
        </div>
        <div className="client__section">
          <Clients
            src="https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854"
            description="Audi"
          />
          <Clients
            src="https://cdn.skoda-storyboard.com/2017/11/170313-ŠKODA-Logo-1195x1440.jpg"
            description="Skoda"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Home;
