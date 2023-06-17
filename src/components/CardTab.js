import { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import CardListing from "./CardListing";
import classnames from "classnames";

export default function CardTab() {
  const [activeTab, setActiveTab] = useState("2");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="App">
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggleTab("1");
              }}
            >
              Your
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggleTab("2");
              }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                toggleTab("3");
              }}
            >
              Blocked
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <CardListing type="your" />
          </TabPane>
          <TabPane tabId="2">
            <CardListing type="all" />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}
