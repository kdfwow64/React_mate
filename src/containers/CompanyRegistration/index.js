import React, { Component } from "react";
import LayoutWrapper from "../../components/utility/layoutWrapper";
import Papersheet from '../../components/utility/papersheet';
import {
  Row,
  TwoThirdColumn,
  Column,
} from './rowColumn';

import CompanyInfo from "./CompanyInfo"
class CompanyRegistration extends Component {
  
  render() {
    
    return (
      	<LayoutWrapper style={{backgroundColor: '#2e5cc3'}}>
      		<Row><h1 style={{margin: 'auto',color: 'white'}}>BOUNTY MISSIONS</h1></Row>
      		<Row><h3 style={{margin: 'auto',color: 'white'}}>Get started</h3></Row>
      		<Row>
		      	<TwoThirdColumn>
			      	<Papersheet title="COMPANY">
			        	<CompanyInfo/>
			        </Papersheet>
		      	</TwoThirdColumn>
	      	</Row>
      	</LayoutWrapper>
    );
  }
}

export default CompanyRegistration;
