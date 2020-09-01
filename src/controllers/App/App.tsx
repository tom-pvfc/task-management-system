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

const DATA = 
[
    {
        key: 0,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 1",
        taskDescription: "desc 1",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 1,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 2",
        taskDescription: "desc 2",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 2,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 3",
        taskDescription: "desc 3",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 3,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 4",
        taskDescription: "desc 4",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 4,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 5",
        taskDescription: "desc 5",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 5,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 6",
        taskDescription: "desc 6",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 6,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 7",
        taskDescription: "desc 7",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 7,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 8",
        taskDescription: "desc 8",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 8,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 9",
        taskDescription: "desc 9",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 9,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 10",
        taskDescription: "desc 10",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 10,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 11",
        taskDescription: "desc 11",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 11,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 12",
        taskDescription: "desc 12",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 12,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 13",
        taskDescription: "desc 13",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 13,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 14",
        taskDescription: "desc 14",
        taskStatus: "Not Started",
        priority: "LOW"
    },
    {
        key: 14,
        abxTaskId: -1,
        organisationTaskId:-1,
        organisationId: -1,
        timestamp: null,
        assignedTo: "",
        taskSummary: "task 15",
        taskDescription: "desc 15",
        taskStatus: "Not Started",
        priority: "LOW"
    }
]