import React from 'react';
import { StyleSheet, Text, View, Button,Linking } from 'react-native';
import Header from './Header';
import {Timer, Panel} from './Timer';
import {Message} from './Message';
import {Stats} from './Stats';
import {Bar} from './Progressbar'

const Alert=(props)=>{

    return(
    <View style={styles.alertBox}>
      <Text>{props.alertText}</Text>
    </View>
    )
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      seconds:0,
      minutes:0,

      phase:'',
      workDisabled:false,
      breakDisabled:false,
      longBreakDisabled:false,
      workCount:0,
      breakCount:0,
      longBreakCount:0,
      workTime:0,
      breakTime:0,
      longBreakTime:0,
      bars:[],
    }
  }

  reset=()=>{
    this.setState({
      seconds:0,
      minutes:0,
    })
  }

  work=()=>{
    clearInterval(this.interval)
    this.setState((prevState)=>({
      seconds:59,
      minutes:29,
      phase:'work',
      workDisabled:true,
      breakDisabled:false,
      longBreakDisabled:false,
      workCount:prevState.workCount+1,
      bars:[],
    }))
    this.start();
  }

  break=()=>{
    clearInterval(this.interval)
    this.setState((prevState)=>({
      seconds:59,
      minutes:4,
      phase:'break',
      breakDisabled:true,
      workDisabled:false,
      longBreakDisabled:false,
      breakCount: prevState.breakCount + 1,
      bars:[],
    }))
    this.start();
  }

  longBreak=()=>{
    clearInterval(this.interval)
    this.setState((prevState)=>({
      seconds:59,
      minutes:29,
      phase:'longBreak',
      longBreakDisabled:true,
      workDisabled:false,
      breakDisabled:false,
      longBreakCount:prevState.longBreakCount+1,
      bars:[],
    }))
    this.start();
  }

  dec=()=>{

    this.setState((prevState)=>({
      seconds: (prevState.seconds - 1)%60,
    }))

    if(this.state.seconds%2==0)
    {
      this.setState({
        bars:[...this.state.bars,<Bar />]
      }) 
    }

    if(this.state.seconds===0)
    {
      this.setState((prevState) => ({
            minutes: (prevState.minutes - 1)%60,
            seconds: 59,
            bars: [],
            
      }))
    }

    if(this.state.minutes===0)
    {
      this.stop(this.state.phase);
    }

  }

  start=()=>{

     this.interval = setInterval(() => this.dec(), 1000);
  }

  pause=()=>{
    clearInterval(this.interval);
  }

  stop=(phase)=>{

    this.setState({
      seconds:0,
      minutes:0,
      phase:phase,
    })
    clearInterval(this.interval);
  }

  render(){

    const alert = () =>{

      let message = '';

      if(this.state.phase === 'work')
      {
        message = "work time";
      }
      else if(this.state.phase === 'break')
      {
        message = "break time";
      }
      else if(this.state.phase === 'longBreak')
      {
        message = "long break time";
      }
      else
      {
        message = "hello";
      }

      return message;
    }


    return(

        <View  style={styles.appContainer}>
        <Stats
          workCount={this.state.workCount}
          breakCount={this.state.breakCount}
          longBreakCount={this.state.longBreakCount}
        />
  
          <Message message={alert()}/>
            <Timer minutes={this.state.minutes} seconds={this.state.seconds} />
            <Panel 
              workHandler={this.work} 
              breakHandler={this.break} 
              longBreakHandler={this.longBreak}
              workDisabled={this.state.workDisabled}
              breakDisabled={this.state.breakDisabled}
              longBreakDisabled={this.state.longBreakDisabled}
            />

          <View style={styles.barContainer}>
            
            {this.state.bars.map((bar)=>(
                <Text> {bar} </Text>
            ))
            }

          </View>
            
      </View>
    )
  }

}

const styles = StyleSheet.create({

  appContainer:{
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buttonPanel:{

    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    margin:10,
    borderRadius:4,
  },

  barContainer:{

    height:60,
    flexDirection:'row',
    alignSelf:'stretch',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginLeft:2,
    marginRight:2,
    padding:2,
  }

 
 
});

export default App;
