import React, { Component } from 'react';
import {
  Timeline,
  TimelineEvent,
} from '../../../components/uielements/timeline';
import WidgetBox from '../WidgetBox';
import config from './config';

export default class extends Component {
  render() {
    const { title, stretched } = this.props;
    return (
      <WidgetBox title={title} stretched={stretched}>
        <Timeline>
          {config.map(({ id, __html, ...props }) => (
            <TimelineEvent
              key={id}
              {...props}
              contentStyle={{ backgroundColor: '#00BCD4', color: '#fff' }}
            >
              <div dangerouslySetInnerHTML={{ __html }} />
            </TimelineEvent>
          ))}
        </Timeline>
      </WidgetBox>
    );
  }
}
