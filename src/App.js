import 'normalize.css';
import { Reset } from 'styled-reset'
import Main from "~/screens/main";
import { useStyles } from "~/styles/App";

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Reset />
      <Main />
    </div>
  );
}

export default App;
