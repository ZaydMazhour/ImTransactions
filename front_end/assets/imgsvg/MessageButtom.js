import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MessageButtom(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      {...props}
    >
      <Path d="M240-400h320v-80H240v80zm0-120h480v-80H240v80zm0-120h480v-80H240v80zM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80zm126-240h594v-480H160v525l46-45zm-46 0v-480 480z" />
    </Svg>
  )
}

export default MessageButtom
