import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid, TextField, Paper} from '@material-ui/core';
import RadioButtonGroup from './RadioButtonGroup';

const styles = theme => ({
  root: {
    width: '90%',
    
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['', '', '', '', '', '', ''];
}

//  getStepContent=(stepIndex)=>{
//   switch (stepIndex) {
//     case 0:
//       return (<RadioButtonGroup score={this.state.score} q={0}/>);
//     case 1:
//       return (<RadioButtonGroup score={this.state.score} q={1}/>);
        
//     case 2:
//       return (<RadioButtonGroup score={this.state.score} q={2}/>);
//     case 3:
//       return  (<RadioButtonGroup score={this.state.score} q={3}/>);
//     case 4:
//       return  (<RadioButtonGroup score={this.state.score} q={4}/>);
//     case 5:
//       return  (<RadioButtonGroup score={this.state.score} q={5}/>);
//     case 6:
//       return (<RadioButtonGroup score={this.state.score} q={6}/>);
//     case 7:
//       return (<RadioButtonGroup score={this.state.score} q={0}/>);
//     default:
//       return 'Unknown stepIndex';
//   }
// }

class HorizontalLabelPositionBelowStepper extends React.Component {
  state = {
    activeStep: 0,
    score:0,
};
score1=()=> {
 this.setState({score: this.state.score+1});
}
  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
    
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      score:0,
    });
  };
  getStepContent=(stepIndex)=>{
    switch (stepIndex) {
      case 0:
        return (<RadioButtonGroup score1={this.score1} score={this.state.score} q={0}/>);
      case 1:
        return (<RadioButtonGroup score1={this.score1} score={this.state.score} q={1}/>);
          
      case 2:
        return (<RadioButtonGroup score1={this.score1} score={this.state.score} q={2}/>);
      case 3:
        return  (<RadioButtonGroup score1={this.score1} score={this.state.score} q={3}/>);
      case 4:
        return  (<RadioButtonGroup score1={this.score1} score={this.state.score} q={4}/>);
      case 5:
        return  (<RadioButtonGroup score1={this.score1} score={this.state.score} q={5}/>);
      case 6:
        return (<RadioButtonGroup score1={this.score1} score={this.state.score} q={6}/>);
      case 7:
        return (<RadioButtonGroup score1={this.score1} score={this.state.score} q={0}/>);
      default:
        return 'Unknown stepIndex';
    }
  }
  

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    console.log(this.state.score);
   
    return (
      <Grid container justify="center" spacing={24}>
            <Grid item xs={10}>
            <Paper style={{marginTop:30, boxShadow: "5px 5px 5px 5px #888888"}}>
      <div style={{padding:50}}>
      <Grid item>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        </Grid>
        <div>
          {this.state.activeStep === steps.length ? (
            <div style={{paddingLeft:100}}> 
              <Typography className={classes.instructions}>ALL STEPS ARE COMPLETED!!</Typography>
              <Button variant="contained" color="primary" onClick={this.handleReset}>Reset</Button>
              
                <Typography variant="h6" className={classes.scores}> SCORE: {this.state.score} OUT OF 7 QUESTIONS</Typography>
                
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
              <div >
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  color="#000000"
                  style={{fontFamily:"calibri", fontSize:18}}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </Paper>  
            </Grid>
            </Grid> 
            //<RadioButtonGroup />
    );
  
}
  }


HorizontalLabelPositionBelowStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HorizontalLabelPositionBelowStepper);