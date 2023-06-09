function setCurrentTimePosition() {
  const currentDate = new Date();
  const currentDay = currentDate.getDay()
  const currentHour = currentDate.getHours()
  const currentMin = currentDate.getMinutes()

  // console.log({ currentDay }, { currentHour })
  const $currentTime = document.querySelector('.current-time')

  const $calendar = document.querySelector('.calendar-week')
  let calendarBlockSize = $calendar.clientHeight
  let calendarInlineSize = $calendar.clientWidth

  const calendarTimezoneCellInlineSize = document.querySelector('.timezone-cell').clientWidth;
  calendarInlineSize = calendarInlineSize - calendarTimezoneCellInlineSize

  const cellInlineSize = calendarInlineSize / 200


  // console.log({ calendarBlockSize }, { calendarInlineSize })
  const calendarDayBlockSize = document.querySelector('.calendar-day').clientHeight
  calendarBlockSize = calendarBlockSize - calendarDayBlockSize
  // console.log({ calendarBlockSize })
  const cellBlockSize = calendarBlockSize / 24
  // console.log({ cellBlockSize }, { cellInlineSize })

  $currentTime.style.top = `${cellBlockSize * (currentHour) + calendarDayBlockSize + (cellBlockSize / 60) * currentMin}px`
  $currentTime.style.left = `${cellInlineSize * (currentDay) + calendarTimezoneCellInlineSize + 24}px`
}

window.intervalCurrentTimePosition = null


function intervalCurrentTimePosition(interval = 1000) {
  clearInterval(window.intervalCurrentTimePosition)
  setCurrentTimePosition()
  window.intervalCurrentTimePosition = setInterval(setCurrentTimePosition, interval)
}

export {
  setCurrentTimePosition,
  intervalCurrentTimePosition
}