# Helpers

This is a set of classes that act as a tool to help you with alignment and layout. 

### Space Styles Margin and Padding

We recommend using space styles within your app. It will help with consistent spacing between components.

The classes available can be applied to margin and padding. The class space grows in increments of 8px.

```
Class semantics
{spacing}-{location}-{increment} 

//Spacing: Padding(P) and margin(M) is available. 
//Location:This where the space will be applied. Top(T), right(R), bottom(B), left(L), all sides(A), 
  left and right(X), top and bottom(Y).

//Increments of spacing 1-3
.p-t-1: padding-top: 8px;
.p-t-2: padding-top: 16px;
.p-t-3: padding-top: 24px; 


//Example of type of spacing classes available for padding and margin
.p-t-1: padding-top: 8px;
.p-r-1: padding-right: 8px;
.p-b-1: padding-bottom:8px;
.p-l-1: padding-left: 8px;
.p-x-1: padding-left: 8px; padding-right: 8px;
.p-y-1: padding-top: 8px; padding-bottom: 8px;
.p-a-1: padding: 8px; // This will apply to all sides

//For margin simply replace the p with m from from p-t-1 e.g.
.m-t-1: margin-top: 8px;

//Within HTML call the class
<div class = "p-a-2"></div> //Padding on all sides 16px
```



