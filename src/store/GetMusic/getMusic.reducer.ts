export default function getMusicReducer(
  state = ["...", "none", "0", "", "", ""],
  action
) {
  //eslint-disable-line
  switch (action.type) {
    case "GETMUSIC":
      return action.payload;

    default:
      return state;
  }
}
