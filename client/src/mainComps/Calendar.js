import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import { Scheduler, DayView, WeekView, MonthView, Appointments, DateNavigator, Toolbar,  } from '@devexpress/dx-react-scheduler-material-ui';
import 'typeface-roboto';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';



export default class Calendar extends React.Component{
    render(){
        return(
            
            <BrowserRouter>
            <div>
            <Paper >
                <Scheduler
                    data={this.props.data}
                    // data = {[
                    // { startDate: '2019-09-19 10:00', endDate: '2019-09-19 11:00', title: 'Meeting' },
                    // { startDate: '2019-09-20 12:00', endDate: '2019-09-19 13:30', title: 'Go to a gym' },
                    // ]}
                    >
                    {/* <Toolbar /> */}
                    {/* <ViewState /> */}
                    <Route path='/schedule/wv' render={(routerProps)=> <WeekView {...routerProps}/>}/>
                    <Route path='/schedule/dv' render={(routerProps)=> <DayView {...routerProps}/>}/>
                    <Route path='/schedule/mv' render={(routerProps)=> <MonthView {...routerProps}/>}/>

                    <Appointments />
                </Scheduler>
            </Paper>
            </div>
            </BrowserRouter>
        )
    }
}