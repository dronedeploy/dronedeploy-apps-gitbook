# Helpers

This is a set of classes to help you with alignment and layout.

### Padding

We recommend using our classes for spacing within your app. The following classes will help you with consistent spacing within your app. The spacing classes are based on increments of 8px.  The left value represents padding or margin. The middle value is the location where the space will be applied and the number to the right is the px increments that will go up to 3.

```
Class semantics
{spacing}-{location}-{increment} 

//Increments of spacing sizes
.p-t-1: padding-top: 8px;
.p-t-2: padding-top: 16px;
.p-t-3: padding-top: 24px; 


//Type of spacing classes available for padding and margin
.p-t-1: padding-top: 8px;
.p-r-1: padding-right: 8px;
.p-b-1: padding-bottom:8px;
.p-l-1: padding-left: 8px;
.p-x-1: padding-left: 8px; padding-right: 8px;
.p-y-1: padding-top: 8px; padding-bottom: 8px;
.p-a-1: padding: 8px; // This will apply to all sides

//For margin you simple replace the p with m
.m-t-1: margin-top: 8px;

//Within HTML call the class
<div class = "p-a-2"></div> //Padding on all sides at 16px
```



