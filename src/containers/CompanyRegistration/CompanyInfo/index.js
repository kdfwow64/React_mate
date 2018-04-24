import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { MenuItem } from '../../../components/uielements/menus';
import Icon from "../../../components/uielements/icon/index.js";
import Button from "../../../components/uielements/button";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Row,
} from '../../../components/utility/rowColumn';
import { Form, TextField ,InputLabel,FormControl} from './textfield.style';

const currencies = [
  {
    value: 'argentina',
    label: 'Argentina'
  },
  {
    value: 'australia',
    label: 'Australia'
  },
  {
    value: 'brazil',
    label: 'Brazil'
  },
  {
    value: 'france',
    label: 'France'
  }
];


class CompanyInfo extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
   	<LayoutWrapper>
      <Form noValidate autoComplete="off">
        <Row>
          <h2 style={{paddingLeft : 20 + 'px'}}>Company Information</h2>
        </Row>
        <Row>
          <InputLabel  style={{paddingLeft : 20 + 'px'}}>Enter your company infromation in the forms bellow.</InputLabel>
        </Row>
        <TextField
          id="company_name"
          label="Company Name"
    //      onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="company_address"
          label="Address"
    //      defaultValue=""
          margin="normal"
        />
        <TextField
          required
          id="company_postalCode"
          label="Postal Code"
          margin="normal"
        />
        <TextField
          id="city"
          label="City"
          margin="normal"
        />
        <TextField
          id="select-currency"
          select
          label="Country"
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            MenuProps: {
              className: 'menu'
            }
          }}
          helperText="Please select your Country"
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="website"
          label="Website"
          margin="normal"
        />
        <TextField
          id="company_email"
          label="E-mail"
          margin="normal"
        />
        <TextField
          id="company_phone"
          label="Phone number"
          margin="normal"
        />
        <FormControl fullWidth>
        <TextField
          id="username"
          label="Username"
          margin="normal"
        />
        </FormControl>
        <TextField
          id="password"
          label="Password"
          type="password"
          helperText="Minium & characters"
          margin="normal"
        />
        <ReCAPTCHA
          ref="recaptcha"
          sitekey="6Lc3YlMUAAAAALp6hvOaCVTFb2_A5BJZMGXrmXB_"
        />
        <Row>
          <TextField
            id="confirm_password"
            type="password"
            label="Confirm Password"
            margin="normal"
          />
          <Button variant="raised" color="primary">
            <Icon className="rightIcon"></Icon>
            Create account
          </Button>
        </Row>
        By creating an account, you agree to our Terms.
      </Form>
    </LayoutWrapper>
    );
  }
}

CompanyInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(CompanyInfo);