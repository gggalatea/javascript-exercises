const palindromes = function (string) {
    // other method
    // const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const filteredString = string
                            .toLowerCase()
                            .split(/\W+/)
                            .join("");

                            // .toLowerCase()
                            // .split("")
                            // .filter((character) => alphanumerical.includes(character))
                            // .join("");
    const reversedFilteredString = filteredString
                                    .split("")
                                    .reverse()
                                    .join("");
    return filteredString === reversedFilteredString;
};

// Do not edit below this line
module.exports = palindromes;
