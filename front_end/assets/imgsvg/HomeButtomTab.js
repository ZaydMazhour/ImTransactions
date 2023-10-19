import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeButtomTab(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      {...props}
    >
      <Path d="M200-160v-320H80l400-360 160 144v-104h120v212l120 108H760v320H520v-240h-80v240H200zm80-80h80v-240h240v240h80v-312L480-732 280-552v312zm80-240h240-240zm40-79h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559z" />
    </Svg>
  )
}

export default HomeButtomTab
