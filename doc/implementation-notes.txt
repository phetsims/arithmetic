
Implementation Notes for Arithmetic
===================================

The HTML5 code for this simulation was originally written by an outside contractor, then taken over by PhET.
Some elements of the code from the contractor were structured a bit differently than they would have been had they been
implemented by PhET from the outset.  Some of the code, such as the nature of the state transitions, was rewritten in
order to make it more maintainable and extensible.  Other portions were left as they were in the interests of getting
the sim published in a timely manner.  As a result, this code is probably going to look a bit odd to anyone coming along
to maintain it some years in the future, since there were two very different ideas of what constitutes good object-
oriented model-view-controller software design, and good software design in general, in the minds of the two primary
authors of this code. Keeping this in mind may help when working to decipher what lies within.

A note on terminology: The sim uses the terms multiplicand, multiplier, and product when referring to the portions of
a multiplication equation.  These seem to be the common terms used based on what was seen when researching this on line.
For example, in the equation 4 * 5 = 20, 4 is the multiplicand, 5 is the multiplier, and 20 is the product.

One thing that may be surprising to future maintainers is that there is no model element corresponding to an individual
cell in a multiplication table.  Instead, there are simply arrays that track whether a given cell is used or not, and
there is a built-in assumption that the cells correspond to the appropriate position in a square multiplication table.
An alternative approach would have been to have each cell exist in the model, and have a properties that indicate the
state of the cell, such as whether it is selected, whether the corresponding number should be visible or hidden, and so
forth.  I (@jbphet) believe that the original developer designed it this way because of concerns about the performance
impact of creating and linking so many properties. I didn't change this because the original designer may well have been
correct, and it would have been a shame to move the code over to a property-based model and then move it all back.

This design decision has several fairly major implications for the code.  First, since there are no cell properties, the
state of each cell must be obtained by indexing into an array.  In some places, this means a two-dimensional array
indexed by multiplicand and multiplier, and in some cases it means a three-dimensional array indexed by level,
multiplicand, and multiplier.  These must obviously all be indexed correctly, or the sim won't behave properly.  In
several places, the multiplicand and multipliers must be reduced by 1 in order to index correctly into the array.  Some
effort has gone into encapsulating this so that it occurs in as few places as possible, but it still can be seen in
several places throughout the code.

Another implication of this design decision is that there is no clear signal from the model to the view that something
has changed about a given cell's state.  This leads to a lot of code in the view that is updating the appearance of
ALL cells in the currently displayed multiplication table on a state change for the game.  This works fine, and the
performance seems to be adequate, but it sometimes looks odd to see large blocks of update code for what is a fairly
small change in the model state.

Another design decision that was perhaps a bit unusual is that the multiplication table for each screen was implemented
as a set of three tables, and the visibility is controlled by the level, rather than just having a total of nine tables
and have their visibility controlled by the parent view.  Hard to say why it is done this way, but it didn't seem
worth unraveling.

The bottom line is that for a simulation that is conceptually quite simple, the code may take a little extra time for
future maintainers to fully wrap their heads around.