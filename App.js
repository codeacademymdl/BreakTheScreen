import React, { Component } from 'react';
import {
    Platform, StyleSheet, Text, View, Button, Image, Animated, Easing, NativeModules,
    LayoutAnimation,
    TouchableOpacity,
    TouchableWithoutFeedback, ImageBackground
} from 'react-native';

import SoundPlayer from 'react-native-sound-player'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

// type Props = {};
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
    // componentDidMount() {


    //     // SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
    //     //   console.log('finished playing', success)
    //     // })
    //     SoundPlayer.onFinishedLoading(async (success: boolean) => {
    //       console.log('finished loading', success)
    //       // ready to `play()`, `getInfo()`, etc
    //       console.log(await SoundPlayer.getInfo())
    //     })
    //   }
      
    //   // unsubscribe when unmount
    //   componentWillUnmount() {
    //     SoundPlayer.unmount()
    //   }
      

    // playSong = () =>{
    //     try {
    //       SoundPlayer.playSoundFile('glass_break', 'mp3')
    //     } catch (e) {
    //       alert('Cannot play the file')
    //       console.log('cannot play the song file', e)
    //     }
    //   }

     

    // getInfo= async ()=> { // You need the keyword `async`
    //   try {
    //     const info = await SoundPlayer.getInfo() // Also, you need to await this because it is async
    //     console.log('getInfo', info) // {duration: 12.416, currentTime: 7.691}
    //   } catch (e) {
    //     console.log('There is no song playing', e)
    //   }
    // }
   
    //   onPressPlayButton = ()=> {
    //     this.playSong();
    //     // this.getInfo();

    //   }
     

    crackScreen = () => {
        
        let screenCracked = <ImageBackground
            style={[styles.ballSize, { width: '100%', height: '100%' }]}
            source={require('./crackedScreen.jpg')}
        />
        return screenCracked;

    }


    state = {
        w: 100,
        h: 100,
    };
    onPressDo = () => {

        LayoutAnimation.spring();
        this.setState({ w: this.state.w + 70, h: this.state.h + 70 })
    }


    render() {


    
        return (
            <View style={styles.container}>
            {/* <Button
    onPress={this.onPressPlayButton}
    title="Play"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    /> */}

                {this.state.w < 400 ? <TouchableOpacity onPress={this.onPressDo}>
                    <View style={styles.button}>
                        <Image
                            style={[styles.ballSize, { width: this.state.w, height: this.state.h }]}
                            source={require('./football2.png')}
                        />

                    </View>
                </TouchableOpacity> : this.crackScreen()}

            </View>

        );
    }
}


const styles = StyleSheet.create({

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ballSize: { width: 50, height: 50 }
});
