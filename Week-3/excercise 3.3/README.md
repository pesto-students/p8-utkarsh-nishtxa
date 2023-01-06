The ouput of the given code is "Count is 0".

This behaviour was observered because the msg variable was initialised with a value only once when cnt value was 0. Since, Line number 6 was not executed again when count value was increased, therefore when we logged the variable, it printed the initialised msg value. 

If instead of the generating msg outside the function log, we initialise it inside the log function, it will take the updated value of cnt, which will be 3 in this case, making the logged msg as "Count is 3"!