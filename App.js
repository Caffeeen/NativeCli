import * as React from 'react';
import { StatusBar } from 'react-native';
import { func } from './src/constants';

// main navigation stack
import RootStack from './src/navigation/RootStack';

const App = () => {


    return (
        <React.Fragment>
            <StatusBar barStyle="light-content" />

            <RootStack />
        </React.Fragment>
    );
};

export default App;
