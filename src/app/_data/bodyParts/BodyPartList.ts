export const bodyPartList: string[] = [
  'back',
  'cardio',
  'chest',
  'lower arms',
  'lower legs',
  'neck',
  'shoulders',
  'upper arms',
  'upper legs',
  'waist',
];

export const tartegList = [
  'abductors',
  'abs',
  'adductors',
  'biceps',
  'calves',
  'cardiovascular system',
  'delts',
  'forearms',
  'glutes',
  'hamstrings',
  'lats',
  'levator scapulae',
  'pectorals',
  'quads',
  'serratus anterior',
  'spine',
  'traps',
  'triceps',
  'upper back',
];

export const equipmentList = [
  'assisted',
  'band',
  'barbell',
  'body weight',
  'bosu ball',
  'cable',
  'dumbbell',
  'elliptical machine',
  'ez barbell',
  'hammer',
  'kettlebell',
  'leverage machine',
  'medicine ball',
  'olympic barbell',
  'resistance band',
  'roller',
  'rope',
  'skierg machine',
  'sled machine',
  'smith machine',
  'stability ball',
  'stationary bike',
  'stepmill machine',
  'tire',
  'trap bar',
  'upper body ergometer',
  'weighted',
  'wheel roller',
];

// export const bodyPartListGif = [
//   { bodyPart: 'back', img: 'back.gif' },
//   { bodyPart: 'cardio', img: 'cardio.gif' },
//   { bodyPart: 'chest', img: 'chest.gif' },
//   { bodyPart: 'lower arms', img: 'lower_arms.gif' },
//   { bodyPart: 'lower legs', img: 'lower_legs.gif' },
//   { bodyPart: 'shoulders', img: 'shoulders.gif' },
//   { bodyPart: 'upper arms', img: 'upper_arms.gif' },
//   { bodyPart: 'upper legs', img: 'upper_legs.gif' },
//   { bodyPart: 'waist', img: 'waist.gif' },
//   { bodyPart: 'neck', img: '' },
// ];

export type BodyPartListGifType = {
  [key: string]: { bodyPart: string; img: string };
};

export const bodyPartListGif: BodyPartListGifType = {
  back: { bodyPart: 'back', img: 'back.gif' },
  cardio: { bodyPart: 'cardio', img: 'cardio.gif' },
  chest: { bodyPart: 'chest', img: 'chest.gif' },
  lower_arms: { bodyPart: 'lower arms', img: 'lower_arms.gif' },
  lower_legs: { bodyPart: 'lower legs', img: 'lower_legs.gif' },
  shoulders: { bodyPart: 'shoulders', img: 'shoulders.gif' },
  upper_arms: { bodyPart: 'upper arms', img: 'upper_arms.gif' },
  upper_legs: { bodyPart: 'upper legs', img: 'upper_legs.gif' },
  waist: { bodyPart: 'waist', img: 'waist.gif' },
  neck: { bodyPart: 'neck', img: '' },
};

export const bodyPartListJpg = {
  back: { bodyPart: 'back', img: 'back.jpg' },
  cardio: { bodyPart: 'cardio', img: '' },
  chest: { bodyPart: 'chest', img: 'chest.jpg' },
  lower_arms: { bodyPart: 'lower arms', img: '' },
  lower_legs: { bodyPart: 'lower legs', img: '' },
  shoulders: { bodyPart: 'shoulders', img: '' },
  upper_arms: { bodyPart: 'upper arms', img: 'upper_arms.jpg' },
  upper_legs: { bodyPart: 'upper legs', img: '' },
  waist: { bodyPart: 'waist', img: 'waist.jpg' },
  neck: { bodyPart: 'neck', img: 'neck.jpg' },
};

export const bodyPartListPng = [
  { bodyPart: 'back', img: 'back.png' },
  { bodyPart: 'cardio', img: '' },
  { bodyPart: 'chest', img: '' },
  { bodyPart: 'lower arms', img: '' },
  { bodyPart: 'lower legs', img: 'lower_legs.png' },
  { bodyPart: 'shoulders', img: '' },
  { bodyPart: 'upper arms', img: 'upper_arms.png' },
  { bodyPart: 'upper legs', img: 'upper_legs.png' },
  { bodyPart: 'waist', img: 'waist.png' },
  { bodyPart: 'neck', img: 'neck.png' },
];

export const bodyPartListEqp = [
  { bodyPart: 'back', img: 'back_eqp.gif' },
  { bodyPart: 'cardio', img: 'cardio_eqp.gif' },
  { bodyPart: 'chest', img: 'chest_eqp.gif' },
  { bodyPart: 'lower arms', img: '' },
  { bodyPart: 'lower legs', img: 'lower_legs_eqp.gif' },
  { bodyPart: 'shoulders', img: 'shoulders_eqp.gif' },
  { bodyPart: 'upper arms', img: 'upper_arms_eqp.gif' },
  { bodyPart: 'upper legs', img: 'upper_legs_eqp.gif' },
  { bodyPart: 'waist', img: 'waist_eqp.gif' },
  { bodyPart: 'neck', img: '' },
];
