import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import CircularProgress from "@mui/material/CircularProgress";
import { useStyles, checkFavSx, saveFavSx, circularSx } from "~/styles/LoadingOverlay";

const LoadingOverlay = (props) => {
  const { isLoading, setIsloading, success, setSuccess } = props;
  const classes = useStyles();

  const LoadingEnd = () => {
    setSuccess(false);
    setIsloading(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.iconContainer}>
        {isLoading && success ? (
          <Fab
            onClick={LoadingEnd}
            aria-label="save"
            color="primary"
            sx={checkFavSx}
          >
            <CheckIcon />
          </Fab>
        ) : (
          <Fab
            aria-label="save"
            color="primary"
            sx={saveFavSx}
          >
            <SaveIcon />
          </Fab>
        )}

        {isLoading && !success ? (
          <CircularProgress
            size={68}
            sx={circularSx}
          />
        ) : null}
      </div>
    </div>
  );
};
export default LoadingOverlay;
