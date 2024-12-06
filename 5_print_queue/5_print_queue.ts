import { readInput } from "../util";

const raw_input = readInput("input.txt");

function formatInput(raw_input: string) {
  //Separate rules from sequences
  const [rules, sequences] = raw_input.split(/\n\n/);

  const rules_split = rules.split(/\n/).map((s) => s.split("|"));
  //Put the rules into a dictionary
  let rules_dictionary: { x: number; y: number }[] = [];
  for (let i = 0; i < rules_split.length; i++) {
    rules_dictionary.push({
      x: Number(rules_split[i][0]),
      y: Number(rules_split[i][1]),
    });
  }

  //Convert the csv values to array sequences of numbers
  const sequences_split = sequences
    .split(/\n/)
    .map((s) => s.split(",").map((n) => Number(n)));

  return { rules_dictionary, sequences_split };
}

const { rules_dictionary: rules, sequences_split: sequences } =
  formatInput(raw_input);
