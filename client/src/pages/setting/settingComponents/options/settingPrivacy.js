import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';

import { selectUser } from '../../../../selectors/userSelectors';

import '../../setting.css';
import { editUserProfileAction } from '../../../../actions';

export const SettingPrivacy = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [agreementType, setAgreementType] = useState('no');

  const handlePrivacyResponse = () => {
    const newUserData = { userId: user._id, emailConsent: agreementType };

    dispatch(editUserProfileAction(user._id, newUserData));
  };
  return (
    <div className="componentWrapper" style={{ display: 'block' }}>
      <div className="componentWrapper">
        <form onSubmit={handlePrivacyResponse}>
          <h4>From here you can adjust your user settings</h4>
          <div style={{ display: 'flex' }}>
            <div>
              <p>
                Do you agree to receive emails
                that will keep you up-to-date with your
                asset developments
              </p>
              <Form.Radio
                style={{ paddingLeft: '15px' }}
                label="Yes"
                value="yes"
                checked={agreementType === 'yes'}
                onClick={() => setAgreementType('yes')}
              />
              <Form.Radio
                style={{ paddingLeft: '15px' }}
                label="No"
                value="no"
                checked={agreementType === 'no'}
                onClick={() => setAgreementType('no')}
              />
            </div>
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button
              content="Save changes"
              labelPosition="left"
              icon="save"
              positive
              onClick={() => handlePrivacyResponse()}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
