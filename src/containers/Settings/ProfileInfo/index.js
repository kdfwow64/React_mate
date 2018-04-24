import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { MenuItem } from '../../../components/uielements/menus';
import { Form, TextField ,DisableField} from './textfield.style';

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


class ProfileInfo extends React.Component {
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
        <TextField
          id="fist_name"
          label="First Name"
    //      onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="last_name"
          label="Last Name"
    //      defaultValue=""
          margin="normal"
        />
        <TextField
          required
          id="address"
          label="Address"
          defaultValue="Tradevska 23"
          margin="normal"
        />
        <TextField
          id="city"
          label="City"
          defaultValue="Beograd"
          margin="normal"
        />
        <TextField
          id="postalCode"
          label="Postal Code"
          defaultValue="100"
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
          id="email_1"
          label="E-mail"
          defaultValue="consumercompany@energypremier.com"
          margin="normal"
        />
        <TextField
          id="phone"
          label="Phone number"
          defaultValue="+381691202555"
          margin="normal"
        />
        <TextField
          id="email_2"
          label="E-mail"
          defaultValue="consumercompany@energypremier.com"
          margin="normal"
        />
        <DisableField
          disabled
          id="username"
          label="Username"
          defaultValue="consumercompany"
          margin="normal"
        />
        <TextField
          id="telegram"
          label="Telegram"
          margin="normal"
        />
        <DisableField
          disabled
          id="afflillate_code"
          label="Afflilate Code"
          defaultValue=" "
          margin="normal"
        />
      </Form>
    </LayoutWrapper>
    );
  }
}

ProfileInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(ProfileInfo);