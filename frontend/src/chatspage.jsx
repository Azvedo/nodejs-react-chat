import { PrettyChatWindow } from 'react-chat-engine-pretty';
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
  return (
    <div style={{height:"100vh", width:"100vw",overflowX:0}}>
        <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID} 
        username={props.user.username} // adam
        secret={props.user.secret} // 123123
        style={{ height: "100%" }}
      />
    </div>
  );
};

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage;