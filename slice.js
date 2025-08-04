const address = "dhaka";
const part = address.slice(2, 4);
console.log(part);

const sentence = "I am a good and hard working person";
console.log(sentence.split(" "));
console.log(sentence.split());
console.log(sentence.split(""));
console.log(sentence.split("a"));

const friendsStr = "rahim,kahim,fahim,sahim";
const friends = friendsStr.split(",");
console.log(friends);
const realFriend = ["rahim", "kahim", "fahim", "sahim"];
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("+"));
