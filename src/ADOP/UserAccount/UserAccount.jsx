import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { useAuth } from '../AuthContex'; // Import the Auth context
import LoadingPage from '../Lodingpage/Loding'; // Import the loading page component
import './UserAccount.css';
const UserAccount = () => {
  const { userInfo, setUserInfo } = useAuth(); // Access and update user info
  const [loading, setLoading] = useState(true); // State for loading screen
  const [modalActive, setModalActive] = useState(true);
  const [newProfilePic, setNewProfilePic] = useState('');
  const [profileUpdateLoading, setProfileUpdateLoading] = useState(false);
  const [passwordUpdateLoading, setPasswordUpdateLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setModalActive(false);
    navigate(-1);
  };

  const handleProfilePicUpdate = async () => {
    if (!newProfilePic) {
      toast.error('Please enter a valid URL for the profile picture.', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    if (!/\.(jpg|jpeg|png|webp|gif|svg)$/.test(newProfilePic)) {
      toast.error('The URL provided is not a valid image URL.', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    setProfileUpdateLoading(true);
    try {
      const response = await fetch(
        `https://sheetdb.io/api/v1/ayfccol402nxi/Email/${userInfo?.Email}`, // Use unique identifier
        {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              Avatar: newProfilePic,
            },
          }),
        }
      );

      if (response.ok) {
        toast.success('Profile picture updated successfully!', {
          position: 'top-center',
          autoClose: 5000,
          theme: 'light',
          transition: Bounce,
        });
        setUserInfo((prevInfo) => ({ ...prevInfo, Avatar: newProfilePic }));
        setNewProfilePic('');
      } else {
        toast.error('Failed to update profile picture.');
      }
    } catch (error) {
      console.error('Error updating profile picture:', error);
      toast.error('An error occurred while updating the profile picture.');
    } finally {
      setProfileUpdateLoading(false);
    }
  };

  const handlePasswordUpdate = async () => {
  if (!currentPassword || !newPassword || !confirmPassword) {
    toast.error('All fields are required.', {
      position: 'top-center',
      autoClose: 5000,
      theme: 'light',
      transition: Bounce,
    });
    return;
  }

  if (!userInfo?.Email) {
    toast.error('Email is not available. Cannot validate password.', {
      position: 'top-center',
      autoClose: 5000,
      theme: 'light',
      transition: Bounce,
    });
    return;
  }

  if (newPassword !== confirmPassword) {
    toast.error('New password and confirmation do not match.', {
      position: 'top-center',
      autoClose: 5000,
      theme: 'light',
      transition: Bounce,
    });
    return;
  }

  setPasswordUpdateLoading(true);

  try {
    const response = await fetch(
      `https://sheetdb.io/api/v1/ayfccol402nxi?Email=${userInfo?.Email}`
    );

    const text = await response.text();

    const data = JSON.parse(text);
    const userData = Array.isArray(data) ? data[0] : null;

    if (!userData) {
      toast.error('User not found in database.', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    if (userData?.Password !== currentPassword) {
      toast.error('Current password is incorrect.', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }

    // Update password
    const updateResponse = await fetch(
      `https://sheetdb.io/api/v1/ayfccol402nxi/Email/${userInfo?.Email}`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            Password: newPassword,
          },
        }),
      }
    );

    if (updateResponse.ok) {
      toast.success('Password updated successfully!', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      toast.error('Failed to update password.', {
        position: 'top-center',
        autoClose: 5000,
        theme: 'light',
        transition: Bounce,
      });
    }
  } catch (error) {
    console.error('Error updating password:', error);
    toast.error('An error occurred while updating the password.', {
      position: 'top-center',
      autoClose: 5000,
      theme: 'light',
      transition: Bounce,
    });
  } finally {
    setPasswordUpdateLoading(false);
  }
};

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="main-username-container">

      {modalActive && (
        <div className="modal-content">
          <h3 className='profile'>Profile</h3>
          <div className="profileinfoPage">
            <div className="profile-img-page">
            <img
            src={userInfo?.Avatar || 'https://i.sstatic.net/l60Hf.png'}
            alt="Profile"
            className="modal-profile-pic"
          />
            </div>
          
          <div className="user-info">
            <p className="username">Name: {userInfo?.['First-Name'] || 'User Name'}</p>
            <p>Email: {userInfo?.Email || 'user@example.com'}</p>
            <p>Phone: {userInfo?.['Phone-Number'] || 'N/A'}</p>
            <Link to="/adoptly/UserAccount/Registration"><button className="change">Adopt a Pet Out</button></Link>
          </div>

          </div>
          <hr style={{width:'90vh' , color:"black"}}/>
          <div>
            
          

            <h3 className='username'>Update Profile Here</h3>
            <input
              type="url"
              className="changepro"
              placeholder="Enter new profile picture URL"
              value={newProfilePic}
              onChange={(e) => setNewProfilePic(e.target.value)}
              disabled={profileUpdateLoading}
            />
            <button onClick={handleProfilePicUpdate} disabled={profileUpdateLoading} className="change">
              {profileUpdateLoading ? 'Updating...' : 'Update Picture'}
            </button>
          </div>
          <button onClick={() => setShowPasswordFields(!showPasswordFields)} className="change">
            Change Password
          </button>
          {showPasswordFields && (
         
          <div className="password-change">
            <input
              className="change"
              type="password"
              placeholder="Current Password "
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              disabled={passwordUpdateLoading}
            />
            <input
              type="password"
              className="change"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={passwordUpdateLoading}
            />
            <input
              type="password"
              className="change"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={passwordUpdateLoading}
            />
            <button style={{marginBottom: '10%'}} onClick={handlePasswordUpdate} disabled={passwordUpdateLoading} className="change">
              {passwordUpdateLoading ? 'Updating...' : 'Change Password'}
            </button>
          </div>
          )}
          <button className="close-btn" onClick={handleClose} disabled={profileUpdateLoading || passwordUpdateLoading}>
            ×
          </button>
         
        </div>
      )}
      
    </div>
  );
};

export default UserAccount;
