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
    this.getJSDateFromTimestamp = this.getJSDateFromTimestamp.bind(this);
  }

  getJSDateFromTimestamp(timestamp) {
    return new Date(timestamp * 1000);
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="URL Avatar"
          subtitle="Subtitle"
          avatar="https://randomuser.me/api/portraits/women/17.jpg"
        />
        <CardText>
          <Subheader>Name</Subheader>
          <Paper zDepth={2}>
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="Title"
              floatingLabelFixed
              value="Mr"
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="First Name"
              floatingLabelFixed
              value="David"
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="Last Name"
              floatingLabelFixed
              value="Ffrench"
            />
            <Divider />
          </Paper>
          <Subheader>Location</Subheader>
          <Paper zDepth={2}>
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="Street"
              floatingLabelFixed
              value="1119 grove road"
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="City"
              floatingLabelFixed
              value="Mountmellick"
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="State"
              floatingLabelFixed
              value="rhode island"
            />
            <Divider />
            <TextField
              style={style}
              underlineShow={false}
              floatingLabelText="Zip"
              floatingLabelFixed
              value="88061"
            />
            <Divider />
          </Paper>
          <TextField
            style={style}
            underlineShow={false}
            floatingLabelText="Email"
            floatingLabelFixed
            value="olivia.young@example.com"
          /><br />
          <DatePicker
            style={style}
            underlineShow={false}
            floatingLabelText="Date of Birth"
            floatingLabelFixed
            autoOk
            value={this.getJSDateFromTimestamp(818810543)}
          />
          <TextField
            style={style}
            underlineShow={false}
            floatingLabelText="Phone Number"
            floatingLabelFixed
            value="011-475-1126"
          />
          <TextField
            style={style}
            underlineShow={false}
            floatingLabelText="Cell Number"
            floatingLabelFixed
            value="081-725-2254"
          /><br />
          <TextField
            style={style}
            underlineShow={false}
            floatingLabelText="PPS"
            floatingLabelFixed
            value="4335321T"
          />
        </CardText>
      </Card>
    );
  }
}

export default UserInfo;
