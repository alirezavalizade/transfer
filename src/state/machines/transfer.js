import { Machine, assign } from 'xstate';

const resetPercent = assign({
  percent: () => {
    return 0;
  }
});

const updatePercent = assign({
  percent: context => {
    return context.percent + 20;
  }
});

const isFinished = context => {
  return context.percent >= 100;
};

export const transferMachine = Machine(
  {
    id: 'transfer',
    context: {
      percent: 0
    },
    initial: 'transfer',
    states: {
      transfer: {
        on: {
          TRANSFER: {
            target: 'transferring',
            actions: 'updatePercent'
          }
        }
      },
      transferring: {
        always: {
          target: 'transferred',
          cond: 'isFinished'
        },
        after: {
          1000: {
            target: 'transferring',
            actions: 'updatePercent'
          }
        },
        on: {
          TRANSFER: {
            target: 'transferring',
            actions: 'updatePercent'
          },
          CANCEL: {
            target: 'transfer',
            actions: 'resetPercent'
          }
        }
      },
      transferred: {
        on: {
          TRANSFER: {
            target: 'transfer',
            actions: 'resetPercent'
          }
        }
      }
    }
  },
  {
    actions: { updatePercent, resetPercent },
    guards: { isFinished }
  }
);
