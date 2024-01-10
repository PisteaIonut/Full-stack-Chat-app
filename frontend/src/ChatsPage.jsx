import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    'd440b0dd-a251-4fc9-b81a-53a9eea8f22a',
     props.user.username,
      props.user.secret
     )
  return (
  <div style={{ height: '100vh'}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
  </div>
  )
}

export default ChatsPage