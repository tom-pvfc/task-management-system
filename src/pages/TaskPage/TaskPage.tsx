import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import { iTaskData, iActionType } from '../../models/models';
import { LinkButton } from '../../components/ui/Button/Button';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { ACTIONS } from '../../controllers/App/Actions';

export interface TaskPageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    data: iTaskData[];
    saveData?: (data: iTaskData[]) => iActionType;
}

const INIT_STATE: TaskPageState = {
    taskId: -1,
    isNew: true,
    task: null,
    data: null
}

export interface TaskPageState {
    taskId: number;
    isNew: boolean;
    task: iTaskData;
    data: iTaskData[];

}

export class TaskPage extends React.Component<TaskPageProps, TaskPageState> {

    constructor(props: TaskPageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    componentDidMount(){
        let paramKey = this.props.match.params.key;
        // console.log("param key" , paramKey);
        if(paramKey){
            this.setTaskId(paramKey);
            this.setTask(paramKey);
        }

        this.setState({
            data: this.props.data
        })
    }

    setTaskId = (paramKey: number) => {
        this.setState({
            taskId: paramKey,
            isNew: false,
        })
    }

    
    setTask = (paramKey: number) => {
        // console.log("current task " , this.props.data[paramKey])
        let data = this.props.data[paramKey];
        this.setState({
           task: data
        })
    }

    handleChange = (event) => {        
        let tempData = this.state.task;
        let newData = {} as iTaskData;
        if(tempData == null){
            newData.key= this.props.data.length;
        }

        switch(event.target.name){
            case "summary":
                if(tempData){
                    tempData.taskSummary = event.target.value;
                }
                else{
                    newData.taskSummary= event.target.value;
                }
                break;
            case "status":
                if(tempData){
                    tempData.taskStatus = event.target.value;
                }
                else{
                    newData.taskStatus= event.target.value;
                }               
                 break;
            case "priority":
                if(tempData){
                    tempData.priority = event.target.value;
                }
                else{
                    newData.priority= event.target.value;
                }                
                break;
        }

        this.setState({
            task: tempData ? tempData : newData
        });
      }

      saveData = () =>{
          //save data to redux
     
        let task = this.state.task;
        if(this.state.isNew){
            let items = this.state.data;
            items.push(task);
            this.setState({
                data: items
            })
          
            console.log("FINAL RESULT " , items)

            this.props.saveData(items);
            window.location.href = "/#";


        }
        else{
            let data = this.state.data;
            data[this.state.taskId] = task;

            this.setState({
                data: data
            })
          
            console.log("FINAL RESULT " , data)

            this.props.saveData(data);
            window.location.href = "/#";
        }

      }

    render() {
        const { props, state } = this;
        const cls = this.props.className || "";
        
        if(!state.isNew && !state.task){
            return <Spinner />
        }
        
        return (
            <MainLayout 
                className="task-page"
                title={state.isNew ? "New Task" : "Edit Task"}>
                    <div className="task-page__wrapper">
                        <h1>
                            Task Details
                        </h1>
                        {
                            (state.task && !state.isNew) ? 
                            <div className="task-page__wrapper--existing">
                                <p>
                                    {
                                        state.task.taskSummary
                                    }
                                </p>
                            </div>
                            :
                            <div className="task-page__wrapper--new">
                                new task name
                            </div>
                        }
                        <div className="task-page__wrapper--form">
                            <label>
                                Summary:
                                    <input type="text" name="summary" value={state.task && state.task.taskSummary}  onChange={this.handleChange} />
                            </label>
                            <label>
                                Status:
                                    <input type="text" name="status" value={state.task && state.task.taskStatus}  onChange={this.handleChange} />
                                      
                                </label>
                            <label>
                                Priority
                                    <input type="text" name="priority" value={state.task && state.task.priority}  onChange={this.handleChange} />
                                                       
                                </label>
                        </div>
                        <div className="task-page__wrapper--save" onClick={this.saveData}>
                              Save
                        </div>
                        <div className="task-page__wrapper--back">
                            <LinkButton href="/#">
                              Back
                            </LinkButton>
                        </div>
                    </div>
                </MainLayout>
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps): Partial<TaskPageProps> => {
    return {
        data: state.app.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    saveData: ACTIONS.SAVE_DATA 
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
