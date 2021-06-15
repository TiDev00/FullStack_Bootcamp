/// PART 8 - LOOP EXERCISES
// Before we continue on with your project, let's practice some loops!
// You'll have just two problems, but you'll need to use each loop type we
// learned about to solve them!


///////////////////
//// PROBLEM 1 ///
/////////////////

// Use a For Loop to print (console.log()) out the word "hello" 5 times.
//
// Do this with a While Loop and a For Loop

// While Loop
i=0
while(i<5){
    console.log("hello");
    i++
}
// For Loop
for (j=0; j<5; j++){
    console.log("hello")
}



/////////////////
// PROBLEM 2 ///
///////////////

// Use Loops to console.log() (print out) all the odd numbers from 1 to 25
// Do this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
num=1
while(num<=25){
    console.log(num)
    num++
}

// METHOD TWO
// For Loop
for(l=1; l<26; l++){
    console.log(l)
}

// DIFFERENCE ENTRE i++ et ++i
/*
i = 0;
j = ++i;      <=> i = i+1;
                  j = i;

i = 0;
j = i++;      <=> i = 0;
                  j = i+1;
*/
