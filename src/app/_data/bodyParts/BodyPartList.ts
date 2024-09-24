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

export type BodyPartListImgType = {
  [key: string]: { name: string; img: string };
};

export const bodyPartListImg: BodyPartListImgType = {
  back: { name: 'back', img: 'back.gif' },
  cardio: { name: 'cardio', img: 'cardio.gif' },
  chest: { name: 'chest', img: 'chest.gif' },
  lower_arms: { name: 'lower arms', img: 'lower_arms.gif' },
  lower_legs: { name: 'lower legs', img: 'lower_legs.gif' },
  shoulders: { name: 'shoulders', img: 'shoulders.gif' },
  upper_arms: { name: 'upper arms', img: 'upper_arms.gif' },
  upper_legs: { name: 'upper legs', img: 'upper_legs.gif' },
  waist: { name: 'waist', img: 'waist.gif' },
  neck: { name: 'neck', img: '' },
};

export const bodyPartListGif: BodyPartListImgType = {
  back: { name: 'back', img: 'back.gif' },
  cardio: { name: 'cardio', img: 'cardio.gif' },
  chest: { name: 'chest', img: 'chest.gif' },
  lower_arms: { name: 'lower arms', img: 'lower_arms.gif' },
  lower_legs: { name: 'lower legs', img: 'lower_legs.gif' },
  shoulders: { name: 'shoulders', img: 'shoulders.gif' },
  upper_arms: { name: 'upper arms', img: 'upper_arms.gif' },
  upper_legs: { name: 'upper legs', img: 'upper_legs.gif' },
  waist: { name: 'waist', img: 'waist.gif' },
  neck: { name: 'neck', img: '' },
};

export const bodyPartListJpg = {
  back: { name: 'back', img: 'back.jpg' },
  cardio: { name: 'cardio', img: '' },
  chest: { name: 'chest', img: 'chest.jpg' },
  lower_arms: { name: 'lower arms', img: '' },
  lower_legs: { name: 'lower legs', img: '' },
  shoulders: { name: 'shoulders', img: '' },
  upper_arms: { name: 'upper arms', img: 'upper_arms.jpg' },
  upper_legs: { name: 'upper legs', img: '' },
  waist: { name: 'waist', img: 'waist.jpg' },
  neck: { name: 'neck', img: 'neck.jpg' },
};

export const bodyPartListPng = [
  { name: 'back', img: 'back.png' },
  { name: 'cardio', img: '' },
  { name: 'chest', img: '' },
  { name: 'lower arms', img: '' },
  { name: 'lower legs', img: 'lower_legs.png' },
  { name: 'shoulders', img: '' },
  { name: 'upper arms', img: 'upper_arms.png' },
  { name: 'upper legs', img: 'upper_legs.png' },
  { name: 'waist', img: 'waist.png' },
  { name: 'neck', img: 'neck.png' },
];

export const bodyPartListEqp = [
  { name: 'back', img: 'back_eqp.gif' },
  { name: 'cardio', img: 'cardio_eqp.gif' },
  { name: 'chest', img: 'chest_eqp.gif' },
  { name: 'lower arms', img: '' },
  { name: 'lower legs', img: 'lower_legs_eqp.gif' },
  { name: 'shoulders', img: 'shoulders_eqp.gif' },
  { name: 'upper arms', img: 'upper_arms_eqp.gif' },
  { name: 'upper legs', img: 'upper_legs_eqp.gif' },
  { name: 'waist', img: 'waist_eqp.gif' },
  { name: 'neck', img: '' },
];
