import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

const style = {
  marginLeft: 20,
};

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.user = props.user || {};
    this.user.name = this.user.name || {};
    this.user.location = this.user.location || {};
    this.user.picture = this.user.picture || {};
  }

  getJSDateFromTimestamp(timestamp) {
    return timestamp ? new Date(timestamp * 1000) : '';
  }

  getFullName() {
    const title = this.user.name.title || '';
    const firstName = this.user.name.first || '';
    const lastName = this.user.name.last || '';
    return `${title} ${firstName} ${lastName}`;
  }

  getRegisteredDate() {
    if (!this.user.registered) return '';

    const registeredDate = this.getJSDateFromTimestamp(this.user.registered);
    return `Registered on ${registeredDate.toISOString().slice(0, 10)}`;
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.getFullName()}
          subtitle={this.getRegisteredDate()}
          avatar={this.user.picture.thumbnail}
        />
        <CardText>
          <Subheader>Name</Subheader>
          <Paper zDepth={1}>
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="Title"
              floatingLabelFixed
              value={this.user.name.title}
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="First Name"
              floatingLabelFixed
              value={this.user.name.first}
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="Last Name"
              floatingLabelFixed
              value={this.user.name.last}
            />
            <Divider />
          </Paper>
          <Subheader>Location</Subheader>
          <Paper zDepth={1}>
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="Street"
              floatingLabelFixed
              value={this.user.location.street}
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="City"
              floatingLabelFixed
              value={this.user.location.city}
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="State"
              floatingLabelFixed
              value={this.user.location.state}
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="Zip"
              floatingLabelFixed
              value={this.user.location.zip}
            />
            <Divider />
          </Paper>
          <TextField
            style={style}
            underlineShow={false}
            floatingLabelText="Email"
            floatingLabelFixed
            value={this.user.email}
          /><br />
          <DatePicker
            style={style}
            underlineShow={false}
            floatingLabelText="Date of Birth"
            floatingLabelFixed
            autoOk
            value={this.getJSDateFromTimestamp(this.user.dob)}
          />
          <TextField
            style={style}
            underlineShow={false}
            floatingLabelText="Phone Number"
            floatingLabelFixed
            value={this.user.phone}
          />
          <TextField
            style={style}
            underlineShow={false}
            floatingLabelText="Cell Number"
            floatingLabelFixed
            value={this.user.cell}
          /><br />
          <TextField
            style={style}
            underlineShow={false}
            floatingLabelText="PPS"
            floatingLabelFixed
            value={this.user.PPS}
          />
        </CardText>
      </Card>
    );
  }
}

UserInfo.propTypes = {
  user: React.PropTypes.object.isRequired,
};

export default UserInfo;
