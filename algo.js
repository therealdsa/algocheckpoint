function analyzeSentence(sentence) {
    // Initialize counters
    let characterCount = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        // Increment character count
        characterCount++;

        // Check if the character is a letter (part of a word)
        if (sentence[i].match(/[a-zA-Z]/)) {
            // Increment word count when a new word starts
            if (i === 0 || sentence[i - 1] === ' ') {
                wordCount++;
            }

            // Check if the letter is a vowel
            if ('aeiouAEIOU'.includes(sentence[i])) {
                vowelCount++;
            }
        }
    }

    // Print the results
    console.log(`Length of the sentence: ${characterCount}`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
}

// Example usage
const sentenceInput = "This is a sample sentence.";
analyzeSentence(sentenceInput);
