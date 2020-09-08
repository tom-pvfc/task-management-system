import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { IStoreState } from '../../_reducers';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import { Spinner } from '../../components/ui/Spinner/Spinner';
import { Paginator } from '../../components/ui/Paginator/Paginator';
import { IS_MOBILE } from '../../config';
import { iTaskData } from '../../models/models';
import { LinkButton } from '../../components/ui/Button/Button';

export interface HomePageProps extends ReactRedux.DispatchProp<any>, RouteComponentProps<any> {
    className?: string;
    data: iTaskData[];
}

const INIT_STATE: HomePageState = {

}

export interface HomePageState {

}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
    paginator: Paginator;
    constructor(props: HomePageProps) {
        super(props);
        this.state = INIT_STATE;
    }

    componentDidMount(){
        console.log("data loaded from redux , " , this.props.data )
    }

    componentDidUpdate(prevProps:HomePageProps,prevState:HomePageState){
        if(this.props.data !== prevProps.data){
            console.log("data refreshed")
        }
    }

    getRowElement = (idx) => {
        if (!this.props.data || !this.props.data[idx]) {
            return;
        }

        let item = this.props.data[idx];

        // console.log("paginator " , item)
        
        return (
            <div
                className={`task-item animated zoomIn speed-8 delay-${idx % 5 }`}
                key={"tablerows" + idx}>
                <p>
                    {
                        item.taskSummary
                    }
                </p>
                <p>
                    {
                        item.priority
                    }
                </p>
                <p>
                    {
                        item.taskStatus
                    }
                </p>
                <div>
                    <LinkButton href={`/#task${idx}`}>
                        Edit Task
                    </LinkButton>
                </div>
                {/* to implement */}
                {/* <div>
                    <LinkButton href={``}>
                        Delete
                    </LinkButton>
                </div> */}
            </div>
        )
    }

    render() {
        const { props, state } = this;
        const cls = this.props.className || "";

        if(!props.data){
            return <Spinner />
        }

        return (
            <MainLayout 
                className="home-page"
                title={"Task Management System"}>
                    <div className="home-page__wrapper">
                        <h1 className="home-page__wrapper--title">
                            Task List
                        </h1>
                        <div className="home-page__wrapper--table">
                            <div className="table__header">
                                <div className="table__header--item">
                                    Task Summary
                                </div>
                                <div className="table__header--item">
                                    Priority
                                </div>
                                <div className="table__header--item">
                                    Status
                                </div>
                                <div className="table__header--item">
                 
                                </div>
                            </div>
                            {
                                    <Paginator
                                        key={"table-arrow-"}
                                        ref={(e) => { this.paginator = e }}
                                        getElement={this.getRowElement}
                                        className="table__body"
                                        elementsPerView={IS_MOBILE ? 4 : 5}
                                        totalElements={(props.data.length)}
                                        showState={IS_MOBILE ? false : true}
                                    />
                               }   
                        </div>
                        <div className="home-page__wrapper--btns">
                            <LinkButton href={"/#task"}>
                                Create Task
                            </LinkButton>
                        </div>
                    </div>
                </MainLayout>  
        )
    }
}

const mapStateToProps = (state: IStoreState, ownProps:any): Partial<HomePageProps> => {
    return {
        data: state.app.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
