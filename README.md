# checkersProject
 An ongoing project to build a checkers game from the ground up.

 Ultimate goals:
    1. Design a responsive and attractive layout.
    2. Use javascript to program a functional game.
    3. Implement the use of nodejs to make the game playable online.
    4. Eventual upgrade to chess game.
    5. Take over the world.

    Log 1: So far I have made a relatively okayish looking game board. Positioning and responsive
    layout is still finicky. I will keep messing with that, afterwards I can begin to design individual
    checker pieces. I am excited to get to the programming part but first thing's first.

    Log 2: Made the gameboard a little pretier. Fixed some minor design issues. Still need to implement responsive design. 
    Game pieces exist now. I may start experimenting with javascript for it and make it better looking after.

    Log 3: Switched id tags to class tags to avoid multiple uses of the same name. This caused errors in the HTML and will allow for easier identification within the javascript program. Identified each checker numerically using id tags.

    Log 4: Implemented first of the javascript. Added a display area which will show which color's turn it is. 
    Added a select function which chnages the border color of a selected checker. 
    Bug to fix with this: If a piece is selected and then another piece of a different color is
    then selected after, the previously selected checker piece will remain selected. 
    I will begin to work on mapping the playing area out and attemp to highlight available move tiles
    for individually selected pieces. 

    Log 5: Big changes.
    Switched style layout to CSS grid. (This is the way.) 
    Made the html file prettier by using javascipt to generate the 
    gameboard instead of having rows upon rows of ugly html.
    Refactored the css stylesheet.
    The gameboard is now made of divs instead of using table elements.
    Implementing object oriented programming to make the game engine more concise and easier to work with.
    Working on mapping out the entire game mechanics within a two demensional array which will update the html as changes
    to the state of the array occure. 
    Commented out highlighting mechanics for selected pieces for the time being.

    Log 6: Draw function now updates the gameboard with checkers depending on what values are within the 2D array.
    Cleaned up the code a little. 


