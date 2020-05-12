
const fortunes = [
  "Go for the road less traveled, tourists are annoying.",
  "Remember kids: Nimrod used to mean a great hunter, until Bugs Bunny came around! It could happen to you, too.",
  "All information is misinformation.",
  "Nothing here, have you checked somewhere else?",
  "Today is under construction.",
  "Seize the means of imagination."
];

export default function fortune() : String {
  return fortunes[Math.floor(Math.random() * fortunes.length)];
}
