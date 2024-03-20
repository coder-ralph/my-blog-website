import React from 'react'
import TopBarProgress from 'react-topbar-progress-indicator'

TopBarProgress.config({
  barColors: {
    "0": "#ff695e",
    "0.5": "#ff695e",
    "1.0": "#ff695e",
  },
  shadowBlur: 10
})

const Loading = () => {
  return (
    <TopBarProgress />
  )
}

export default Loading
