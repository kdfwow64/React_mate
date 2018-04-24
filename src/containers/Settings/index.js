import React, { Component } from "react";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import Papersheet from '../../components/utility/papersheet';
import Icon from "../../components/uielements/icon/index.js";
import {
  Row,
  OneThirdColumn,
  TwoThirdColumn,
} from '../../components/utility/rowColumn';
import ProfileInfo from "./ProfileInfo"
import ETH from "./TokenDistribution"
import ChangePassword from "./ChangePassword"
import ProfileImage from "./ProfileImage"
import { Button } from "./button.style";

class Settings extends Component {
  
  render() {
    
    return (
      <LayoutWrapper>
        <Row>
          <TwoThirdColumn sm={12}><h1>Account Settings</h1></TwoThirdColumn>
          <OneThirdColumn sm={12}>
            <Button variant="raised" color="primary" className="top-button">
              <Icon className="rightIcon">done</Icon>
              Save Changes
            </Button>
          </OneThirdColumn>
        </Row>
        
        <Row>
        	<TwoThirdColumn sm={12}>
        		<Papersheet title="Profile Information">
            	<ProfileInfo/>
            </Papersheet>
          </TwoThirdColumn>

          <OneThirdColumn sm={12}>
          	<Papersheet title="Wallet for Distribution">
          		<ETH/>
          	</Papersheet>
          </OneThirdColumn>
        </Row>
        <Row>
        	<TwoThirdColumn sm={12}>
            <Papersheet title="Change Password">
              <ChangePassword/>
            </Papersheet>
        	</TwoThirdColumn>
        </Row>
        <Row>
        	<TwoThirdColumn sm={12}>
            <ProfileImage/>
        	</TwoThirdColumn>
        </Row>
        <Row>
          <TwoThirdColumn sm={12}>
            <Button variant="raised" color="primary">
              <Icon className="rightIcon">done</Icon>
              Save Changes
            </Button>
          </TwoThirdColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}

export default Settings;
