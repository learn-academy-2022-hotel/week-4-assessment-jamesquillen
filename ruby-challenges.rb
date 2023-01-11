# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# PSEUDOCODE

# Input: Integer
# Output: String telling the user if the entered Integer is even or odd.

# Create a method called 'even_or_odd' with a parameter for an integer
# Run an ternary operator checking the entered integer with the .even? method
# If the entered integer is even, use string interpolation to tell the user that the entered integer is even
# If the entered integer is not even, use string interpolation to tell the use that the entered integer is odd

def even_or_odd number
    number.even? ? "#{number} is even" : "#{number} is odd"
end

p even_or_odd num1
p even_or_odd num2
p even_or_odd num3



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# PSEUDOCODE

# Input: String
# Output: The entered string with all vowels removed.

# Create a method called 'vowel_remover' with a parameter for a string
# Use the .delete method to remove all vowels (using regular expression to find the vowels) and return the modified string.

def vowel_remover album_name
    album_name.delete '[aeiouAEIOU]'
end

p vowel_remover beatles_album1
p vowel_remover beatles_album2
p vowel_remover beatles_album3



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# PSEUDOCODE

# Input: String
# Output: A string interpolation letting the user know if the entered string is a palindrome or not.

# Create a method called 'palindrome_checker' with a parameter for a string
# Convert the string to downcase first to account for capital letters
# Check if the entered string is equal to the string modified with the .reverse method.
# Return a message to the user telling them if the entered string is a palindrome or not.

def palindrome_checker test_word
    test_word.downcase == test_word.downcase.reverse ? "#{test_word} is a palindrome" : "#{test_word} is not a palindrome"
end

p palindrome_checker palindrome_tester1
p palindrome_checker palindrome_tester2
p palindrome_checker palindrome_tester3
