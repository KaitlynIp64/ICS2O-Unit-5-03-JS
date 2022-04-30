// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Apr 2022
// This file contains xxx

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-03-JS/sw.js", {
    scope: "/ICS2O-Unit-5-03-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  const age17 = document.getElementById("age17").checked
  const age13 = document.getElementById("age13").checked
  const age5 = document.getElementById("age5").checked

  // process
  if (age17 == true) {
      document.getElementById("answer").innerHTML= "You can see an R rated movie alone"
  } else if (age13 == true) {
      document.getElementById("answer").innerHTML= "You can see an PG 13 rated movie alone"
  } else if (age5 == true) {
      document.getElementById("answer").innerHTML= "You can see an G rated movie alone"
  } else {
      document.getElementById("answer").innerHTML= "Uh. You are too young for most things!"
  }
}
    console.log("You are too young to watch most movies.") 
  }
}