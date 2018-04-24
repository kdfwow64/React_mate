import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scrollbars from '../../../components/utility/customScrollBar';
import actions from '../../../redux/instagramWidget/actions';
import {
  InstagramWidget,
  UserInformation,
  UserAction,
  Media,
} from './style';
const { getUserData } = actions;

class InstagramFeed extends Component {
  componentWillMount() {
    this.props.getUserData();
  }

  render() {
    const {stretched } = this.props;
    const profilePicUrl =null;

    
    return (
      <InstagramWidget stretched={stretched}>
        <UserInformation>
          <h3>{'Boyan Josic'}</h3>
        </UserInformation>

        <UserAction>
          <div className="profilePicture">
            <img alt="#" src={profilePicUrl} />
          </div>

          <div className="mediaCounter">
            <div className="mediaCounterItem">
              <h5>{'0'}</h5>
              <p>Images</p>
            </div>

            <div className="mediaCounterItem">
              <h5>{'0'}</h5>
              <p>Followers</p>
            </div>

            <div className="mediaCounterItem">
              <h5>{'0'}</h5>
              <p>Following</p>
            </div>
          </div>
        </UserAction>

        <Scrollbars style={{ height: 150 }}>
          <Media>
            {null}
          </Media>
        </Scrollbars>
      </InstagramWidget>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.InstagramWidget.toJS().userData,
    loading: state.InstagramWidget.toJS().loading,
  };
}
export default connect(mapStateToProps, { getUserData })(InstagramFeed);
