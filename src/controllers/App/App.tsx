import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch, } from 'react-router-dom';
import { ACTIONS } from './Actions';
import { AppProps, inAppState, inAppInitialState } from './StateAndProps';
import HomePage  from '../../pages/HomePage/HomePage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import TaskPage from '../../pages/TaskPage/TaskPage';
import { iTaskData } from '../../models/models';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { DATA } from '../../Services/DATA';

export const STATE_KEY = 'app';

let tempData: iTaskData[];

class App extends React.Component<AppProps, inAppState>{
    constructor(props: AppProps) {
        super(props);
        this.state = inAppInitialState;
    }

    componentDidMount(){
        tempData = DATA;
        this.props.saveData(tempData);
    }

    render() {

        //this would check if data is loaded from API
        if(!tempData){
            return <Spinner />
        }
        
        return (
            <div className={`app`}>
                <Router hashType="noslash">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/task:key?" component={TaskPage} />
                        <Route exact path="/about" component={AboutPage} />
                    </Switch>
                </Router>
            </div>
        );
    }
};

function mapStateToProps(state: any, ownProps) {
    return {
        appState: state.app
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({ saveData: ACTIONS.SAVE_DATA }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

