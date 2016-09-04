import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import { FormsyDate, FormsySelect, FormsyText } from 'formsy-material-ui/lib';

const style = {
  marginLeft: 20,
};

const errorMessages = {
  wordsError: 'Please only use letters',
  numericError: 'Please provide a number',
  emailError: 'This is not a valid email',
};

export class CardUserInfo extends Component {
  constructor(props) {
    super(props);

    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);

    this.user = props.user || Map();
    this.user.name = this.user.get('name') || Map();
    this.user.location = this.user.get('location') || Map();
    this.user.picture = this.user.get('picture') || Map();

    this.canSubmit = false;
  }

  componentWillReceiveProps(nextProps) {
    this.user = nextProps.user;
  }

  getJSDateFromTimestamp(timestamp) {
    return timestamp ? new Date(timestamp * 1000) : null;
  }

  getFullName() {
    const title = this.user.getIn(['name', 'title']) || '';
    const firstName = this.user.getIn(['name', 'first']) || '';
    const lastName = this.user.getIn(['name', 'last']) || '';
    return `${title} ${firstName} ${lastName}`;
  }

  getRegisteredDate() {
    if (!this.user.registered) return '';

    const registeredDate = this.getJSDateFromTimestamp(this.user.registered);
    return `Registered on ${registeredDate.toISOString().slice(0, 10)}`;
  }

  enableButton() {
    this.canSubmit = true;
  }

  disableButton() {
    this.canSubmit = false;
  }

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
  }

  notifyFormError(data) {
    console.error('Form error:', data);
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.getFullName()}
          subtitle={this.getRegisteredDate()}
          avatar={this.user.getIn(['picture', 'thumbnail'])}
        />
        <CardText>
          <Formsy.Form
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <Subheader>Name</Subheader>
            <Paper zDepth={1}>
              <FormsySelect
                name="title"
                required
                style={style}
                underlineShow={false}
                floatingLabelText="Title"
                floatingLabelFixed
                menuItems={this.selectFieldItems}
              >
                <MenuItem value={'Miss'} primaryText="Miss" />
                <MenuItem value={'Ms'} primaryText="Ms" />
                <MenuItem value={'Mr'} primaryText="Mr" />
                <MenuItem value={'Sir'} primaryText="Sir" />
                <MenuItem value={'Mrs'} primaryText="Mrs" />
                <MenuItem value={'Dr'} primaryText="Dr" />
              </FormsySelect>
              <Divider />
              <FormsyText
                name="first"
                validations="isWords"
                validationError={errorMessages.wordsError}
                required
                style={style}
                underlineShow={false}
                floatingLabelText="First Name"
                floatingLabelFixed

                value={this.user.getIn(['name', 'first'])}
              />
              <Divider />
              <FormsyText
                name="last"
                validations="isWords"
                validationError={errorMessages.wordsError}
                required
                style={style}
                underlineShow={false}
                floatingLabelText="Last Name"
                floatingLabelFixed

                value={this.user.getIn(['name', 'last'])}
              />
              <Divider />
            </Paper>
            <Subheader>Location</Subheader>
            <Paper zDepth={1}>
              <FormsyText
                name="street"
                required
                style={style}
                underlineShow={false}
                floatingLabelText="Street"
                floatingLabelFixed

                value={this.user.getIn(['location', 'street'])}
              />
              <Divider />
              <FormsyText
                name="city"
                validations="isWords"
                validationError={errorMessages.wordsError}
                required
                style={style}
                underlineShow={false}
                floatingLabelText="City"
                floatingLabelFixed

                value={this.user.getIn(['location', 'city'])}
              />
              <Divider />
              <FormsyText
                name="state"
                validations="isWords"
                validationError={errorMessages.wordsError}
                required
                style={style}
                underlineShow={false}
                floatingLabelText="State"
                floatingLabelFixed

                value={this.user.getIn(['location', 'state'])}
              />
              <Divider />
              <FormsyText
                name="zip"
                validations="isWords"
                validationError={errorMessages.wordsError}
                required
                style={style}
                underlineShow={false}
                floatingLabelText="Zip"
                floatingLabelFixed

                value={this.user.getIn(['location', 'zip'])}
              />
              <Divider />
            </Paper>
            <FormsyText
              name="email"
              validations="isEmail"
              validationError={errorMessages.emailError}
              required
              style={style}
              underlineShow={false}
              floatingLabelText="Email"
              floatingLabelFixed
              value={this.user.get('email')}
            /><br />
            <FormsyDate
              name="dob"
              required
              style={style}
              underlineShow={false}
              floatingLabelText="Date of Birth"
              floatingLabelFixed
              autoOk
              value={this.getJSDateFromTimestamp(this.user.get('dob'))}
            />
            <FormsyText
              name="phone"
              required
              style={style}
              underlineShow={false}
              floatingLabelText="Phone Number"
              floatingLabelFixed
              value={this.user.get('phone')}
            />
            <FormsyText
              name="cell"
              required
              style={style}
              underlineShow={false}
              floatingLabelText="Cell Number"
              floatingLabelFixed
              value={this.user.get('cell')}
            /><br />
            <FormsyText
              name="pps"
              validations="isNumeric"
              validationError={errorMessages.numericError}
              required
              style={style}
              underlineShow={false}
              floatingLabelText="PPS"
              floatingLabelFixed
              value={this.user.get('PPS')}
            />
          </Formsy.Form>
        </CardText>
      </Card>
    );
  }
}

CardUserInfo.propTypes = {
  user: React.PropTypes.object,
  canSubmit: React.PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    user: state.get('user'),
  };
}

export const GridListUserListContainer = connect(mapStateToProps)(CardUserInfo);
