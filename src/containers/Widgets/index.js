import React, { Component } from 'react';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import {
  Row,
  OneFourthColumn,
  OneThirdColumn,
  TwoThirdColumn,
  FullColumn,
  HalfColumn,
} from '../../components/utility/rowColumn';
import InstagramFeed from './InstagramFeed';
import Contacts from '../Contact/contactBox';
import Statistics from './Statistics';
import Transaction from './Transactions';
import SalesProgress from './SaleProgress';
import SalesStats from './Sales';
import SaleChart from './SaleCharts';
import TableWidget from './TableWidget';
import CircularWidget from './CircularWidgets';
import { data, data2, data3 } from './Transactions/config';

class Widget extends Component {
  render() {
    return (
      <LayoutWrapper>
        <Row>
          <HalfColumn>
            <SalesStats title="Monthly Sale Analytics" stretched />
          </HalfColumn>

          <HalfColumn>
            <Statistics title="Statistics" stretched/>
          </HalfColumn>
        </Row>

        <Row>
          <OneFourthColumn>
            <SalesProgress
              title="Daily Sales"
              currency="$"
              amount="60"
              progress="67"
              color="#F44336"
              downward
            />
          </OneFourthColumn>

          <OneFourthColumn>
            <SalesProgress
              title="Weekly Sales"
              currency="$"
              amount="560"
              progress="49"
              color="#4CAF50"
              upward
            />
          </OneFourthColumn>

          <OneFourthColumn>
            <SalesProgress
              title="Monthly Sales"
              currency="$"
              amount="2430"
              progress="54"
              color="#2196F3"
              upward
            />
          </OneFourthColumn>

          <OneFourthColumn>
            <SalesProgress
              title="Daily Sales"
              currency="$"
              amount="30128"
              progress="79"
              color="#3F51B5"
              upward
            />
          </OneFourthColumn>
        </Row>

        <Row>
          <TwoThirdColumn sm={12}>
            <Contacts title="Member" widgetHeight={410} stretched />
          </TwoThirdColumn>

          <OneThirdColumn sm={12}>
            <Transaction
              title="Transactions"
              duration="Jun 24 - Jul 23"
              amount="59.01"
              currency="$"
              data={data2}
              upward
              style={{ marginBottom: 20 }}
            />

            <Transaction
              title="Transactions"
              duration="Jul 24 - Aug 23"
              amount="79.51"
              currency="$"
              data={data}
              downward
              style={{ marginBottom: 20 }}
            />

            <Transaction
              title="Transactions"
              duration="Aug 24 - Sep 23"
              amount="89.71"
              currency="$"
              data={data3}
              upward
            />
          </OneThirdColumn>
        </Row>

        <Row>
          <FullColumn>
            <TableWidget title="Employees Data" />
          </FullColumn>
        </Row>
        <Row>
          <OneThirdColumn sm={6} md={6}>
            <InstagramFeed stretched />
          </OneThirdColumn>

          <OneThirdColumn sm={6} md={6}>
            <CircularWidget title="Activity" stretched />
          </OneThirdColumn>

          <OneThirdColumn sm={12} md={12}>
            <SaleChart title="Yearly Sales Data" stretched/>
          </OneThirdColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}

export default Widget;
