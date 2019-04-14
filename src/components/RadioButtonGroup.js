import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
    constructor(props) {
        super(props);
    }
       
          
  state = {
    value: 'female',
    score: 0,
    current: 1,
    user:[{
        question1:'',
        question2:'',
        question3:'',
        question4:'',
        question5:'',
        question6:'',
        question7:'',
        
      }],
    questions: [
        {
          id: 1,
          text: '1. We can go for keys when there is a possibility that our user could change the data.',
          choices: [
            {
              id: 'a',
              text: 'Keys',
            },
            {
              id: 'b',
              text: 'Ref',
            },
            {
              id: 'c',
              text: 'Both',
            },
            {
              id: 'd',
              text: 'None of the above',
            }
          ],
          correct: 'a'
        },
        {
          id: 2,
          text: '2. JSX is typesafe.',
          choices: [
            {
              id: 'a',
              text: 'True',
            },
            {
              id: 'b',
              text: 'False',
            }
          ],
          correct: 'a'
        },
        {
          id: 3,
          text: '3. React merges the object you provide into the current state using __________.',
          choices: [
            {
              id: 'a',
              text: 'state()',
            },
            {
              id: 'b',
              text: 'setState()',
            },
          ],
          correct: 'b'
        },
        {
          id: 4,
          text: '4. Arbitrary inputs of components are called __________.',
          choices: [
            {
              id: 'a',
              text: 'Keys',
            },
            {
              id: 'b',
              text: 'Props',
            },
            {
              id: 'c',
              text: 'Elements',
            },
            {
              id: 'd',
              text: 'Ref',
            }
          ],
          correct: 'b'
        },
        {
          id: 5,
          text: '5. Which of the following needs to be updated to achieve dynamic UI updates?',
          choices: [
            {
              id: 'a',
              text: 'State',
            },
            {
              id: 'b',
              text: 'Props',
            }
          ],
          correct: 'a'
        },
        {
          id: 6,
          text: '6. _________ can be done while more than one element needs to be returned from a component.',
          choices: [
            {
              id: 'a',
              text: 'Abstraction',
            },
            {
              id: 'b',
              text: 'Packing',
            },
            {
              id: 'c',
              text: 'Insulation',
            },
            {
              id: 'd',
              text: 'Wrapping',
            }
          ],
          correct: 'd'
        },
        {
          id: 7,
          text: '7. Lifecycle methods are mainly used ___________.',
          choices: [
            {
              id: 'a',
              text: 'To keep track of event history',
            },
            {
              id: 'b',
              text: 'To enhance components',
            },
            {
              id: 'c',
              text: 'Free up resources',
            },
            {
              id: 'd',
              text: 'None of the above',
            }
          ],
          correct: 'c'
        },
        
      ],
  };

setCurrent(current) {
this.setState({current});
}
setScore(score) {
   
this.setState({score});
}

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.q);
    const renderChoices = this.state.questions[this.props.q].choices.map((data) => {
        return(<FormControlLabel value={data.text} control={<Radio />} label={data.text} />)
     }
    )
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" style={{fontSize:22,color:"black"}}>{this.state.questions[this.props.q].text}</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {/* <FormControlLabel value="Keys" control={<Radio />} label={this.state.questions[this.props.q].choices[0].text} />
            <FormControlLabel value="ref" control={<Radio />} label={this.state.questions[this.props.q].choices[1].text} />
            <FormControlLabel value="both" control={<Radio />} label={this.state.questions[this.props.q].choices[2].text} />
            <FormControlLabel value="none of these above" control={<Radio />} label={this.state.questions[this.props.q].choices[3].text} /> */}
            {renderChoices}
            
          </RadioGroup>
         
        </FormControl>
        
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);