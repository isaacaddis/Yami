yamiColorArray = ["#1abqc","#2ecc71","#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60"]

###
    Given a parent div, iterate through its children, and apply colors from yamiColorArray at interval i.
###

parentDivForMixr = document.getElementsByClassName()

if parentDivForMixr.length >= 1
    for i in parentDivForMixr
        console.log i
###
    Mixr function: Iterate through child divs and add a background-color of a
###
mixr = (children) ->
    for i in children
        console.log i
###
	For generation of random integers
###
getRandomInt = (min, max)->
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min)) + min
###
	Return a number given a color
###
generateColor = (num) ->
	if num is 1
		return "#1abc9c"
	else if num is 2
		return "#2ecc71"
	else if num is 3
		return "#3498db"
	else if num is 4
		return "#9b59b6"
	else if num is 5
		return "#16a085"
	else if num is 6
		return "#27ae60"
	else if num is 7
		return "#2980b9"
	else if num is 8
		return "#8e44ad"
	else if num is 9
		return "#2c3e50"
	else
		return "black"
###
	Assign a random color to all classes of "random-color-text"
###
listOfRandomColor = document.getElementsByClassName("random-color-text")

for i in listOfRandomColor
	listOfRandomColor[i].style.color = generateColor(getRandomInt(1,10))

collapse  = ()->
	x = document.getElementById("topnav")
	if x.classname == "topnav"
		x.classname+=" responsive"
	else
		x.classname = "topnav"