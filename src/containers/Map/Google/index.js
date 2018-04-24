import React, { Component } from 'react';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import { Row, FullColumn } from '../../../components/utility/rowColumn';
import Papersheet from '../../../components/utility/papersheet';
import BasicMap from './maps/basic';
import BasicMarker from './maps/basicMarker';
import SkinSwitcher from './skinSwitcher';
import { BasicMarkerWrapper } from './googleMap.style';

export default class index extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <Papersheet title="Basic Map">
              <SkinSwitcher demoType={'basic'} />
              <BasicMap />
            </Papersheet>
          </FullColumn>
          <FullColumn>
            <Papersheet title="Basic Marker Map">
              <SkinSwitcher demoType={'basicMarker'} />
              <BasicMarkerWrapper>
                <BasicMarker />
              </BasicMarkerWrapper>
            </Papersheet>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}
