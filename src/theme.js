import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme();
// eslint-disable-next-line no-const-assign
theme = responsiveFontSizes(theme);

export default theme;
