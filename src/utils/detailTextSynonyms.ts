





export function replaceText(orig:string){
 const newText= synonyms[orig.toString()][Math.floor(Math.random()*3)] as string;
 console.log(newText)
 return newText
}

export const  synonyms : {[key:string]:string[]}= {
  exercises: ["Workouts", "Activities", "Training"],
  "keeps you": ["maintains you", "holds you", "sustains you"],
  strong: ["fit", "powerful", "robust"],
  one: ["a single", "an individual", "one single"],
  "the best": ["the finest", "the top", "the greatest"],
  "to target": ["to focus on", "to aim at", "to address"],
  you: ["yourself", "one", "the individual"],
  "will help": ["will assist", "will support", "will aid"],
  improve: ["enhance", "boost", "better"],
  "your": ["your own", "the individual's", "your personal"],
  mood: ["emotional state", "spirits", "frame of mind"],
  "gain energy": ["increase vitality", "boost energy", "enhance stamina"]
};





export const synonyms2 : {[key:string]:string[]}= {
  staying: ['remaining', 'continuing', 'persisting'],
  active: ['energetic', 'lively', 'dynamic'],
  keeps: ['maintains', 'preserves', 'sustains'],
  you: ['one', 'yourself', 'a person'],
  fit: ['healthy', 'in shape', 'well'],
  fantastic: ['great', 'wonderful', 'excellent'],
  workout: ['exercise', 'training', 'fitness routine'],
  focus: ['concentrate', 'emphasize', 'target'],
  on: ['upon', 'regarding', 'about'],
  your: ['your own', "one's", "the individual's"],
  boost: ['enhance', 'improve', 'increase'],
  spirits: ['mood', 'emotions', 'feelings'],
  enhance: ['improve', 'augment', 'raise'],
  vitality: ['energy', 'liveliness', 'vigor'],
  regular: ['consistent', 'steady', 'habitual'],
  exercise: ['physical activity', 'workout', 'fitness'],
  essential: ['crucial', 'vital', 'important'],
  health: ['wellness', 'fitness', 'condition'],
  great: ['excellent', 'remarkable', 'fantastic'],
  way: ['method', 'approach', 'means'],
  develop: ['improve', 'enhance', 'cultivate'],
  overall: ['general', 'total', 'comprehensive'],
  endurance: ['stamina', 'tolerance', 'resilience'],
};

