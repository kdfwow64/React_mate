import React, { Component } from 'react';
import { connect } from 'react-redux';
import DesktopView from './desktopView';
import MobileView from './mobileView';
import { ChatViewWrapper } from './message.style';

class Chat extends Component {
  render() {
    const { view, scrollHeight, height } = this.props;
    const ChatView = view === 'MobileView' ? MobileView : DesktopView;
    return (
      <ChatViewWrapper style={{ height: scrollHeight }}>
        <ChatView height={height} view={view} />
      </ChatViewWrapper>
    );
  }
}

export default connect(state => ({
  ...state.App.toJS(),
  scrollHeight: state.App.toJS().scrollHeight,
}))(Chat);
