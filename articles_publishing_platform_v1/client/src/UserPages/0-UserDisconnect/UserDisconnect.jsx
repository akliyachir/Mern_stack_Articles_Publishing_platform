import './UserDisconnect.css';
import { BsEmojiSmile, BsEmojiDizzy } from 'react-icons/bs';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

export default function UserDisconnect() {
  // -- useNavigate initialise
  const navigate = useNavigate();
  // -- useState
  // -- -- disconnected message
  const [useIsDisconnected, setuseIsDisconnected] = useState(false);

  // -- remove item from global context
  const { userState, userDispatch } = useContext(UserContext);

  // -- handle userdisconnection
  const handleUserDisconnectButton = () => {
    globalThis.localStorage.removeItem('user');
    setuseIsDisconnected(true);
    userDispatch({ type: 'DISCONNECT' });
    globalThis.localStorage.removeItem('user');
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className='UserDisconnect'>
      <div className='UserDisconnectContent'>
        <div className='sayingGoodByUserDisconnectContainer'>
          {useIsDisconnected ? (
            <div className='userIsDisConnected'>
              <div className='sayingGoodByUserDisconnectTheSmily'>
                <BsEmojiDizzy />
              </div>
              <p className='sayingGoodByUserDisconnectTheSentence'>
                Disconnected!
              </p>
            </div>
          ) : (
            <div className='userIsConnected'>
              <p className='sayingGoodByUserDisconnectTheSentence'>
                Hope to see you soon!
              </p>
              <div className='sayingGoodByUserDisconnectTheSmily'>
                <BsEmojiSmile />
              </div>
              <button
                className='buttonDisconnectUser'
                onClick={handleUserDisconnectButton}
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
