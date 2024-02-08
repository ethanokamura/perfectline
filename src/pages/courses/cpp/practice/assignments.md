
### Assignment 1: taxes.cpp
```cpp
#include <iostream>
#include <iomanip> // for setprecision

// Ethan Okamura
// Assignment 2 
// Taxes in 1913

int main () {
  double income;
  double incomeTaxed = 0; // The amount above the bracket that will be taxed
  double amountDue = 0; // Sum of taxed income

  // Using the loop this array allows me to deduct a predefined amount from each bracket
  // I can then move the income that needs to be taxed down a bracket
  int amountDeducted[] = {0, 50000, 75000, 100000, 250000, 500000};

  // The bracket ID will allow me to find which bracket the remaining income falls under
  int bracketID; 

  std::cout << "1913 Tax Calculator Resubmission" << std::endl;
  std::cout << "What is your total income?: ";
  std::cin >> income;
  std::cout << std::endl;

  // Use if/else statements to assign an ID to the correct starting bracket. 
  // The for loop will increment down from the starting bracket.
  if (500000 < income) bracketID = 6;
  else if (income <= 500000 && 250000 < income) bracketID = 5;
  else if (income <= 250000 && 100000 < income) bracketID = 4;
  else if (income <= 100000 && 75000 < income) bracketID = 3;
  else if (income <= 75000 && 50000 < income) bracketID = 2;
  else bracketID = 1;

  /*
    The for loop:
      Set i to the ID of the starting bracket then increment down until you reach 0
    line 49:
      Deduct the predeterminded amount based on the ID of the bracket. ie ID = 6 then amountDeducted = 500000
      i - 1 because the array includes 0, the ID does not
      incomeTaxed is the amount of income above the current bracket. ie if you make 550000 income taxed is 50000
    line 48: 
      The tax rate aligns with the ID of the bracket, therefore if you divid the ID (i) by 100, it will represent the tax rate
      Add the amount taxed (incomeTaxed) * the tax rate to the total amount due. Again, the amount due acts as a sum
    line 49: 
      Finally subtract from the total income to move on to the next bracket. If bracket id is 1, it will subtract the remaining income and stop the loop
  */

  for (int i = bracketID; i > 0; i--) {
    incomeTaxed = income - amountDeducted[i - 1]; 
    amountDue += incomeTaxed * i/100; 
    income -= incomeTaxed;
  }

  std::cout << std::fixed << std::setprecision(2); // Round to 2 decimals :)
  std::cout << "You owe $" << amountDue << "." << std::endl;

  return 0;
}

```

### Assignment 2: postal.cppp
```cpp
#include <iostream>
#include <iomanip> // for setprecision

// Assign a barcode based on the last digit in the zipcode
std::string code (int id) { 
  if (id == 9) return "|:|::";
  else if (id == 8) return "|::|:";
  else if (id == 7) return "|:::|";
  else if (id == 6) return ":||::";
  else if (id == 5) return ":|:|:";
  else if (id == 4) return ":|::|";
  else if (id == 3) return "::||:";
  else if (id == 2) return "::|:|";
  else if (id == 1) return ":::||";
  else return "||:::"; // default value (0)
}

int main () {
  int zipcode = 0;
  int checkDigit = 0; // "Add up all digits, and choose the check digit to make the sum a multiple of 10"
  std::string barcode = ""; // This will be the actual barcode
  std::string endStr = "";

  std::cout << "Enter a 5 zipcode zipcode: ";
  std::cin >> zipcode;

  if (!std::cin.fail() && zipcode < 100000 && 10000 <= zipcode) { // check if it is indeed a valid integer that is 5 digits in length 
    for (int i = 5; 0 < i; i--) { // for each digit in zipcode do this code and decrement
      int n = zipcode % 10; // grab the value of the last digit in the int and set it equal to n
      zipcode /= 10; // shave off the last digit. ie 12345 would turn to 1234
      checkDigit += n; // add n to the sum of check digit for later
      barcode = code(n) + endStr; // add the ID created by the function above to the barcode. add the previously created barcode to the butt. without this the barcode prints backwards
      endStr = barcode; // set the ending barcode to the current value of barcode
    }
    checkDigit = 10 - checkDigit % 10; // Add the sum, find the end digit and subtract it from 10 to get the remainder. this is now your check digit
    std::cout << "|" << barcode + code(checkDigit) << "|" << std::endl; // print out the full barcode including the check digit at the end
  } else {
    std::cout << "Invalid Zipcode" << std::endl;
  }
  
  return 0;
}

```

### Assignment 3: oddeven.cpp
```cpp
/*
  Ethan Okamura
  ethanokamura3@gmail.com
  CS19: Assignment 4 (Resubmission)
  Due 11/24/2022
  EvenOrOdd

  Take in an unknown amount of strings. 
  Decide if there is an even or odd amount of legal characters in each string.
  Add the total of legal characters for even and odd sized strings.
  Compare the totals and output the one with the higher value.
  If number of even and odd characters are equal output nothing.
*/

#include <iostream>
#include <cctype>
#include <vector>


std::vector<std::string> EvenOrOdd (std::vector<std::string> v) {

  int sum = 0;
  int evenSum = 0;
  int oddSum = 0;

  std::vector<std::string> even;
  std::vector<std::string> odd;
  std::vector<std::string> empty;

  // Unload each string in the vector
  for (int i = 0; i < v.size(); i++) {
    std::string word;
    std::string temp = v.at(i);
    
    // Check each character in string for legal characters
    for (int j = 0; j < temp.size(); j++) {
      temp[j] = tolower(temp[j]);
      if (isalnum(temp[j])) sum++;
      word += temp[j];
    }
    // Add to the correct parent string
    if (sum % 2 == 0) {
      even.push_back(word);
      evenSum += sum;
    } else {
      odd.push_back(word);
      oddSum += sum;
    }

    sum = 0;
  }

  // Return the correct string
  if (evenSum < oddSum) return odd;
  else if (oddSum < evenSum) return even;
  else return empty;
}

int main () {
  std::string temp;
  std::vector<std::string> v;

  while (std::cin >> temp) { v.push_back(temp); }

  std::vector<std::string> vEvenOdd = EvenOrOdd(v);

  // If Vec is not blank, print characters from even or odd strings
  if (0 < vEvenOdd.size()) {
    for (int i = 0; i < vEvenOdd.size(); i++) {
      std::cout << vEvenOdd[i] << std::endl;
    }
  }
  
  return 0;
}


```