import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { TextField ,FormControl} from './textfield.style';
import Icon from "../../../components/uielements/icon/index.js";
import { Button } from "./button.style";


class ChangePassword extends React.Component {
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
    <LayoutWrapper>
      <FormControl fullWidth>
        <TextField
          id="current_password"
          label="Enter Current Password"
    //      onChange={this.handleChange('name')}
          margin="normal"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="new_password"
          label="New Password"
    //      onChange={this.handleChange('name')}
          margin="normal"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="confirm_password"
          label="Confirm Password"
    //      onChange={this.handleChange('name')}
          margin="normal"
        />
      </FormControl>
      <FormControl>
        <Button variant="raised" color="secondary">
          <Icon className="rightIcon">delete</Icon>
          Update Password
        </Button>
      </FormControl>
    </LayoutWrapper>
    );
  }
}

ChangePassword.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(ChangePassword);