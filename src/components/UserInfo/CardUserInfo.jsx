import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { connect } from 'react-redux';
import { Map, fromJS } from 'immutable';
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

// Error messages to display for validation
const errorMessages = {
  wordsError: 'Please only use letters',
  numericError: 'Please provide a number',
  emailError: 'This is not a valid email',
};

export class CardUserInfo extends Component {
  constructor(props) {
    super(props);

    this.setCanSubmit = this.setCanSubmit.bind(this);
    this.setUserState = this.setUserState.bind(this);

    this.setUser(props);

    this.canSubmit = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setUser(nextProps);
  }

  // Remove user and canSubmit state when view is to be destoryed
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(actionCreators.removeState('user'));
    dispatch(actionCreators.removeState('canSubmit'));
  }

  // Convenience function to not throw errors for nested maps
  setUser(props) {
    this.user = props.user || Map();
    this.user.name = this.user.get('name') || Map();
    this.user.location = this.user.get('location') || Map();
    this.user.picture = this.user.get('picture') || Map();
  }

  // Convenience function for formatting the JS date from returned timestamp
  getJSDateFromTimestamp(timestamp) {
    return timestamp ? new Date(timestamp * 1000) : null;
  }

  // Used to display the full users name at the top of the card
  getFullName() {
    const title = this.user.getIn(['name', 'title']) || '';
    const firstName = this.user.getIn(['name', 'first']) || '';
    const lastName = this.user.getIn(['name', 'last']) || '';
    return `${title} ${firstName} ${lastName}`;
  }

  // Gets the users registered date to display at the top of the screen
  getRegisteredDate() {
    if (!this.user.get('registered')) return '';

    const registeredDate = this.getJSDateFromTimestamp(this.user.get('registered'));
    return `Registered on ${registeredDate.toISOString().slice(0, 10)}`;
  }

  // When the form triggers as valid, sets the state.
  // Needed to disable/undisable the save button
  setCanSubmit(canSubmit) {
    if (this.canSubmit === canSubmit) return;
    this.canSubmit = canSubmit;

    const { dispatch } = this.props;
    dispatch(actionCreators.setState({ canSubmit }));
  }

  // Calls the action to update the user state with the new data
  // User state needs to be updated for teh calls to the backend
  setUserState(data) {
    if (!this.canSubmit) return;

    const transformedData = this.refs.form.getModel();
    transformedData.dob = transformedData.dob.getTime();

    const { dispatch } = this.props;
    dispatch(actionCreators.updateUser({ user: transformedData }));
  }

  /* Layout uses a nested structure as follows
  * Card
  *  CardHeader
  *  CardText
  *   Formsy.Form
  *     Form fields and Paper
  */
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
            ref="form"
            onChange={this.setUserState}
            onValid={() => this.setCanSubmit(true)}
            onInvalid={() => this.setCanSubmit(false)}
            onValidSubmit={this.submitForm}
            onInvalidSubmit={this.notifyFormError}
          >
            <Subheader>Name</Subheader>
            <Paper zDepth={1}>
              <FormsySelect
                name="name.title"
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
                name="name.first"
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
                name="name.last"
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
                name="location.street"
                required
                style={style}
                underlineShow={false}
                floatingLabelText="Street"
                floatingLabelFixed
                value={this.user.getIn(['location', 'street'])}
              />
              <Divider />
              <FormsyText
                name="location.city"
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
                name="location.state"
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
                name="location.zip"
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
            <FormsySelect
              name="gender"
              required
              style={style}
              underlineShow={false}
              floatingLabelText="Gender"
              floatingLabelFixed
              value={this.user.get('gender')}
              menuItems={this.selectFieldItems}
            >
              <MenuItem value={'male'} primaryText="Male" />
              <MenuItem value={'female'} primaryText="Female" />
            </FormsySelect><br />
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
              name="PPS"
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
