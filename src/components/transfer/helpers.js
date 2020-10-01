export const labels = ['Upload', 'Cancel', 'Upload new files?'];
export const titles = [
  'Please press start button',
  'Transferring...',
  'Done! Good luck. 😎'
];

export const transformByState = (value, [inactive, inProgress, done]) => {
  switch (value) {
    case 'transferring':
      return inProgress;
    case 'transferred':
      return done;
    default:
      return inactive;
  }
};
