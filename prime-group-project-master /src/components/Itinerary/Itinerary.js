import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import Timeline from 'react-calendar-timeline';

// const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

// const items = [
//     {
//         id: 1,
//         group: 1,
//         title: 'item 1',
//         start_time: moment(),
//         end_time: moment().add(1, 'hour')
//     },
//     {
//         id: 2,
//         group: 2,
//         title: 'item 2',
//         start_time: moment().add(-0.5, 'hour'),
//         end_time: moment().add(0.5, 'hour')
//     },
//     {
//         id: 3,
//         group: 1,
//         title: 'item 3',
//         start_time: moment().add(2, 'hour'),
//         end_time: moment().add(3, 'hour')
//     }
// ]

class Itinerary extends Component {
    componentDidMount = () => {
        this.setCampItinerary();
    }

    getUserInfo(){
        this.props.dispatch({ type: 'FETCH_USER_PROFILE_INFO', })
    }

    setCampItinerary() {
        const action = { type: 'FETCH_CAMP_ITINERARY' }
        this.props.dispatch(action);
    }

    render() {
        console.log(this.props.itinerary.userName);
        
        let items = this.props.itinerary.itineraries;
        let groups = this.props.itinerary.children;
        return (
            <div>
                {this.props.itinerary.userName !== undefined && 
                <h1>{this.props.itinerary.userName.full_name}'s Itinerary</h1>}
                {/* {JSON.stringify(this.props.itinerary)} */}
                {this.props.itinerary.itineraries !== undefined &&
                    <Timeline
                        groups={groups}
                        items={items}
                        // default time is set to display May through Aug
                        defaultTimeStart="1556723865000"
                        defaultTimeEnd="1567351065000"
                        canMove={false}
                        canResize={false}
                        lineHeight={50}
                        itemHeightRatio={.75}
                        sidebarContent={<div>Itinerary</div>}
                    />}
                    <p>To zoom the calendar view out, click on the red bar in the header. To zoom in, click on the date detail bar.</p>
            </div>

        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({
    itinerary: reduxStore.setCampItinerary.setCampItinerary,
});

export default connect(mapReduxStoreToProps)(Itinerary);