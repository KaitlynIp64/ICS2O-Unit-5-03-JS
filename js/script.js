// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Mar 2022
// This file contains xxx

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02-JS/sw.js", {
    scope: "/ICS2O-Unit-5-02-JS/",
  })
}

/**
 * This function determines if an integer is negative or positive.
 */
function myButtonClicked() {
  const age = parseInt(document.getElementById("option-1").value)
  const age = parseInt(document.getElementById("option-2").value)
  const age = parseInt(document.getElementById("option-3").value)
  const age = parseInt(document.getElementById("option-4").value)
// if ... then ... elseif ... else example
  if (age == "option-1") {
    console.log("You can watch R-rated movies.")
  } 
  else if (age == "option-2") {
    console.log("You can watch pg-13 rated movies.")
  } 
  else if (age == "option-3") {
    console.log("You can watch G-rated movies.")
  } 
  else {
    console.log("You are too young to watch most movies.") 
  }
}