Since the given code was returning items, we had the vulnerability of accessing items array directly and even manipulating it.

We have refactored the code in such a way that the functions are able to access the items var through the concept of closure, but from outside through stack obj you will not be able to access the item variable, and hence won't be able to manipulate it.