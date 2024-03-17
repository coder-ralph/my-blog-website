import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'

TopBarProgress.config({
  barColors: {
    "0": "#F8EDFF",
    "0.5": "#F8EDFF",
    "1.0": "#F8EDFF",
  },
  shadowBlur: 10
})

const Loading = () => {
  return (
    <TopBarProgress />
  )
}

export default Loading
