

# Javascript Base Converter

Javascript Base Converter with Deciaml Number Support and Precision control.

## Instructions

The Class allow four Parameter.
INPUT_VALUE = ***string***
INPUT_BASE = ***number***
OUTPUT_BASE = ***number***
PRECISION = ***number*** *[by default set to 6]

	    var  Echo  =  new  Conversion(INPUT_VALUE,INPUT_BASE,OUTPUT_BASE,PRECISION).Calculate()
*Supports **Binary**, **Octal**, **Decimal**, **Hexa-Decimal** and upto **16 base** of Numbers.*
## Usage
Example: Converting Binary to Decimal

	    var Echo = new Conversion("1101",2,10)
	    console.log(Echo.Calculate()) 
		
		//returns 13

	
Example: Converting Hexa-Decimal to Decimal [Including Points]

	    var  Echo  =  new  Conversion("BBE23.ACD2",16,10,30)
        console.log(Echo.Calculate()) 
		
		//Because Precision is set to 30, it will 
		//returns 769571.675079345699999999009999991099

Example: Converting Decimal to Octal [Including Points]

	    var  Echo  =  new Conversion("78929.299",10,8)
	    console.log(Echo.Calculate()) 
		 
		//returns 232121.231055

		


	

    

