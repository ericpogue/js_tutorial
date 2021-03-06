// reverse a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// adds 'reverse' to all strings
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

// adds a 'blank' method to all strings
String.prototype.blank = function () {
  return !!this.match(/^\s*$/g);
};

// adds a "last" method to all Arrays
Array.prototype.last = function () {
  return this.slice(-1);
};

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function (string) {
    return string.toLowerCase();
  };

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  };

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  };

  // Returns a LOUDER phrase ! ! !
  this.louder = function () {
    return this.content.toUpperCase();
  };
}

// defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  };
}

TranslatedPhrase.prototype = new Phrase();
