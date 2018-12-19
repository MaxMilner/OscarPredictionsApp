const countdownClock = {

countdown() {
// Gets the time of the Oscars
  const countDownDate = new Date("February 24, 2019 8:00:00").getTime()

// Updates every second
  const update = setInterval(function() {

// Get today's date and time
  const today = new Date().getTime()

// Subtracts the difference of times to get the remainder of time
  const distance = countDownDate - today

// Calculates the days, hours, minutes and seconds
// Math.floor rounds down to whole number so decimals and fractions don't happen
  const days = Math.floor(distance / (1000 * 60 * 60 * 24) )
  const hours = Math.floor( (distance % (1000 * 60 * 60 * 24) ) / (1000 * 60 * 60) )
  const minutes = Math.floor( (distance % (1000 * 60 * 60) ) / (1000 * 60) )
  const seconds = Math.floor( (distance % (1000 * 60)) / 1000)

// Displays the result in the clockDiv element
  document.getElementById("clockDiv").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

// If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(update)
    document.getElementById("clockDiv").innerHTML = "NOW"
  }
}, 1000)
}
}

export default countdownClock