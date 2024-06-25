const logger = (state) => (next) => (action) => {
  console.log("Current state =>", state.getState());
  console.log("Action state =>", action);
  next(action);
  console.log("Next state =>", state.getState());
};

export default logger;
