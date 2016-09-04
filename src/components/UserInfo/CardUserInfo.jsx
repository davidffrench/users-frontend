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
import * as actionCreators from './../../actions';

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

    this.setCanSubmit = this.setCanSubmit.bind(this);

    this.setUser(props);

    this.canSubmit = false;
  }

  setUser(props) {
    this.user = props.user || Map();
    this.user.name = this.user.get('name') || Map();
    this.user.location = this.user.get('location') || Map();
    this.user.picture = this.user.get('picture') || Map();
  }

  componentWillReceiveProps(nextProps) {
    this.setUser(nextProps);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(actionCreators.removeState('user'));
    dispatch(actionCreators.removeState('canSubmit'));
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
    if (!this.user.get('registered')) return '';

    const registeredDate = this.getJSDateFromTimestamp(this.user.get('registered'));
    return `Registered on ${registeredDate.toISOString().slice(0, 10)}`;
  }

  setCanSubmit(canSubmit) {
    if (this.canSubmit === canSubmit) return;
    this.canSubmit = canSubmit;

    const { dispatch } = this.props;
    dispatch(actionCreators.setState({ canSubmit }));
  }

  submitForm(data) {
    alert(JSON.stringify(data, null, 4));
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
            onValid={() => this.setCanSubmit(true)}
            onInvalid={() => this.setCanSubmit(false)}
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
                value={this.user.getIn(['name', 'title'])}
                menuItems={this.selectFieldItems}
              >
                <MenuItem value={'miss'} primaryText="Miss" />
                <MenuItem value={'ms'} primaryText="Ms" />
                <MenuItem value={'mr'} primaryText="Mr" />
                <MenuItem value={'sir'} primaryText="Sir" />
                <MenuItem value={'mrs'} primaryText="Mrs" />
                <MenuItem value={'dr'} primaryText="Dr" />
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
                validations="isNumeric"
                validationError={errorMessages.numericError}
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
    canSubmit: state.get('canSubmit'),
  };
}

export const GridListUserListContainer = connect(mapStateToProps)(CardUserInfo);
