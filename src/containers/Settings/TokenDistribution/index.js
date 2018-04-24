import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import { TextField ,FormControl} from './textfield.style';



class ETH extends React.Component {
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
          id="eth_address"
          label="ETH Address"
    //      onChange={this.handleChange('name')}
          margin="normal"
        />
      </FormControl>
    </LayoutWrapper>
    );
  }
}

ETH.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(ETH);