export type ListImgType = {
  [key: string]: { name: string; img: string } | {}[];
};

export const bodyPartListImg = {
  back: { name: 'back', img: '/images/bodyPart/back.gif' },
  cardio: { name: 'cardio', img: '/images/bodyPart/cardio.gif' },
  chest: { name: 'chest', img: '/images/bodyPart/chest.gif' },
  lower_arms: { name: 'lower arms', img: '/images/bodyPart/lower_arms.gif' },
  lower_legs: { name: 'lower legs', img: '/images/bodyPart/lower_legs.gif' },
  shoulders: { name: 'shoulders', img: '/images/bodyPart/shoulders.gif' },
  upper_arms: { name: 'upper arms', img: '/images/bodyPart/upper_arms.gif' },
  upper_legs: { name: 'upper legs', img: '/images/bodyPart/upper_legs.gif' },
  waist: { name: 'waist', img: '/images/bodyPart/waist.gif' },
  neck: { name: 'neck', img: '/images/bodyPart/neck.gif' },
};

export const targetListImg = {
  abductors: { name: 'abductors', img: '/images/target/abductors_eqp.gif' },
  abs: { name: 'abs', img: '/images/target/abs.gif' },
  adductors: { name: 'adductors', img: '/images/target/adductors_eqp.gif' },
  biceps: { name: 'biceps', img: '/images/target/biceps_eqp.gif' },
  calves: { name: 'calves', img: '/images/target/calves.gif' },
  cardiovascular_system: {
    name: 'cardiovascular system',
    img: '/images/target/cardiovascular_system.gif',
  },
  delts: { name: 'delts', img: '/images/target/delts.gif' },
  forearms: { name: 'forearms', img: '/images/target/forearms.gif' },
  glutes: { name: 'glutes', img: '/images/target/glutes.gif' },
  hamstrings: { name: 'hamstrings', img: '/images/target/hamstrings.gif' },
  lats: { name: 'lats', img: '/images/target/lats.gif' },
  levator_scapulae: {
    name: 'levator scapulae',
    img: '/images/target/levator_scapulae.gif',
  },
  pectorals: { name: 'pectorals', img: '/images/target/pectorals.gif' },
  quads: { name: 'quads', img: '/images/target/quads.gif' },
  serratus_anterior: {
    name: 'serratus anterior',
    img: '/images/target/serratus_anterior.gif',
  },
  spine: { name: 'spine', img: '/images/target/spine.gif' },
  traps: { name: 'traps', img: '/images/target/traps.gif' },
  triceps: { name: 'triceps', img: '/images/target/triceps.gif' },
  upper_back: { name: 'upper back', img: '/images/target/upper_back.gif' },
};

export const bodyPartEquipmentListImg = {
  back: { name: 'back', img: '/images/equipment/back_eqp.gif' },
  cardio: { name: 'cardio', img: '/images/equipment/cardio_eqp.gif' },
  chest: { name: 'chest', img: '/images/equipment/chest_eqp.gif' },
  lower_arms: {
    name: 'lower arms',
    img: '/images/equipment/lower_arms_eqp.gif',
  },
  lower_legs: {
    name: 'lower legs',
    img: '/images/equipment/lower_legs_eqp.gif',
  },
  shoulders: { name: 'shoulders', img: '/images/equipment/shoulders_eqp.gif' },
  upper_arms: {
    name: 'upper arms',
    img: '/images/equipment/upper_arms_eqp.gif',
  },
  upper_legs: {
    name: 'upper legs',
    img: '/images/equipment/upper_legs_eqp.gif',
  },
  waist: { name: 'waist', img: '/images/equipment/waist_eqp.gif' },
  neck: { name: 'neck', img: '/images/equipment/neck_eqp.gif' },
  // neck: { name: 'neck', img: '/images/equipment/man_neck_eqp.gif' },
};

export const equipmentListImg = {
  assisted: { name: 'assisted', img: '/images/equipment/back_eqp.gif' },
  band: { name: 'band', img: '/images/equipment/back_eqp.gif' },
  barbell: { name: 'barbell', img: '/images/equipment/back_eqp.gif' },
  body_weight: { name: 'body weight', img: '/images/cardio_eqp.gif' },
  bosu_ball: { name: 'bosu ball', img: '/images/cardio_eqp.gif' },
  cable: { name: 'cable', img: '/images/equipment/back_eqp.gif' },
  elliptical_machine: {
    name: 'elliptical machine',
    img: '/images/equipment/back_eqp.gif',
  },
  dumbbell: { name: 'dumbbell', img: '/images/equipment/back_eqp.gif' },
  ez_barbell: { name: 'ez barbell', img: '/images/equipment/back_eqp.gif' },
  hammer: { name: 'hammer', img: '/images/equipment/back_eqp.gif' },
  kettlebell: { name: 'kettlebell', img: '/images/equipment/back_eqp.gif' },
  leverage_machine: { name: 'leverage machine', img: '/images/cardio_eqp.gif' },
  medicine_ball: { name: 'medicine ball', img: '/images/cardio_eqp.gif' },
  olympic_barbell: { name: 'olympic barbell', img: '/images/cardio_eqp.gif' },
  resistance_band: { name: 'resistance band', img: '/images/cardio_eqp.gif' },
  roller: { name: 'roller', img: '/images/equipment/back_eqp.gif' },
  rope: { name: 'rope', img: '/images/equipment/back_eqp.gif' },
  skierg_machine: { name: 'skierg machine', img: '/images/cardio_eqp.gif' },
  sled_machine: { name: 'sled machine', img: '/images/cardio_eqp.gif' },
  smith_machine: { name: 'smith machine', img: '/images/cardio_eqp.gif' },
  stability_ball: { name: 'stability ball', img: '/images/cardio_eqp.gif' },
  stationary_bike: { name: 'stationary bike', img: '/images/cardio_eqp.gif' },
  stepmill_machine: { name: 'stepmill machine', img: '/images/cardio_eqp.gif' },
  tire: { name: 'tire', img: '/images/equipment/back_eqp.gif' },
  trap_bar: { name: 'trap bar', img: '/images/cardio_eqp.gif' },
  upper_body_ergometer: {
    name: 'upper body ergometer',
    img: '/images/cardio_eqp.gif',
  },
  weighted: { name: 'weighted', img: '/images/equipment/back_eqp.gif' },
  wheel_roller: { name: 'wheel roller', img: '/images/cardio_eqp.gif' },
};
