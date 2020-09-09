import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';

import { selectUser } from '../../../../selectors/userSelectors';
import useInput from '../../../../hooks/useInput';

import { editUserProfileAction } from '../../../../actions';

import '../../setting.css';

export const SettingProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const username = useInput('');
  const email = useInput('');

  const handleNewUserData = () => {
    const newUserData = {
      username: username.value,
      email: email.value,
    };

    dispatch(editUserProfileAction(user._id, newUserData));
  };

  return (
    <div className="componentWrapper">
      <form onSubmit={handleNewUserData}>
        <h4>From here you can adjust your user settings</h4>
        <div style={{ display: 'flex' }}>
          <div>
            <p>
              Current username:&#160;
              <strong>{user.username}</strong>
            </p>
            <Input label="New username" value={username.value} onChange={username.onChange} />
          </div>
          <div style={{ marginLeft: '20px', border: '1px solid black', opacity: '0.3' }} />
          <div style={{ display: 'grid', paddingLeft: '20px' }}>
            <p>
              Current Email:&#160;
              <strong>{user.email}</strong>
            </p>
            <Input label="New email" value={email.value} onChange={email.onChange} />
          </div>
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button
            content="Save changes"
            labelPosition="left"
            icon="save"
            positive
            onClick={() => handleNewUserData()}
          />
        </div>
      </form>
    </div>
  );
};
