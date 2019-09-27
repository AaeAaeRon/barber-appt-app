import React from 'react';
// import {BrowserRouter,Route} from 'react-router-dom';
import { Scheduler, DayView, WeekView, MonthView, Appointments, 
    DateNavigator, Toolbar,  ViewSwitcher, AllDayPanel, TodayButton, 
    AppointmentForm, AppointmentTooltip, DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import 'typeface-roboto';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import { EditingState, ViewState } from '@devexpress/dx-react-scheduler';
import { fade } from '@material-ui/core/styles/colorManipulator';

const style = theme => ({
    todayCell: {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, 0.14),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.primary.main, 0.16),
      },
    },
    weekendCell: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      '&:hover': {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.action.disabledBackground, 0.04),
      },
    },
    today: {
      backgroundColor: fade(theme.palette.primary.main, 0.16),
    },
    weekend: {
      backgroundColor: fade(theme.palette.action.disabledBackground, 0.06),
    },
});

const TimeTableCellBase = ({ classes, ...restProps }) => {
    const { startDate } = restProps;
    const date = new Date(startDate);
    if (date.getDate() === new Date().getDate()) {
      return <WeekView.TimeTableCell {...restProps} className={classes.todayCell} />;
    } if (date.getDay() === 0 || date.getDay() === 6) {
      return <WeekView.TimeTableCell {...restProps} className={classes.weekendCell} />;
    } return <WeekView.TimeTableCell {...restProps} />;
};

const TimeTableCell = withStyles(style, { name: 'TimeTableCell' })(TimeTableCellBase);

const DayScaleCellBase = ({ classes, ...restProps }) => {
  const { startDate, today } = restProps;
  if (today) {
    return <WeekView.DayScaleCell {...restProps} className={classes.today} />;
  } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
    return <WeekView.DayScaleCell {...restProps} className={classes.weekend} />;
  } return <WeekView.DayScaleCell {...restProps} />;
};

const DayScaleCell = withStyles(style, { name: 'DayScaleCell' })(DayScaleCellBase);

const styles = theme => ({
  contentItem: {
    paddingLeft: 0,
  },
  contentItemValue: {
    padding: 0,
  },
  contentItemIcon: {
    marginRight: theme.spacing(1),
  },
  flexibleSpace: {
    margin: '0 auto 0 0',
  },
  prioritySelector: {
    marginLeft: theme.spacing(2),
    minWidth: 140,
  },
  prioritySelectorItem: {
    display: 'flex',
    alignItems: 'center',
  },
  priorityBullet: {
    borderRadius: '50%',
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginRight: theme.spacing(2),
    display: 'inline-block',
  },
  defaultBullet: {
    background: theme.palette.divider,
  },
  tooltipContent: {
    paddingLeft: theme.spacing(2.2),
    paddingRight: theme.spacing(2.2),
  },
});

const EditButton = withStyles(styles, { name: 'EditButton' })(
  ({ classes, id, ...restProps }) => (
    <AppointmentTooltip.CommandButton
      {...restProps}
      {...id === 'open' ? { className: 'edit-button' } : null}
      id={id}
    />
  ),
);





export default class Calendar extends React.Component{

  render(){


    return(
        
      <div>
      {localStorage.token
      ?<Paper >
        <Scheduler
          height={593}
          data={this.props.data}
          // data = {[
          // { startDate: '2019-09-19 10:00', endDate: '2019-09-19 11:00', title: 'Meeting' },
          // { startDate: '2019-09-20 12:00', endDate: '2019-09-19 13:30', title: 'Go to a gym' },
          // ]}
          >
          
          <ViewState 
            defaultCurrentViewName="Week"
          />


          <WeekView 
            startDayHour={8}
            endDayHour={18}
            // timeTableCellComponent={TimeTableCell}
            dayScaleCellComponent={DayScaleCell}
          />

          <DayView 
            startDayHour={8}
            endDayHour={18}
          />

          <MonthView 
          />
          
          <Toolbar />
          <TodayButton />
          <DateNavigator />
          {/* <AllDayPanel /> */}
          <ViewSwitcher />
          <Appointments />
          {/* <EditingState /> */}
          <AppointmentTooltip 
            data={this.props.appt}
            commandButtonComponent={EditButton}
            showOpenButton
            showCloseButton
          />
          

          {/* <AppointmentForm readOnly={true}/> try to conditionally render the true (readonly)
          on already made appts, not new forms as well or everything is read only and you create 
          an appt in a different form and it saves to db-updating calendar*/}
          {/* <AppointmentForm  /> */}
        </Scheduler>
      </Paper>
      :<h3>Please log in</h3>
      }
      
      </div>
      // </BrowserRouter>
    )
  }
}